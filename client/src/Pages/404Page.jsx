import React from "react";
import { BlueButton, BlueWhiteButton } from "../Components/Button";
import CustomTitle from "../Components/CustomTitle";

import "./Styles/404Page.css";

function Page404() {
  return (
    <>
      <CustomTitle
        title="Page not found"
        description={"페이지를 찾을수없습니다."}
      />
      <div className="NotFound_Container">
        <img
          src="/image/404-error.png"
          alt="404"
          className="NotFound_Image"
        ></img>
        <div className="NotFound_Description">
          <div className="NotFound_Title">404 Not Found!</div>
          <div className="NotFound_Buttons">
            <BlueButton
              width="150px"
              height="60px"
              fontSize="1.4rem"
              className="NotFound_Home_Button"
              href="/questions"
            >
              홈으로
            </BlueButton>
            <BlueWhiteButton
              width="150px"
              height="60px"
              fontSize="1.4rem"
              className="NotFound_Home_Button"
              onClick={() => window.history.back()}
            >
              이전 페이지로
            </BlueWhiteButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page404;
