import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/Logo.svg'
import search from '../../img/search.png'
import person from '../../img/person.png'
import shop from '../../img/shop.png'
import heart from '../../img/heart.png'

function Header() {
  return (
    <div className='container'>
              <header className='head' id='#top'>
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
<Link to={'/'}>
<img className='header__img' src={logo} alt="" />
</Link>          <div className="icons">
            <input placeholder='Search...' type="text" name="" id="" />
         
<Link to={'/search'}> <img src={search} alt="" /></Link>
<Link to={'/login'} > <img src={person} alt="" /></Link>
 <Link to={'/shop'}><img src={shop} alt="" /></Link>
<Link to={'/heart'}> <img src={heart} alt="" /></Link>
       
          </div>
     
        </header>
    </div>
  )
}

export default Header