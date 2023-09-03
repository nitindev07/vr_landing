import React from 'react'

const Nav = () => {
  return (
    <div>
      <ul className='hidden lg:flex items-center gap-14 font-secondary'>
        <li><a href="/" className='nav-link'>Home</a></li>
        <li><a href="/" className='nav-link'>Company</a></li>
        <li><a href="/" className='nav-link'>Features</a></li>
        <li><button className='btn'>Sign up</button></li>
      </ul>
    </div>
  )
}

export default Nav;