import "./App.css";
import Header from "./Components/Header";
import Question from "./Pages/Question";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import MainPage from "./Pages/MainPage";
import Mypage from "./Pages/Mypage";
import MypageEdit from "./Pages/MypageEdit";
import EditPage from "./Pages/EditPage";
import Page404 from "./Pages/404Page";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/question/:questionId" element={<Question />} />
          <Route path="/questions" element={<MainPage />} />
          <Route path="/users/signup" element={<SignUp />} />
          <Route path="/users/islogin" element={<Login />} />
          <Route path="/questions/:questionId/edit" element={<EditPage />} />
          <Route path={"/users/mypage/:userId"} element={<Mypage />} />
          <Route path={"/users/mypage/edit/:userId"} element={<MypageEdit />} />
          <Route path={"/search"} element={<></>} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
