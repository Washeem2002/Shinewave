import Image from "next/image";
import Hero from "./Component/hero";
import About from "./Component/aboutus";
import Services from "./Component/services";
import Coustomer from "./Component/coustomer";
import Area from "./Component/areaserve";

export default function Home() {
  return (
    
    <>
    <Hero></Hero>
    <About></About>
    <Services/>
    <Area></Area>
     <Coustomer/> 
    
    </>
  );
}
