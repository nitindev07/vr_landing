import React, { useEffect, useState } from 'react'
import Banner from './components/Banner'
import Header from './components/Header'
import NavMobile from './components/NavMobile'
import Experience from './components/Experience'
import Headsets from './components/Headsets'
import Testimonial from './components/Testimonial'
import Explore from './components/Explore'

import Aos from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  useEffect(()=>{
    Aos.init({
      duration:2000,
      delay:400
    });
  });
  const [navMob,setNavMob]=useState(false)
  return (
    <div className='App relative before:bg-circle before:h-[200px] before:w-[600px] before:absolute before:-top-24 before:left-[400px] before:hidden before:lg:flex before:bg-no-repeat'>
      <Header setNavMob={setNavMob}/>
      <Banner/>
      <div className={`${ navMob ? 'right-0':'-right-full'} fixed duration-500 z-10 top-0 bottom-0 transition-all`}>
      <NavMobile setNavMob={setNavMob}/>
      </div>
      <Experience/>
      <Headsets/>
      <Testimonial/>
      <Explore/>
    </div>
  )
}

export default App
