import Input from "../Components/Input";
import { BlueButton } from "../Components/Button";
import "./Styles/EditPage.css";
import TextEditor from "../Components/TextEditor";
import { useState } from "react";
import { useSession } from "../CustomHook/SessionProvider";
import axios from "axios";
import { TagBar } from "../Components/TagBar";

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
  const { session } = useSession();

  function submitQuestion() {
    const tags = { tags: selected };

    axios
      .post("http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080/api/v1/tags", tags)
      .then((res) => {
        const body = {
          userId: session.userId,
          title: questionTitle,
          body: questionBodyMD,
          bodyString: questionBodyHTML.replace(/<[^>]+>/g, " ").trim(),
          tags: res.data.tags,
        };

        console.log(body);
        axios
          .post(
            "http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080/api/v1/questions",
            body
          )
          .then((res) => {
            console.log(res);
            console.log(body);
          })
          .catch((err) => console.log(err));
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
