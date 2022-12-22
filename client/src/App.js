import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/questions" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
