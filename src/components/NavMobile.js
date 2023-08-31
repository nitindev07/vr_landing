import React from 'react'
import {IoClose} from 'react-icons/io5'

const NavMobile = ({setNavMob}) => {
  return (
    <div className='lg:hidden bg-[#251f3f] h-full w-full p-5'>
      <IoClose onClick={()=>setNavMob(false)} className='text-end' size={30}/>
      <ul className='flex flex-col justify-center cursor-pointer items-center h-[80%] gap-6 font-secondary'>
        <li><a href="/" className=''>Home</a></li>
        <li><a href="/" className=''>Company</a></li>
        <li><a href="/" className=''>Features</a></li>
        <li><button className='btn'>Sign up</button></li>
      </ul>
    </div>
  )
}

export default NavMobile;