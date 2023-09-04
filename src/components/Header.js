import React from 'react'
import logo from '../assets/img/logo.svg'
import Nav from './Nav'
import {HiMenu} from 'react-icons/hi'

const Header = ({setNavMob}) => {
  return (
    <div className='container mx-auto py-4 flex justify-between items-center' data-aos='fade-down' data-aos-duration='2000' data-aos-delay='500'>
        <img className='h-[27px]' src={logo} alt="" />
        <Nav className/>
        <HiMenu onClick={()=>setNavMob(true)} className=' lg:hidden' size={27}/>
    </div>
  )
}

export default Header;