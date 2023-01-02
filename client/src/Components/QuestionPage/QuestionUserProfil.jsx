import React from "react";

export default function QuestionUserProfil({ questionData }) {
  return (
    <div className="Question_User_Profil">
      <img
        className="Question_User_Image"
        src={`${questionData && questionData.user.profileImage}`}
        alt="userImage"
      />
      <a
        href={`/users/mypage/:${questionData && questionData.user.userId}`}
      >{`${questionData && questionData.user.displayName}`}</a>
    </div>
  );
}
