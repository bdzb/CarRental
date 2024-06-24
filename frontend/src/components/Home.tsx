import React from 'react'
import TopH from './TopH'
import MidH from './MidH'

const Home = () => {
  return (
    <div id='homeBody'>
      <div id="topHome"><TopH/></div>
      <div id="midHome"><MidH/></div>
      <div id="botHome"></div>
    </div>
  )
}

export default Home