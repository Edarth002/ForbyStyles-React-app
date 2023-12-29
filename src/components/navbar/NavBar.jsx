// export default NavBar;
import image1 from '../../Assets/logo222-removebg-preview.png';
import image2 from '../../Assets/Instagram.png';
import image3 from '../../Assets/Gmail.png';
import image4 from '../../Assets/Twitter.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isArrowUpsideDown, setArrowUpsideDown] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    setArrowUpsideDown(!isArrowUpsideDown);
  };

  return (
    <div className='Nav pl-5 pr-10 flex items-center justify-between'>
      <Link to="/" className='cursor-pointer hover:text-yellow-600 rounded-md p-2 w-1/6'>
        <img src={image1} alt="" className='min-w-[4rem] w-full md:w-1/6'/>
      </Link>
      <div className="md:hidden relative">
        <button onClick={toggleMenu} className='text-yellow-400 focus:outline-none'>
          {isMenuOpen ? (
            <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
            </svg>
          ) : (
            <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
            </svg>
          )}
        </button>
        {isMenuOpen && (
          <div className="absolute top-full right-0 mt-2 text-black text-left bg-opacity-70 bg-blur-lg backdrop-filter backdrop-blur-lg bg-white border border-gray-300 rounded-md shadow-md p-10">
            <Link to="/" onClick={toggleMenu} className='block p-2 text-xl hover:bg-gray-100 '>Home</Link>
            <Link to="/blog" onClick={toggleMenu} className='block p-2 text-xl hover:bg-gray-100'>Blog </Link>
            <div className='flex w-full items-center space-x-4'>
              <a href="https://www.instagram.com/forby_styles/#"><img src={image2} alt="" className='w-full mt-3' /></a>
              <a href="https://x.com/Forbystyles1?s=20"><img src={image4} alt="" className='w-full mt-3'/></a>
            </div>
          </div>
        )}
      </div>
            <div className="hidden md:flex flex-row items-center text-yellow-400 space-x-4 font-bold">
                <Link to="/" className='cursor-pointer hover:text-yellow-600 p-2'>Home</Link>
                <Link to="/blog" className='cursor-pointer hover:text-yellow-600 p-2'>Blog</Link>            
                    <div className="group relative inline-block">
                  <div className="flex items-center text-yellow-400 cursor-pointer" onClick={toggleDropdown}>
                    <span className='cursor-pointer hover:bg-black md:mt-0 mt-6 hover:text-yellow-400 md:min-w-[7rem] text-center bg-yellow-400 text-black rounded-full py-2 px-5'>Follow Us</span>
                    
                  </div>
                  {isDropdownOpen && (
                    <div className=" flex absolute mt-2 bg-opacity-70 bg-blur-lg backdrop-filter backdrop-blur-lg bg-white border border-gray-300 rounded-md shadow-md p-1 w-full">
                      <div className='flex items-center mx-auto justify-center'>
                          <a href="https://www.instagram.com/forby_styles/#"><img src={image2} alt="" className='p-1 w-9' /></a>
                          <a href="https://x.com/Forbystyles1?s=20"><img src={image4} alt="" className='p-1 w-9'/></a>
                        </div>
                    </div>
                  )}
                </div>
                
            </div>
    </div>

  );
};

export default NavBar;
