import React from 'react'
import './Main.scss'
import logo from '../../img/logo.png'
import profil from '../../img/profil.png'
import swiper from '../../img/swiper.png'
import  { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function Main() {
  return (
    <div className='main'>
            <header>
                <img src={logo} alt="" />
                <ul>
                    <li>Bosh sahifa</li>
                    <li>Nasr</li>
                    <li>Nazm</li>
                    <li>Maqolalar</li>
                    <li>Forum</li>
                </ul>
                <img className='header__img' src={profil} alt="" />
            </header>
            <hr className='header__hr' />
            <div className="hero">
            <Swiper className="mySwiper">
        <SwiperSlide><img src={swiper} alt="" /></SwiperSlide>
        <SwiperSlide><img src={swiper} alt="" /></SwiperSlide>
        <SwiperSlide><img src={swiper} alt="" /></SwiperSlide>
        <SwiperSlide><img src={swiper} alt="" /></SwiperSlide>

      </Swiper>
            </div>
        </div>
  )
}

export default Main