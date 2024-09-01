import React from 'react'
import Typewriter from 'typewriter-effect';

const Header = () => {
  

  return (
    <div  className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6'>
      <img src="" alt="" />
      <h3>Hi!  I'am called <span>Anushiny</span> Cedrick.</h3> 
      <h1 className='text-2xl sm:text-6xl lg:text-[45px]'> I am a <Typewriter
            options={{
            strings: ['Cloud Engineer', 'Data Analysis','Machine Learning Engr','Deep Learning Engr'],
            autoStart: true,
            loop: true,
          }}
        /> base in Cameroon.</h1>
      <p className='max-w-2xl mx-auto'>An IT expert with a great passion in the feilds of Web-Development, Cloud, Machine learning, Deep Learning, Data Analysis and Data Secienc.</p>

      <div className='flex flex-col sm:flex-row gap-4 mt-4'>
        <a href="#contact" className='px-4 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2'>Contact Me</a>


        <a href="#" download className='px-4 py-3 border rounded-full border-gray-500 bg-white flex items-center gap-2'>Download Cv</a>
      </div>
    </div>
  )
}

export default Header
