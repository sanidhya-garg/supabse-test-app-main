"use client"
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";



const Test = () => {
  return (
    <div className="flex flex-row items-center "
      style={{ height: "110px", whiteSpace: "nowrap", marginRight: "10px" }}
    >

      <div className='text-white text-[40px] md:text-[50px] font-[400] lg:font-[600] lg:text-[80px]'
        style={{wordWrap: "normal" }}
      >Things in Place 
      </div >

      <div className='h-[2px] lg:h-1 ml-2 w-[90px] lg:w-[140px]'
        style={{backgroundColor: "white", position: "relative", top: "10px" }}
      >

      </div>
    </div>

  )
}

const Test2 = () => {
  return (
    <div className="flex flex-row items-center "
      style={{ height: "110px", whiteSpace: "nowrap", marginRight: "10px", position: "relative", left: "305px" }}
    >

      <div className='text-white text-[40px] md:text-[50px] font-[400] lg:font-[600] lg:text-[80px]'
        style={{ wordWrap: "normal" }}
      >Things in Place
      </div >

      <div className='h-[2px] lg:h-1 ml-2 w-[90px] lg:w-[140px]'
        style={{ backgroundColor: "white", position: "relative", top: "10px" }}
      >

      </div>
    </div>

  )
}



gsap.registerPlugin(ScrollTrigger);

const Things = () => {
  const ref = useRef();
  

  useEffect(() => {
    gsap.to(".Text1", {
      transform:"translateX(450px)",
      duration:5,
      delay: 1,
      scrollTrigger:{
        trigger:"#container .Text1",
        start:"top 80%",
        scrub:5,
        scroller:"body",
        
      },
    
      
    });
    gsap.from(".Text2", {
      transform:"translateX(450px)",
      duration:5,
      delay: 1,
      scrollTrigger:{
        trigger:"#container .Text1",
        start:"top 80%",
        scrub:5,
        scroller:"body",
        
      },
    });

    
  }, []);

  return (


 
    <div
      className="flex flex-col items-center justify-center gap-2 lg:gap-0"
      id='container'
      ref={ref}
      style={{ padding:"50px 0px", overflowX: 'hidden',
        //  border: '1px solid black' 
        }}
    >
    
   
      <div className="flex flex-row items-start Text1 gap-0">
        <Test />
        <Test /> 
        <Test />
        <Test />
      </div>

      <div className="flex flex-row items-start Text2 gap-0">
        <Test2 />
        <Test2 />
        <Test2 />
        <Test2 />
        <Test2 />
      </div>
    </div>

  );
};

export default Things;
