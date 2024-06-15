import React, { useState, useEffect, forwardRef, ForwardedRef } from 'react';
import interact from 'interactjs';
import { ArrowIcon } from '@/components/icons';
import classNames from 'classnames';

const PercentBar = forwardRef(function A(
    { onEditMode, initState }: { onEditMode: boolean; initState?: number },
    ref: ForwardedRef<HTMLInputElement>,
) {
    const percentBarRef = React.useRef<HTMLDivElement>(null);
    const percentCursorRef = React.useRef<HTMLDivElement>(null);
    const percentBarContainerRef = React.useRef<HTMLDivElement>(null);
    const [percent, setPercent] = useState(initState || 0);
    useEffect(() => {
        const el = percentBarRef.current as HTMLDivElement;
        const container = percentBarContainerRef.current as HTMLDivElement;
        const scrollCusor = percentCursorRef.current as HTMLDivElement;

        if (scrollCusor && container && el) {
            interact(scrollCusor).draggable({
                onmove: (event) => {
                    // Calculate the new width of the progress bar
                    const newWidth = Math.max(0, Math.min(100, percent + (event.dx / container.offsetWidth) * 100));
                    setPercent(newWidth);
                    el.style.width = newWidth + '%';
                },
            });
        }
    }, [percent]);

    return (
        <div>
            <div className="flex items-center h-[30px] rounded-md border border-weak">
                <div className="flex  bg-transparent ">
                    <input
                        name="limits"
                        ref={ref}
                        type="text"
                        value={Math.round(percent) + '%'}
                        className=" w-[30px] bg-transparent outline-none"
                        disabled={!onEditMode}
                    />
                    {onEditMode && (
                        <div className="flex flex-col justify-center">
                            <span
                                onClick={() => {
                                    setPercent((state) => Math.min(state + 1, 100));
                                }}
                            >
                                <ArrowIcon className="rotate-180 w-[10px] h-[10px] " />
                            </span>{' '}
                            <span
                                onClick={() => {
                                    setPercent((state) => Math.max(state - 1, 0));
                                }}
                            >
                                {' '}
                                <ArrowIcon className="w-[10px] h-[10px]" />
                            </span>
                        </div>
                    )}
                </div>
                <div
                    ref={percentBarContainerRef}
                    className="progress-bar-container w-full bg-weak h-[12px] flex items-center grow rounded-full"
                >
                    <div
                        ref={percentBarRef}
                        className={classNames(
                            ' scroll-percent-bar w-[6px] h-[6px] ml-[3px]   bg-green-500 rounded-l-full',
                        )}
                        style={{ width: `${percent}%` }}
                    />
                    <div
                        ref={percentCursorRef}
                        className={classNames(
                            'scroll-percent-bar_cursor w-[12px] bg-cooler rounded-full cursor-pointer h-[12px] relative ',
                            { 'pointer-events-none': !onEditMode },
                        )}
                    ></div>
                </div>{' '}
            </div>
        </div>
    );
});

export default PercentBar;
