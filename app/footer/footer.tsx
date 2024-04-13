import Image from 'next/image'
import React from 'react'

const footer = () => {
  return (
    <div className='mt-[70px]'>
      <div className='flex justify-between w-[1200px] ml-[70px]'>
         <div className='flex flex-col justify-center gap-3 w-[15%]'>
            <Image src='/logo.png' height={18} width={92} alt='logo'/> 
            <p className='text-[10px] font-[600]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
         </div>

         <div className='flex flex-col gap-2 w-[15%] text-[10px] font-[700]'>
            <p className='uppercase'>Support</p>
            <p>Help & Contact Us</p>
            <p>Return and Refunds</p>
            <p>Online Stores</p>
            <p>Privacy Policy</p>
         </div>

         <div className='flex flex-col gap-3 w-[15%]'>
            <h1 className='text-[10px] uppercase font-[700]'>Company</h1>
            <div className='bg-black w-[30%] h-[10px]'></div>
            <div className='bg-black w-[25%] h-[10px]'></div>
            <div className='bg-black w-[30%] h-[10px]'></div>
            <div className='bg-black w-[10%] h-[10px]'></div>
         </div>

         <div className='w-[15%] flex flex-col justify-center gap-4'>
            <h1 className='text-[11px] font-[700] uppercase'>Locations</h1>
            <p className='text-[11px] w-[700]'>Vienna, Hansalgasse, Austria</p>
            <p className='text-[11px] w-[700]'>Berlin, Buschallee, Germany</p>
            <p className='text-[11px] w-[700]'>The Piazza, London, UK</p>
         </div>

         <div className='flex flex-col gap-4 w-[15%]'>
            <h1>Get The latest News</h1>
            <div className='email_footer flex justify-between w-[full] py-2'>
                <h1 className='text-[10px] font-[700]'>Email Address</h1>
                <Image src='/arrow.svg' height={20} width={20} alt='arrow'/>
            </div>
         </div>
         
      </div>



      <div className='right_footer w-screen mt-[50px]'>
        <div className='w-[1200px] flex justify-between ml-[70px] mt-3'>
            
        <div className='flex gap-1 justify-center items-center'>
            <h1 className='text-[10px] font-[700]'>&copy; 2023 </h1>
            <div className='bg-black w-10 h-2'></div>
            <h1 className='text-[10px] font-[700]'>All Rights Reserved</h1>
        </div>

        <div className=''>
           
        </div>
          <h1 className='text-[10px] font-[700]'>Eng | Fra | Skr</h1>
        </div>

      </div>

    </div>
  )
}

export default footer