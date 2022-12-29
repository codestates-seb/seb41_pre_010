import React from "react";

export default function QuestionUserProfil({filterData}) {
  return (
    <div className="Question_User_Profil">
      <img
        className="Question_User_Image"
        src={`${filterData[0].user.profileImage}`}
      />
      <a
        href={`/users/mypage/:${filterData[0].user.userId}`}
      >{`${filterData[0].user.displayName}`}</a>
    </div>
  );
}
