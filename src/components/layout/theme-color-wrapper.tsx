'use client'
import { ReactNode, useEffect } from "react";
import gsap from "gsap";
function ThemeColorWraper({children}:{children:ReactNode}) {
    useEffect(()=> {console.log(gsap.to(".box", { x: 200,rotation: 360,duration:2 }))})
   
    
    return <>{children}
    <div className="box w-[100px]  h-[100px] bg-white"></div>
    </>;

}

export default ThemeColorWraper;