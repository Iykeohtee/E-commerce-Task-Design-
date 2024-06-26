import type { Metadata } from "next";
import { Noto_Sans_Old_North_Arabian } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/footer";


const noto_san = Noto_Sans_Old_North_Arabian({
  subsets: ["latin"],
 variable: "--my-font-family",
 weight: '400'
})

export const metadata: Metadata = {
  title: "AppNovia E-commerce",
  description: "Generated by create next app",     
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; 
}>) {
  return (
    <html lang="en">  
      <body className={`${noto_san.className} overflow-x-hidden`}>      
        <Navbar/>    
        {children} 
        <Footer/>
       </body>   
    </html>
  );
}
