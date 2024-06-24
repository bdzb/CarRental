import Home from './components/Home'
import './App.css'
import Navbar from './components/Navbar';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
    
          <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
     
   
  

     
    </>
  )
}

export default App
