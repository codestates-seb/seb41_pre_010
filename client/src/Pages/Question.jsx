import React, { lazy, Suspense, useEffect, useState } from "react";
import Input from "../Components/Input";
import AnswerAdd from "../Components/QuestionPage/AnswerAdd.jsx";
import QuestionTitle from "../Components/QuestionPage/QuestionTitle";
import QuestionBodyAside from "../Components/QuestionPage/QuestionBodyAside";
import QuestionTag from "../Components/QuestionPage/QuestionTag";
import QuestionUserProfil from "../Components/QuestionPage/QuestionUserProfil";
import { getQuestionData } from "../API/Question/QuestionInfo";
import { BlueButton, TagButton } from "../Components/Button";
import { useSession } from "../CustomHook/SessionProvider";
import Answers from "../Components/QuestionPage/Answer/Answers";
import styled from "styled-components";
import "./Styles/Question.css";
import { useParams } from "react-router-dom";
const QuestionBody = lazy(() =>
  import("../Components/QuestionPage/QuestionBody")
);

const StyledSpan = styled.span`
  font-size: ${(props) => props.fontsize};
  color: ${(props) => props.color};
`;

export default function Question() {
  const { loading, session } = useSession();
  const [questionData, setQeustionData] = useState(null);
  const [activeClick, setActiveClick] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const addCommentHandler = () => {
    setActiveClick(!activeClick);
  };

  const { questionId } = useParams();

  useEffect(() => {
    const questionData = async () => {
      const result = await getQuestionData(
        questionId,
        session && session.userId
      );
      setQeustionData(result);
    };
    questionData();
  }, [questionId]);

  return (
    <>
      <main>
        <div className="Question_Container">
          <div className="Question_Content_Container">
            <QuestionTitle
              questionData={questionData}
              StyledSpan={StyledSpan}
              BlueButton={BlueButton}
              loading={loading}
              session={session}
            />
            <div className="Main_Text_Container">
              <aside className="Main_Text_Aside">
                <QuestionBodyAside
                  questionData={questionData}
                  loading={loading}
                  session={session}
                />
              </aside>
              <Suspense fallback={<div> 로딩중... </div>}>
                <QuestionBody questionData={questionData} />
              </Suspense>
            </div>
            <div className="Tag_Section">
              <QuestionTag questionData={questionData} TagButton={TagButton} />
            </div>
            <div className="Question_User_Profil_Container">
              <QuestionUserProfil questionData={questionData} />
            </div>
            {questionData && questionData.answers.length !== 0 ? (
              <div className="Contour_Line" />
            ) : null}
            <Answers
              questionData={questionData}
              activeClick={activeClick}
              setCommentValue={setCommentValue}
              commentValue={commentValue}
              BlueButton={BlueButton}
              Input={Input}
              addCommentHandler={addCommentHandler}
              loading={loading}
              session={session}
            />
            <AnswerAdd
              BlueButton={BlueButton}
              questionData={questionData}
              loading={loading}
              session={session}
            />
          </div>
        </div>
      </main>
    </>
  );
}
