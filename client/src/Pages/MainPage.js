import React from "react";
import "./Styles/MainPage.css";
import { dummyData } from "../DummyData";

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
          {dummyData.map((el) => {
            return (
              <div className="Question_Container">
                <div className="Question_Info">
                  <span className="Question_Votes">Votes: {el.vote}</span>
                  <span className="Question_Answers">
                    Answers: {el.answers}
                  </span>
                </div>
                <div className="Question_Content">
                  <div className="Question_Title">{el.title}</div>
                  <div className="Question_Bddy">{el.body}</div>
                  <div className="Question_Tag">{el.tags[0].tagName}</div>
                  <div className="Question_UserInfo">{el.user.displayName}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="Questions_Pagination_Container"></div>
      </main>
      <footer className="Footer"></footer>
    </div>
  );
}

export default MainPage;
