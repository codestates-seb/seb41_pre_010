import React from "react";
import { TiPen } from "react-icons/ti";

export default function QuestionTitle({
  questionData,
  StyledSpan,
  BlueButton,
  loading,
  session,
}) {
  return (
    <div className="Title_Container">
      <div className="Title_Contents">
        <h1>{questionData.title}</h1>
      </div>
      <div className="Ask_Question_Button_Container">
        {loading ? (
          <div></div>
        ) : session ? (
          //추후 링크 변경 예정
          <BlueButton href={`/questions/:${questionData.questionId}/edit`}>
            Ask Question
          </BlueButton>
        ) : (
          <BlueButton>로그인 필요</BlueButton>
        )}
        <div className="Wright_Data_Info">
          <StyledSpan fontsize={"14px"}>
            작성: {questionData.createdAt}
          </StyledSpan>
          <br></br>
          <div className="Modify_Data_Info">
            <StyledSpan fontsize={"14px"}>
              수정: {questionData.modifiedAt}
            </StyledSpan>
            {loading ? (
              <div />
            ) : (session === questionData.user.userId) ? (
              <a href={`/questions/:${questionData.questionId}/edit`}>
                <TiPen />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
