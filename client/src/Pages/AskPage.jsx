import Input from "../Components/Input";
import { BlueButton } from "../Components/Button";
import "./Styles/EditPage.css";
import TextEditor from "../Components/TextEditor";

const AskTitle = () => {
  return (
    <div className="Edit_Title_Container">
      <label htmlFor="EditPage_Title" className="Title">
        Title
      </label>
      <Input id="EditPage_Title" className="Title_Input" />
    </div>
  );
};

const AskPage = () => {
  return (
    <div className="EditPage_Container">
      <div className="Edit_Container">
        <div className="EditPage_Ask_Question_Container">
          <h1 className="EditPage_Ask_Title">Ask a public question</h1>
        </div>
        <AskTitle />
        <div className="Body_Container">
          <label className="Title">Body</label>
          <TextEditor />
        </div>
        <div className="Tags_Container">
          <span className="Title">Tags</span>
          <input className="Tags_Input" />
        </div>
        <div className="Buttons_Container">
          <BlueButton height="36px">Review your question</BlueButton>
        </div>
      </div>
    </div>
  );
};

export default AskPage;
