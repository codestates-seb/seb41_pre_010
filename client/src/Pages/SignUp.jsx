import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Input from "../Components/Input";
import { BlueButton } from "../Components/Button";
import "./Styles/SignUp.css";

const Logo = () => {
  return (
    <div className="SignUp_Logo_Container">
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

export default function SignUp() {
  const [passwordMessage, setPasswordMessage] = useState(
    "비밀번호는 최소 1개의 문자와 1개의 숫자를 포함하여 최소 8자이상이어야 합니다."
  );
  const [isPassword, setIsPassword] = useState(false);
  const [password, setPassword] = useState("");

  const onChangePassword = useCallback((e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        "비밀번호는 최소 1개의 문자와 1개의 숫자를 포함하여 최소 8자이상이어야 합니다."
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("");
      setIsPassword(true);
    }
  }, []);

  return (
    <>
      <main>
        <div className="SignUp_Container">
          <Logo />
          <div className="SignUp_Content">
            <form>
              <div className="SignUp_Display_Name_Container">
                <label
                  for="signup_display_name"
                  className="SignUp_Content_Title"
                >
                  닉네임
                </label>
                <Input
                  id="signup_display_name"
                  type="text"
                  className="SignUp_Content_Input"
                />
              </div>
              <div className="SignUp_Email_Container">
                <label className="SignUp_Content_Title">이메일</label>
                <Input type="text" className="SignUp_Content_Input" />
              </div>
              <div className="SignUp_Password_Container">
                <label className="SignUp_Content_Title">비밀번호</label>
                <Input
                  type="password"
                  className="SignUp_Content_Input"
                  onChange={onChangePassword}
                />
                <span className="SignUp_Password_Message">
                  {passwordMessage}
                </span>
              </div>
              <div className="SignUp_Button_Container">
                <BlueButton
                  className="SignUp_Button"
                  height="30"
                  fontSize="16px"
                >
                  Sign Up
                </BlueButton>
              </div>
            </form>
          </div>
          <div className="SignUp_Accout_Have_Message_Container">
            <span className="SignUp_Accout_Have_Message">
              이미 계정이 있으신가요?
            </span>
            <div>
              <Link className="SignUp_Link" to={"/users/login"}>
                로그인
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
