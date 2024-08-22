// import React from 'react'
// import close from "../../assets/closed.png"

// const Links = () => {
//   return (
//     <div id='sideMenu' className='flex md:hidden flex-col gap-5 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
//         <div className='absolute right-6 top-6'>
//             <img src={close} alt="" className='w-7 right-12 cursor-pointer'  />
//         </div>
//         <a href="#Home">Home</a>
//         <a href="#About Me">About Me</a>
//         <a href="#Services">Services</a>
//         <a href="#Project">Project</a>
//     </div>
//   )
// }

// export default Links



import React from 'react';
import close from "../../assets/closed.png";

const Links = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      id='sideMenu'
      className={`md:hidden flex flex-col gap-5 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 ${
        isOpen ? 'right-0' : '-right-64'
      }`}
    >
      <div className='absolute right-6 top-6' onClick={toggleSidebar}>
        <img src={close} alt="Close" className='w-7 cursor-pointer' />
      </div>
      <a href="#Home" onClick={toggleSidebar}>Home</a>
      <a href="#About" onClick={toggleSidebar}>About Me</a>
      <a href="#Services" onClick={toggleSidebar}>Services</a>
      <a href="#Project" onClick={toggleSidebar}>Projects</a>
    </div>
  );
};

export default Links;
