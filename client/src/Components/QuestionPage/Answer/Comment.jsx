import React from "react";

export default function Comment({ el }) {
  return (
    <div className="Comment_Container">
      {el.comments.length !== 0
        ? el.comments.map((comment) => {
            return (
              <div key={comment.commentId} className="Comment_Contents">
                <span>{comment.body} -</span>
                <div>
                  <a href={`/users/mypage/:${comment.user.userId}`}>
                    {comment.user.displayName}
                  </a>
                  <span>{comment.createdAt}</span>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}
