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

      <div className='relative flex mt-[70px] border border-black border-solid p-[30px] w-screen'>
        <div className='widget absolute top-0 left-0 flex justify-center items-center gap-3 h-[100%] w-[25%]'> 
          <Image src='/svg10.svg' height={20} width={20} alt='Fast Delivery'/>
          <p className='uppercase text-[10px] font-[600]'>Fast Delivery</p>
        </div>

        <div className='widget absolute top-0 left-[25%] flex justify-center items-center gap-3 h-[100%] w-[25%]'> 
          <Image src='/svg (1).svg' height={20} width={20} alt='Fast Delivery'/>
          <p className='uppercase text-[10px] font-[600]'>Free Returns</p>
        </div>

        <div className='widget absolute top-0 left-[50%] flex justify-center items-center gap-3 h-[100%] w-[25%]'> 
          <Image src='/svg (2).svg' height={15} width={15} alt='Fast Delivery'/>
          <p className='uppercase text-[10px] font-[600]'>Secret Checkout</p>
        </div>

        <div className='widget absolute top-0 left-[75%] flex justify-center items-center gap-3 h-[100%] w-[25%]'> 
          <Image src='/svg (3).svg' height={20} width={20} alt='Fast Delivery'/>
          <p className='uppercase text-[10px] font-[600]'>Order Tracking</p>
        </div>

      </div>

    </div>
  )
}

export default socials