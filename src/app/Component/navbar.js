"use client"

import { useState } from "react";
import Image from "next/image";
import { TfiAlignJustify } from "react-icons/tfi";
import { RxCross1 } from "react-icons/rx";
import { FaPhone } from "react-icons/fa";
import { IoLogoInstagram, IoMdMail } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";

const Navbar=()=>{
    const [menu,setmenu]=useState(true);
    return(
        

<nav className="w-full p-4  flex flex-col items-center gap-1 fixed z-[5]">
<div className="max-w-6xl w-full px-4 sm:px-8    py-5 "><div className="flex gap-2 w-fit h-fit float-left sm:float-right"><div className="p-2 bg-white rounded border-2 border-blue-900" onClick={() =>{ document.location.href ='https://wa.me/918218154669';}}><FaPhone/></div><div className="p-2 bg-white rounded border-2 border-blue-900" onClick={() =>{ document.location.href ='https://wa.me/918896447203';}}><FaPhone/></div><div className="p-2 bg-white rounded border-2 border-blue-900" onClick={() =>{ document.location.href ='mailto:shinewave.maintenances@gmail.com';}}><IoMdMail/></div><div className="p-2 bg-white rounded border-2 border-blue-900" onClick={() =>{ document.location.href ='https://wa.me/918400588966';}}><IoLogoInstagram/></div><div className="p-2 bg-white rounded border-2 border-blue-900" onClick={() =>{ document.location.href ='https://wa.me/918400588966';}}><FaLinkedin/></div></div><div></div></div>
    <div className="max-w-6xl w-full px-7 py-3 bg-white flex rounded-full gap-4 items-center border border-indigo-600 outline-offset-5">
       <div className="w-fit h-fit flex-1 "><img src="/logo.png" className="w-[100px] h-[40px] sm:w-[130px] sm:h-[60px]"></img></div>
       <div className={`h-[100vh] w-full gap-8 ${menu?"hidden":""} p-3 sm:p-0 sm:h-fit sm:w-fit flex flex-col sm:gap-7 text-lg absolute top-0 left-0 bg-white bg-opacity-90 sm:bg-transparent sm:text-xl sm:flex sm:static sm:flex-row`}>
          <div className="w-full py-4 px-4 sm:hidden" onClick={()=>{setmenu(true)}}><div className="px-2 py-2 sm:hidden text-xl border w-fit float-right"><RxCross1 /></div></div>
          <a href="#about" onClick={()=>{setmenu(true)}}>About Us</a>
          <a href="#service" onClick={()=>{setmenu(true)}}>Services</a>
          <a href="#contact" onClick={()=>{setmenu(true)}}>Contect Us</a>
       </div>
       <div className="px-6 md:px-10  bg-blue-500 py-4 md:py-5 rounded-full bold hidden md:block h-fit w-fit text-xl text-white">8218154669</div>
       <div className="px-2 py-2 sm:hidden text-xl border" onClick={()=>{setmenu(false)}}><TfiAlignJustify /></div>
    </div>
</nav>


    )
}
export default Navbar;