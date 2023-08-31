import React, { useState } from 'react'
import Banner from './components/Banner'
import Header from './components/Header'
import NavMobile from './components/NavMobile'

const App = () => {
  const [navMob,setNavMob]=useState(false)
  return (
    <div className='App relative before:bg-circle before:h-[200px] before:w-[600px] before:absolute before:-top-16 before:left-[600px] before:hidden before:lg:flex before:bg-no-repeat'>
      <Header setNavMob={setNavMob}/>
      <Banner/>
      <div className={`${navMob ? 'right-[0%]':'-right-full'} fixed duration-200 top-0 bottom-0 w-48 transition-all`}>
      <NavMobile setNavMob={setNavMob}/>
      </div>
    </div>
  )
}

export default App
