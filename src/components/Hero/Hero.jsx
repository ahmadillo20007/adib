import './Hero.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
function Hero() {
  return (
    <div className='hero'>
     
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><div className="hero"></div></SwiperSlide>
        <SwiperSlide><div className="hero"></div></SwiperSlide>
        <SwiperSlide><div className="hero"></div></SwiperSlide>
        <SwiperSlide><div className="hero"></div></SwiperSlide>
      </Swiper>
      </div>
   
  )
}

export default Hero