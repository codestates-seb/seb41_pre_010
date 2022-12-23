import "./Styles/Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const dummyDataProfile = {
  userId: 0,
  profileImage:
    "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg",
  displayName: " 안녕하세요 테스트입니다",
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
  return <div className="MainHeader_UserInfo_Container">user</div>;
};

const LoggedOut = () => {
  return <div className="MainHeader_Button_Container"></div>;
};

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <header className="MainHeader">
      <Logo />
      <SearchInput />
      {isLogin ? <LoggedIn /> : <LoggedOut />}
    </header>
  );
};

export default Header;
