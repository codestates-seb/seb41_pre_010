import React from "react";
import { addComment } from "./API/Question/AddRequest";


export default function AddComment({
  BlueButton,
  index,
  Input,
  el,
  commentValue,
  setCommentValue,
  questionData,
  addCommentHandler,
  showAddUi,
  session
}) {
  return (
    <div className="Add_Comment">
      {showAddUi ? (
        <div className="Answer_Comment_Contents">
          <Input
            width={"80%"}
            type={"text"}
            defaultValue={commentValue}
            onChange={(e) => setCommentValue(e.target.value)}
          />
          <BlueButton
            marginLft={"10px"}
            width={"117px"}
            href={`/questions/${questionData&&questionData.questionId}`}
            onClick={() =>
              addComment(
                questionData.questionId,
                session&&session.userId,
                el.answerId,
                commentValue
              )
            }
          >
            Add Comment
          </BlueButton>
        </div>
      ) : null}
      <button
        onClick={() => {
          addCommentHandler(index);
          setCommentValue("");
        }}
        className="Comment_Add_Button"
      >
        Add a Comment
      </button>
    </div>
  );
}
