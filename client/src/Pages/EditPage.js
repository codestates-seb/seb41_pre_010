import React from "react";
import "./Styles/EditPage.css";

function EditPage() {
  return (
    <div className="EditPage_Container">
      <header className="Header"></header>
      <div className="Edit_Container">
        <div className="Title_Container"></div>
        <div className="Body_Container"></div>
        <div className="Preview_Container"></div>
        <div className="Tags_Container"></div>
        <div className="Buttons_Container"></div>
      </div>
      <footer className="Footer"></footer>
    </div>
  );
}

export default EditPage;
