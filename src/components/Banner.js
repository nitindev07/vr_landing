import React from 'react'
import banner_img from '../assets/img/banner-img.png'
import Users from './Users'

const Banner = () => {
  return (
    <div className='container mx-auto pt-24 pb-12 lg:pt-48 lg:pb-0 md:max-h-[850px] max-h-[1200px]   '>
      <div className='grid md:grid-cols-2 gap-14'>
        <div className='text-center lg:text-start flex flex-col gap-10' >
          <div>
          <h1 className='text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug'
          data-aos='fade-down' data-aos-delay='200'>
            Let's Explore <br /> Three-Dimentional Visually.
          </h1>
          <p data-aos='fade-down' data-aos-delay='300' className='max-w-[440px] mb-12 mx-auto lg:mx-0'>With Virtual Technology you can see the digital world feel more real and you can play the game with a new style.</p>
          
          <div data-aos='fade-down' data-aos-delay='400' className='flex justify-around space-x-4 lg:justify-start lg:space-x-8 items-center  max-w-[320px] mx-auto lg:mx-0 lg:max-w-none'>
          <button className='btn'>Get it now</button>
          <a href="/" className='border-b-2 border-transparent hover:border-white transition ease-out '>Explore Device</a>
          </div>
          </div>
        
          <Users/>
        </div>
        <div data-aos='fade-up' data-aos-delay='400'>
          <img src={banner_img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banner