'use client'
import { FaWhatsapp } from "react-icons/fa6";
const About=()=>{
    return(
     <>
     <div className="w-full pt-[100px]  justify-center items-center z-[4] flex flex-col gap-5 sm:gap-7 px-2 text-center text-black font-serif" id="about">
      <div className="w-full  text-4xl font-[500] pb-[20px]">About Us</div>
      <div className="max-w-[500px]  text-[18px] font-[300]">At ShineWave Maintenance Solutions, we are committed to ensuring that your solar energy system operates at peak performance. With years of expertise in the renewable energy industry, we provide top-quality maintenance, repair, and optimization services for residential and commercial solar systems.</div>
      <div className="max-w-[500px] w-full flex-col gap-5 flex sm:flex-row sm:justify-between">
        <div className="flex flex-col sm:flex-row justify-center items-center w-fit-h-fit gap-1"><img src="/medol.png" className="w-[60px] h-[60px]"></img><div className="flex flex-col gap-1"><div className="text-3xl">5+ years</div>Industry experience<div></div></div></div>
        <div className="flex flex-col sm:flex-row  justify-center items-center w-fit-h-fit gap-1"><img src="/thumb.png" className="w-[60px] h-[60px]"></img><div className="flex flex-col gap-1"><div className="text-3xl">500+</div>Completed Services<div></div></div></div>
      </div>


     </div>

     <div className="fixed bottom-20 right-10 sm:right-20 w-fit h-fit bg-green-700 z-10 rounded-full text-[60px] shadow-[0px_0px_45px_10px_rgba(15,10,222,1)]" onClick={() =>{ document.location.href ='https://wa.me/919793037778';}}><FaWhatsapp/></div>
     </>   
    )
}
export default About;