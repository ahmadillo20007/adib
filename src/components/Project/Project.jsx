import React from 'react'
import './Project.scss'
import i1 from '../../img/img1.png'
import { Data } from '../../data/Data'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import top from '../../img/top.png'
function Project() {
  return (
    <div className='project'>
        <div className="container">
            <hr />
            <h1 className='project__text'>
            Shop your style
            </h1>
            <hr />
            <p className='project__item'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida cursus adipiscing <br />
viverra at tortor, egestas odio parturient. Morbi ut lorem in erat. Et et molestie diam diam ultricies. <br />
Scelerisque duis diam ac cras dictum adipiscing. Venenatis at sit proin ut vitae adipiscing id facilisis.
            </p>
            <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <ul className='project__list'>
{
    Data?.map((item)=>(
        
        <li className='project__list__item'>
   
<img src={i1} alt="" />

<p className='project__name'>
{
    item.name
}
</p>
<br />

{
    item.cost
}

   
                </li>
    ))
}
            </ul></SwiperSlide>
        <SwiperSlide> <ul className='project__list'>
{
    Data?.map((item)=>(
        
        <li className='project__list__item'>
   
<img src={i1} alt="" />

<p className='project__name'>
{
    item.name
}
</p>
<br />

{
    item.cost
}

   
                </li>
    ))
}
            </ul></SwiperSlide>
        <SwiperSlide> <ul className='project__list'>
{
    Data?.map((item)=>(
        
        <li className='project__list__item'>
   
<img src={i1} alt="" />

<p className='project__name'>
{
    item.name
}
</p>
<br />

{
    item.cost
}

   
                </li>
    ))
}
            </ul>
            </SwiperSlide>
      </Swiper>
           <img id='top' className='project__img' src={top} alt="" />
        </div>
    </div>
  )
}

export default Project