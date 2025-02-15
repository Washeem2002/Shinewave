import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
const Footer=()=>{
    return(
        <footer className="w-full  bg-black flex justify-center text-white p-7" id="contact">
            <div className="w-[1000px]">
         <div className="w-full  flex flex-col gap-3 sm:flex sm:flex-row sm:flex-wrap   sm:justify-center sm:justify-between sm:gap-3 sm:items-center">
           <div className=" flex flex-col md:flex-row gap-2 justify-center ">
            <div className="text-[50px] md:text-[70px] text-green-600 flex justify-center"><MdEmail/></div>
            <div className="text-center flex justify-center flex-col"><div className="text-md md:text-lg font-[700]">Support & Email</div><div className="text-sm">shinewave.maintenances@gmail.com</div></div>
           </div>
           <div className=" flex flex-col md:flex-row gap-2 justify-center ">
            <div className="text-[50px] md:text-[70px] text-green-600 flex justify-center"><FaPhoneFlip/></div>
            <div className="text-center flex justify-center flex-col"><div className="text-md md:text-lg font-[700] flex justify-center flex-col">Contact Us</div><div className="text-sm">918218154669</div> <div className="text-sm">918896447203</div></div>
           </div>
           <div className=" flex flex-col md:flex-row gap-2 justify-center ">
            <div className="text-[50px] md:text-[70px] text-green-600 text-center flex justify-center"><FaLocationDot/></div>
            <div className="text-md md:text-lg font-[700] flex justify-center flex-col text-center"><div className="text-md md:text-lg font-[700]">Location</div><div className="text-sm">Saink enclave ,near CRPF Camp ,Lucknow ,226002</div></div>
           </div>
           
         </div>
         <div></div>
         </div>

        </footer>
    )
}
export default Footer;