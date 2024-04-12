import Image from 'next/image'
import React from 'react'

const gender = () => {
  return (
    <div className='relative w-[1350px]  mt-[90px]'>

      {/* Shop Collection */}

      <div className='border border-black border-solid flex w-full'> 
        <div className='relative'>
          <div className='main_home'>
            <Image src='/main_home.jpg' height={600} width={900} alt='main_home'/>
          </div>
          <div className='absolute before flex flex-col justify-center items-center top-[300px] right-[220px] '>
            <h1 className='text-[30px] uppercase leading-[61px] font-[600]'>Man</h1>
            <button className='px-[15px] w-[130px] h-[30px] text-[10px] uppercase font-[600]'>Shop Collection</button>
          </div>
        </div>
        <div>
        <div>
            <Image src='/main_home1.jpg' height={600} width={900} alt='main_home1'/>
          </div>
          <div className='absolute before flex flex-col justify-center items-center top-[300px] right-[220px] '>
            <h1 className='text-[30px] uppercase leading-[61px] font-[600]'>Woman</h1>
            <button className='px-[15px] w-[130px] h-[30px] text-[10px] uppercase font-[600]'>Shop Collection</button>
          </div>
        </div>
      </div>

      {/* About Brands */}

      <div className='min-h-[250px] flex justify-around items-center relative top-7 short_code'>
        <div className='relative top-0'>
          <Image src='/quote.svg' height={20} width={25} alt='quote'/>
        </div>
        <div className='w-[600px]'>
          <h1 className='text-[15px] text-center font-[600] leading-[19px]'>Accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus
             error sit voluptatem</h1>
        </div>
        <div className='flex'>
          <Image src='/video_client2.svg' height={100} width={100} alt='video_client2'/>  
          <Image src='/video_client5.svg' height={100} width={100} alt='video_client5'/>  
          <Image src='/video_client1.svg' height={100} width={100} alt='video_client1'/>  
          <Image src='/video_client3.svg' height={100} width={100} alt='video_client3'/>  
          <Image src='/video_client6.svg' height={100} width={100} alt='video_client6'/>  
        </div>
        <div className='absolute top-[110px] flex justify-between w-[900px]'>
          <Image src='/left.png' height={20} width={10} alt='left'/>  
          <Image src='/right.png' height={20} width={10} alt='right'/>  
        </div> 
      </div>


      {/* Fashion */}
      <div className='relative w-[1200px] ml-[70px] mt-[70px]'>
        <div>
        <Image src='/elementor.jpg' height={90} width={1200} alt='elementor'/>
        </div>
        <div className='absolute top-[150px] left-[450px] flex justify-around items-center uppercase p-3 w-[350px]'>
          <h1 className='text-white text-[40px] font-[600] leading-[80px] '>Onyx</h1> 
          <Image src='/x.svg' height={15} width={15} alt='x' className='p-[3px]'/> 
          <h1 className='text-white text-[40px] font-[600] leading-[80px] '>The Flow</h1>
        </div>
         <a href='#' className='absolute top-[260px] left-[570px] text-white underline text-[10px] uppercase'>Read More</a>
      </div>
    </div>
  )
}

export default gender