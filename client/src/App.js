import "./App.css";
import Question from "./Pages/Question";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import MainPage from "./Pages/MainPage";
import Mypage from "./Pages/Mypage";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/question" element={<Question />} />
        <Route path="/questions" element={<MainPage />} />
        <Route path="/users/signup" element={<SignUp />} />
        <Route path="/users/islogin" element={<Login />} />
        <Route path={"/users/mypage"} element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
