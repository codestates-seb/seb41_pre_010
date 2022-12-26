import React from "react";
import "./Styles/MainPage.css";
import { dummyData } from "../DummyData";
import MainPageQuestion from "../Components/MainPageQuestion";

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
            return <MainPageQuestion key={el.questionId} el={el} />;
          })}
        </div>
        <div className="Questions_Pagination_Container">
          <div className="Page_Number_Container">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
          </div>
          <div className="Per_Page_Container">
            <button>10</button>
            <button>15</button>
            <button>30</button>
            <span> Per Page</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
