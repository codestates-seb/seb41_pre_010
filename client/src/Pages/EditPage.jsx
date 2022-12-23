import React from "react";
import "./Styles/EditPage.css";

function EditPage() {
  return (
    <div className="EditPage_Container">
      <header className="Header"></header>
      <div className="Edit_Container">
        <div className="Title_Container">
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
        <div className="Buttons_Container"></div>
      </div>
      <footer className="Footer"></footer>
    </div>
  );
}

export default EditPage;
