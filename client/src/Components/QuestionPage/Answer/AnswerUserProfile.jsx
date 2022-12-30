import React from "react";
import { TiPen } from "react-icons/ti";

export default function AnswerUserProfile({
  el,
  loading,
  session,
}) {
  return (
    <div className="Answer_User_Profil_Container">
      <div className="Answer_Contents">
        <div className="Answer_CreateAt">
          {el.modifiedAt ? (
            <span>수정:{el.modifiedAt}</span>
          ) : (
            <span>작성:{el.createdAt}</span>
          )}
          {loading ? (
            <div></div>
          ) : session.userId === el.user.userId ? (
            <a href="/answers/:answerId/edit">
              <TiPen />
            </a>
          ) : null}
        </div>
        <div>
          <img className="Answer_User_Image" src={`${el.user.profileImage}`} />
          <a href={`/users/mypage/:${el.user.userId}`}>{el.user.displayName}</a>
        </div>
      </div>
    </div>
  );
}
