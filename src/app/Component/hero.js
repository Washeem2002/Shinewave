'use client'
const Hero=()=>{
    return (
        <div className="w-full relative z-[2] h-[70vh] sm:h-[85vh]"> {/* Maintains 16:9 ratio */}
        <video 
          autoPlay 
          muted 
          playsInline 
          preload="auto" 
          className="w-full h-full object-cover absolute top-0 left-0"
          onEnded={(e) => e.target.play()} // Restart instantly on end
        >
          <source src="hero2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>  
        <div className="h-full w-full absolute top-0 left-0 bg-black bg-opacity-70   flex justify-center items-center z-[4] flex flex-col gap-2 sm:gap-2 px-2 text-center font-mono">
        <div className=" text-green-700 text-xl sm:text-3xl font-bold">
    Solar Maintenance Solutions
  </div>
  <div className=" text-white text-2xl sm:text-5xl font-extrabold">
    Renewable energy experts
  </div>
  <div className=" text-white text-xl sm:text-4xl font-semibold">
    Providers of green energy for your home
  </div>
        </div>
      </div>
      
        )
}
export default Hero;