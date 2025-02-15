'use client'
import { useRouter } from "next/navigation";
const Services=()=>{
    const router = useRouter();
    const items = [
        {
          id: 1,
          image: "https://solarpower.guide/solar-energy-insights/images/solar-panel-cleaning.jpg",
          title: "Solar Panel Cleaning",
          description: "Regular cleaning enhances efficiency and prevents damage, as dust, dirt, and bird droppings can reduce energy output by 5-25%.",
        },
        {
          id: 2,
          image: "https://media.screeningeagle.com/thumbnail/media/Wiki/5000/image-thumb__5000__wiki-image/Solar_Panels_Inspection.3c636563.avif",
          title: "Solar Panel Inspection",
          description: "Regular inspections ensure efficiency and prevent long-term damage. Detecting issues early can improve performance and extend lifespan.",
        },
        {
          id: 3,
          image: "https://jmhpower.com/wp-content/uploads/2024/08/Solar-Panel-Repair.jpg",
          title: "Solar Panel Repair",
          description: "Timely repairs restore efficiency and prevent further damage. Identifying and fixing issues early extends lifespan and maximizes energy output.",
        },
        {
            id: 4,
            image: "https://i0.wp.com/www.opengreenenergy.com/wp-content/uploads/2021/05/F057AIKKOK1POSR.jpg?w=1024&ssl=1",
            title: "Solar Panel Monitoring",
            description: "Monitoring optimizes performance, detects issues early, and extends the lifespan of the solar panel system, ensuring maximum efficiency.",
          },
          {
            id: 5,
            image: "https://static.wixstatic.com/media/be34f4_5f0b5db9b9cc40cf9e72493488ffdbb0~mv2.jpeg/v1/fill/w_925,h_616,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/be34f4_5f0b5db9b9cc40cf9e72493488ffdbb0~mv2.jpeg",
            title: "Solar Panel Upgrade",
            description: "Upgrading enhances efficiency, boosts energy output, and extends the system’s lifespan, ensuring better performance while keeping up with the latest technology.",
          },
       
          
      ];
    return(
        <>
        <div className="w-full py-[100px]  justify-center items-center flex flex-col gap-5 sm:gap-7 px-2 text-center text-black font-serif bg-black-rgba" id="service">
      <div className="w-full  text-4xl font-[500] pb-[20px]">Our Services</div>
      
      <div className="flex justify-center items-center min-h-screen px-2 sm:px-4">
      <div className="flex flex-wrap justify-center gap-6">
  {items.map((item, index) => (
    <div key={index} className="max-w-[300px] w-full sm:max-w-[360px] bg-white border border-gray-200 rounded-[30px] sm:rounded-[40px] shadow-sm dark:border-gray-700 flex flex-col gap-5 p-3 sm:p-5 justify-center items-center outline-offset-2">
      <div className="rounded-[20px] w-full overflow-hidden h-[200px] sm:h-[230px]">
        <img className="rounded-[20px] w-full h-full" src={item.image} alt="" />
      </div>
      <div className="">
        <h5 className="mb-2 text-3xl  font-[500]">{item.title}</h5>
        <p className=" font-normal text-gray-700 ">{item.description}</p>
      </div>
      <div className="w-full text-white flex justify-center"><button className="max-w-[200px] w-full h-[50px] bg-blue-600 rounded-full" onClick={() =>{ document.location.href ='https://wa.me/918218154669';}}>Book Now</button></div>
    </div>
  ))}
</div>

    </div>



     </div>
        </>
    )
}
export default Services;