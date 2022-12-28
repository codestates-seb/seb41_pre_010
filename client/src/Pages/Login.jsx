import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Styles/Login.css";

export default function Login() {
  return (
    <>
      <main>
        <div className="Login_Container">
          <Logo />
          <div className="Login_Content">
            <div>
              <div className="Email_Container">
                <span>이메일</span>
                <input></input>
              </div>
              <div className="Password_Container">
                <span>비밀번호</span>
                <input></input>
              </div>
            </div>
            <button className="Login_Button">Log In</button>
          </div>
          <MessageComponent />
        </div>
      </main>
    </>
  );
}

const Logo = () => {
  return (
    <div className="Login_Logo_Container">
      <Link to="/">
        <img
          src={"/image/stackoverflow_simple_icon.png"}
          width={"auto"}
          height={"auto"}
          alt="stackoverflow-logo"
        />
      </Link>
    </div>
  );
};

const MessageComponent = () => {
  return (
    <div className="Login_No_Account_Message_Container">
      <div className="No_Account_Message">계정이 없으신가요? </div>
      <div>
        <Link className="Login_Link" to={"/users/signup"}>
          회원가입
        </Link>
      </div>
    </div>
  );
};
