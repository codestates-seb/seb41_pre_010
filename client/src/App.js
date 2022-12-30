import "./App.css";
import Header from "./Components/Header";
import Question from "./Pages/Question";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import MainPage from "./Pages/MainPage";
import Mypage from "./Pages/Mypage";
import MypageEdit from "./Pages/MypageEdit";
import EditPage from "./Pages/EditPage";
import AskPage from "./Pages/AskPage";
import Page404 from "./Pages/404Page";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { SessionProvider } from "./CustomHook/SessionProvider";
import SearchResultPage from "./Pages/SearchResultPage";
import AnswerEditPage from "./Pages/AnswerEditPage";
function App() {
  return (
    <>
      <SessionProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/question/:questionId" element={<Question />} />
            <Route path="/questions" element={<MainPage />} />
            <Route path="/users/signup" element={<SignUp />} />
            <Route path="/users/login" element={<Login />} />
            <Route path="/questions/:questionId/edit" element={<EditPage />} />
            <Route path={"/users/mypage/:userId"} element={<Mypage />} />
            <Route path={"/questions/ask"} element={<AskPage />} />;
            <Route path={"/questions/search"} element={<SearchResultPage />} />
            <Route
              path={"/users/mypage/edit/:userId"}
              element={<MypageEdit />}
            />
            <Route path={"/"} element={<MainPage />} />
            <Route path="*" element={<Page404 />} />
            <Route
              path="/answers/:answerId/edit"
              element={<AnswerEditPage />}
            />
          </Routes>
        </BrowserRouter>
        <Footer />
      </SessionProvider>
    </>
  );
}

export default App;
