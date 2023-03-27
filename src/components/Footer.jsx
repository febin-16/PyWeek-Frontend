import React from 'react'

const Footer = () => {
    return (
        <div className=" text-white w-full h-24 
      bg-gradient-to-b from-middle to-bottom
         flex flex-row items-end mt-5">
            <div className='text-left ml-2 mb-3 divide-y'>
                <p className=''>Contact Us</p>
                <div className='flex flex-col'>

                    <a href='http://wa.me/6282483670' target="_blank">Sanjay: +91 6282483670</a>
                    <a href='http://wa.me/9605627316' target="_blank">Deepak: +91 9605627316</a>

                </div>

            </div>


        </div>

    )
}

export default Footer