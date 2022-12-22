import React from "react";
import styled from "styled-components";
import "./Styles/Question.css";

const StyledSpan = styled.span`
  font-size: ${(props) => props.fontsize};
  color: ${(props) => props.color};
`;

export default function Question() {
  return (
    <>
      <header className="Header" />
      <main>
        <div className="Question_Container">
          <div className="Question_Content_Container">
            <div className="Title_Container">
              <div className="Title_Contents">
                <h1>
                  Web Scraper : Using Find All (Beautiful Soap, Python) and show
                  result in Streamlit
                </h1>
              </div>
              <div className="Ask_Question_Button_Container">
                <button className="Ask_Question_Button">Ask Question</button>
                <div className="Wright_Data_Info">
                  <StyledSpan fontsize={"14px"}>
                    작성: 2022/12/22/14:21
                  </StyledSpan>
                  <br></br>
                  <StyledSpan fontsize={"14px"}>
                    수정: 2022/12/23/14:52
                  </StyledSpan>
                  <div className="Modify_Icon">✍🏻</div>
                </div>
              </div>
            </div>
            <div className="Main_Text_Container">
              <aside className="Main_Text_Aside">아이콘자리</aside>
              <div className="Main_Text_Content">
                <span>본문자리</span>
              </div>
            </div>
            <div className="Tag_Section">
              <button className="Tag_Button">React</button>
            </div>
            {/* 상태값에 따른 조건부 설정 예정 */}
            <div className="Contour_Line" />
            {/* 질문 여부에 따른 조건부 설정 예정 */}
            <div className="Answers_Container">
              <h2>Answer</h2>
              <div className="Main_Text_Container">
                <aside className="Main_Text_Aside">아이콘자리</aside>
                <div className="Main_Text_Content">
                  <span>본문자리</span>
                </div>
              </div>
              {/* 상태값에 따른 조건부 설정 예정 */}
              <div className="Contour_Line" />
            </div>
          </div>
        </div>
      </main>
      <footer className="Footer" />
    </>
  );
}
