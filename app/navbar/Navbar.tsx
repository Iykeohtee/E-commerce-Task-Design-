import Image from "next/image" 
import Link from "next/link"

const navbar = () => {
  return (
    <nav
    className="nav_container flex justify-between items-center bg-transparent fixed w-[1200px] h-[90px] ml-[70px]
     z-10
    ">      

         {/* First Container for the logo */}
           <div>
           <Image 
            src='/logo.png'  
            alt="Company Logo" 
            height={18} 
            width={92}
            style={{ objectFit: 'contain' }}  
            />   
           </div>

           {/* Second Container for the pages */}

          <div className="flex justify-around w-[409.55px] h-[89px] ml-[-500px] py-[36.5px] px-0 gap-[40px]"> 
                  <span><Link href="/">Home</Link></span>    
                  <span><Link href="/pages">Pages</Link></span>
                  <span><Link href="/shop">Shop</Link></span>    
                  <span><Link href="/portfolio">Portfolio</Link></span>
                  <span><Link href="/blog">Blog</Link></span>           
          </div>


             {/*Third Container for the widgets */} 

           <div className="relative flex items-center w-[244px] h-[89px] ml-[-150px] uppercase">   
              <div className="flex flex-row items-center w-[68px] h-[17px]">
                <p className="w-[53px] h-[16px] text-[11px] font-[700]">Search</p>
                <Image src="/search.svg"
                 height={11}
                 width={12}
                 alt="Search Icon"
                />
              </div>

              <div className="flex flex-row justify-around w-[65px] h-[22px] items-center ml-[30px]">
                <p className="w-[30px] h-[15px] text-[11px] font-bold">Cart</p> 
                <Image src="/cart.svg"
                 height={15}
                 width={12}
                 alt="Add to cart"
                 style={{ left: '40px' }}
                />
                <p className="w-[6px] h-[22px] text-[11px] font-bold leading-[22px]">0</p> 
              </div>

              <div className="flex flex-row justify-around w-[24.52px] h-[22px] items-center ml-[30px]">
                <Image src="/collection.svg"
                 height={15}
                 width={12}
                 alt="Collection Icon"
                />
                <p className="w-[6px] h-[15px] text-[11px] font-bold">0</p> 
              </div>

              <div className="flex flex-row justify-around w-[24.52px] h-[22px] items-center ml-[30px]">
                <Image src="/profile.svg"
                 height={15}
                 width={14}
                 alt="Collection Icon"
                />
              </div>

            </div>

  </nav>
  )
}

export default navbar
