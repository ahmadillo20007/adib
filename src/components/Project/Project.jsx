import React from 'react';
import './Project.scss'
import img1 from '../../img/img1.png'
import { Data } from '../../data/Data'
import "swiper/css";
import "swiper/css/navigation";
import top from '../../img/top.png'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Project() {
    
    console.log(Data);
    const fn = (e)=>{
        console.log(e.target.textContent);
        if(e.target.textContent == 1){
            console.log(Data.slice(0,10));    
        }else{
            console.log(Data.slice(10 * (e.target.textContent - 1), e.target.textContent * 10 + 10));
        }
    }
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
   
<img src={img1} alt="" />

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
 
           <img id='top' className='project__img' src={top} alt="" />
        </div>
    </div>
  )
}

export default Project