import React from 'react';
// import Photo from '../assets/square.png';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-white text-[#1d3557]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#e63946]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p className="opacity-80">Hi. I'm Ivan, nice to meet you. Feel free to look around.</p>
            </div>
            <div>
              <p className="text-[#457b9d]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vero corporis consequuntur assumenda quas ducimus sequi! Quae aliquam debitis rem quia blanditiis ipsum similique autem doloribus quos eligendi cumque molestiae fugit modi enim, voluptate recusandae architecto repellat error sapiente illo.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
