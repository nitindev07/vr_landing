import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import '../modalVideo.scss'
import {BsPlayCircleFill} from 'react-icons/bs'

const Video = () => {
  const [isOpen,setIsOpen]=useState(false)
  return (
    <div className='bg-[#544686]/30 py-9 mt-20'>
      <div className='container mx-auto'>
        <div className='flex flex-col text-center justify-center items-center lg:flex-row lg:justify-between'>
          <h3 className='text-[23px] lg:text-3xl font-semibold mb-8 lg:mb-0'>Awesome experience with virtual reality world</h3>
          <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId='Nok_M1Ib5F0' onClose={()=>setIsOpen(false)}/>
          <div className='bg-videoBg bg-no-repeat bg-cover w-[270px] h-[180px] flex items-center justify-center'>
            <div className='cursor-pointer' onClick={()=>setIsOpen(!isOpen)}>
              <BsPlayCircleFill className='text-4xl text-white/80 hover:text-white hover:scale-110 transition'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
