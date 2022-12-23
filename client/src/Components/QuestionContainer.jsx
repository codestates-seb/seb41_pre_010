import React from "react";

function QuestionContainer(props) {
  const { answers, body, createdAt, modifiedAt, tags, title, user, vote } =
    props.el;
  return (
    <div className="Main_Page_Question_Container">
      <div className="Main_Page_Question_Info">
        <span className="Main_Page_Question_Votes">Votes: {vote}</span>
        <span className="Main_Page_Question_Answers">Answers: {answers}</span>
      </div>
      <div className="Question_Content">
        <div className="Question_Title">{title}</div>
        <div className="Question_Bddy">{body}</div>
        <div className="Question_Tag">{tags[0].tagName}</div>
        <div className="Question_UserInfo">
          {user.displayName} {modifiedAt || createdAt}
        </div>
      </div>
    </div>
  );
}

export default QuestionContainer;
