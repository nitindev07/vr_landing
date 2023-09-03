import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
// import { Pagination } from 'swiper'
import{slider} from '../data'


const TestimonialSlider = () => {
  return (
    <Swiper  
    breakpoints={{
      320:{
        slidesPerView:1,
        spaceBetween:18,
      },
      
      768:{
        slidesPerView:2,
        spaceBetween:20,
      },
      1024:{
        slidesPerView:3,
        spaceBetween:30,
      },
      }}
    
      
    >
     
      {slider.map((slide,index)=>{
        return(
          <SwiperSlide key={index} className='rounded-lg p-4 lg:p-6 min-h-[240px] bg-gradient-to-t from-[#130613] via-[#2A1428] to-[#331A35]'>
            <p className='mb-8 min-h-[100px] text-[15px]'>{slide.message}</p>
            <div className='flex flex-col md:flex-row gap-4'>
              <div className='w-14'>
                <img className='mb-3 md:mb-0' src={slide.image} alt="" />
              </div>
              <div className='flex flex-col'>
                <div className='font-medium text-base'>
                  {slide.name}
                </div>
                <div className='font-medium text-rose-600'>
                  {slide.email}
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default TestimonialSlider;
