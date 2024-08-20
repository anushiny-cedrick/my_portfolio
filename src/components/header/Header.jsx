import React from 'react'

const Header = () => {
  return (
    <div  className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6'>
      <img src="" alt="" />
      <h3>Hi!  I'am called <span>Anushiny</span> Cedrick.</h3> 
      <h1 className='text-2xl sm:text-6xl lg:text-[55px]'> I am a Cloud Engineer base in Cameroon.</h1>
      <p className='max-w-2xl mx-auto'>An IT expert with a great passion in the feilds of Web-Development, Cloud, Machine learning, Deep Learnin, Data Analysis and Data Secienc.</p>
      <div className='flex gap-8'>
        <a href="#contact">Contact Me</a>
      </div>
    </div>
  )
}

export default Header
