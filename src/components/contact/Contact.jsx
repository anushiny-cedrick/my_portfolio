import React from 'react'

const Contact = () => {
  return (
    <div id="Contact" className='w-ful px-[12%] py-10 scrol-mt-20'>
        <h4 className='text-center mb-2 text-lg'>Connect with me</h4>
        <h2 className='text-center text-3xl'>Get in touch</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>i will love to here from you, if you have any question, please used the form below</p>
        <form action="" className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-2 gap-6 mt-8 mb-10'>
                <input type="text" name="" id="" placeholder='Enter your name' className='flex-1  p-3 outline-none border-[0.5px] border-gray-500 rounded-md bg-white' />
                <input type="text" name="" id="" placeholder='Enter your email' className='flex-1  p-3 outline-none border-[0.5px] border-gray-500 rounded-md bg-white' />
            </div>
            <textarea name="" id="" rows={6} placeholder='Enter your message' className='w-full p-4 outline-none border-[0.5px] border-gray-500 rounded-md bg-white mb-6'>

            </textarea>
            <button className='py-3 px-6  w-max items-center border-[0.5px] border-gray-500 rounded-full bg-black/80 text-white mx-auto hover:bg-black duration-500 '>Submit Now</button>

        </form>
    </div>
  )
}

export default Contact
