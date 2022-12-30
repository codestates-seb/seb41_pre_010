import React, { useState } from "react";
import { TiPen } from "react-icons/ti";
import Input from "../../Input";
import { editCommentRequest } from "../../../API/Question/EditComment";
export default function Comment({ el, loading, session, questionData }) {
  const [commentIdx, setCommentIdx] = useState(null);
  const [commentCheck, setCommentCheck] = useState(false);
  const [editCommentBody, seteditCommentBody] = useState("");
  const [comments, setcomment] = useState(el.comments);

  const addCommentHandler = (idx) => {
    setCommentIdx(() => idx);
    if (idx === commentIdx) {
      setCommentCheck(!commentCheck);
    }
  };

  const bodyResponseChange = (idx) => {
    return (comments[idx].body = editCommentBody);
  };

  return (
    <div className="Comment_Container">
      {comments.length !== 0
        ? comments.map((comment, index) => {
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
                  <a href={`/users/mypage/:${comment.user.userId}`}>
                    {comment.user.displayName}
                  </a>
                  <span>{comment.createdAt}</span>
                  {loading ? (
                    <div></div>
                  ) : !(session === comment.user.userId) ? (
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
                      <TiPen onClick={() => addCommentHandler(index)} />
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
