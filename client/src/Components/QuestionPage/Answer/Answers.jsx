import React from "react";
import AnswerBodyAside from "./AnswerBodyAside";
import AnswerUserProfile from "./AnswerUserProfile";
import Comment from "./Comment";
import AddComment from "./AddComment";
import AnswerBody from "./AnswerBody";

export default function Answers({
  questionData,
  answerIdx,
  activeClick,
  setCommentValue,
  commentValue,
  BlueButton,
  Input,
  addCommentHandler,
  loading,
  session,
}) {
  return (
    <>
      {questionData.answers
        ? questionData &&
          questionData.answers.map((el, index) => {
            return (
              <div key={el.answerId} className="Answers_Container">
                <h2 >Answer{el.answerId}</h2>
                <div>
                  <div className="Main_Text_Container">
                    <AnswerBodyAside
                      el={el}
                      index={index}
                      loading={loading}
                      session={session}
                    />
                    <AnswerBody el={el}/>
                    {/* <div className="Main_Text_Content">
                      <span>{el.body}</span>
                    </div> */}
                  </div>
                  <AnswerUserProfile
                    el={el}
                    loading={loading}
                    session={session}
                  />
                  <div className="Contour_Line" />
                  <Comment el={el} loading={loading} session={session} questionData={questionData}/>
                  {loading ? (
                    <div></div>
                  ) : session ? (
                    <AddComment
                      BlueButton={BlueButton}
                      answerIdx={answerIdx}
                      index={index}
                      Input={Input}
                      el={el}
                      activeClick={activeClick}
                      commentValue={commentValue}
                      setCommentValue={setCommentValue}
                      questionData={questionData}
                      addCommentHandler={addCommentHandler}
                    />
                  ) : (
                    <div className="Add_Comment">
                      <a className="Go_Login" href="/users/login">
                        Go Login
                      </a>
                    </div>
                  )}
                  <div className="Contour_Line" />
                </div>
              </div>
            );
          })
        : null}
    </>
  );
}
