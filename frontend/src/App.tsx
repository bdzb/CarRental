import Home from './components/Home'
import './App.css'
import Navbar from './components/Navbar';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Car from './Car';
import Sign from './components/SignUp';
function App() {

  return (
    <>
    
          <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/car' element={<Car/>}></Route>
        <Route path='/signUp' element={<Sign/>}></Route>
      </Routes>
    </BrowserRouter>
     
   
  

     
    </>
  )
}

export default App
