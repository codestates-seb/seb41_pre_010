import React, { useState } from "react";
import { addAnswer } from "../../API/Question/AddRequest";
import TextEditor from "../TextEditor";

export default function AnswerAdd({
  questionData,
  BlueButton,
  loading,
  session,
}) {
  const [answerBodyHTML, setAnswerBodyHTML] = useState("");
  const [answerBody, setAnswerBody] = useState("");

  return (
    <div className="Your_Answer_Container">
      <h2>Your Answer</h2>
      <div>
        <TextEditor
          setQuestionBodyHTML={setAnswerBodyHTML}
          setQuestionBodyMD={setAnswerBody}
        />
      </div>
      <div className="Submit_Clear_Container">
        <BlueButton
          width={"140px"}
          onClick={() =>
            addAnswer(
              questionData.questionId,
              session && session.userId,
              answerBody
            )
          }
        >
          Post Yout Answer
        </BlueButton>
      </div>
    </div>
  );
}
