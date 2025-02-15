"use client" 

import { FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { useRef } from "react";

const Coustomer=()=>{
  const ref=useRef();
    const ref2=useRef();
  const data = [
    { name: "Rohit Sharma", date: "2023-07-15", dis: "Great service! My solar panels stay clean, and energy output has improved significantly." },
    { name: "Priya Mehta", date: "2023-09-25", dis: "Effortless monitoring and regular cleaning keep my panels working at peak efficiency!" },
    { name: "Amit Verma", date: "2024-08-13", dis: "Smart tracking + professional cleaning = better savings. Totally worth it!" },
    { name: "Neha Iyer", date: "2024-09-03", dis: "Reliable service! No more dust buildup, and my electricity bills are lower." },
    { name: "Vikram Nair", date: "2023-01-08", dis: "Punctual cleaning, real-time monitoring, and great support. Perfect combo!" },
    { name: "Ananya Kapoor", date: "2023-12-20", dis: "The cleaning service is fantastic! My solar panels are spotless, and efficiency has improved." },
    { name: "Karan Malhotra", date: "2024-06-18", dis: "Monitoring and maintenance made easy. Now I don’t have to worry about dust affecting performance!" },
    { name: "Simran Kaur", date: "2025-10-18", dis: "Impressed with their regular cleaning schedule. I can see a clear difference in power generation!" },
    { name: "Rajesh Gupta", date: "2024-09-23", dis: "A must-have service for solar panel owners. Efficient, timely, and hassle-free maintenance." },
    { name: "Tanya Bhatt", date: "2024-06-30", dis: "Best decision ever! No more manual cleaning, and my panels work like new." }
  ];

  const left=(e)=>{
    e.preventDefault();
      ref.current.scrollTo({
          left: ref.current.scrollLeft -350,
          behavior: 'smooth',
        });

  }
  const right=(e)=>{
    e.preventDefault();
    ref.current.scrollTo({
      left: ref.current.scrollLeft +332,
      behavior: 'smooth',
    });

  }
  
    return (
        <>
           <div className="w-full py-[100px]  justify-center items-center flex flex-col gap-5 sm:gap-7 px-2  text-black font-serif bg-black-rgba relative">
      <div className="w-full text-center text-4xl font-[500] pb-[20px]">Reviews</div>
      
      <div className="max-w-[1200px] w-full h-[200px] relative"><div className="     flex gap-8 overflow-scroll overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] " ref={ref}>
        {
          data.map((arr,i)=>{return(
            <div className="flex  flex-col  border-b-[5px] border-white gap-3  w-[300px] h-[200px] bg-white shrink-0 p-2 rounded-lg border-2 border-black" key={i}>
            <div className=" flex items-center  gap-3 h-fit">
             <div className=" w-[25px] h-[25px] sm:w-[40px] sm:h-[40px] rounded-full bg-blue-600   text-white relative"><FaUser className="  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"/></div>
             <div className="  text-[19px] "><div>{arr.name}</div><div className="text-[12px] text-white-900 opacity-70 "> {arr.date}</div></div>
             <div className="    text-[15px]  bg-blue-600 text-white rounded flex items-center gap-[4px] px-1"><div>5</div><div className="w-fit h-fit"><FaStar/></div></div>

            </div>
            
            <div className=" revew-detail w-full  pl-[35px]    h-fit ">
             
               <div className="w-full overflow-hidden break-words pl-[10px] h-full" ><p>{arr.dis}</p></div>

            </div >
            



         </div>
          )})
        }
      
        <div className="w-[40px] h-[40px] absolute top-1/2 left-6 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full flex justify-center items-center text-[15px]" onClick={left}><FaLessThan></FaLessThan> </div>
        <div className="w-[40px] h-[40px] absolute top-1/2 right-6 transform translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full flex justify-center items-center text-[15px]" onClick={right}><FaGreaterThan></FaGreaterThan></div>

        

        

        
        
       

      </div>
      </div>



     </div>
        </>
    )
}
export default Coustomer;