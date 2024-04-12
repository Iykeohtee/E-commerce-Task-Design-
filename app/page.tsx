import Image from "next/image";
import Collection from '@/components/collection' 
import Gender from '@/components/gender' 
import Blog from '@/components/blog' 
import Portfolio from '@/components/portfolio' 
import Socials from '@/components/socials' 

export default function Home() {
  return (
     <>
    <main className="relative flex justify-center items-center">  
      <div className="hero_container w-[1920px] h-auto
      "> 

      <Image
        src="/hero.png"
        height={1100}
        width={1964} 
        alt="Hero_Img"
        style={{ 
          position: 'relative', top: '-10px', objectFit: 'cover'
        }}
       />

         <div className="absolute top-[350px] flex justify-between w-full">
         <div className="ml-[70px] top-[350px]">
         <Image
           src="/left.png"
           height={28}
           width={15}
           alt="left"
           style={{ cursor: "pointer"}}
          />
         </div>

         <div className="mr-[70px] top-[350px]">
         <Image
           src="/right.png"
           height={28}
           width={15}
           alt="right"
           style={{ cursor: "pointer"}} 
          />
         </div>
 
         </div>

         <div className="absolute ml-[70px] top-[540px]">
           <h1 className="text-[40px] font-[400] w-[329px] h-[68px] leading-[61px]">Mixed Titles</h1>
           <p className="w-[310px] h-[46px] text-[13px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, accusantium!
           </p>
           <button className="mt-[5px] uppercase font-[600] text-[12px] leading-[17px]">
            Shop Collection
           </button>  

         </div>
           <h1 
           className="w-[640px] h-[117px] text-[17px] font-[500] leading-[25px] mt-[70px] ml-[340px] text-center"> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Provident dicta neque dolorem, iusto eos quis consectetur obcaecati amet, error, nostrum repellat et. 
           Natus possimus dolor fugit?
         </h1>

      </div>
    </main> 

      <Collection/> 
      <Gender/> 
      <Blog/>
      <Portfolio/> 
      <Socials/>
     </>
  );
}
