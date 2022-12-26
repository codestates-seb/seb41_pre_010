import React, { useState } from "react";
import "./Styles/MainPage.css";
import { dummyData } from "../DummyData";
import { BlueButton, WhiteButton, OrangeButton } from "../Components/Button";
import MainPageQuestion from "../Components/MainPageQuestion";
import useQuestionsLoad from "../CustomHook/useQuestionsLoad";

function MainPage() {
  const [curPage, setCurPage] = useState(1);
  const [curPerPage, setCurPerPage] = useState(15);
  const [totalPage, setTotalPage] = useState(100);
  useQuestionsLoad();

  return (
    <div className="MainPage_Container">
      <main className="Questions_Container">
        <div className="Questions_Title_Container">
          <h1>모든 질문</h1>
          <BlueButton width="80px" fontSize="0.9rem" href="/questions/ask">
            질문하기
          </BlueButton>
        </div>
        <div className="Questions_SubTitle_Container">
          <h3>23,338,049 Questions</h3>
          <div className="Questions_Filter_Container">
            <WhiteButton width="60px" fontSize="0.8rem">
              최신순
            </WhiteButton>
            <WhiteButton width="60px" fontSize="0.8rem">
              추천순
            </WhiteButton>
          </div>
        </div>
        <div className="Questions_List_Container">
          {dummyData.map((el) => {
            return <MainPageQuestion key={el.questionId} el={el} />;
          })}
        </div>
        <div className="Questions_Pagination_Container">
          <div className="Page_Number_Container">
            <OrangeButton>1</OrangeButton>
            <WhiteButton>2</WhiteButton>
            <WhiteButton>3</WhiteButton>
            <WhiteButton>4</WhiteButton>
            <WhiteButton>5</WhiteButton>
          </div>
          <div className="Per_Page_Container">
            {[15, 30, 50].map((el) => {
              if (curPerPage === el) return <OrangeButton>{el}</OrangeButton>;
              else return <WhiteButton>{el}</WhiteButton>;
            })}
            <span> Per Page</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
