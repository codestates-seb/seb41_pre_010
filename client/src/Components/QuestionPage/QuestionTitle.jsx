import React from "react";
import { TiPen } from "react-icons/ti";

export default function QuestionTitle({
  filterData,
  StyledSpan,
  BlueButton,
}) {
  return (
    <div className="Title_Container">
      <div className="Title_Contents">
        <h1>{filterData[0].title}</h1>
      </div>
      <div className="Ask_Question_Button_Container">
        <BlueButton
          href={`/questions/:${filterData[0].questionId}/edit`}
          className="Ask_Question_Button"
        >
          Ask Question
        </BlueButton>
        <div className="Wright_Data_Info">
          <StyledSpan fontsize={"14px"}>
            작성: {filterData[0].createdAt}
          </StyledSpan>
          <br></br>
          <div className="Modify_Data_Info">
            <StyledSpan fontsize={"14px"}>
              수정: {filterData[0].modifiedAt}
            </StyledSpan>
            <TiPen />
          </div>
        </div>
      </div>
    </div>
  );
}
