'use client';
import classNames from 'classnames';
import { ReactNode, useEffect, useRef, useState } from 'react';

function OverlayWrapper({ children }: { children: ReactNode }) {
    const [distanceFromTop, setDistanceFormTop] = useState(0);
    const [hasMacbookLayout, setHasMacbookLayout] = useState(true);
    useEffect(() => {
        const body = document.querySelector('.macbook_layout--body') as HTMLElement;
        if (body) {
            body.style.overflow = 'hidden';
            setDistanceFormTop(body.scrollTop);
        } else {
            document.body.style.overflow = 'hidden';
            setHasMacbookLayout(false);
        }
        return () => {
            (body && (body.style.overflow = 'auto')) || (document.body.style.overflow = 'auto');
        };
    }, []);

    return (
        <div
            style={{ top: distanceFromTop + 'px', bottom: distanceFromTop + 'px' }}
            className={classNames(' inset-0 h-full z-50', {
                fixed: !hasMacbookLayout,
                absolute: hasMacbookLayout,
            })}
        >
            <div className="absolute inset-0 z-30 backdrop-blur-sm"></div>
            {children}
        </div>
    );
}

export default OverlayWrapper;
