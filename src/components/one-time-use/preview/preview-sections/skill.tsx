import gsap from 'gsap';
import { AngleBracket } from '@/components/icons';
import BorderSolidScale from '@/components/animation/border-solid-scale';
import { useEffect } from 'react';

function Skill({ getSectionSpace }: { getSectionSpace: Function }) {
    useEffect(() => {
        let tlForHeader = gsap.timeline({
            scrollTrigger: {
                trigger: '.preview-container',
                start: `${getSectionSpace(5) - 200}px 65px`,
                end: () => '+=10px',
            },
        });

        tlForHeader.to('.skill-header', { fontSize: 80 });
        tlForHeader.to('.skill-bracket--right', { x: 150 }, '<');
        tlForHeader.to('.skill-bracket--left', { x: -150 }, '<');
        tlForHeader.to('.skill-bracket--right', { x: 0, ease: 'bounce.out' });
        tlForHeader.to('.skill-bracket--left', { x: 0, ease: 'bounce.out' }, '<');
    }, [getSectionSpace]);
    return (
        <>
            <div className="section_scroll-x w-[100vw] relative mb-[100px] flex flex-row justify-center  items-center">
                <BorderSolidScale getSectionSpace={getSectionSpace} index={5} />
                <AngleBracket className="skill-bracket--left " height="120px" />
                <p className="skill-header font-bold text-[0] "> Skill</p>
                <AngleBracket className="skill-bracket--right  relative top-[-1px]" height="120px " direction="left" />
            </div>
            <div className="section_scroll-x w-[100vw] relative mb-[100px] flex flex-row justify-center  items-center"></div>
            <div className="section_scroll-x w-[100vw] relative mb-[100px] flex flex-row justify-center  items-center"></div>
        </>
    );
}

export default Skill;
