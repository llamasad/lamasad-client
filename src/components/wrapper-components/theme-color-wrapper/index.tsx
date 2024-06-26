'use client';
import { ReactNode } from 'react';
import gsap from 'gsap';
import IconThemeTrans from '@/components/animation/icon-theme-trans';
function ThemeColorWraper({ children }: { children: ReactNode }) {
    // useEffect(()=> {(gsap.to(".box", { x: 200,rotation: 360,duration:2 }))})

    return (
        <>
            <div className="theme_wrapper">{children}</div>
            <IconThemeTrans />
        </>
    );
}

export default ThemeColorWraper;
