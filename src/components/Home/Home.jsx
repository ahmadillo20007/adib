import React from 'react'
import './Home.scss'
import logo from '../../img/Logo.svg'
import search from '../../img/search.png'
import person from '../../img/person.png'
import shop from '../../img/shop.png'
import heart from '../../img/heart.png'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Hero from '../Hero/Hero'
function Home() {
  return (
    <>
      <div className='home'>
        <div className="container">
          <header id='#top'>
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
</Link>            <div className="icons">
              <input placeholder='Search...' type="text" name="" id="" />

              <Link to={'/search'}> <img src={search} alt="" /></Link>
              <Link to={'/login'} > <img src={person} alt="" /></Link>
              <Link to={'/shop'}><img src={shop} alt="" /></Link>
              <Link to={'/heart'}> <img src={heart} alt="" /></Link>

            </div>

          </header>
        </div>
      </div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><Hero /></SwiperSlide>
        <SwiperSlide><Hero /></SwiperSlide>
        <SwiperSlide><Hero /></SwiperSlide>
        <SwiperSlide><Hero /></SwiperSlide>
      </Swiper>
      
    </>
  )
}

export default Home