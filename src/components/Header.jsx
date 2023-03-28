import React from 'react'
import ieilogo from '../assets/images/ieilogo.png'
import pylogo from '../assets/images/pylogo.png'
function Header(){
  return (
    <div className='w-full h-32 bg-transparent md:px-10'>
         <div className=' h-20 px-6 space-x-12  flex flex-row justify-between'>
            <button><a href='https://ieicsetkmce.in/'><img src={ieilogo} alt="" className='w-20 h-16 overflow-x-hidden mt-12' /></a></button>
            <img src={pylogo} alt="" className='w-10 h-10  md:w-10 md:h-10   overflow-x-hidden mt-12  ' />
        </div>
    </div>
  )
}
export default Header
