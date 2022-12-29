import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../Components/Input";
import { BlueButton } from "../Components/Button";

import "./Styles/Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [password, setPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const isSubmit =
    emailMessage.length === 0 &&
    passwordMessage.length === 0 &&
    password.length !== 0 &&
    email.length !== 0;

  const onSubmit = (e) => {
    e.preventDefault();

    const url = "/api/v1/users/login";
    axios
      .post(url, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log("response:", res);
        if (res.status === 200) {
          navigate("/");
        }
      })
      .catch((e) => {
        if (e) {
          console.log(e);
        }
      });
  };

  return (
    <>
      <main>
        <div className="Login_Container">
          <Logo />
          <div className="Login_Content">
            <form onSubmit={onSubmit}>
              <EmailComponent
                setEmail={setEmail}
                setEmailMessage={setEmailMessage}
                emailMessage={emailMessage}
              />
              <PasswordComponent
                setPassword={setPassword}
                setPasswordMessage={setPasswordMessage}
                passwordMessage={passwordMessage}
              />
              <div className="Login_Button_Container">
                <BlueButton
                  type="submit"
                  onClick={onSubmit}
                  height="30"
                  className="Login_Button"
                  style={
                    isSubmit
                      ? {}
                      : {
                          pointerEvents: "none",
                          cursor: "default",
                          color: "lightgrey",
                        }
                  }
                  fontSize="16px"
                >
                  로그인
                </BlueButton>
              </div>
            </form>
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

const EmailComponent = ({ setEmail, setEmailMessage, emailMessage }) => {
  const onChangeEmail = (e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);
    if (emailCurrent.length === 0) setEmailMessage("이메일을 입력해주세요.");
    else {
      if (!emailRegex.test(emailCurrent)) {
        setEmailMessage("이메일 형식이 아닙니다.");
      } else {
        setEmailMessage("");
      }
    }
  };

  return (
    <div className="Login_Email_Container">
      <label htmlFor="Login_email" className="Login_Content_Title">
        이메일
      </label>
      <Input
        id="Login_email"
        type="text"
        aria-label="Email Input"
        className="Login_Content_Input"
        onChange={onChangeEmail}
      />
      <span className="Login_Message">{emailMessage}</span>
    </div>
  );
};

const PasswordComponent = ({
  setPassword,
  setPasswordMessage,
  passwordMessage,
}) => {
  const onChangePassword = (e) => {
    const passwordCurrent = e.target.value;

    setPassword(passwordCurrent);
    if (passwordCurrent.length === 0) {
      setPasswordMessage("비밀번호를 입력해주세요.");
    } else {
      setPasswordMessage("");
    }
  };

  return (
    <div className="Login_Password_Container">
      <label htmlFor="Login_Password" className="Login_Content_Title">
        비밀번호
      </label>
      <Input
        id="Login_Password"
        type="password"
        aria-label="Password Input"
        className="Login_Content_Input"
        onChange={onChangePassword}
      />
      <span className="Login_Message">{passwordMessage}</span>
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
