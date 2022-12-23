import "./Styles/Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { OrangeButton } from "./button";

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
          src={"image/logo-stackoverflow.png"}
          width={150}
          height={"auto"}
          alt="stackoverflow-logo"
        />
      </Link>
    </div>
  );
};

const SearchInput = () => {
  return (
    <div className="MainHeader_Input_Container">
      <input
        className="MainHeader_Search_Input"
        aria-label="Search"
        placeholder="Search..."
      />
    </div>
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

const LoggedOut = () => {
  return (
    <div className="MainHeader_Button_Container">
      <OrangeButton width="65px" height="40px">
        LogIn
      </OrangeButton>
      <OrangeButton width="65px" height="40px">
        SignUp
      </OrangeButton>
    </div>
  );
};

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <header className="MainHeader">
      <div className="MainHeader_Contents_Container">
        <Logo />
        <SearchInput />
        {isLogin ? <LoggedIn /> : <LoggedOut />}
      </div>
    </header>
  );
};

export default Header;
