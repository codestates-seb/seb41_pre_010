import React, { useState } from "react";
import "./Styles/MainPage.css";
import { BlueButton, WhiteButton, OrangeButton } from "../Components/Button";
import MainPageQuestion from "../Components/MainPageQuestion";
import useQuestionsLoad from "../CustomHook/useQuestionsLoad";
import calcPagination from "../Function/calcPagination";

function MainPage() {
  const [curPage, setCurPage] = useState(1);
  const [curPerPage, setCurPerPage] = useState(15);
  const [curTab, setCurTab] = useState("newest");
  const FILTERARR = [
    { enName: "newest", krName: "최신순" },
    { enName: "votes", krName: "추천순" },
  ];
  const PERPAGEARR = [15, 30, 50];

  // 질분 페이지 Load
  const { questionsList, totalPages, totalQuestions } = useQuestionsLoad(
    curTab,
    curPage,
    curPerPage
  );

  function changeCurTab(e) {
    setCurTab(() => e.target.id);
    setCurPage(() => 1);
  }

  function changeCurPage(e) {
    if (e.target.textContent === curPage) return;
    setCurPage(() => Number(e.target.textContent));
  }

  const movePageLeft = () => {
    if (curPage === 1) return;
    setCurPage(curPage - 1);
  };

  const movePageRight = () => {
    if (curPage === totalPages) return;
    setCurPage(curPage + 1);
  };

  function changePerPage(e) {
    setCurPerPage(() => Number(e.target.textContent));
    setCurPage(() => 1);
  }

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
          <h3>{totalQuestions.toLocaleString("ko-KR")} Questions</h3>
          <div className="Questions_Filter_Container">
            {FILTERARR.map((el) => {
              const { enName, krName } = el;
              return curTab === enName ? (
                <OrangeButton
                  width="60px"
                  fontSize="0.8rem"
                  id={enName}
                  key={enName}
                >
                  {krName}
                </OrangeButton>
              ) : (
                <WhiteButton
                  width="60px"
                  fontSize="0.8rem"
                  onClick={changeCurTab}
                  id={enName}
                  key={enName}
                >
                  {krName}
                </WhiteButton>
              );
            })}
          </div>
        </div>
        <div className="Questions_List_Container">
          {questionsList.map((el) => {
            return <MainPageQuestion key={el.questionId} el={el} />;
          })}
        </div>
        <div className="Questions_Pagination_Container">
          <div className="Page_Number_Container">
            <WhiteButton onClick={movePageLeft}>←</WhiteButton>
            {calcPagination(totalPages, curPage, changeCurPage)}
            <WhiteButton onClick={movePageRight}>→</WhiteButton>
          </div>
          <div className="Per_Page_Container">
            {PERPAGEARR.map((el) => {
              return curPerPage === el ? (
                <OrangeButton key={el}>{el}</OrangeButton>
              ) : (
                <WhiteButton onClick={changePerPage} key={el}>
                  {el}
                </WhiteButton>
              );
            })}
            <span> Per Page</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
