import React from 'react'
import './Login.scss'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Login() {
  return (
    <div className='container'>
    <Header/>
    <div className='Login'>
      <div className="container">
        <h1 className='Login__title1'>Hello there!</h1>
        <p className='Login__title2'>Please sign in or create account to continue</p>
        <div className="Login__right__left">
          <div className="Login__left">
            <h3 className='Login__left__title1'>SIGN IN</h3>
            <p className='Login__left__title2'>Email</p>
            <input className='Login__left__inp' type="email" />
            <p className='Login__left__title3'>Password</p>
            <input className='Login__left__inp' type="password" /><br /><br />
            <label for="check1">
            <input type="checkbox" id='check1' />
            Remeber my details
        </label> <br /><br />
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
            <label for="check2">
            <input type="checkbox" id='check2' />
            I want to receive Safari newsletters with the best deals 
            <br /> <span className='Login__right__title7'>and offers </span>
            </label>
            <br /><br />
            <button className='Login__right__btn'>CREATE ACCOUNT</button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Login