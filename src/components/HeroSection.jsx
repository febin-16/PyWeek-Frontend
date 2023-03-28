import React from 'react'
import poly from '../assets/images/pylogo.png'
function HeroSection({id}){
    console.log(id);
  return (
    <div className='w-full  h-[70vh] md:h-screen '>
       <div className='h-fit w-fit p-14 mt-32 md:mt-10 overflow-hidden absolute top-14 right-2'>
            <img src={poly} alt="" className=' opacity-[0.2] mt-3   ml-48 w-auto h-auto    overflow-hidden' />
        </div>
        <div className='h-4/6  ml-10 md:ml-20 md:mt-10 flex flex-col justify-center'>
                    <div className='mt-10 flex flex-row items-center '>
                        <h1 className=' mb-1 text-white font-medium text-xl'>
                            IEI CSE TKMCE
                        </h1>
                    </div>
                    <div data-aos-duration="200" data-aos="fade-up"
                        className=' mt-4  md:mt-5 flex flex-col items-start text-white'>
                        <h1 className='animate-pulse text-4xl md:text-10xl font-black font-font1'>PYWEEK 2.0</h1>
                        <h2 className='text-xl lg:text-2xl font-semibold pt-6 uppercase font-font1'> <span className='text-white text-3xl md:text-4xl uppercase font-font1'>APRIL 3</span></h2>
                        <button className='bg-blue-900 hover:bg-blue-800 font-semibold rounded-md mt-10  px-4 py-1 z-[30]'
                           onClick={() => { if (id !== null) document.getElementById(id).scrollIntoView({ behavior: "smooth" }) }}
                        >
                            Register Now
                        </button>
                    </div>

          </div>
    </div>
  )
}
export default HeroSection
