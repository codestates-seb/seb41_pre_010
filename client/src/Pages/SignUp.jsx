import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../Components/Input";
import { BlueButton } from "../Components/Button";
import "./Styles/SignUp.css";
import CustomTitle from "../Components/CustomTitle";
import { useSession } from "../CustomHook/SessionProvider";

export default function SignUp() {
  const navigate = useNavigate();
  const { loading, session } = useSession();
  const [displayName, setDisplayName] = useState("");
  const [nameMessage, setNameMessage] = useState("닉네임을 입력해주세요");
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("이메일을 입력해주세요");
  const [password, setPassword] = useState("");
  const [passwordMessage, setPasswordMessage] =
    useState("비밀번호를 입력해주세요.");

  const isSubmit =
    emailMessage.length === 0 &&
    passwordMessage.length === 0 &&
    password.length !== 0 &&
    email.length !== 0 &&
    displayName.length !== 0;

  const signUpUrl = "/api/v1/users/signup";
  const onSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(signUpUrl, {
        displayName: displayName,
        password: password,
        email: email,
      })
      .then((res) => {
        const loginUrl = "/api/v1/users/login";
        axios
          .post(
            loginUrl,
            {
              email: email,
              password: password,
            },
            { withCredentials: true }
          )
          .then(() => {
            navigate("/");
            window.location.reload();
          })
          .catch((e) => {
            console.log(e);
            window.location.reload();
          });
      })
      .catch((e) => {
        console.log(e);
        if (e) {
          setEmail("");
          setEmailMessage("중복된 이메일 주소입니다.");
        }
      });
  };
  if (loading) return;
  if (session) return navigate("/");
  return (
    <>
      <CustomTitle
        title={"회원가입 - Stack Overflow"}
        description="회원가입 페이지입니다."
      />
      <main>
        <div className="SignUp_Container">
          <Logo />
          <div className="SignUp_Content">
            <form onSubmit={onSubmit}>
              <DisplayNameComponent
                setName={setDisplayName}
                setNameMessage={setNameMessage}
                nameMessage={nameMessage}
              />
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
              <div className="SignUp_Button_Container">
                <BlueButton
                  type="submit"
                  onClick={onSubmit}
                  className="SignUp_Button"
                  height="30"
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

const DisplayNameComponent = ({ setName, setNameMessage, nameMessage }) => {
  const onChangeName = (e) => {
    const nameCurrent = e.target.value;
    setName(nameCurrent);
    if (nameCurrent.length !== 0) setNameMessage("");
    else {
      setNameMessage("닉네임을 입력해주세요");
    }
  };

  return (
    <div className="SignUp_Display_Name_Container">
      <label htmlFor="SignUp_DisplayName" className="SignUp_Content_Title">
        닉네임
      </label>
      <Input
        id="SignUp_DisplayName"
        type="text"
        aria-label="Name Input"
        className="SignUp_Content_Input"
        onChange={onChangeName}
      />
      <span className="SignUp_Message">{nameMessage}</span>
    </div>
  );
};

const EmailComponent = ({ setEmail, setEmailMessage, emailMessage }) => {
  const onChangeEmail = (e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);
    if (emailCurrent.length === 0) setEmailMessage("이메일을 입력해주세요");
    else {
      if (!emailRegex.test(emailCurrent)) {
        setEmailMessage("이메일 형식이 아닙니다.");
      } else {
        setEmailMessage("");
      }
    }
  };

  return (
    <div className="SignUp_Email_Container">
      <label htmlFor="SignUp_email" className="SignUp_Content_Title">
        이메일
      </label>
      <Input
        id="SignUp_email"
        type="text"
        aria-label="Email Input"
        className="SignUp_Content_Input"
        onChange={onChangeEmail}
      />
      <span className="SignUp_Message">{emailMessage}</span>
    </div>
  );
};

const PasswordComponent = ({
  setPassword,
  setPasswordMessage,
  passwordMessage,
}) => {
  const onChangePassword = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;

    setPassword(passwordCurrent);
    if (passwordCurrent.length === 0) {
      setPasswordMessage("비밀번호를 입력해주세요.");
    } else {
      if (!passwordRegex.test(passwordCurrent)) {
        setPasswordMessage(
          "비밀번호는 최소 1개의 문자와 1개의 숫자를 포함하여 최소 8자이상이어야 합니다."
        );
      } else {
        setPasswordMessage("");
      }
    }
  };

  return (
    <div className="SignUp_Password_Container">
      <label htmlFor="SignUp_Password" className="SignUp_Content_Title">
        비밀번호
      </label>
      <Input
        id="SignUp_Password"
        type="password"
        aria-label="Password Input"
        className="SignUp_Content_Input"
        onChange={onChangePassword}
      />
      <span className="SignUp_Message">{passwordMessage}</span>
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
