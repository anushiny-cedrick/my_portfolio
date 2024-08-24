import React from 'react'
import ced2 from "../../assets/ced2.png"
import code1 from "../../assets/code1.png"
import aws from "../../assets/aws.png"
import spss from "../../assets/spss-logo.png"
import python from "../../assets/python.jpg"
import vscode from "../../assets/vsCode.jpg"
import terr from "../../assets/terr.png"
import docker from "../../assets/docker.png"
import git from "../../assets/git.png"
import excel from "../../assets/excel.jpg"
import jenkins from "../../assets/jenkins.png"
import kubernetes from "../../assets/kubernestes.png"
import react  from "../../assets/react.png"
import R_logo from "../../assets/R_logo.png"
import next from "../../assets/next.jpg"
import power from "../../assets/power Bi.jpg"
import numpy from "../../assets/numpy.png"
import pandas from "../../assets/pandas.png"
import sk_learn from "../../assets/sckit_learn.png"
import tensor from "../../assets/tensor.png"
import keras from "../../assets/keras.png"
const AboutMe = () => {
  return (
    <div id="About" className='w-ful px-[12%] py-10 scrol-mt-20'>
        <h4 className='text-center mb-2 text-lg'>Introduction</h4>
        <h2 className='text-center text-3xl'>About Me</h2>
        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='max-w-max mx-auto relative'>
                <img src={ced2} alt="" className='w-64 sm:w-80 rounded-3xl max-w-none' />
                <div className='bg-white w-[50%] aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)], flex item-center justify-center'>

                </div>
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
                {/* main tool i used in various div */}
                <div>
                    <div>
                        <h3>DeVops Tools</h3>
                    <ul className='flex items-center gap-3 sm:gap-5'>
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <img src={git} alt="" />
                        </li>
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <img src={jenkins} alt="" />
                        </li>
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <img src={terr} alt="" />
                        </li>
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <img src={docker} alt="" />
                        </li>
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <img src={kubernetes} alt="" />
                        </li>
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <img src={aws} alt="" />
                        </li> 
                    </ul>
                    </div>

                    {/* data analysis */}
                    <div >
                        <h3>Data Analysis Tools</h3>
                        <ul className='flex items-center gap-3 sm:gap-5'>

                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square  border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <img src={excel} alt="" />
                        </li>
                    

                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square  border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <img src={spss} alt="" />
                        </li>
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square  border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <img src={R_logo} alt="" />
                        </li>
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                                <img src={python} alt="" />
                            </li> 
                        </ul>
                    </div>
                    {/* Web Development */}
                    <div>
                    <h3>Web Dvelopment</h3>
                        <ul className='flex items-center gap-3 sm:gap-5'>

                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square  border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <img src={react} alt="" />
                        </li>
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square  border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <img src={next} alt="" />
                        </li>
                        </ul>

                    </div>
                     {/* Machine and Deep learning tool */}

                     <div>
                     <h3>Machine and Deep learning </h3>
                    <ul className='flex items-center gap-3 sm:gap-5'>

                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square  border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <img src={numpy} alt="" />
                        </li>
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square  border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <img src={pandas} alt="" />
                        </li>
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square  border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <img src={sk_learn} alt="" />
                        </li>
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square  border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <img src={keras} alt="" className='w-10' />
                        </li>
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square  border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <img src={tensor} alt=""  className='w-50'/>
                        </li>
                    </ul>
                     </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default AboutMe
