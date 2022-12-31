import Input from "../Components/Input";
import { BlueButton } from "../Components/Button";
import "./Styles/EditPage.css";
import TextEditor from "../Components/TextEditor";
import { useEffect, useState } from "react";
import { useSession } from "../CustomHook/SessionProvider";
import axios from "axios";
import { TagBar } from "../Components/TagBar";
import { useNavigate } from "react-router-dom";

const AskTitle = ({ setQuestionTitle }) => {
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
      />
    </div>
  );
};

const AskPage = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBodyMD, setQuestionBodyMD] = useState("");
  const [questionBodyHTML, setQuestionBodyHTML] = useState("");
  const [selected, setSelected] = useState([]);
  const { session, loading } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (!session) {
        navigate("/questions");
      }
    }
  });

  const askPageTagsPostUrl = `/api/v1/tags`;
  const askPageQuestionPostUrl = `/api/v1/questions`;

  function submitQuestion() {
    const tags = { tags: selected };
    axios
      .post(askPageTagsPostUrl, tags, { withCredentials: true })
      .then((res) => {
        const body = {
          userId: session.userId,
          title: questionTitle,
          body: questionBodyMD,
          bodyString: questionBodyHTML.replace(/<[^>]+>/g, " ").trim(),
          tags: res.data.tags,
        };

        axios
          .post(askPageQuestionPostUrl, body, { withCredentials: true })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="EditPage_Container">
      <div className="Edit_Container">
        <div className="EditPage_Ask_Question_Container">
          <h1 className="EditPage_Ask_Title">Ask a public question</h1>
        </div>
        <AskTitle setQuestionTitle={setQuestionTitle} />
        <div className="Body_Container">
          <label className="Title">Body</label>
          <TextEditor
            setQuestionBodyHTML={setQuestionBodyHTML}
            setQuestionBodyMD={setQuestionBodyMD}
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
          <BlueButton height="36px" onClick={submitQuestion}>
            Review your question
          </BlueButton>
        </div>
      </div>
    </div>
  );
};

export default AskPage;
