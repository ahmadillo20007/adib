import React , { useEffect, useState } from 'react'
import './Login.scss'
import { Link , Outlet, useNavigate} from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Login() {
const [data , setData] = useState([])
const navigate = useNavigate()
useEffect(()=>{
  fetch('https://647092d63de51400f7248a57.mockapi.io/login')
  .then((res)=> res.json())
  .then((data)=> setData(data))
})
const handlerSignIn = (e) =>{
  e.preventDefault()
  let newUser = {
    email:e.target.elements.email.value,
    password:e.target.elements.password.value
  }
  if( data.find((item) => item.email == newUser.email && item.password == newUser.password))
{
  navigate('/settings')
} 
}
// _______________________________________________________________________________________________________


const register = (i) =>{
  i.preventDefault()
  console.log(i.target.elements.firstName.value);
  console.log(i.target.elements.lastName.value);
  console.log(i.target.elements.email.value);
  console.log(i.target.elements.password.value);
  // console.log(e.target.password.value);
  let newUser = {
    firstName: i.target.elements.firstName.value,
    lastName: i.target.elements.lastName.value,
    email: i.target.elements.email.value,
    password: i.target.elements.password.value
}
fetch('https://647092d63de51400f7248a57.mockapi.io/login',{
    method: 'POST',
    headers:{'Content-type': 'application/json'},
    body:JSON.stringify(newUser)
})
.then((res)=>{
    console.log(res.status);
    if(res.status){
        navigate('/settings ')
    }
    res.json()})
.then((data)=> console.log(data))
}

return (
<>
<Header/>
    <div className='container'>
      <Outlet/>
    <div className='Login'>
      <div className="container">
        <h1 className='Login__title1'>Hello there!</h1>
        <p className='Login__title2'>Please sign in or create account to continue</p>
        <div className="Login__right__left">
          <div className="Login__left">
           <form onSubmit={handlerSignIn} action="#">
           <h3 className='Login__left__title1'>SIGN IN</h3>
            <p className='Login__left__title2'>Email</p>
            <input name='email' className='Login__left__inp' type="email" />
            <p className='Login__left__title3'>Password</p>
            <input name='password' className='Login__left__inp' type="password" /><br /><br />
            <label for="check1">
            <input type="checkbox" id='check1' />
            Remeber my details
               </label> <br /><br />
            <button  className='Login__left__btn'>SIGN IN</button><br /><br />
            <Link className='Login__left__link'>Forgot password?</Link>
           </form>

          </div>
          <div className="Login__right">
   <form onSubmit={register} action="#">
   <h3 className='Login__right__title1'>CREATE ACCOUNT</h3>
            <p className='Login__right__title2'>First name</p>
            <input name='firstName' className='Login__right__inp' type="text" />
            <p className='Login__right__title3'>Last name</p>
            <input name='lastName' className='Login__right__inp' type="text" />
            <p className='Login__right__title4'>Email</p>
            <input name='email' className='Login__right__inp' type="email" />
            <p className='Login__right__title5'>Create Password</p>
            <input name='password' className='Login__right__inp' type="password" />
            <p className='Login__right__title6'>Confirm Password</p>
            <input className='Login__right__inp' type="password" /><br /><br />
            <label for="check2">
            <input type="checkbox" id='check2' />
            I want to receive Safari newsletters with the best deals 
            <br /> <span className='Login__right__title7'>and offers </span>
            </label>
            <br /><br />
            <button className='Login__right__btn'>CREATE ACCOUNT</button>
   </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}


export default Login