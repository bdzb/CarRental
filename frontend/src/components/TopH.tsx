import React from 'react'
import Navbar from './Navbar'
import img from '../assets/car1.png'
import './TopH.css'
const TopH = () => {
  return (
    <>
    <div id="tbody">
      <div id="navTop"><Navbar/></div>
      <div id="contentsTop">
        <div id="leftContentTop" className='leftWidthTop'>
          <p className='top'>Buy, sell & rent </p>
          <p className='bottom'>reputable cars</p>
          <p id='slogan'>Buy, sell & rent reputable cars . Renting is easy and fast with CarHub</p>
        
        <ul id='numbersTop' >
          <div id='li-r-border' >
          <li>
          100+
          </li>
        
          <li>
            Car Brands
          </li>
          </div>
          
          <div className='widthTopNumbers'>
          <li>100K+</li>
          <li>Clients</li>
          </div>
        </ul>
        </div>
        <div id="rightContentTop">
          <img src={img} alt=""  id='carHome'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default TopH