import "./Styles/Header.css";
import { useState } from "react";
const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <header className="MainHeader">
      <div className="MainHeader_Logo_Container"></div>
      <div className="MainHeader_Input_Container"> </div>
      {isLogin ? (
        <div className="MainHeader_UserInfo_Container">user</div>
      ) : (
        <div className="MainHeader_Button_Container"></div>
      )}
    </header>
  );
};

export default Header;
