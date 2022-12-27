import React from "react";

export default function QuestionBody({filterData}) {
  return (
    <div className="Main_Text_Content">
      <span>{filterData[0].body}</span>
    </div>
  );
}
