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
  console.log(questionData&&questionData.questionId)
  console.log(session&&session.userId)
  console.log(answerBody);
  return (
    <div className="Your_Answer_Container">
      <h2>Your Answer</h2>
      <div>
        {loading ? (
          <div></div>
        ) : session ? (
          <TextEditor
            setQuestionBodyHTML={setAnswerBodyHTML}
            setQuestionBodyMD={setAnswerBody}
          />
        ) : (
          <div>
            Login이 필요합니다 여기를
            <a className="Login_Href" href="/users/login">
              Click
            </a>
            하세요
          </div>
        )}
      </div>
      <div className="Submit_Clear_Container">
        {loading ? (
          <div></div>
        ) : session ? (
          <BlueButton
            width={"140px"}
            onClick={() =>
              addAnswer(
                questionData && questionData.questionId,
                session && session.userId,
                answerBody
              )
            }
          >
            Post Yout Answer
          </BlueButton>
        ) : (
          <BlueButton width={"140px"} href="/users/signup">
            계정이 없으신가요?
          </BlueButton>
        )}
      </div>
    </div>
  );
}
