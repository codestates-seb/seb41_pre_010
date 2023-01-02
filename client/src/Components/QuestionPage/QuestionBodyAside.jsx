import React, { useEffect, useState } from "react";
import { TiArrowSortedUp, TiArrowSortedDown, TiBookmark } from "react-icons/ti";
import {
  questionUpVoteRequest,
  questionDownVoteRequest,
} from "../../API/Question/Vote";
import { questionBookMark } from "../../API/Question/BookMark";

export default function QuestionBodyAside({ questionData, loading, session }) {
  const [bookMarkCheck, setBookMarkCheck] = useState(
    questionData && questionData.bookMarkCheck
  );

  const [voteCheck, setVoteCheck] = useState("default");

  const upVoteHandler = () => {
    switch (voteCheck) {
      case "default":
      case "down":
        setVoteCheck("up");
        break;
      case "up":
        setVoteCheck("default");
    }
  };

  const downVoteHandler = () => {
    switch (voteCheck) {
      case "default":
      case "up":
        setVoteCheck("down");
        break;
      case "down":
        setVoteCheck("default");
    }
  };

  return (
    <aside className="Main_Text_Aside">
      <div className="Vote_Icon_Container">
        {loading ? (
          <div></div>
        ) : session ? (
          <TiArrowSortedUp
            size={"35px"}
            color={voteCheck === "up" ? "rgb(224, 130, 37)" : "hsl(210,8%,85%)"}
            onClick={() => {
              questionUpVoteRequest(
                session && session.userId,
                questionData && questionData.questionId
              );

              upVoteHandler();
            }}
          />
        ) : (
          <TiArrowSortedUp size={"35px"} color="hsl(210,8%,85%)" />
        )}
        <span>{questionData && questionData.vote}</span>
        {loading ? (
          <div></div>
        ) : session ? (
          <TiArrowSortedDown
            size={"35px"}
            color={
              voteCheck === "down" ? "rgb(224, 130, 37)" : "hsl(210,8%,85%)"
            }
            onClick={() => {
              questionDownVoteRequest(
                session && session.userId,
                questionData && questionData.questionId
              );
              // setVoteDown(!voteDown);
              // onClickDownVote();
              downVoteHandler();
            }}
          />
        ) : (
          <TiArrowSortedDown size={"35px"} color="hsl(210,8%,85%)" />
        )}
        {loading ? (
          <div></div>
        ) : session ? (
          <TiBookmark
            size={"30px"}
            color={bookMarkCheck ? "rgb(224, 130, 37)" : "hsl(210,8%,85%)"}
            onClick={() => {
              questionBookMark(
                questionData && questionData.questionId,
                session && session.userId
              );
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
