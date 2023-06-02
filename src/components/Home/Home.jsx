import React from 'react'
import './Home.scss'
import logo from '../../img/Logo.svg'
import search from '../../img/search.png'
import person from '../../img/person.png'
import shop from '../../img/shop.png'
import heart from '../../img/heart.png'

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
            <input placeholder='Search...' type="text" name="" id="" />
 <img src={search} alt="" />
 <img src={person} alt="" />
 <img src={shop} alt="" />
 <img src={heart} alt="" />
       
          </div>
        </header>
      </div>
    </div>
  )
}

export default Home