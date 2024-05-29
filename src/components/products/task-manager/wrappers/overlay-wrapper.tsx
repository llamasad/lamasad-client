'use client';
import { ReactNode, useEffect, useRef, useState } from 'react';

function OverlayWrapper({ children }: { children: ReactNode }) {
    const [distanceFromTop, setDistanceFormTop] = useState(0);

    useEffect(() => {
        const body = document.querySelector('.macbook_layout--body') as HTMLElement;
        if (body) {
            body.style.overflow = 'hidden';
            setDistanceFormTop(body.scrollTop);
        }
        return () => {
            body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div
            style={{ top: distanceFromTop + 'px', bottom: distanceFromTop + 'px' }}
            className="absolute inset-0 h-full z-100"
        >
            <div className="absolute inset-0 z-20 backdrop-blur-sm"></div>
            {children}
        </div>
    );
}

export default OverlayWrapper;
