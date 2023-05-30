import React, { useEffect, useState } from 'react'
import './SignIn.scss'
import { Link, useNavigate } from 'react-router-dom'
import ins from'../../img/in.svg'

function SignIn() {
  const [data,setData] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
    fetch('https://647092d63de51400f7248a57.mockapi.io/login')
    .then((res)=>res.json())
    .then((data)=> setData(data))
  })
  const handlerSignIn = (e) =>{
    e.preventDefault()
    let newUser = {
        email: e.target.email.value,
        password: e.target.password.value
    }
if(    data.find((item) =>item.email == newUser.email && item.password == newUser.password)) {
navigate('/home')
}
}
  return (
    <div className='container'>
      <div className="signin">
        <div className="left">

        <img src={ins} alt="" />
        </div>
        <div className="right">
          <div className="wrapper">

<h1 className='up__text'>
Sign in
</h1>
<p className='up__item'>
Already have an account? <Link to={'/'}>Sign in</Link>
</p>
<form onSubmit={handlerSignIn} action="#">
  <input placeholder='email' type="text" name='email' id="" />
  <input placeholder='password' type="text" id="" name='password' />
</form>
<button className='up__btn'>
Next step
</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn