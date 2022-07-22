import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-white flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/a1fe6b46-9ea6-4550-b38c-8313ba227349" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#e63946] text-[#1d3557]'>Contact</p>
                <p className='text-[#1d3557] py-4'>Submit the form below or shoot me an email - ivanleovandi@gmail.com</p>
            </div>
            <input className='bg-[#f1faee] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#f1faee]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#f1faee] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-[#1d3557] border-2 hover:bg-[#a8dadc] hover:border-[#a8dadc] px-4 py-3 my-8 mx-auto items-center animate-bounce flex'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact