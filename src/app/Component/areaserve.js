const Area=()=>{
    const data=[{img:"Lucknow.jpg" ,name:"LUCKNOW"},{img:"kanpur.jpg",name:"KANPUR"},{img:"pryagraj.avif",name:"PRAYAGRAJ"}]
    return(
<>
<div className="w-full py-[100px]  justify-center items-center z-[4] flex flex-col gap-5 sm:gap-7 px-2 text-center text-black font-serif ">
      <div className="w-full  text-4xl font-[500] pb-[20px]">Area we Serve</div>
      
      <div className="flex flex-wrap justify-center gap-6 text-white">
      {
        data.map((arr,i)=>{return(
            <div key={i} className="max-w-[300px] h-[350px] w-full sm:max-w-[360px] bg-white border border-gray-200 rounded-[30px] sm:rounded-[40px] shadow-sm dark:border-gray-700 flex flex-col gap-5  justify-center items-center outline-offset-2 overflow-hidden relative">
      <img src={arr.img} className="h-full w-full"></img>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-4xl font-[600]"><div className="w-fit h-fit">{arr.name}</div></div>
    </div>
        )})
      }
      
    
   
    </div>

     </div>
</>
    )
}
export default Area;