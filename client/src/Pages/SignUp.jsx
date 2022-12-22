import React from "react";
import "./Styles/SignUp.css";

export default function SignUp() {
  return (
    <>
      <header className="Header"></header>
      <main>
        <div className="SignUp_Container">
          <div className="SignUp_Content">
            <div className="User_Info_Enter_Container">
              <div>
                <div className="Display_Name_Container">
                  <span>닉네임</span>
                  <input></input>
                </div>
                <div className="Email_Container">
                  <span>이메일</span>
                  <input></input>
                </div>
                <div className="Password_Container">
                  <span>비밀번호</span>
                  <input></input>
                  <span>
                    비밀번호는 최소 1개의 문자와 1개의 숫자를 포함하여 최소 8자
                    이상이어야 합니다.
                  </span>
                </div>
              </div>
              <button className="SignUp_Button">Sign Up</button>
            </div>
          </div>
          <span className="Accout_Have_Message">
            이미 계정이 있으신가요? Log in
          </span>
        </div>
      </main>
      <footer className="Footer"></footer>
    </>
  );
}
