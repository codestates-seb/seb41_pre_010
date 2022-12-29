import "./Styles/EditPage.css";

const AskPage = () => {
  return (
    <div className="EditPage_Container">
      <div className="EditPage_Ask_Question_Container">
        <div className="EditPage_Ask_Title">Ask a public question</div>
      </div>
      <div className="Edit_Container">
        <div className="Edit_Title_Container">
          <span className="Title">Title</span>
          <input className="Title_Input" />
        </div>
        <div className="Body_Container">
          <span className="Title">Body</span>
          <textarea className="Edit_Input" />
        </div>
        <div className="Preview_Container">
          <span className="Title">Preview</span>
          <div className="Preview">
            {`인풋창에 쓴 내용의 미리보기
            Preview 컨테이너도 작성한 내용에 따라서 유동적으로 움직일 예정입니다`}
          </div>
        </div>
        <div className="Tags_Container">
          <span className="Title">Tags</span>
          <input className="Tags_Input" />
        </div>
        <div className="Buttons_Container">
          <button className="Save_Edit">Save edits</button>
          <button className="Cancel_Edit">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AskPage;
