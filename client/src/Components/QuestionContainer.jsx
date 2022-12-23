import React from "react";
import "./Styles/QuestionContainer.css";

function QuestionContainer(props) {
  const {
    questionId,
    answers,
    body,
    createdAt,
    modifiedAt,
    tags,
    title,
    user,
    vote,
  } = props.el;
  return (
    <div className="Main_Page_Question_Container">
      <div className="Main_Page_Question_Info">
        <span className="Main_Page_Question_Votes">Votes: {vote}</span>
        <span className="Main_Page_Question_Answers">Answers: {answers}</span>
      </div>
      <div className="Main_Page_Question_Content">
        <a
          className="Main_Page_Question_Title"
          href={`/questions/${questionId}`}
        >
          {title}
        </a>
        <div className="Main_Page_Question_Body">{body}</div>
        <div className="Main_Page_Question_Tag">
          {tags.map((tag) => {
            return <span key={tag.tagId}>{tag.tagName}</span>;
          })}
        </div>
        <span className="Main_Page_Question_UserInfo">
          <a href={`/users/${user.userId}/userprofile`}>{user.displayName}</a>
          {modifiedAt || createdAt}
        </span>
      </div>
    </div>
  );
}

export default QuestionContainer;
