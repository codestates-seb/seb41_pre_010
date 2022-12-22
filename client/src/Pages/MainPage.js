import React from "react";
import "./Styles/MainPage.css";

function MainPage() {
  return (
    <div className="MainPage_Container">
      <header className="Header"></header>
      <main className="Questions_Container">
        <div className="Questions_Title_Container"></div>
        <div className="Questions_Filter_Container"></div>
        <div className="Questions_List_Container">
          <div className="Question_Container"></div>
          <div className="Question_Container"></div>
          <div className="Question_Container"></div>
          <div className="Question_Container"></div>
          <div className="Question_Container"></div>
          <div className="Question_Container"></div>
        </div>
        <div className="Questions_Pagination_Container"></div>
      </main>
      <footer className="Footer"></footer>
    </div>
  );
}

export default MainPage;
