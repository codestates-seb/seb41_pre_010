import React, { useEffect, useState } from "react";
import Input from "../Components/Input";
import { questionDummyData } from "../QuestionData";
import { BlueButton, TagButton } from "../Components/Button";
import {
  TiArrowSortedUp,
  TiArrowSortedDown,
  TiBookmark,
  TiPen,
} from "react-icons/ti";
import { IconContext } from "react-icons";
import axios from "axios";
import styled from "styled-components";
import "./Styles/Question.css";

const StyledSpan = styled.span`
  font-size: ${(props) => props.fontsize};
  color: ${(props) => props.color};
`;

//0번 데이터의 기준으로 작성 추후 데이터ID를 받을 예정
export default function Question() {
  //추후 useState기본값 null처리
  const [questionData, setQeustionData] = useState(questionDummyData);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [activeClick, setActiveClick] = useState(false);
  const [commentValue, setCommentValue] = useState("");

  const addCommentHandler = (idx) => {
    setAnswerIdx(() => idx);
    if (idx === answerIdx) {
      setActiveClick(!activeClick);
    }
  };
  //answer,comment delete Request
  const deleteQuestion = (questionId) => {
    axios.delete(`api/v1/questions/${questionId}`);
  };

  const deleteAnswer = (answerId) => {
    axios.delete(`api/v1/questions/${answerId}`);
  };

  const deleteComment = (commentId) => {
    axios.delete(`api/v1/questions/${commentId}`);
  };

  //answer,comment add Request
  const addAnswer = (questionId, userId, body) => {
    axios
      .post("api/v1/answers", {
        questionId: `${questionId}`,
        userId: `${userId}`,
        body: `${body}`,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addComment = (questionId, userId, answerId, body) => {
    const request = {
      questionId: questionId,
      userId: userId,
      answerId: answerId,
      body: body,
    };

    axios
      .post("api/v1/answers", JSON.stringify(request))
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Vote Request
  const questionUpVoteRequest = (userId, questionId) => {
    const request = { userId: userId, questionId: questionId, vote: 1 };
    axios.put(`api/v1/votes/${questionId}/questions`, JSON.stringify(request));
  };

  const questionDownVoteRequest = (userId, questionId) => {
    const request = { userId: userId, questionId: questionId, vote: -1 };
    axios.put(`api/v1/votes/${questionId}/questions`, JSON.stringify(request));
  };

  const answerUpVoteRequest = (userId, answerId) => {
    const request = { userId: userId, questionId: answerId, vote: 1 };
    axios.put(`api/v1/votes/${answerId}/questions`, JSON.stringify(request));
  };

  const answerDownVoteRequest = (userId, answerId) => {
    const request = { userId: userId, questionId: answerId, vote: -1 };
    axios.put(`api/v1/votes/${answerId}/questions`, JSON.stringify(request));
  };
  //실제 API 정보에서 수정 예정
  // useEffect(() => {
  //   const getQuestionData = async () => {
  //     const result = await 데이터함수(Click시 넘어온 ID값)
  //      setQuestionData(result)
  //   };
  //   getQuestionData()
  // },[]);

  //추후 변경 예정
  const filterData = questionData;

  return (
    <>
      <main>
        <div className="Question_Container">
          <div className="Question_Content_Container">
            <div className="Title_Container">
              <div className="Title_Contents">
                <h1>{filterData[0].title}</h1>
              </div>
              <div className="Ask_Question_Button_Container">
                <BlueButton
                  href={`/questions/:${filterData[0].questionId}/edit`}
                  className="Ask_Question_Button"
                >
                  Ask Question
                </BlueButton>
                <div className="Wright_Data_Info">
                  <StyledSpan fontsize={"14px"}>
                    작성: {filterData[0].createdAt}
                  </StyledSpan>
                  <br></br>
                  <div className="Modify_Data_Info">
                    <StyledSpan fontsize={"14px"}>
                      수정: {filterData[0].modifiedAt}
                    </StyledSpan>
                    <TiPen />
                  </div>
                </div>
              </div>
            </div>
            <div className="Main_Text_Container">
              <aside className="Main_Text_Aside">
                <div className="Vote_Icon_Container">
                  <IconContext.Provider
                    value={{ size: "35px", color: "hsl(210,8%,85%)" }}
                  >
                    <TiArrowSortedUp />
                    <span>{filterData[0].vote}</span>
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
                <span>{filterData[0].body}</span>
              </div>
            </div>
            <div className="Tag_Section">
              {filterData &&
                filterData.map((el) => {
                  return el.tags.map((tags, index) => {
                    return (
                      <div key={index} className="Tags_Element">
                        <TagButton fontSize={"12px"}>{tags.tagName}</TagButton>
                      </div>
                    );
                  });
                })}
            </div>
            <div className="Question_User_Profil_Container">
              <div className="Question_User_Profil">
                <img
                  className="Question_User_Image"
                  src={`${filterData[0].user.profileImage}`}
                />
                <a
                  href={`/users/mypage/:${filterData[0].user.userId}`}
                >{`${filterData[0].user.displayName}`}</a>
              </div>
            </div>
            {/* 상태값에 따른 조건부 설정 예정 */}
            {filterData[0].answers ? <div className="Contour_Line" /> : null}
            {/* 질문 여부에 따른 조건부 설정 예정 */}
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
                                onChange={(e) =>
                                  setCommentValue(e.target.value)
                                }
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
            <div className="Your_Answer_Container">
              <h2>Your Answer</h2>
              <div>Answer작성창 부분</div>
              <div className="Submit_Clear_Container">
                <BlueButton
                  onClick={() =>
                    addAnswer(
                      filterData[0].questionId,
                      //현재 글의 user의 정보가 아닌 작성자의 user Id로 교체예정
                      filterData[0].user.userId,
                      filterData[0].body
                    )
                  }
                >
                  Post Yout Answer
                </BlueButton>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
