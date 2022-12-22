import './App.css';
import SignUp from './Pages/SignUp';
import { BrowserRouter, Route, Routes , Link } from 'react-router-dom';

function App() {
  return (<BrowserRouter>
  <Routes>
    <Route path='/users/signup' element={<SignUp/>}/>
  </Routes>
  </BrowserRouter>)
}

export default App;