import { useState, useCallback } from "react";
import { Link, useNavigate, redirect } from "react-router-dom";
import axios from "axios";
import Input from "../Components/Input";
import { BlueButton } from "../Components/Button";
import "./Styles/SignUp.css";

export default function SignUp() {
  const url = "http://localhost:8080/api/v1/users/signup";
  const navigate = useNavigate();
  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      navigate(-1);
      // await axios
      //   .post(url, {
      //     username: name,
      //     password: password,
      //     email: email,
      //   })
      //   .then((res) => {
      //     console.log("response:", res);
      //     if (res.status === 200) {
      //     }
      //   }).catch((e)=>if(e) return redirect("/users/signup"))
    },
    [navigate]
  );

  return (
    <>
      <main>
        <div className="SignUp_Container">
          <Logo />
          <div className="SignUp_Content">
            <form onSubmit={onSubmit}>
              <NickNameComponent />
              <EmailComponent />
              <PasswordComponent />
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
          <MessageComponent />
        </div>
      </main>
    </>
  );
}

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

const NickNameComponent = () => {
  return (
    <div className="SignUp_Display_Name_Container">
      <label for="SignUp_DisplayName" className="SignUp_Content_Title">
        닉네임
      </label>
      <Input
        id="SignUp_DisplayName"
        type="text"
        className="SignUp_Content_Input"
      />
    </div>
  );
};

const EmailComponent = () => {
  return (
    <div className="SignUp_Email_Container">
      <label for="SignUp_email" className="SignUp_Content_Title">
        이메일
      </label>
      <Input id="SignUp_email" type="text" className="SignUp_Content_Input" />
    </div>
  );
};

const PasswordComponent = () => {
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
    <div className="SignUp_Password_Container">
      <label for="SignUp_Password" className="SignUp_Content_Title">
        비밀번호
      </label>
      <Input
        id="SignUp_Password"
        type="password"
        className="SignUp_Content_Input"
        onChange={onChangePassword}
      />
      <span className="SignUp_Password_Message">{passwordMessage}</span>
    </div>
  );
};

const MessageComponent = () => {
  return (
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
  );
};
