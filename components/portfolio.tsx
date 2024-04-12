import Image from 'next/image'
import React from 'react'

const portfolio = () => {
  return (
    <div className='w-[1200px] mt-[50px] ml-[70px]'>
      
     <div className='flex justify-center items-center w-[1200px]'>

       <div className='flex justify-between w-[60%]'>
        <Image src='/lady1.png' height={490} width={350} alt='Main home Image'/>
        <Image src='/lady2.png' height={490} width={350} alt='Main home Image'/> 
       </div>

       <div>
        <div className='flex flex-col justify-center items-start w-[40%] ml-[30%]'>
            <h1 className='text-[20px] font-[600] leading-[30px]'>Meet The Artists Behind The Corsen Maria & Sophia</h1>
            <p className='text-[10px] font-[600] mt-5'>
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <button className='text-[10px] w-[70%] h-[30px] mt-5'>
              Shop Collection
            </button>
        </div>

       </div>
     </div>



    </div>
  )
}

export default portfolio