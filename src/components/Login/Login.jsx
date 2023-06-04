import React from 'react'
import './Login.scss'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='Login'>
      <div className="container">
        <h2 className='Login__title1'>Hello there!</h2>
        <p className='Login__title2'>Please sign in or create account to continue</p>
        <div className="Login__right__left">
          <div className="Login__left">
            <h3 className='Login__left__title1'>SIGN IN</h3>
            <p className='Login__left__title2'>Email</p>
            <input className='Login__left__inp' type="email" />
            <p className='Login__left__title3'>Password</p>
            <input className='Login__left__inp' type="password" /><br /><br />
            <input className='Login__left__inp__check' type="checkbox" />Remeber my details <br /><br />
            <button className='Login__left__btn'>SIGN IN</button><br /><br />
            <Link className='Login__left__link'>Forgot password?</Link>
          </div>
          <div className="Login__right">
            <h3 className='Login__right__title1'>CREATE ACCOUNT</h3>
            <p className='Login__right__title2'>First name</p>
            <input className='Login__right__inp' type="text" />
            <p className='Login__right__title3'>Last name</p>
            <input className='Login__right__inp' type="text" />
            <p className='Login__right__title4'>Email</p>
            <input className='Login__right__inp' type="email" />
            <p className='Login__right__title5'>Create Password</p>
            <input className='Login__right__inp' type="password" />
            <p className='Login__right__title6'>Confirm Password</p>
            <input className='Login__right__inp' type="password" /><br /><br />
            <input className='Login__right__inp__check' type="checkbox" />
            <i>I want to receive Safari newsletters with the best deals 
            <br /> <span className='Login__right__title7'>and offers </span></i>
            <br /><br />
            <button className='Login__right__btn'>CREATE ACCOUNT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login