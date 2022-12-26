import React from "react";
import "./Styles/QuestionContainer.css";
import { TagButton } from "./Button";

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
        <span className="Main_Page_Question_Votes">
          {vote} {vote === 1 ? "vote" : "votes"}
        </span>
        <span className="Main_Page_Question_Answers">
          {answers} {answers === 1 ? "answer" : "answers"}
        </span>
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
            return (
              <TagButton fontSize="0.5rem" key={tag.tagId}>
                {tag.tagName}
              </TagButton>
            );
          })}
        </div>
        <div className="Main_Page_Question_UserInfo">
          <img></img>
          <a href={`/users/${user.userId}/userprofile`}>{user.displayName}</a>
          <span>{modifiedAt || createdAt}</span>
        </div>
      </div>
    </div>
  );
}

export default QuestionContainer;
