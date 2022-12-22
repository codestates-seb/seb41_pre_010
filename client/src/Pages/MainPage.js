import React from "react";
import "./Styles/MainPage.css";

function MainPage() {
  return (
    <div className="MainPage_Container">
      <header className="Header"></header>
      <main className="Questions_Container">
        <div className="Questions_Title_Container">
          <h1>모든 질문</h1>
          <button>질문하기</button>
        </div>
        <div className="Questions_SubTitle_Container">
          <h3>23,338,049 Questions</h3>
          <div className="Questions_Filter_Container">
            <button>최신순</button>
            <button>추천순</button>
          </div>
        </div>
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
