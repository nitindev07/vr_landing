import React from 'react'
import hdset1 from '../assets/img/headset-1.png'
import hdset2 from '../assets/img/headset-2.png'
import hdset3 from '../assets/img/headset-3.png'
import hdset4 from '../assets/img/headset-4.png'

const Headsets = () => {
  return (
    <div className='container mx-auto py-14 mt-20'>
      <h2 data-aos='fade-down' data-aos-offset='300' className='text-3xl font-bold my-10'>Mixed Reality Headsets</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-y-6 gap-x-5'>
        <div data-aos='zoom-in' data-aos-offset='300' data-aos-delay='800' className='relative'>
          <img src={hdset1} alt="" />
          <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
            <h4 className='text-xl font-semibold mb-2'>Metaverse</h4>
            <p>A Network of 3D virtual worlds focused on social connection.</p>
          </div>
        </div>
        <div data-aos='zoom-in' data-aos-offset='300' data-aos-delay='1000' className='relative'>
          <img src={hdset2} alt="" />
          <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
            <h4 className='text-xl font-semibold mb-2'>AIoT</h4>
            <p>AI and IoT are both emerging innovative technologies with a lot of potentials.</p>
          </div>
        </div>
        <div data-aos='zoom-in' data-aos-offset='300' data-aos-delay='1200' className='relative'>
          <img src={hdset3} alt="" />
          <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
            <h4 className='text-xl font-semibold mb-2'>HoloLens</h4>
            <p>HoloLens display information blend with the real world, or even simulate a virtual world.</p>
          </div>
        </div>
        <div data-aos='zoom-in' data-aos-offset='300' data-aos-delay='1400' className='relative'>
          <img src={hdset4} alt="" />
          <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
            <h4 className='text-xl font-semibold mb-2'>TPCASTT</h4>
            <p>Methods is great to start students reading and inferring with little assistance from the instructor.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Headsets
