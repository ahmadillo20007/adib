import React from 'react'
import './Home.scss'
import logo from '../../img/Logo.svg'

function Home() {
  return (
    <div className='home'>
      <div className="container">
        <header>
          <ul className='header__list'>
           <li className='header__list__item'>
            Home
           </li>
           <li className='header__list__item'>
           Clothes
           </li>
           <li className='header__list__item'>
           Shoes
           </li>
           <li className='header__list__item'>
           Accessories
           </li>
          </ul>
          <img className='header__img' src={logo} alt="" />
          <div className="icons">
            <input type="text" name="" id="" />
            <button></button>
            <button></button>
            <button></button>
          </div>
        </header>
      </div>
    </div>
  )
}

export default Home