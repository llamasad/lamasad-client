'use client';
import { ReactNode, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
interface Props {
    children: ReactNode;
}

function Overlay() {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    return (
        <>
            <div className="overlay fixed overscroll-contain overflow-hidden inset-0 backdrop-blur-sm z-20"></div>
        </>
    );
}

export default Overlay;
