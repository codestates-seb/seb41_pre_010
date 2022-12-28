import React from "react";
import { BlueButton } from "../Components/Button";
import "./Styles/404Page.css";

function Page404() {
  return (
    <div className="NotFound_Container">
      <img
        src="/image/404-error.png"
        alt="404"
        className="NotFound_Image"
      ></img>
      <div className="NotFound_Description">
        <div className="NotFound_Title">404 Not Found!</div>
        <BlueButton
          width="150px"
          height="60px"
          fontSize="1.4rem"
          className="NotFound_Home_Button"
          href="/questions"
        >
          홈으로 가기
        </BlueButton>
      </div>
    </div>
  );
}

export default Page404;
