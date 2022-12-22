import './App.css';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import { BrowserRouter, Route, Routes , Link } from 'react-router-dom';

function App() {
  return (<BrowserRouter>
  <Routes>
    <Route path='/users/signup' element={<SignUp/>}/>
    <Route path='/users/islogin' element={<Login/>}/>
  </Routes>
  </BrowserRouter>)
}

export default App;