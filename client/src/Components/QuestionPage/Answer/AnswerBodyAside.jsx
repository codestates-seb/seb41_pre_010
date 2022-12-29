import React from "react";
import { TiArrowSortedUp, TiArrowSortedDown, TiBookmark } from "react-icons/ti";
import {
  answerUpVoteRequest,
  answerDownVoteRequest,
} from "../../../API/Question/Vote";
import { answerBookMark } from "../../../API/Question/BookMark.js";

export default function AnswerBodyAside({ el, index }) {
  return (
    <aside className="Main_Text_Aside">
      <div className="Vote_Icon_Container">
        <TiArrowSortedUp
          size={"35px"}
          color={el.voteUpCheck ? "rgb(224, 130, 37)" : "hsl(210,8%,85%)"}
          onClick={() => answerUpVoteRequest()} // 추후 파라미터 userId, questionId
        />
        <span>{el.vote}</span>
        <TiArrowSortedDown
          size={"35px"}
          color={el.voteDownCheck ? "rgb(224, 130, 37)" : "hsl(210,8%,85%)"}
          onClick={() => answerDownVoteRequest()} // 추후 파라미터 userId, questionId
        />
        <TiBookmark
          size={"30px"}
          color={
            el.bookMarkCheck ? "rgb(224, 130, 37)" : "hsl(210,8%,85%)"
          }
          onClick={() => answerBookMark()}//추후 파라미터 answerId, userId
        />
      </div>
    </aside>
  );
}
