import React from "react";
import AnswerBodyAside from "./AnswerBodyAside";
import AnswerUserProfile from "./AnswerUserProfile";
import Comment from "./Comment";
import AddComment from "./AddComment";

export default function Answers({
  filterData,
  answerIdx,
  activeClick,
  setCommentValue,
  commentValue,
  BlueButton,
  Input,
  addCommentHandler,
}) {
  return (
    <>
      {filterData[0].answers
        ? filterData &&
          filterData[0].answers.map((el, index) => {
            return (
              <div key={el.answerId} className="Answers_Container">
                <h2>Answer{el.answerId}</h2>
                <div>
                  <div className="Main_Text_Container">
                    <AnswerBodyAside />
                    <div className="Main_Text_Content">
                      <span>{el.body}</span>
                    </div>
                  </div>
                  <AnswerUserProfile el={el} />
                  <div className="Contour_Line" />
                  <Comment el={el} />
                  <AddComment
                    BlueButton={BlueButton}
                    answerIdx={answerIdx}
                    index={index}
                    Input={Input}
                    el={el}
                    activeClick={activeClick}
                    commentValue={commentValue}
                    setCommentValue={setCommentValue}
                    filterData={filterData}
                    addCommentHandler={addCommentHandler}
                  />
                  <div className="Contour_Line" />
                </div>
              </div>
            );
          })
        : null}
    </>
  );
}
