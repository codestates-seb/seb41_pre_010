import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./Styles/Question.css";
import { TagButton } from "../Components/Tag";
import { questionDummyData } from "../QuestionData";

const StyledSpan = styled.span`
  font-size: ${(props) => props.fontsize};
  color: ${(props) => props.color};
`;

//0번 데이터의 기준으로 작성 추후 데이터ID를 받을 예정
export default function Question() {
  //추후 useState기본값 null처리
  const [questionData, setQeustionData] = useState(questionDummyData);
  const [commentClick, setCommentClic] = useState(false);

  const commentToggle = () => {
    setCommentClic(!commentClick);
  };
  //실제 API 정보에서 수정 예정
  // useEffect(() => {
  //   const getQuestionData = async () => {
  //     const result = await 데이터함수(Click시 넘어온 ID값)
  //      setQuestionData(result)
  //   };

  //   getQuestionData()
  // },[]);
  const filterData = questionData;
  console.log(commentClick);
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
                <button className="Ask_Question_Button">Ask Question</button>
                <div className="Wright_Data_Info">
                  <StyledSpan fontsize={"14px"}>
                    작성: {filterData[0].createdAt}
                  </StyledSpan>
                  <br></br>
                  <div className="Modify_Data_Info">
                    <StyledSpan fontsize={"14px"}>
                      수정: {filterData[0].modifiedAt}
                    </StyledSpan>
                    <div className="Modify_Icon">✍🏻</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Main_Text_Container">
              <aside className="Main_Text_Aside">
                {/* 임시 아이콘 */}
                <div className="Vote_Icon_Container">
                  <span>⬆</span>
                  <span>3</span>
                  <span>⬇</span>
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
                        <TagButton>{tags.tagName}</TagButton>
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
                <span>{`${filterData[0].user.displayName}`}</span>
              </div>
            </div>
            {/* 상태값에 따른 조건부 설정 예정 */}
            {filterData[0].answers ? <div className="Contour_Line" /> : null}
            {/* 질문 여부에 따른 조건부 설정 예정 */}
            {filterData[0].answers
              ? filterData &&
                filterData[0].answers.map((el) => {
                  return (
                    <div key={el.answerId} className="Answers_Container">
                      <h2>Answer{el.answerId}</h2>
                      <div>
                        <div className="Main_Text_Container">
                          <aside className="Main_Text_Aside">
                            <div className="Vote_Icon_Container">
                              <span>⬆</span>
                              <span>3</span>
                              <span>⬇</span>
                            </div>
                          </aside>
                          <div className="Main_Text_Content">
                            <span>{el.body}</span>
                          </div>
                        </div>
                        <div className="Answer_User_Profil_Container">
                          <div className="Answer_Contents">
                            <div className="Answer_CreateAt">
                              <span>{el.createdAt}</span>
                              <span>✍🏻</span>
                            </div>
                            <div>
                              <img
                                className="Answer_User_Image"
                                src={`${el.user.profileImage}`}
                              />
                              <span>{el.user.displayName}</span>
                            </div>
                          </div>
                          {/* <div className="Answer_ModifyAt"></div> 조건부 랜더링예정 */}
                        </div>
                        <div className="Comment_Container">
                          <div className="Comment_Contour_Line">
                            <span>코멘트 내용입니다</span>
                          </div>
                        </div>
                        <div className="Add_Comment">
                          {/* 추후 TextBox예정 */}
                          {commentClick ? null : (
                            <button
                              className="Comment_Add_Button"
                              onClick={commentToggle}
                            >
                              Add a Comment
                            </button>
                          )}
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
                <button>Post Yout Answer</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
