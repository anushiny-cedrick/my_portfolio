import React from 'react'
import ced2 from "../../assets/ced2.png"
import code1 from "../../assets/code1.png"
import aws from "../../assets/aws.png"
import spss from "../../assets/spss-logo.png"
import python from "../../assets/python.jpg"
import vscode from "../../assets/vsCode.jpg"
import terr from "../../assets/terr.png"
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
                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 mxa-w-2xl'>
                    <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
                        <img className="my-4 w-6 font-semibold text-gray-700'" src={code1} alt="" />
                        {/* <h4 className='my-4 font-semibold text-gray-700'>codeImage</h4> */}
                        <h3 className='my-4 font-semibold text-gray-700' >Languages</h3>
                        <p className='text-gray-600 text-sm'>HTML, Pytohon, NextJs, React, Terraform</p>
                    </li>
                    <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
                        <h4 className='my-4 font-semibold text-gray-700'>code</h4>
                        <h3 className='my-4 font-semibold text-gray-700'>Education</h3>
                        <p className='text-gray-600 text-sm'>B.Tech in computer Science</p>
                    </li>
                    <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
                        <h4 className='my-4 font-semibold text-gray-700'>codeImage</h4>
                        <h3 className='my-4 font-semibold text-gray-700'>Projects</h3>
                        <p className='text-gray-600 text-sm'>i have build 5 projects in different domain</p>
                    </li>
                </ul>
                <h4 className='my-6 text-gray-700'>Tools i used</h4>
                <ul className='flex items-center gap-3 sm:gap-5'>
                    <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                        <img src={aws} alt="" />
                    </li>
                    <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                        <img src={spss} alt="" />
                    </li>
                    <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                        <img src={terr} alt="" />
                    </li>
                    <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                        <img src={python} alt="" />
                    </li>
                    
                </ul>

            </div>
        </div>
    </div>
  )
}

export default AboutMe
