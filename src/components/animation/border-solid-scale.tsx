import gsap from 'gsap';
import { useEffect, useRef } from 'react';

function BorderSolidScale({ getSectionSpace, index }: { getSectionSpace: Function; index: number }) {
    const borderScaleX = useRef<HTMLDivElement>(null);
    const borderScaleY = useRef<HTMLDivElement>(null);
    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.preview-container',
                start: `${getSectionSpace(index) + 200}px 65px`,
                end: () => '+=10px',
            },
        });
        tl.fromTo(borderScaleY.current, { transformOrigin: '50%', scaleX: 0 }, { transformOrigin: '50%', scaleX: 1 });
        tl.fromTo(
            borderScaleX.current,
            { transformOrigin: '50%', scaleY: 0 },
            { transformOrigin: '50%', scaleY: 1 },
            '<',
        );

        return () => {
            tl.kill();
        };
    }, [getSectionSpace, index]);
    return (
        <>
            <div
                ref={borderScaleY}
                className="preview-border-scale--y absolute inset-y-[100px] border-weak border-y-[1px] border-solid inset-x-[50px]"
            ></div>
            <div
                ref={borderScaleX}
                className="preview-border-scale--x absolute inset-y-[50px]  border-weak border-x-[1px] border-solid inset-x-[100px]"
            ></div>
        </>
    );
}

export default BorderSolidScale;
