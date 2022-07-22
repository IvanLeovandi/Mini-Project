import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-white'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#e63946] font-semibold'>Hello there, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#457b9d]'>
          Ivan Leovandi
        </h1>
        <h2 className='text-4xl sm:text-2xl font-bold text-[#8892b0]'>
          I'm an Information System Undergraduate Student.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore repellat non corrupti ea in, vel iusto perspiciatis alias animi. Obcaecati beatae molestias nobis eveniet voluptas, et ipsam aliquam sint aspernatur.
        </p>
        <div>
          <button className='text-[#1d3557] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#a8dadc] hover:border-[#a8dadc]'>
            <a href="/work">View Work</a>
            <span className='group-hover:animate-bounce duration-300'>
              <HiArrowNarrowRight className='ml-4' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
