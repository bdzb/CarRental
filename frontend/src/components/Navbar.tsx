import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div id="box">
      
    <ul id="head">
    <li  ><p id="logo">CARHUB</p>
    </li>
    <li className='navi'>Home</li>
    <li className='navi'>Rent Car</li>
    <li className='navi'>Sell Car</li>
    <li className='navi'>Buy Car</li>

<li> <button id='sign'>Sign In</button></li> 
   </ul>
  
</div>
  )
}

export default Navbar