import "./Styles/Header.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { OrangeButton } from "./Button";

const dummyDataProfile = {
  userId: 0,
  profileImage:
    "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg",
  displayName: "테스트닉네임",
};

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
      action={"/search"}
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

const LoggedIn = () => {
  return (
    <div className="MainHeader_UserInfo_Container">
      <div className="MainHeader_UserInfo_Profile">
        <Link to={`/users/mypage/${dummyDataProfile.userId}`}>
          <img
            className="MainHeader_UserProfileImage"
            src={dummyDataProfile.profileImage}
            alt="profileImage"
            width={40}
            height={40}
          />
        </Link>
        <span className="MainHeader_UserInfo_DisplayName">
          <Link to={`/users/mypage/${dummyDataProfile.userId}`}>
            {dummyDataProfile.displayName.length >= 7
              ? dummyDataProfile.displayName.substr(0, 7) + "..."
              : dummyDataProfile.displayName}
            님
          </Link>
        </span>
      </div>
      <OrangeButton width="65px" height="40px">
        Logout
      </OrangeButton>
    </div>
  );
};

const LoginRequired = ({ navigate }) => {
  return (
    <div className="MainHeader_Button_Container">
      <OrangeButton
        width="70px"
        height="40px"
        onClick={() => navigate("/users/login")}
      >
        LogIn
      </OrangeButton>
      <OrangeButton
        width="70px"
        height="40px"
        onClick={() => navigate("/users/signup")}
      >
        SignUp
      </OrangeButton>
    </div>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  return (
    <header className="MainHeader">
      <div className="MainHeader_Container">
        <div className="MainHeader_Contents_Container">
          <Logo />
          <SearchInput navigate={navigate} />
          {isLogin ? <LoggedIn /> : <LoginRequired navigate={navigate} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
