import React, { useState } from "react";
import TextEditor from "../../TextEditor";

export default function AnswerBody({ el, answerEditCheck }) {
  const [answerBodyHTML, setAnswerBodyHTML] = useState("");
  const [answerBody, setAnswerBody] = useState("");

  return (
    <>
      {answerEditCheck ? (
        <TextEditor
          setQuestionBodyHTML={setAnswerBodyHTML}
          setQuestionBodyMD={setAnswerBody}
        />
      ) : (
        <span>{el.body}</span>
      )}
    </>
  );
}
