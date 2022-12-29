import React, { useEffect, useState } from "react";
import Input from "../Components/Input";
import AnswerAdd from "../Components/QuestionPage/AnswerAdd.jsx";
import QuestionTitle from "../Components/QuestionPage/QuestionTitle";
import QuestionBodyAside from "../Components/QuestionPage/QuestionBodyAside";
import QuestionBody from "../Components/QuestionPage/QuestionBody";
import QuestionTag from "../Components/QuestionPage/QuestionTag";
import QuestionUserProfil from "../Components/QuestionPage/QuestionUserProfil";
import { questionDummyData } from "../QuestionData";
import { BlueButton, TagButton } from "../Components/Button";
import Answers from "../Components/QuestionPage/Answer/Answers";
import {
  TiArrowSortedUp,
  TiArrowSortedDown,
  TiBookmark,
  TiPen,
} from "react-icons/ti";
import { IconContext } from "react-icons";
import axios from "axios";
import styled from "styled-components";
import "./Styles/Question.css";

const StyledSpan = styled.span`
  font-size: ${(props) => props.fontsize};
  color: ${(props) => props.color};
`;

//0번 데이터의 기준으로 작성 추후 데이터ID를 받을 예정
export default function Question() {
  //추후 useState기본값 null처리
  const [questionData, setQeustionData] = useState(questionDummyData);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [activeClick, setActiveClick] = useState(false);
  const [commentValue, setCommentValue] = useState("");

  const addCommentHandler = (idx) => {
    setAnswerIdx(() => idx);
    if (idx === answerIdx) {
      setActiveClick(!activeClick);
    }
  };
  
  //실제 API 정보에서 수정 예정
  // useEffect(() => {
  //   const getQuestionData = async () => {
  //     const result = await 데이터함수(Click시 넘어온 ID값)
  //      setQuestionData(result)
  //   };
  //   getQuestionData()
  // },[]);

  //추후 변경 예정
  const filterData = questionData;

  return (
    <>
      <main>
        <div className="Question_Container">
          <div className="Question_Content_Container">
            <QuestionTitle
              filterData={filterData}
              StyledSpan={StyledSpan}
              BlueButton={BlueButton}
              TiPen={TiPen}
            />
            <div className="Main_Text_Container">
              <aside className="Main_Text_Aside">
                <QuestionBodyAside
                  IconContext={IconContext}
                  TiBookmark={TiBookmark}
                  filterData={filterData}
                  TiArrowSortedUp={TiArrowSortedUp}
                  TiArrowSortedDown={TiArrowSortedDown}
                />
              </aside>
              <QuestionBody filterData={filterData} />
            </div>
            <div className="Tag_Section">
              <QuestionTag filterData={filterData} TagButton={TagButton} />
            </div>
            <div className="Question_User_Profil_Container">
              <QuestionUserProfil filterData={filterData} />
            </div>
            {filterData[0].answers ? <div className="Contour_Line" /> : null}
            <Answers
              //추후 배열+spreed 연산자로 변경할 예정
              filterData={filterData}
              IconContext={IconContext}
              TiArrowSortedUp={TiArrowSortedUp}
              TiArrowSortedDown={TiArrowSortedDown}
              TiBookmark={TiBookmark}
              answerIdx={answerIdx}
              activeClick={activeClick}
              setCommentValue={setCommentValue}
              commentValue={commentValue}
              BlueButton={BlueButton}
              Input={Input}
              addCommentHandler={addCommentHandler}
            />
            <AnswerAdd BlueButton={BlueButton} filterData={filterData}/>
          </div>
        </div>
      </main>
    </>
  );
}
