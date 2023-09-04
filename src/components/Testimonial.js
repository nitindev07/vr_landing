import React from 'react'
import TestimonialSlider from './TestimonialSlider';

const Testimonial = () => {
  return (
    <div className='container mx-auto mt-10'>
        <div className='bg-purple-400/10 max-h-[400px] p-12 rounded-lg'>
          <div className='flex flex-col justify-center items-center text-center'>
            <h2 data-aos='fade-up' data-aos-offset='300' data-aos-delay='600' className='font-bold text-3xl mb-6'>What our clients say</h2>
            <p data-aos='fade-up' data-aos-offset='300' data-aos-delay='800'className='max-w-2xl mx-auto mb-12 lg:mb-24'>See what our customer say about us. It really matter for us. How good or bad we will make ir for evaluation to make their live better.</p>
          </div>
          <div data-aos='fade-up' data-aos-offset='300' data-aos-delay='1000'>
          <TestimonialSlider/>
          </div>
        </div>
    </div>
  )
}

export default Testimonial;
