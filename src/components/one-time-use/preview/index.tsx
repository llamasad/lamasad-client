'use client';
import Image from 'next/image';
import gsap from 'gsap';
import { useRef, useEffect, useCallback } from 'react';
import GearSpinOnScroll from '@/components/animation/gear-spin-onScroll';
import Intro from './preview-sections/intro';
import Thinking from './preview-sections/thinking';
import Skill from './preview-sections/skill';
import Showcase from './preview-sections/showcase';
type thinking = {
    title: string;
    firstContent: string;
    secondContent: string;
    thirdContent: string;
    fourthContent: string;
};
type description = { sectionUp: string; sectionDown: string };
export type skillContentType = {
    title: string;
    firstContent: string;
};

export type showcaseContentType = {
    title: string;
    firstContent: string;
};

function Preview({
    content,
}: {
    content: {
        description: description;
        thinking: thinking;
        title: string;
        skill: skillContentType;
        showcase: showcaseContentType;
    };
}) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const getSectionWidth = useCallback((sectionIndex: number): number | undefined => {
        let sections = gsap.utils.toArray('.section_scroll-x');
        if (sections) {
            return sections.reduce((total, currentValue, currentIndex) => {
                return currentIndex < sectionIndex
                    ? (total as number) + (currentValue as HTMLElement).offsetWidth
                    : total;
            }, 0) as number;
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
        <div className="relative w-inherit lt:block mb:hidden">
            <div ref={wrapRef} className="preview-container h-[100vh]  flex w-max">
                <div className="absolute h-[inherit] mb:w-mb-body tl:w-tl-body lt:w-lt-body dt:w-dt-body">
                    <GearSpinOnScroll trigger=".preview-container" className="bottom-[54px] right-7" />
                    <GearSpinOnScroll className="left-0" trigger=".preview-container" />
                </div>

                <Intro content={{ title: content.title, description: content.description }} />
                <Thinking content={content.thinking} getSectionSpace={getSectionWidth} />
                <Skill content={content.skill} getSectionSpace={getSectionWidth} />
                <Showcase content={content.showcase} getSectionSpace={getSectionWidth} />
            </div>
        </div>
    );
}

export default Preview;
