import "./App.css";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import MainPage from "./Pages/MainPage";
import Mypage from "./Pages/Mypage";
import MypageEdit from "./Pages/MypageEdit";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/questions" element={<MainPage />} />
        <Route path="/users/signup" element={<SignUp />} />
        <Route path="/users/islogin" element={<Login />} />
        <Route path={"/users/mypage/:userId"} element={<Mypage />} />
        <Route path={"/users/mypage/edit/:userId"} element={<MypageEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
