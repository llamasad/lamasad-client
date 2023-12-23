'use client';

import { ReactNode, useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/all';

import gsap from 'gsap';
function PluginInit({ children }: { children: ReactNode }) {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, []);

    return <>{children}</>;
}

export default PluginInit;
