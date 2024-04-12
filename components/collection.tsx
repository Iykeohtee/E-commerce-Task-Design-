import Link from 'next/link';
import { details } from "@/utilities/constants" 
import Image from 'next/image';

const collection = () => {    
  return (
    <div className='w-[1200px] ml-[70px] mt-[30px]'> 

      <div className='w-full flex justify-between items-center'>
        <div className='w-[496px] flex justify-between'>
          <span className='text-[9px]'><Link href="#">All Products</Link></span>
          <span className='text-[9px]'><Link href="#">Lifestyle</Link></span>
          <span className='text-[9px]'><Link href="#">Brand</Link></span>
          <span className='text-[9px]'><Link href="#">Outwear</Link></span>
        </div>
        <div>
        <span className='text-[9px]'><Link href="#">Filter</Link></span>
         
        </div>
      </div>

      <div className='flex flex-wrap w-full'>
        {details.map((detail) => (
          <div key={detail.name} className='relative bg-slate-300 border-[1px] border-black border-solid'>
              <Image
               src={detail.img}
               height={300}
               width={298}
               alt='Collection Image'
              />
            <div className='collection_detail relative flex justify-between px-7 py-2 bg-white'>
            <div>
              <span><p>{detail.name}</p></span>
              <span><p>{detail.price}</p></span>
            </div>
              <div className='collection_img absolute top-0 right-0'>
              <Image src={detail.cart} height={16} width={12} alt='cart_img'/>  
              </div>
            </div>
                <div className='absolute flex justify-between w-[90%] top-[20px] left-[20px]'>
                  <h1 
                  className=
                  {`${detail.status && 
                  'uppercase text-[10px] w-[40px] h-[17px] border border-black border-solid bg-white text-center font-[700]'}`}> 
                    {detail.status}
                    </h1>   
                    <div className='flex flex-col gap-1'>
                       <Image src={detail.collection} height={11} width={9} alt='collection'/>
                       <Image src={detail.group} height={11} width={9} alt='group'/>
                    </div>
                </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default collection;