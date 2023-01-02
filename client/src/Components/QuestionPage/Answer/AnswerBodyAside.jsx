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

  const [bookMarkCheck, setBookMarkCheck] = useState(el.bookMarkCheck);
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
              upVoteHandler();
              answerUpVoteRequest(el.user.userId, questionData.questionId);
            }}
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
            color={
              voteCheck === "down" ? "rgb(224, 130, 37)" : "hsl(210,8%,85%)"
            }
            onClick={() => {
              answerDownVoteRequest(el.user.userId, questionData.questionId);
              downVoteHandler();
            }}
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
              answerBookMark(el.answerId, el.user.userId);
              setBookMarkCheck(!bookMarkCheck);
            }}
          />
        ) : (
          <TiBookmark size={"30px"} color="hsl(210,8%,85%)" />
        )}
      </div>
    </aside>
  );
}
