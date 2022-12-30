import React from "react";
import { addComment } from "../../../API/Question/AddRequest";

export default function AddComment({
  BlueButton,
  answerIdx,
  index,
  Input,
  el,
  activeClick,
  commentValue,
  setCommentValue,
  questionData,
  addCommentHandler,
}) {
  return (
    <div className="Add_Comment">
      {answerIdx === index && activeClick ? (
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
            onClick={() =>
              addComment(
                questionData.questionId,
                questionData.user.userId,
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
