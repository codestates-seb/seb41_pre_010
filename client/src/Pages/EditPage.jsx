import Input from "../Components/Input";
import { BlueButton } from "../Components/Button";
import "./Styles/EditPage.css";
import TextEditor from "../Components/TextEditor";
import { useEffect, useState } from "react";
import { useSession } from "../CustomHook/SessionProvider";
import axios from "axios";
import { TagBar } from "../Components/TagBar";
import { useParams, useNavigate } from "react-router-dom";

const EditTitle = ({ setQuestionTitle, questionTitle }) => {
  function changeQuestionTitle(e) {
    setQuestionTitle(e.target.value);
  }

  return (
    <div className="Edit_Title_Container">
      <label htmlFor="EditPage_Title" className="Title">
        Title
      </label>
      <Input
        id="EditPage_Title"
        className="Title_Input"
        onChange={changeQuestionTitle}
        defaultValue={questionTitle}
      />
    </div>
  );
};

const EditPage = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBodyMD, setQuestionBodyMD] = useState("");
  const [questionBodyHTML, setQuestionBodyHTML] = useState("");
  const [selected, setSelected] = useState([]);
  const { session } = useSession();

  const { questionId } = useParams();
  const navigate = useNavigate();

  const editPageGetQuestionUrl = `/api/v1/questions/${questionId}/edit`;
  const editPagePostTagsUrl = `/api/v1/tags`;
  const editPagePutQuestionUrl = `/api/v1/questions/${questionId}`;

  useEffect(() => {
    async function loadQuestionContents() {
      axios
        .get(editPageGetQuestionUrl)
        .then((res) => {
          const { title, body, tags } = res.data;
          const tagNameArr = [];

          for (let el of tags) {
            tagNameArr.push(el.tagName);
          }

          setQuestionTitle(title);
          setQuestionBodyMD(body);
          setSelected(tagNameArr);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    loadQuestionContents();
  }, [questionId, editPageGetQuestionUrl]);

  function submitEditQuestion() {
    const tags = { tags: selected };

    axios.post(editPagePostTagsUrl, tags).then((res) => {
      const body = {
        userId: session.userId,
        title: questionTitle,
        body: questionBodyMD,
        bodyString: questionBodyHTML.replace(/<[^>]+>/g, " ").trim(),
        tags: res.data.tags,
      };
      axios
        .put(editPagePutQuestionUrl, body)
        .then((res) => {
          console.log(res);
          navigate(`/questions/${questionId}`);
        })
        .catch((err) => console.log(err));
    });
  }

  return (
    <div className="EditPage_Container">
      <div className="Edit_Container">
        <div className="EditPage_Ask_Question_Container">
          <h1 className="EditPage_Ask_Title">Edit your question</h1>
        </div>
        <EditTitle
          setQuestionTitle={setQuestionTitle}
          questionTitle={questionTitle}
        />
        <div className="Body_Container">
          <label className="Title">Body</label>
          <TextEditor
            setQuestionBodyHTML={setQuestionBodyHTML}
            setQuestionBodyMD={setQuestionBodyMD}
            initData={questionBodyMD}
          />
        </div>
        <div className="Tags_Container">
          <span className="Title">Tags</span>
          <TagBar
            selected={selected}
            setSelected={setSelected}
            className="EditPage_TagBar"
          />
        </div>
        <div className="Buttons_Container">
          <BlueButton height="36px" onClick={submitEditQuestion}>
            Review your question
          </BlueButton>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
