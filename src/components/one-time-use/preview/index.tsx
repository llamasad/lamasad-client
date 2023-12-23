import Image from 'next/image';
import gsap from 'gsap';
import { useRef, useEffect, useCallback } from 'react';
import GearSpinOnScroll from '@/components/animation/gear-spin-onScroll';
import Intro from './preview-sections/intro';
import Thinking from './preview-sections/thinking';
import Skill from './preview-sections/skill';
function Preview() {
    const wrapRef = useRef<HTMLDivElement>(null);

    const getSectionWidth = useCallback((sectionIndex: number) => {
        let sections = gsap.utils.toArray('.section_scroll-x');
        if (sections) {
            return sections.reduce((total, currentValue, currentIndex) => {
                return currentIndex < sectionIndex
                    ? (total as number) + (currentValue as HTMLElement).offsetWidth
                    : total;
            }, 0);
        }
        return;
    }, []);
    useEffect(() => {
        let sections = gsap.utils.toArray('.section_scroll-x');

        let timeLineTween = gsap.timeline({
            ease: 'none',
            scrollTrigger: {
                trigger: wrapRef.current,
                pin: true,
                start: 'top 65px',
                scrub: 1,
                end: () => '+=' + (document.querySelector('.preview-container') as HTMLElement).offsetWidth,
                pinSpacing: true,
            },
        });

        timeLineTween.to(sections, {
            xPercent: -105 * (sections.length - 1),
            ease: 'none',
        });

        timeLineTween.to(
            '.gear-big',
            {
                rotate: 180 * (sections.length - 1),
            },
            '0',
        );
        timeLineTween.to('.gear-small', { rotate: 180 * -(sections.length - 1) }, '0');
        return () => {
            timeLineTween.kill();
        };
    }, []);

    return (
        <div className="relative">
            <div ref={wrapRef} className="preview-container h-[100vh]  flex w-max">
                <GearSpinOnScroll trigger=".preview-container" className="bottom-[54px] left-[88vw] " />
                <Intro />
                <Thinking getSectionSpace={getSectionWidth} />
                {/* <Skill getSectionSpace={getSectionWidth} /> */}
                <GearSpinOnScroll className="" trigger=".preview-container" />
            </div>
        </div>
    );
}

export default Preview;
