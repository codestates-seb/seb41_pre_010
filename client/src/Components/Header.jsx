import "./Styles/Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <header className="MainHeader">
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
      <div className="MainHeader_Input_Container">
        <input
          className="MainHeader_Search_Input"
          aria-label="Search"
          placeholder="Search..."
        />
      </div>
      {isLogin ? (
        <div className="MainHeader_UserInfo_Container">user</div>
      ) : (
        <div className="MainHeader_Button_Container"></div>
      )}
    </header>
  );
};

export default Header;
