import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/technology.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1d3557] text-gray-300'>
      <div>
      <a href="/">
          <img src={Logo} alt='Logo Image' style={{ width: '50px' }} />
      </a>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <a href="/" className="hover:text-[#e63946]">Home</a>
        </li>
        <li>
          <a href="/about" className="hover:text-[#e63946]">About</a>
        </li>
        <li>
          <a href="/skills" className="hover:text-[#e63946]">Skills</a>
        </li>
        <li>
          <a href="/work" className="hover:text-[#e63946]">Work</a>
        </li>
        <li>
          <a href="/contact" className="hover:text-[#e63946]">Contact</a>
        </li>
      </ul>

      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
        <a href="/">Home</a>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <a href="/about">About</a>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <a href="/skills">Skills</a>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <a href="/work">Work</a>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <a href="/contact">Contact</a>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300 hover:text-gray-100'
              href='https://www.linkedin.com/in/ivan-leovandi-7a2a59215/details/certifications/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300 hover:text-gray-100'
              href='https://github.com/IvanLeovandi'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300 hover:text-gray-100'
              href='mailto:ivanleovandi@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300 hover:text-gray-100'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
