import Image from 'next/image'
import React from 'react'

const socials = () => {
  return (
    <div className='w-[1550px] mt-[70px]'>

      <div className='ml-[70px]'>
        <h1 className='text-[20px] font-[600]'>Instagram</h1>
        <p className='text-[10px] font-[600]'>Follow us on @qodeinteractive</p>
      </div>

      <div className='flex justify-evenly h-[230px] ml-[-200px] mt-[30px]'>
        
        <Image src='/instagram-img-2.png' height={210} width={230} alt='Instagram_Images' />
        <Image src='/instagram-img-3.png' height={210} width={230} alt='Instagram_Images'/>
        <Image src='/instagram-img-4.png' height={210} width={230} alt='Instagram_Images'/>
        <Image src='/instagram-img-5.png' height={210} width={230} alt='Instagram_Images'/>
        <Image src='/instagram-img-6.png' height={210} width={230} alt='Instagram_Images'/>
        <Image src='/instagram-img-7.png' height={210} width={230} alt='Instagram_Images'/>
        <Image src='/instagram-img-1.png' height={210} width={230} alt='Instagram_Images'/> 
      </div>

      <div></div>

    </div>
  )
}

export default socials