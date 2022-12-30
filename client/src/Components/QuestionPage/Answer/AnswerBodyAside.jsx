import React from "react";
import { TiArrowSortedUp, TiArrowSortedDown, TiBookmark } from "react-icons/ti";
import {
  answerUpVoteRequest,
  answerDownVoteRequest,
} from "../../../API/Question/Vote";
import { answerBookMark } from "../../../API/Question/BookMark.js";

export default function AnswerBodyAside({ el, loading, session }) {
  return (
    <aside className="Main_Text_Aside">
      <div className="Vote_Icon_Container">
        {loading ? (
          <div></div>
        ) : session ? (
          <TiArrowSortedUp
            size={"35px"}
            color={el.voteUpCheck ? "rgb(224, 130, 37)" : "hsl(210,8%,85%)"}
            onClick={() => answerUpVoteRequest()} // 추후 파라미터 userId, questionId
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
            color={el.voteDownCheck ? "rgb(224, 130, 37)" : "hsl(210,8%,85%)"}
            onClick={() => answerDownVoteRequest()} // 추후 파라미터 userId, questionId
          />
        ) : (
          <TiArrowSortedDown size={"35px"} color="hsl(210,8%,85%)" />
        )}
        {loading ? (
          <div />
        ) : session ? (
          <TiBookmark
            size={"30px"}
            color={el.bookMarkCheck ? "rgb(224, 130, 37)" : "hsl(210,8%,85%)"}
            onClick={() => answerBookMark()} //추후 파라미터 answerId, userId
          />
        ) : (
          <TiBookmark size={"30px"} color="hsl(210,8%,85%)" />
        )}
      </div>
    </aside>
  );
}
