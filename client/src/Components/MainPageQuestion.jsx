import React from "react";
import "./Styles/QuestionContainer.css";
import { TagButton } from "./Button.jsx";
import { Link } from "react-router-dom";

function MainPageQuestion(props) {
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
    setQuestionId
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
        <Link
          className="Main_Page_Question_Title"
          to={`/questions/${questionId}`}
          onClick={()=> {
            setQuestionId(questionId)}}
        >
          {title}
        </Link>
        <div className="Main_Page_Question_Body">
          {body.length > 80 ? body.slice(0, 80) + "..." : body}
        </div>
        <div className="Main_Page_Question_Tag">
          {tags.map((tag, idx) => {
            return (
              <TagButton fontSize="0.5rem" key={idx}>
                {tag}
              </TagButton>
            );
          })}
        </div>
        <div className="Main_Page_Question_UserInfo">
          <Link
            to={`/users/mypage/${user.userId}`}
            className="Main_Page_Question_User_Profile_Img"
          >
            <img
              src={user.profileImage}
              alt="User Profile Img"
              className="Main_Page_Question_User_Profile_Img"
            ></img>
          </Link>
          <Link
            to={`/users/mypage/${user.userId}`}
            className="Main_Page_Question_UserName"
          >
            {user.displayName}
          </Link>
          <span>{modifiedAt || createdAt}</span>
        </div>
      </div>
    </div>
  );
}

export default MainPageQuestion;
