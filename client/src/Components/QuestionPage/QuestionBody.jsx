import React from "react";
import { Viewer } from "@toast-ui/react-editor";

export default function QuestionBody({questionData}) {
  return (
    <div className="Main_Text_Content">
      <Viewer initialValue={questionData.body}/>
    </div>
  );
}
