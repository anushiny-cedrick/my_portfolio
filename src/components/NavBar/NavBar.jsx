// import React from 'react'
// import moon from "../../assets/moon.jpg"
// import bar from "../../assets/bar.png"
// import Links from '../Links/Links'
// const NavBar = () => {
   
  
//   return (
//    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-3 flex items-center justify-between z-50'>
//     <a href="#logo">Cedrick</a>
//     <div className='hidden md:flex items-center gap-6  lg:gap-8 rounded-full px-13 py-3 bg-white shadow-sm bg-opacity-50'>
//         <a href="#Home">Home</a>
//         <a href="#About Me">About Me</a>
//         <a href="#Services">Services</a>
//         <a href="#Project">Project</a>
//     </div>
    
//     <div className='flex items-center gap-4'>
//         <img src={moon} className='w-10 h-12' alt="" />
//         <a href="#Contact" className='hidden lg:flex items-center gap-3 px-10 py-2 border border-gray-500 rounded-full '>Contact</a>
//     </div>
//     <div className='block md:hidden ml-3 cursor-pointer'>
//         <img src={bar} alt="" className='w-7' />
//     </div>
//     <Links />


    
//    </nav>
//   )
// }

// export default NavBar



import React, { useState } from 'react';
import moon from "../../assets/moon.jpg";
import bar from "../../assets/bar.png";
import Links from '../Links/Links';

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className='w-full px-5 lg:px-8 xl:px-[8%] py-3 flex items-center justify-between z-50'>
      <a href="#logo">Cedrick.Dev</a>
      <div className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-13 py-3 bg-white shadow-sm bg-opacity-50'>
        <a href="#Home">Home</a>
        <a href="#About">About Me</a>
        <a href="#Services">Services</a>
        <a href="#Project">Projects</a>
      </div>
      
      <div className='flex items-center gap-4'>
        <img src={moon} className='w-10 h-12' alt="Moon" />
        <a href="#Contact" className='hidden lg:flex items-center gap-3 px-10 py-2 border border-gray-500 rounded-full'>Contact</a>
      </div>
      
      <div className='block md:hidden ml-3 cursor-pointer' onClick={toggleSidebar}>
        <img src={bar} alt="Menu" className='w-7' />
      </div>
      
      <Links isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </nav>
  );
};

export default NavBar;
