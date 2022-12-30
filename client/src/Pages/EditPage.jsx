import Input from "../Components/Input";
import { BlueButton } from "../Components/Button";
import "./Styles/EditPage.css";
import TextEditor from "../Components/TextEditor";
import { useEffect, useState } from "react";
import { useSession } from "../CustomHook/SessionProvider";
import axios from "axios";
import { TagBar } from "../Components/TagBar";
import { useParams } from "react-router-dom";

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
  const [tagsResponse, settagsResponse] = useState([]);
  const { session } = useSession();

  const { questionId } = useParams();

  useEffect(() => {
    async function loadQuestionContents() {
      axios
        .get(
          `https://359b-112-144-75-111.jp.ngrok.io/api/v1/questions/${questionId}/edit`
        )
        .then((res) => {
          const { title, body, tags } = res;

          setQuestionTitle(title);
          setQuestionBodyMD(body);
          setSelected(tags);
        })
        .catch((err) => {
          console.log(err);
          setQuestionTitle("아까 질문");
          setQuestionBodyMD("## 질문 \n 어쩌구저쩌구");
          setSelected(["java", "javascript", "react"]);
        });
    }

    loadQuestionContents();
  }, [questionId]);

  function submitEditQuestion() {
    const tags = { tags: selected };
    const body = {
      userId: session.userId,
      title: questionTitle,
      body: questionBodyMD,
      bodyString: questionBodyHTML.replace(/<[^>]+>/g, " "),
      tags: tagsResponse,
    };

    axios
      .post("https://359b-112-144-75-111.jp.ngrok.io/api/v1/tags", tags)
      .then((res) => {
        settagsResponse(res);
      })
      .then(() => {
        axios
          .post(
            "https://359b-112-144-75-111.jp.ngrok.io/api/v1/questions",
            body
          )
          .then((res) => {
            console.log(res);
            console.log(body);
          })
          .catch((err) => console.log(err));
      });
    // .finally(() => {
    //   axios
    //     .post("api/v1/questions", body)
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       console.log(body);
    //     });
    // });
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
