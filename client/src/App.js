import "./App.css";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import MainPage from "./Pages/MainPage";
import Mypage from "./Pages/Mypage";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import EditPage from "./Pages/EditPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/questions" element={<MainPage />} />
        <Route path="/users/signup" element={<SignUp />} />
        <Route path="/users/islogin" element={<Login />} />
        <Route path="/questions/:questionId/edit" element={<EditPage />} />
        <Route path={"/users/mypage"} element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
