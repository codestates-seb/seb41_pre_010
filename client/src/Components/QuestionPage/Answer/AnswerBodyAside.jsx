import React, { useState } from "react";
import { TiArrowSortedUp, TiArrowSortedDown, TiBookmark } from "react-icons/ti";
import {
  answerUpVoteRequest,
  answerDownVoteRequest,
} from "../../../API/Question/Vote";
import { answerBookMark } from "../../../API/Question/BookMark.js";

export default function AnswerBodyAside({
  el,
  loading,
  session,
  questionData,
}) {
  const [voteUp, setVoteUp] = useState(el.voteUpCheck);
  const [voteDown, setVoteDown] = useState(el.voteDownCheck);
  const [bookMarkCheck, setBookMarkCheck] = useState(el.bookMarkCheck);

  return (
    <aside className="Main_Text_Aside">
      <div className="Vote_Icon_Container">
        {loading ? (
          <div></div>
        ) : session ? (
          <TiArrowSortedUp
            size={"35px"}
            color={voteUp ? "rgb(224, 130, 37)" : "hsl(210,8%,85%)"}
            onClick={() => {
              setVoteUp(!voteUp);
              answerUpVoteRequest(el.user.userId, questionData.questionId);
            }} // 추후 파라미터 userId, questionId
          />
        ) : (
          <TiArrowSortedUp size={"35px"} color="hsl(210,8%,85%)" />
        )}
        <span>{el.vote}</span>
        {loading ? (
          <div></div>
        ) : session ? (
          <TiArrowSortedDown
            size={"35px"}
            color={voteDown ? "rgb(224, 130, 37)" : "hsl(210,8%,85%)"}
            onClick={() => {
              answerDownVoteRequest();
              setVoteDown(!voteDown);
            }} // 추후 파라미터 userId, questionId
          />
        ) : (
          <TiArrowSortedDown size={"35px"} color="hsl(210,8%,85%)" />
        )}
        {loading ? (
          <div />
        ) : session ? (
          <TiBookmark
            size={"30px"}
            color={bookMarkCheck ? "rgb(224, 130, 37)" : "hsl(210,8%,85%)"}
            onClick={() => {
              answerBookMark(); setBookMarkCheck(!bookMarkCheck);
            }} //추후 파라미터 answerId, userId
          />
        ) : (
          <TiBookmark size={"30px"} color="hsl(210,8%,85%)" />
        )}
      </div>
    </aside>
  );
}
