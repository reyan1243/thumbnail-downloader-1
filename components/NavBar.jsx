// import { Link } from 'react-router-dom'
// import styled from 'styled-components'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { useState } from 'react'


function NavBar({isScrolled}) {

const [nav,setNav] = useState(true)

function handlenav(){
  setNav(!nav)
}
  // const links = [{ name: "Home", link: "/" },
  // { name: "About", link: "/about" },
  // { name: "Contact", link: "/contact" },
  // { name: "Privacy policy", link: "/policy" },
  // { name: "DMCA", link: "/dmca" }
  // ]

  return (
    <div className="h-24 flex sm:gap-36 gap-18 items-center max-w-[1280px] mx-auto px-4 text-white">

      
      <h1 className='w-full text-4xl font-bold text-[#00df9a]'>
      {/* <link to="/"> */}
          <span className='text-red-600'>Yt</span>
        Thumb
        
          <span className='text-white'>.</span>
          <span className='text-red-600'>nail</span>
      {/* </link> */}
      </h1>
          
            <ul className="text-xl md:flex hidden">
              {/* <link to="/about"> */}
            <li className='p-4 cursor-pointer'>About</li>
              {/* </link> */}
              {/* <link to="/Contact"> */}
            <li className='p-4 cursor-pointer'>Contact</li>
              {/* </link> */}
              {/* <link to="/dcma"> */}
            <li className='p-4 cursor-pointer'>DMCA</li>
              {/* </link> */}
            </ul>

      <div onClick={handlenav} className="block md:hidden">
        {!nav?<AiOutlineClose size={20} />: <AiOutlineMenu size={20} />}
        
      </div>
      <div className={!nav?'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500':"fixed left-[-100%]"}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>
          React.
        </h1>
        <ul className='p-4 uppercase'>
          <li className='p-4 border-b border-b-gray-700 cursor-pointer'>Home</li>
          <li className='p-4 border-b border-b-gray-700 cursor-pointer'>Company</li>
          <li className='p-4 border-b border-b-gray-800 cursor-pointer'>Resources</li>
          <li className='p-4 border-b border-b-gray-800 cursor-pointer'>About</li>
          <li className='p-4 cursor-pointer'>Contact</li>
        </ul>
      </div>

  
    </div>
  )
}

export default NavBar