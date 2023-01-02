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
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SearchResultPage from "./Pages/SearchResultPage";
import AnswerEditPage from "./Pages/AnswerEditPage";
import React, { useState } from "react";
import useQuestionsLoad from "./CustomHook/useQuestionsLoad";
import { useSession } from "./CustomHook/SessionProvider";

function App() {
  const [curPage, setCurPage] = useState(1);
  const [curPerPage, setCurPerPage] = useState(15);
  const [curTab, setCurTab] = useState("newest");
  const [questionId, setQuestionId] = useState(null);

  const { questionsList, totalPages, totalQuestions } = useQuestionsLoad(
    curTab,
    curPage,
    curPerPage
  );

  const { session, loading } = useSession();
  if (loading) return;

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/questions/:questionId"
            element={<Question/>}
          />
          <Route
            path="/questions"
            element={
              <MainPage
                curPage={curPage}
                setCurPage={setCurPage}
                curPerPage={curPerPage}
                setCurPerPage={setCurPerPage}
                curTab={curTab}
                setCurTab={setCurTab}
                questionsList={questionsList}
                totalPages={totalPages}
                totalQuestions={totalQuestions}
                setQuestionId={setQuestionId}
              />
            }
          />
          <Route path="/users/signup" element={<SignUp />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/questions/:questionId/edit" element={<EditPage />} />
          <Route path={"/users/mypage/:userId"} element={<Mypage />} />
          <Route path={"/questions/ask"} element={<AskPage />} />;
          <Route path={"/questions/search"} element={<SearchResultPage />} />
          <Route path={"/users/mypage/edit/:userId"} element={<MypageEdit />} />
          <Route
            path={"/"}
            element={
              <Navigate to={session ? "/questions" : "/users/login"} replace />
            }
          />
          <Route path="*" element={<Page404 />} />
          <Route path="/answers/:answerId/edit" element={<AnswerEditPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
