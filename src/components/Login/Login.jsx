import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import './Login.scss'

function Login() {
  return (
    <div className='login'>
      <div className="container">
        
      <Header/>
<div className="login__wrapper">
<div className="in__wrapper">
<h1>
      Hello there!
      </h1>
      <p>
      Please sign in or create account to continue
      </p>
      <h2>
      SIGN IN
      </h2>
      <label htmlFor="">Email</label> <br />
      <input className='input it' type="text" name="" id="" /> <br />
      <label className='label' htmlFor="">Password</label> <br />
      <input className='input'  type="password" name="" id="" /><br />
      <input className='check' type="checkbox" name="" id="" />
      <label className='check__item' htmlFor="">Remeber my details</label><br />
      <button className='login__btn'>SIGN IN</button> <br />
      <Link>Forgot password?</Link>
</div>
<div className="up__wrapper">
  <h1>
  CREATE ACCOUNT
  </h1>
  <label className='label' htmlFor="">First name</label><br />
  <input className='input' type="text" name="" id="" /><br />
  <label className='label' htmlFor="">First name</label><br />
  <input className='input' type="text" name="" id="" /><br />
  <label className='label' htmlFor="">First name</label><br />
  <input className='input' type="text" name="" id="" /><br />
  <label className='label' htmlFor="">First name</label><br />
  <input className='input' type="text" name="" id="" /><br />
  <label className='label' htmlFor="">First name</label><br />
  <input className='input' type="text" name="" id="" /><br />
  <input type="checkbox" name="" id="" />
  <label htmlFor="">I want to receive Safari newsletters with the best deals <br />
and offers</label><br />
<button>CREATE ACCOUNT</button>
</div>

</div>
      <Footer/>
      </div>
    </div>
  )
}

export default Login