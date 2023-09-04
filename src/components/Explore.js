import React from 'react'

const Explore = () => {
  return (
    <div className='min-h-[400px] mb-16 lg:mb-4 mt-72 md:mt-52'>
      <div className='container mx-auto h-full'>
        <div className='h-full bg-explore bg-no-repeat bg-cover p-14 flex flex-col items-start justify-center' >
          <h2 data-aos='fade-right' data-aos-duration='2000' className='text-3xl font-semibold mb-8'>Explore product in new way</h2>
          <p data-aos='fade-right' data-aos-duration='2000'className='max-w-xs mb-12'>We specialize in creating visual identities for products and brands in your company.</p>
          <form data-aos='fade-up' data-aos-duration='2000' className='flex flex-col space-y-4 w-full lg:flex-row gap-x-4 lg:space-y-0' action="">
            <input type="email" name="email" className='px-4 bg-gradient-to-t from-[#341D38] to-[#271223] h-12 outline-none rounded-md' placeholder='Your Email' id="" />
            <button className='btn'>Start</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Explore
