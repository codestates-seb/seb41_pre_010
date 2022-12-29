import React from "react";
import { TiPen } from "react-icons/ti";

export default function QuestionTitle({
  filterData,
  StyledSpan,
  BlueButton,
  loading,
  session,
}) {
  return (
    <div className="Title_Container">
      <div className="Title_Contents">
        <h1>{filterData[0].title}</h1>
      </div>
      <div className="Ask_Question_Button_Container">
        {loading ? (
          <div>로딩중 입니다...</div>
        ) : session ? (
          <BlueButton href={`/questions/:${filterData[0].questionId}/edit`}>
            Ask Question
          </BlueButton>
        ) : (
          <BlueButton>로그인 필요</BlueButton>
        )}
        <div className="Wright_Data_Info">
          <StyledSpan fontsize={"14px"}>
            작성: {filterData[0].createdAt}
          </StyledSpan>
          <br></br>
          <div className="Modify_Data_Info">
            <StyledSpan fontsize={"14px"}>
              수정: {filterData[0].modifiedAt}
            </StyledSpan>
            {loading ? <div>로딩중 입니다...</div> : session ? <TiPen /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}