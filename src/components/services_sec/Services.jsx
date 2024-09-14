import React from 'react'

const Services = () => {
  return (
    <div id="Services" className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg'>what i offer</h4>
        <h2 className='text-center text-3xl'>My Services</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>have a great passion in working in various domain concerning IT, this domains include Data Analysis, Machine Learning, Deep leearing.</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10'>
            <div className='border border-gray-400 rounded-lg px-6 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500'>
                <h2>image</h2>
                <h3 className='text-lg text-gray-700 my-4'>Web Designed</h3>
                <p className='text-sm text-gray-600 leading-5'>web  design is a process of building</p>
                <a href="">Read more</a>
            </div>

            <div className='border border-gray-400 rounded-lg px-6 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500'>
                <h2>image</h2>
                <h3 className='text-lg text-gray-700 my-4'>Cloud with AWS</h3>
                <p className='text-sm text-gray-600 leading-5'>web  design is a process of building</p>
                <a href="">Read more</a>
            </div>


            <div className='border border-gray-400 rounded-lg px-6 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500'>
                <h2>image</h2>
                <h3 className='text-lg text-gray-700 my-4'>Data Analysis</h3>
                <p className='text-sm text-gray-600 leading-5'>web  design is a process of building</p>
                <a href="">Read more</a>
            </div>


            <div className='border border-gray-400 rounded-lg px-6 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500'>
                <h2>image</h2>
                <h3 className='text-lg text-gray-700 my-4'>Machine Learning</h3>
                <p className='text-sm text-gray-600 leading-5'>web  design is a process of building</p>
                <a href="" className='mt-5 text-sm'>Read more</a>
            </div>
            <div className='border border-gray-400 rounded-lg px-6 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500'>
                <h2>image</h2>
                <h3 className='text-lg text-gray-700 my-4'>Data Science</h3>
                <p className='text-sm text-gray-600 leading-5'>web  design is a process of building</p>
                <a href="" className='mt-5 text-sm'>Read more</a>
            </div>
            

        </div>
    </div>
  )
}

export default Services
