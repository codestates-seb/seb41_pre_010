import React from "react";
import { TiArrowSortedUp, TiArrowSortedDown, TiBookmark } from "react-icons/ti";
import {
  questionUpVoteRequest,
  questionDownVoteRequest,
} from "../../API/Question/Vote";

export default function QuestionBodyAside({ filterData }) {
  return (
    <aside className="Main_Text_Aside">
      <div className="Vote_Icon_Container">
        <TiArrowSortedUp
          size={"35px"}
          color={
            filterData[0].voteUpCheck ? "rgb(224, 130, 37)" : "hsl(210,8%,85%)"
          }
          onClick={() => questionUpVoteRequest()} // 추후 파라미터 userId, questionId
        />
        <span>{filterData[0].vote}</span>
        <TiArrowSortedDown
          size={"35px"}
          color={
            filterData[0].voteDownCheck
              ? "rgb(224, 130, 37)"
              : "hsl(210,8%,85%)"
          }
          onClick={() => questionDownVoteRequest()} // 추후 파라미터 userId, questionId
        />
        <TiBookmark
          size={"30px"}
          color={
            filterData[0].bookMarkCheck
              ? "rgb(224, 130, 37)"
              : "hsl(210,8%,85%)"
          }
        />
      </div>
    </aside>
  );
}
