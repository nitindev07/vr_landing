import React from 'react'
import logo from '../assets/img/logo.svg'
import Nav from './Nav'
import {HiMenu} from 'react-icons/hi'

const Header = ({setNavMob}) => {
  return (
    <div className='max-w-[1140px] mx-auto p-5 flex justify-between items-center'>
        <img className='h-[27px]' src={logo} alt="" />
        <Nav className/>
        <HiMenu onClick={()=>setNavMob(true)} className=' lg:hidden' size={27}/>
    </div>
  )
}

export default Header;