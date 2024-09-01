import React from 'react'

const Projetcs = () => {
  return (
    <div id="Project" className='w-ful px-[12%] py-10 scrol-mt-20'>
        <h4 className='text-center mb-2 text-lg'>Progressing</h4>
        <h2 className='text-center text-3xl'>My latest projetcs</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>My vaarious work showing my expertise in various domains</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
            

                {/* Web Design Project */}
         <div>
            <div className='aspect-square bg-[url("./assets/travel.jpg")] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group '>
                <div className='bg-white w-10/12 absolute rounded-md bottom-5 left-1/2 -translate-x-1/2 py-3 px-5  duration-500 group-hover:bottom-7'>
                    <h3>Web Design Projects</h3>
                </div>

            </div>
        <a href="#">Explore More</a>
        </div>
                {/* Web Design Project */}


                {/* Cloud Project */}
         <div>
            <div className='aspect-square bg-[url("./assets/cloud.jpg")] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group '>
                <div className='bg-white w-10/12 absolute rounded-md bottom-5 left-1/2 -translate-x-1/2 py-3 px-5  duration-500 group-hover:bottom-7'>
                    <h3 className='text-center'>Cloud Projects AWS</h3>
                </div>

            </div>
        <a href="#">Explore More</a>
        </div>
                {/* Cloud Project */}

{/* Data Analyst project */}
         <div>
            <div className='aspect-square bg-[url("./assets/data.jpg")] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group '>
                <div className='bg-white w-10/12 absolute rounded-md bottom-5 left-1/2 -translate-x-1/2 py-3 px-5  duration-500 group-hover:bottom-7'>
                    <h3>Data Analyst Projects</h3>
                </div>

            </div>
        <a href="#">Explore More</a>
        </div>
{/* Data Analyst project */}

{/* devops projetcs */}
         <div>
            <div className='aspect-square bg-[url("./assets/dev.jpg")] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group '>
                <div className='bg-white w-10/12 absolute rounded-md bottom-5 left-1/2 -translate-x-1/2 py-3 px-5  duration-500 group-hover:bottom-7'>
                    <h3>Devops Projects</h3>
                </div>

            </div>
        <a href="#">Explore More</a>
        </div>
{/* devops projetcs */}

{/* Machine Learning */}
         <div>
            <div className='aspect-square bg-[url("./assets/machine.jpg")] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group '>
                <div className='bg-white w-10/12 absolute rounded-md bottom-5 left-1/2 -translate-x-1/2 py-3 px-5  duration-500 group-hover:bottom-7'>
                    <h3>Machine Learning</h3>
                </div>

            </div>
        <a href="#">Explore More</a>
        </div>
{/*Machine Learning  */}
            
        </div>
       
    </div>
  )
}

export default Projetcs
