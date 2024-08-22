import React from 'react'

const Projetcs = () => {
  return (
    <div id="Project" className='w-ful px-[12%] py-10 scrol-mt-20'>
        <h4 className='text-center mb-2 text-lg'>Progressing</h4>
        <h2 className='text-center text-3xl'>My latest projetcs</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>My vaarious work showing my expertise in various domains</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
            <div className='aspect-square bg-[url("./assets/camera.jpg")] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group '>
            <div className='bg-white w-10/12 absolute rounded-md bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
            <div>
                <h2 className='font-semibold'>Ecomerce</h2>
                <p className='text-sm text-gray-700'>Shopping App</p>
            </div>
            <div className='border rounded-full border-black w-9 aspect-square flex item center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition '>
                <h4 className='w-30'>Send</h4>
            </div>

            </div>

            </div>


         <div className='aspect-square bg-[url("./assets/travel.jpg")] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'>
         <div className='bg-white w-10/12 absolute rounded-md bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
            <div>
                <h2 className='font-semibold'>Ecomerce</h2>
                <p className='text-sm text-gray-700'>Shopping App</p>
            </div>
            <div className='border rounded-full border-black w-9 aspect-square flex item center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition '>
                <h4 className='w-30'>Send</h4>
            </div>

            </div>

         
         
 
         </div>


         <div className='aspect-square bg-[url("./assets/camera.jpg")] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group '>
            <div className='bg-white w-10/12 absolute rounded-md bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
            <div>
                <h2 className='font-semibold'>Ecomerce</h2>
                <p className='text-sm text-gray-700'>Shopping App</p>
            </div>
            <div className='border rounded-full border-black w-9 aspect-square flex item center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition '>
                <h4 className='w-30'>Send</h4>
            </div>

            </div>

        </div>
            
        </div>
        <a href="#" className='w-max flex items-center justify-center gap-2 text-gray-700 py-3 px-10 mx-auto my-20 border-[0.5px] border-gray-700 rounded-full hover:bg-[#fcf4ff] duration-500'>Show More</a>
    </div>
  )
}

export default Projetcs
