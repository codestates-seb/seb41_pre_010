import React from "react";
import {TiPen} from "react-icons/ti";

export default function Answer({filterData,
  IconContext,
  TiArrowSortedUp,
  TiArrowSortedDown,
  TiBookmark,
  answerIdx,
  activeClick,
  setCommentValue,
  commentValue,
  addComment,
  BlueButton,
  Input,
  addCommentHandler,}) {
  return (
    <>
      {filterData[0].answers
        ? filterData &&
          filterData[0].answers.map((el, index) => {
            return (
              <div key={el.answerId} className="Answers_Container">
                <h2>Answer{el.answerId}</h2>
                <div>
                  <div className="Main_Text_Container">
                    <aside className="Main_Text_Aside">
                      <div className="Vote_Icon_Container">
                        <IconContext.Provider
                          value={{
                            size: "35px",
                            color: "hsl(210,8%,85%)",
                          }}
                        >
                          <TiArrowSortedUp />
                          <span>{el.vote}</span>
                          <TiArrowSortedDown />
                        </IconContext.Provider>
                        <IconContext.Provider
                          value={{ size: "30px", color: "#a5a7a9" }}
                        >
                          <TiBookmark />
                        </IconContext.Provider>
                      </div>
                    </aside>
                    <div className="Main_Text_Content">
                      <span>{el.body}</span>
                    </div>
                  </div>
                  <div className="Answer_User_Profil_Container">
                    <div className="Answer_Contents">
                      <div className="Answer_CreateAt">
                        {el.modifiedAt ? (
                          <span>수정:{el.modifiedAt}</span>
                        ) : (
                          <span>작성:{el.createdAt}</span>
                        )}
                        <TiPen />
                      </div>
                      <div>
                        <img
                          className="Answer_User_Image"
                          src={`${el.user.profileImage}`}
                        />
                        <a href={`/users/mypage/:${el.user.userId}`}>
                          {el.user.displayName}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="Contour_Line" />
                  <div className="Comment_Container">
                    {el.comments.length !== 0
                      ? el.comments.map((comment) => {
                          return (
                            <div
                              key={comment.commentId}
                              className="Comment_Contents"
                            >
                              <span>{comment.body} -</span>
                              <div>
                                <a
                                  href={`/users/mypage/:${comment.user.userId}`}
                                >
                                  {comment.user.displayName}
                                </a>
                                <span>{comment.createdAt}</span>
                              </div>
                            </div>
                          );
                        })
                      : null}
                  </div>
                  <div className="Add_Comment">
                    {/* 추후 TextBox예정 */}
                    {answerIdx === index && activeClick ? (
                      <div>
                        <Input
                          width={"80%"}
                          type={"text"}
                          defaultValue={commentValue}
                          onChange={(e) => setCommentValue(e.target.value)}
                        />
                        <BlueButton
                          onClick={() =>
                            addComment(
                              filterData[0].questionId,
                              //현재 로그인 되어있는 user의 ID로 변경예정
                              filterData[0].user.userId,
                              el.answerId,
                              commentValue
                            )
                          }
                        >
                          Add Comment
                        </BlueButton>
                      </div>
                    ) : null}
                    <button
                      onClick={() => {
                        addCommentHandler(index);
                        setCommentValue("");
                      }}
                      className="Comment_Add_Button"
                    >
                      Add a Comment
                    </button>
                  </div>
                  <div className="Contour_Line" />
                </div>
              </div>
            );
          })
        : null}
    </>
  );
}
