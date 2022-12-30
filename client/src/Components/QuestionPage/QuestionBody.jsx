import React from "react";

export default function QuestionBody({questionData}) {
  return (
    <div className="Main_Text_Content">
      <span>{questionData.body}</span>
    </div>
  );
}
