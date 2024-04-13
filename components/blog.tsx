import React from 'react'
import { blogs } from '@/utilities/constants' 
import Image from 'next/image'

const blog = () => {
  return (
    <div className='flex flex-col ml-[70px] mt-[40px] w-[1200px]'>
      <div className='flex flex-col justify-center items-center w-[1200px] text-center'>
        <h1 className='font-[600] text-[25px]'>Read Our Blog Posts</h1>
        <p className='w-[300px] text-[11px] leading-[15px] mt-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing ectetur elit, sed do eiusmod.</p>
      </div>


      <div className='flex flex-row justify-between mt-[40px]'>
          {
            blogs.map((blog, i) => (
              <div key={i} className='w-[370px] relative'>
                <Image src={blog.image} height={350} width={370} alt='blog_img'/>
                <button 
                 className='absolute flex justify-center items-center top-[10px] left-[10px] w-[130px] h-[20px] text-[8px] uppercase font-[600] bg-white' >
                  {blog.date}
                </button>
                <p className='blog_text flex justify-center items-center text-[10px] uppercase'>{blog.detail}</p>
                <p className='flex justify-center items-center text-[17px] text-center mt-[10px] p-[5px] capitalize font-[600]'>{blog.description}</p>
                <p className='flex justify-center items-center text-[10px] uppercase underline p-1'>{blog.more}</p>
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default blog