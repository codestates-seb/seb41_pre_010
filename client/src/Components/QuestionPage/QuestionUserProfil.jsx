import React from "react";

export default function QuestionUserProfil({questionData}) {
  return (
    <div className="Question_User_Profil">
      <img
        className="Question_User_Image"
        src={`${questionData.user.profileImage}`}
      />
      <a
        href={`/users/mypage/:${questionData.user.userId}`}
      >{`${questionData.user.displayName}`}</a>
    </div>
  );
}
