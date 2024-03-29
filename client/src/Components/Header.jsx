import "./Styles/Header.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { OrangeButton } from "./Button";
import { useSession } from "../CustomHook/SessionProvider";
import useImage from "../CustomHook/useImage";
import axios from "axios";

const Logo = () => {
  return (
    <div className="MainHeader_Logo_Container">
      <Link to="/">
        <img
          src={"/image/logo-stackoverflow.png"}
          width={150}
          height={30}
          alt="stackoverflow-logo"
        />
      </Link>
    </div>
  );
};

const SearchInput = ({ navigate }) => {
  const [text, setText] = useState("");

  return (
    <form
      className="MainHeader_Input_Container"
      action={"/questions/search"}
      role="search"
      method="GET"
    >
      <input
        type="text"
        className="MainHeader_Search_Input"
        aria-label="Search"
        placeholder="Search..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input type="hidden" name="q" value={text} />
    </form>
  );
};

const LoggedIn = ({ session, navigate }) => {
  const { image } = useImage(session.profileImage);
  return (
    <div className="MainHeader_UserInfo_Container">
      <div className="MainHeader_UserInfo_Profile">
        <Link to={`/users/mypage/${session.userId}`}>
          <img
            className="MainHeader_UserProfileImage"
            src={image}
            alt="profileImage"
            width={40}
            height={40}
          />
        </Link>
        <span className="MainHeader_UserInfo_DisplayName">
          <Link to={`/users/mypage/${session.userId}`}>
            {session.displayName.length >= 7
              ? session.displayName.substr(0, 7) + "..."
              : session.displayName}
            님
          </Link>
        </span>
      </div>
      <OrangeButton
        width="70px"
        height="38px"
        onClick={async () => {
          const url = "/api/v1/users/logout";
          axios
            .post(url, {
              headers: {
                withCredentials: true,
              },
            })
            .then((data) => {
              navigate("/");
              window.location.reload();
            })
            .catch((e) => {
              console.log(e);
            });
        }}
      >
        로그아웃
      </OrangeButton>
    </div>
  );
};

const LoginRequired = ({ navigate }) => {
  return (
    <div className="MainHeader_Button_Container">
      <OrangeButton
        width="70px"
        height="38px"
        onClick={() => navigate("/users/login")}
        className="MainHeader_Button"
      >
        로그인
      </OrangeButton>
      <OrangeButton
        width="70px"
        height="38px"
        onClick={() => navigate("/users/signup")}
        className="MainHeader_Button"
      >
        회원가입
      </OrangeButton>
    </div>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const { loading, session } = useSession();
  return (
    <header className="MainHeader">
      <div className="MainHeader_Container">
        <div className="MainHeader_Contents_Container">
          <Logo />
          <SearchInput navigate={navigate} />
          {loading ? (
            <div className="MainHeader_Empty_Container"></div>
          ) : session ? (
            <LoggedIn session={session} navigate={navigate} />
          ) : (
            <LoginRequired navigate={navigate} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
