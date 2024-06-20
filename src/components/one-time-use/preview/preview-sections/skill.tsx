import gsap from 'gsap';
import { AngleBracket } from '@/components/icons';
import BorderSolidScale from '@/components/animation/border-solid-scale';
import { useEffect } from 'react';
import Image from 'next/image';
import images from '@/assets/images';
import { skillContentType } from '..';
function Skill({ getSectionSpace, content }: { getSectionSpace: Function; content: skillContentType }) {
    useEffect(() => {
        let tlForHeader = gsap.timeline({
            scrollTrigger: {
                trigger: '.preview-container',
                start: `${getSectionSpace(4) + 200}px 65px`,
                end: () => '+=10px',
            },
        });

        tlForHeader.to('.skill-header', { fontSize: 80 });
        tlForHeader.to('.skill-bracket--right', { x: 150 }, '<');
        tlForHeader.to('.skill-bracket--left', { x: -150 }, '<');
        tlForHeader.to('.skill-bracket--right', { x: 0, ease: 'bounce.out' });
        tlForHeader.to('.skill-bracket--left', { x: 0, ease: 'bounce.out' }, '<');
        let tlForSkillAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '.preview-container',
                start: `${getSectionSpace(5) + 200}px 65px`,
                end: () => '+=' + (document.querySelector('.section_scroll-x') as HTMLElement).offsetWidth,
            },
        });
        tlForSkillAnimation.fromTo('.skill-img', { scale: 0 }, { scale: 1 });
        tlForSkillAnimation.fromTo('.skill-text--1', { opacity: 0 }, { opacity: 1 }, '<');
        return () => {
            tlForHeader.kill();
            tlForSkillAnimation.kill();
        };
    }, [getSectionSpace]);
    return (
        <>
            <div className="section_scroll-x w-[100vw] relative mb-[100px] flex flex-row justify-center  items-center">
                <BorderSolidScale getSectionSpace={getSectionSpace} index={4} />
                <AngleBracket className="skill-bracket--left " height="120px" />
                <p className="skill-header font-bold text-tl text-[0px]"> {content.title}</p>
                <AngleBracket className="skill-bracket--right  relative top-[-1px]" height="120px " direction="left" />
            </div>
            <div className="section_scroll-x w-[100vw] relative mb-[100px] flex flex-col justify-center  items-center">
                <Image
                    src={images.skillPage}
                    width={0}
                    height={0}
                    className="skill-img w-2/5 rounded object-contain rounded-lg"
                    alt="skill img not fetch! "
                />
                <p className="skill-text--1 w-4/5 text-[36px] font-md text-tl text-center mt-4">
                    {content.firstContent}{' '}
                </p>
            </div>
        </>
    );
}

export default Skill;
