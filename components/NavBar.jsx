import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import Link from 'next/link';

function NavBar() {
  const [nav, setNav] = useState(true);

  function handlenav() {
    setNav(!nav);
  }

  return (
    <div className='h-24 flex sm:gap-36 gap-18 items-center justify-center max-w-[1280px] mx-auto px-4 text-white'>
      <ul className='text-xl md:flex hidden '>
        {/* <link to="/home"> */}
        <li className='p-4 cursor-pointer text-[#FF2E00] underline'>
          <Link href='#home'>Home</Link>
        </li>
        {/* <link to="/about"> */}
        <li className='p-4 cursor-pointer hover:text-[#FF2E00]'>
          <Link href='#about'>About</Link>
        </li>

        {/* <link to="/dcma"> */}
        <li className='p-4 cursor-pointer hover:text-[#FF2E00]'>
          <Link href='#dmca'>DMCA</Link>
        </li>
        {/* </link> */}
      </ul>

      <div
        onClick={handlenav}
        className='block md:hidden'
      >
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <h1 className='w-full text-3xl font-bold text-[#FF2E00] m-4'>
          YouTube Thumbnail Downloader
        </h1>
        <ul className='p-4 uppercase'>
          <li className='p-4 border-b border-b-gray-700 cursor-pointer'>
            <Link href='#home'>Home</Link>
          </li>
          <li className='p-4 border-b border-b-gray-700 cursor-pointer'>
            <Link href='#about'>About</Link>
          </li>
          <li className='p-4 border-b border-b-gray-800 cursor-pointer'>
            <Link href='#dmca'>DMCA</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
