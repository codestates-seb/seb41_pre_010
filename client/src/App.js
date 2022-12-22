import './App.css';
import { BrowserRouter, Route, Routes , Link } from 'react-router-dom';
import Mypage from './Pages/Mypage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/users/mypage"} element={<Mypage/> } />
      </Routes>
      </BrowserRouter>

  )
}

export default App;