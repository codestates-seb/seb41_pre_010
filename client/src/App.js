import './App.css';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Question from './Pages/Question';
import { BrowserRouter, Route, Routes , Link } from 'react-router-dom';

function App() {
  return (<BrowserRouter>
  <Routes>
    <Route path='/users/signup' element={<SignUp/>}/>
    <Route path='/users/islogin' element={<Login/>}/>
    <Route path='/question' element={<Question/>}/>
  </Routes>
  </BrowserRouter>)
}

export default App;