import React from 'react'
import './Workslide.css'
import firstWork from '../../Images/first.jpg'
import secondWork from '../../Images/second.jpg'
import threeWork from '../../Images/three.jpg'
import fourWork from '../../Images/four.png'
import fiveWork from '../../Images/five.jpg'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Pagination } from "swiper"
import 'swiper/css/pagination'
import 'swiper/css'
const Workslide = () => {
    const works=[
        {img:firstWork},
        {img:secondWork},
        {img:threeWork},
        {img:fourWork},
        {img:fiveWork},
    ]
       
    
  return (
    <div id='Work' className='ws-main'>
        <div className="s-title">
            <h1>Recent Work</h1>
             <div className="line"></div>
            <p>Some projects I made in my free time.</p>
        </div>
        <div className="ws-slider">
<Swiper
modules={[Pagination]}
slidesPerView={3}
freeMode={true}
grabCursor={true}
s
pagination={{clickable:true}}
breakpoints={{
    0: {
        slidesPerView: 1,
      },
   965: {
        slidesPerView: 2,
        spaceBetween:2
      },
    1172: {
        slidesPerView: 3,
      }
}}

>
    {
        works.map((work,index)=>{
            return(
                
                <SwiperSlide key={index}>
                    <div className="innerSlide">
                    <img src={work.img} alt="" />   
                    </div>    
                </SwiperSlide>
                
            )
        }
          
        )

    }
   
</Swiper>
        </div>
    </div>
  )
}

export default Workslide