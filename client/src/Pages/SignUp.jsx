import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Input from "../Components/Input";
import { BlueButton } from "../Components/Button";
import "./Styles/SignUp.css";

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
          <div className="SignUp_Content">
            <div>
              <div className="SignUp_Display_Name_Container">
                <label
                  for="signup_display_name"
                  className="SignUp_Display_Name"
                >
                  닉네임
                </label>
                <Input
                  id="signup_display_name"
                  type="text"
                  className="SignUp_Display_Input"
                />
              </div>
              <div className="SignUp_Email_Container">
                <span>이메일</span>
                <Input type="text" className="SignUp_Email_Input" />
              </div>
              <div className="SignUp_Password_Container">
                <span>비밀번호</span>
                <Input
                  type="password"
                  className="SignUp_Password_Input "
                  onChange={onChangePassword}
                />
                <span className="SignUp_Password_Message">
                  {passwordMessage}
                </span>
              </div>
              <div className="SignUp_Button_Container">
                <BlueButton className="SignUp_Button" height="30">
                  Sign Up
                </BlueButton>
              </div>
            </div>
          </div>
          <span className="SignUp_Accout_Have_Message">
            이미 계정이 있으신가요?
            <Link to={"/users/login"}>Log in</Link>
          </span>
        </div>
      </main>
    </>
  );
}
