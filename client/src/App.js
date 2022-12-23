import "./App.css";
import Question from "./Pages/Question";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import MainPage from "./Pages/MainPage";
import Mypage from "./Pages/Mypage";
import MypageEdit from "./Pages/MypageEdit";
import EditPage from "./Pages/EditPage";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/question/:questionId" element={<Question />} />
          <Route path="/questions" element={<MainPage />} />
          <Route path="/users/signup" element={<SignUp />} />
          <Route path="/users/islogin" element={<Login />} />
          <Route path="/questions/:questionId/edit" element={<EditPage />} />
          <Route path={"/users/mypage/:userId"} element={<Mypage />} />
          <Route path={"/users/mypage/edit/:userId"} element={<MypageEdit />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
