import React ,{useState} from 'react';
import './Project.scss'
import img1 from '../../img/img1.png'
import { Data } from '../../data/Data'
import "swiper/css";
import "swiper/css/navigation";
import top from '../../img/top.png'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import HeartIcon from '../HeartIcon/HeartIcon';


function Project(){

    
  return (
    <div className='project'>
        <div className="container">
            
            <h1 className='project__text'>
 --------------------------------           Shop your style             --------------------------------
            </h1>
         
            <p className='project__item'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida cursus adipiscing <br />
viverra at tortor, egestas odio parturient. Morbi ut lorem in erat. Et et molestie diam diam ultricies. <br />
Scelerisque duis diam ac cras dictum adipiscing. Venenatis at sit proin ut vitae adipiscing id facilisis.
            </p>
            <ul className='project__list'>
{
    Data?.map((item)=>(
        
        <li className='project__list__item'>
   
<img src={item.img} alt="" />


<p className='project__name'>
{
    item.name
}
</p>
<br />

<i>
{
    item.cost
}
</i>
<HeartIcon/>

   
                </li>
    ))
}
            </ul>
 
<a href="#header" >
<img id='top' className='project__img' src={top} alt="" />

</a>  

      </div>
    </div>
  )
}

export default Project