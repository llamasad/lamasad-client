'use client';
import { ReactNode } from 'react';
import gsap from 'gsap';
import IconThemeTrans from '../animation/icon-theme-trans';
function ThemeColorWraper({ children }: { children: ReactNode }) {
    // useEffect(()=> {console.log(gsap.to(".box", { x: 200,rotation: 360,duration:2 }))})

    return (
        <>
            <div className="theme_wrapper">{children}</div>
            <IconThemeTrans />
        </>
    );
}

export default ThemeColorWraper;
