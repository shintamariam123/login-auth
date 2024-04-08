
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Authorization from './components/Authorization';
import HomePage from './components/HomePage';
import Testing from './components/Testing';


import { GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";
function App() {

  return (
  <>
  <Routes>
  <Route path='/' element={<Authorization/>}></Route>
  <Route path='/register' element={<Authorization insideRegister/>}></Route>
  <Route path='/home' element={<HomePage/>}></Route>
  <Route path='/test' element={<Testing/>}></Route>
  </Routes>
  </>
  )
}

export default App
