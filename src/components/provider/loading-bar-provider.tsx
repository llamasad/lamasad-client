'use client';
import LoadingBar from 'react-top-loading-bar';
import type { LoadingBarRef } from 'react-top-loading-bar';
import { createContext, useState, useMemo, useEffect, ReactElement, useLayoutEffect } from 'react';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import themeObserver from '@/util/cookies/theme/observers/theme-observer';
interface ILoadingBarContext {
    progress: number;
    setProgress: (value: number) => void;
}
import { useMediaQuery } from 'react-responsive';
// Create the context with default values
export const LoadingBarContext = createContext<ILoadingBarContext>({
    progress: 0,
    setProgress: () => {},
});

const LoadingLineProvider = ({ children }: { children: ReactNode }) => {
    const [progress, setProgress] = useState<number>(0);
    const [height, setHeight] = useState<number>(() =>
        (document.body as any).getAttribute('theme-data') === 'light' ? 2 : 1,
    );
    const isMobileScreen = useMediaQuery({ query: '(max-width: 639px)' });
    const pathname = usePathname();
    useEffect(() => {
        const el = document.querySelector('.home-loading') as HTMLDivElement;

        if (el) {
            el.style.display = 'none';
        }
    }, []);
    useEffect(() => {
        const observer = themeObserver((mutationRecord) => {
            let theme = (mutationRecord[0] as any).target.getAttribute('theme-data');
            if (theme === 'light') {
                isMobileScreen ? setHeight(3) : setHeight(2);
            } else {
                isMobileScreen ? setHeight(2) : setHeight(1);
            }
        });
        return () => {
            observer.disconnect();
        };
    }, [isMobileScreen]);
    const provided = useMemo(
        () => ({
            progress: progress,
            setProgress: (value: number) => setProgress(value),
        }),
        [progress],
    );

    useEffect(() => {
        setProgress(100);
    }, [pathname]);

    return (
        <LoadingBarContext.Provider value={provided}>
            <LoadingBar
                waitingTime={400}
                height={height}
                color="#2f81f7"
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            {children}
        </LoadingBarContext.Provider>
    );
};

export default LoadingLineProvider;
