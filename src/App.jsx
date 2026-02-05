import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from './login';
import Register from './Register'
import Homepage from './Homepage';

function App() {

  return (
    <>
    {/* <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter> */}
    <Homepage/>
    </>
  )
}

export default App
