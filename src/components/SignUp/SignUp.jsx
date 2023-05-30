import React from 'react'
import './SignUp.scss'
import up from'../../img/up.png'
import { Link, useNavigate } from 'react-router-dom'


function SignUp() {
  const navigate = useNavigate()
  const register = (e) =>{ 
      e.preventDefault()
      console.log(e.target.name.value);
      console.log(e.target.lastName.value);
      console.log(e.target.phone.value);
      console.log(e.target.email.value);
      console.log(e.target.password.value);
      let newUser = {
          name: e.target.name.value,
          lastName:e.target.name.value,
          phone: e.target.phone.value,
          email: e.target.email.value,
          password: e.target.password.value
      }
      fetch('https://647092d63de51400f7248a57.mockapi.io/login',{
          method: 'POST',
          headers:{'Content-type': 'application/json'},
          body:JSON.stringify(newUser)
      })
      .then((res)=>{
          console.log(res.status);
          if(res.status){
              navigate('/home ')
          }
          res.json()})
      .then((data)=> console.log(data))
        }
  return (
    <div className='container'>
      <div className="signup">
        <div className="left">

        <img src={up} alt="" />
        </div>
        <div className="right">
          <div className="wrapper">

<h1 className='up__text'>
Sign up
</h1>
<p className='up__item'>
Already have an account? <Link to={'/signin'}>Sign in</Link>
</p>
<form onSubmit={register}action="#">
  <input placeholder='First name' type="text" name="name" id="" />
  <input placeholder='Last name' type="text" name="lastName" id="" />
  <input placeholder='Phone' type="text" name="phone" id="" />
  <input placeholder='Email' type="text" name="email" id="" />
  <input placeholder='Password' type="text" name="password" id="" />
<button type='submit' className='up__btn'>
Next step
</button>
</form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp