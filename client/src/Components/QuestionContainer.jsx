import React from "react";

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
      <div className="Question_Content">
        <a className="Question_Title" href={`/questions/${questionId}`}>
          {title}
        </a>
        <div className="Question_Bddy">{body}</div>
        <div className="Question_Tag">
          {tags.map((tag) => {
            return <span>{tag.tagName}</span>;
          })}
        </div>
        <span className="Question_UserInfo">
          <a href={`/users/${user.userId}/userprofile`}>{user.displayName}</a>
          {modifiedAt || createdAt}
        </span>
      </div>
    </div>
  );
}

export default QuestionContainer;
