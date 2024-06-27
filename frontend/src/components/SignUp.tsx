import React from 'react'
import './SignUp.css'
const SignUp = () => {
  return (
    <div id='SignUpBody'>
      <div id="left"></div>
      <div id="right">
        <div id="SignUpBox">
          <h1></h1>
          <p></p>
          <div className="lineSignup">
            <label htmlFor="">
              <input type="text" placeholder='Suyash'/>
            </label>
            <label htmlFor="">
              <input type="text" placeholder='Shukla' />
            </label>
            
          </div>

          <div className="lineSignup">
            <label htmlFor="">
              <input type="text" placeholder='XXX-XX-XXXX-XXX'/>
            </label>
            <label htmlFor="">
              <input type="text" placeholder='example@gmail.com' />
            </label>
            
          </div>

          <div className="lineSignup">
            <label htmlFor="">
              <input type="text" placeholder='Enter your password'/>
            </label>
            <label htmlFor="">
              <input type="text" placeholder='Enter your password' />
            </label>
            
          </div>


        </div>
      </div>
    </div>
  )
}

export default SignUp