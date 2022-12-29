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
        {loading ? (
          <div>로딩중 입니다...</div>
        ) : session ? (
          <TiArrowSortedUp
            size={"35px"}
            color={
              filterData[0].voteUpCheck
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
        <span>{filterData[0].vote}</span>
        {loading ? (
          <div>로딩중 입니다...</div>
        ) : session ? (
          <TiArrowSortedDown
            size={"35px"}
            color={
              filterData[0].voteDownCheck
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
          <div>로딩중 입니다...</div>
        ) : session ? (
          <TiBookmark
            size={"30px"}
            color={
              filterData[0].bookMarkCheck
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
