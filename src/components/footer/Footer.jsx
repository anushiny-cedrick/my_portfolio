import React from 'react'
import facebook from "../../assets/facebook.png"
import linkin from "../../assets/linkin.png"
import github from "../../assets/github.png"

const Footer = () => {
  return (
    <div className='w-ful px-[12%]  mt-20'>
      <div className='text-center'>
        <h3 className='w-36 mx-auto mb-2'>Cedrick.Dev</h3>
        <div>
            <h4>cedrick@gmail.com</h4>
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mt-12 py-6'>
        <p>@ Anushiny Cedrick 2024. All right reserved </p>
        <ul className='flex items-center justify-center gap-4 mt-4 sm:mt-0'>
            <li><a href="#"><img src={facebook} alt="" className='w-5' /></a></li>
            <li><a href="#"><img src={linkin} alt="" className='w-8' /></a></li>
            <li><a href="#"><img src={github} alt="" className='w-8' /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
