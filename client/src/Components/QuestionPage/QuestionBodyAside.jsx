import React, { useEffect, useState } from "react";
import { TiArrowSortedUp, TiArrowSortedDown, TiBookmark } from "react-icons/ti";
import {
  questionUpVoteRequest,
  questionDownVoteRequest,
} from "../../API/Question/Vote";
import { questionBookMark } from "../../API/Question/BookMark";

export default function QuestionBodyAside({ filterData, loading, session }) {
  const [voteUp, setVoteUp] = useState(filterData[0].voteUpCheck);
  const [voteDown, setVoteDown] = useState(filterData[0].voteDownCheck);
  const [bookMarkCheck, setBookMarkCheck] = useState(
    filterData[0].bookMarkCheck
  );
  
  return (
    <aside className="Main_Text_Aside">
      <div className="Vote_Icon_Container">
        <TiArrowSortedUp
          size={"35px"}
          color={
            filterData[0].voteUpCheck ? "rgb(224, 130, 37)" : "hsl(210,8%,85%)"
          }
          onClick={() => {
            questionUpVoteRequest();
            setVoteUp(!voteUp);
          }} // 추후 파라미터 session.userId, questionId
        />
        <span>{filterData[0].vote}</span>
        <TiArrowSortedDown
          size={"35px"}
          color={
            filterData[0].voteDownCheck
              ? "rgb(224, 130, 37)"
              : "hsl(210,8%,85%)"
          }
          onClick={() => {
            setVoteDown(!voteDown);
            questionDownVoteRequest();
          }} // 추후 파라미터 session.userId, questionId
        />
        <TiBookmark
          size={"30px"}
          color={
            filterData[0].bookMarkCheck
              ? "rgb(224, 130, 37)"
              : "hsl(210,8%,85%)"
          }
          onClick={() => {
            questionBookMark();
            setBookMarkCheck(!bookMarkCheck)
          }}
        />
      </div>
    </aside>
  );
}
