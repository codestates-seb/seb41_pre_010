import React, { useState } from "react";
import { TiPen } from "react-icons/ti";
import Input from "../../Input";
import { editCommentRequest } from "../../../API/Question/EditComment";
export default function Comment({ el, loading, session, questionData }) {
  const [commentIdx, setCommentIdx] = useState(null);
  const [commentCheck, setCommentCheck] = useState(false);
  const [editCommentBody, seteditCommentBody] = useState("");

  const bodyResponseChange = (idx) => {
    return (el.comments[idx].body = editCommentBody);
  };

  return (
    <div className="Comment_Container">
      {el.comments.length !== 0
        ? el.comments.map((comment, index) => {
            return (
              <div key={index} className="Comment_Contents">
                {commentCheck && index === commentIdx ? (
                  <>
                    <Input
                      defaultValue={comment.body}
                      onChange={(e) => seteditCommentBody(e.target.value)}
                    />
                  </>
                ) : (
                  <span>{comment.body} -</span>
                )}
                <div>
                  <a href={`/users/mypage/${comment.user.userId}`}>
                    {comment.user.displayName}
                  </a>
                  <span>{comment.createdAt}</span>
                  {loading ? (
                    <div></div>
                  ) : session.userId === comment.user.userId ? (
                    commentCheck ? (
                      <TiPen
                        onClick={() => {
                          setCommentCheck(!commentCheck);
                          bodyResponseChange(index);
                          editCommentRequest(
                            comment.commentId,
                            questionData.questionId,
                            el.answerId,
                            session && session.userId,
                            editCommentBody
                          );
                        }}
                      />
                    ) : (
                      <TiPen />
                    )
                  ) : null}
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}
