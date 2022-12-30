import React from "react";
import { addAnswer } from "../../API/Question/AddRequest";

export default function AnswerAdd({ filterData, BlueButton }) {
  return (
    <div className="Your_Answer_Container">
      <h2>Your Answer</h2>
      <div>Answer작성창 부분</div>
      <div className="Submit_Clear_Container">
        <BlueButton
          width={"140px"}
          onClick={() =>
            addAnswer(
              filterData[0].questionId,
              //현재 글의 user의 정보가 아닌 작성자의 user Id로 교체예정
              filterData[0].user.userId,
              filterData[0].body
            )
          }
        >
          Post Yout Answer
        </BlueButton>
      </div>
    </div>
  );
}
