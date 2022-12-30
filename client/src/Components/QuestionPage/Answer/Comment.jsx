import React from "react";
import { TiPen } from "react-icons/ti";
export default function Comment({ el, loading, session }) {
  return (
    <div className="Comment_Container">
      {el.comments.length !== 0
        ? el.comments.map((comment,index) => {
            return (
              <div key={index} className="Comment_Contents">
                <span>{comment.body} -</span>
                <div>
                  <a href={`/users/mypage/:${comment.user.userId}`}>
                    {comment.user.displayName}
                  </a>
                  <span>{comment.createdAt}</span>
                  {loading ? (
                    <div></div>
                  ) : (session === comment.user.userId) ? (
                      <TiPen />
                  ) : null}
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}
