import { useState } from 'react'; 
import React from 'react'
import { navLinks } from '../constant'

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`bg-white w-full flex p-6 justify-between items-center navbar fixed top-0 z-10`}>
      <div className='border-2 border-indigo-600 flex justify-center items-center ml-14 p-3 rotate-45'>
        <a href='#home' className='cursor-pointer'>
        <h1 className='font-bold grayscale text-gray-600 rotate-[-90]'>Blog</h1>
         <h1 className='font-bold text-[20px] text-gray-800'>Blog</h1>
      </a>
      </div>
      

      <ul className="list-none mr-14 sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className= {`font-normal ${active === nav.title ? 'text-amber-400':'text-gray-800'} ${index === navLinks.length - 1 ? 'mr-0': 'mr-10'}`} onClick={()=>setActive(nav.title)}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
     
    </div>
  )
}

export default Navbar