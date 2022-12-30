import React from "react";
import { Viewer } from "@toast-ui/react-editor";

export default function AnswerBody({ el }) {
  return (
    <div className="Main_Text_Content">
      <Viewer initialValue={el.body} />
    </div>
  );
}
