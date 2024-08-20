import React from 'react'
import ced2 from "../../assets/ced2.png"
const AboutMe = () => {
  return (
    <div id="About" className='w-ful px-[12%] py-10'>
        <h4 className='text-center mb-2 text-lg'>Introduction</h4>
        <h2 className='text-center text-3xl'>About Me</h2>
        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='max-w-max mx-auto relative'>
                <img src={ced2} alt="" className='w-64 sm:w-80 rounded-3xl max-w-none' />
            </div>

            <div className='flex-1'>
                <p className='mb-10 max-w-2xl'>IT expert with 3 years of experience in some fields of technology which i have contribute greeatly to improved some organisations </p>
                <ul>
                    <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
                        <h4 className='my-4 font-semibold text-gray-700'>codeImage</h4>
                        <h3 className='my-4 font-semibold text-gray-700'>Languages</h3>
                        <p className='text-gray-600 text-sm'>HTML, Pytohon, NextJs, React, Terraform</p>
                    </li>
                    <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
                        <h4 className='my-4 font-semibold text-gray-700'>codeImage</h4>
                        <h3 className='my-4 font-semibold text-gray-700'>Education</h3>
                        <p className='text-gray-600 text-sm'>B.Tech in computer Science</p>
                    </li>
                    <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
                        <h4 className='my-4 font-semibold text-gray-700'>codeImage</h4>
                        <h3 className='my-4 font-semibold text-gray-700'>Projects</h3>
                        <p className='text-gray-600 text-sm'>i have build 5 projects in different domain</p>
                    </li>
                    
                </ul>

            </div>
        </div>
    </div>
  )
}

export default AboutMe
