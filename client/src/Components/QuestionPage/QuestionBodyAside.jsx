import React, { useEffect, useState } from "react";
import { TiArrowSortedUp, TiArrowSortedDown, TiBookmark } from "react-icons/ti";
import {
  questionUpVoteRequest,
  questionDownVoteRequest,
} from "../../API/Question/Vote";
import { questionBookMark } from "../../API/Question/BookMark";

export default function QuestionBodyAside({ questionData, loading, session }) {
  const [voteUp, setVoteUp] = useState(questionData.voteUpCheck);
  const [voteDown, setVoteDown] = useState(questionData.voteDownCheck);
  const [bookMarkCheck, setBookMarkCheck] = useState(
    questionData.bookMarkCheck
  );

  return (
    <aside className="Main_Text_Aside">
      <div className="Vote_Icon_Container">
        {loading ? (
          <div></div>
        ) : session ? (
          <TiArrowSortedUp
            size={"35px"}
            color={
              questionData.voteUpCheck
                ? "rgb(224, 130, 37)"
                : "hsl(210,8%,85%)"
            }
            onClick={() => {
              questionUpVoteRequest();
              setVoteUp(!voteUp);
            }} // 추후 파라미터 session.userId, questionId
          />
        ) : (
          <TiArrowSortedUp size={"35px"} color="hsl(210,8%,85%)" />
        )}
        <span>{questionData.vote}</span>
        {loading ? (
          <div></div>
        ) : session ? (
          <TiArrowSortedDown
            size={"35px"}
            color={
              questionData.voteDownCheck
                ? "rgb(224, 130, 37)"
                : "hsl(210,8%,85%)"
            }
            onClick={() => {
              questionDownVoteRequest();
              setVoteDown(!voteDown);
            }} // 추후 파라미터 session.userId, questionId
          />
        ) : (
          <TiArrowSortedDown size={"35px"} color="hsl(210,8%,85%)" />
        )}
        {loading ? (
          <div></div>
        ) : session ? (
          <TiBookmark
            size={"30px"}
            color={
              questionData.bookMarkCheck
                ? "rgb(224, 130, 37)"
                : "hsl(210,8%,85%)"
            }
            onClick={() => {
              questionBookMark();
              setBookMarkCheck(!bookMarkCheck);
            }}
          />
        ) : (
          <TiBookmark size={"30px"} color={"hsl(210,8%,85%)"} />
        )}
      </div>
    </aside>
  );
}