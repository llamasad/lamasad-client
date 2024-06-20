import images from '@/assets/images';
import BorderSolidScale from '@/components/animation/border-solid-scale';
import { AngleBracket } from '@/components/icons';
import gsap from 'gsap';
import Image from 'next/image';
import { useEffect } from 'react';
import { showcaseContentType } from '..';
function Showcase({ getSectionSpace, content }: { getSectionSpace: Function; content: showcaseContentType }) {
    useEffect(() => {
        let tlForHeader = gsap.timeline({
            scrollTrigger: {
                trigger: '.preview-container',
                start: `${getSectionSpace(6) + 200}px 65px`,
                end: () => '+=10px',
            },
        });

        tlForHeader.to('.showcase-header', { fontSize: 80 });
        tlForHeader.to('.showcase-bracket--right', { x: 150 }, '<');
        tlForHeader.to('.showcase-bracket--left', { x: -150 }, '<');
        tlForHeader.to('.showcase-bracket--right', { x: 0, ease: 'bounce.out' });
        tlForHeader.to('.showcase-bracket--left', { x: 0, ease: 'bounce.out' }, '<');
        let tlForShowcaseAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '.preview-container',
                start: `${getSectionSpace(7) + 200}px 65px`,
                end: () => '+=' + (document.querySelector('.section_scroll-x') as HTMLElement).offsetWidth,
            },
        });
        tlForShowcaseAnimation.fromTo('.showcase-img', { scale: 0 }, { scale: 1 });
        tlForShowcaseAnimation.fromTo('.showcase-text--1', { opacity: 0 }, { opacity: 1 }, '<');
        return () => {
            tlForHeader.kill();
            tlForShowcaseAnimation.kill();
        };
    }, [getSectionSpace]);
    return (
        <>
            <div className="section_scroll-x w-[100vw] relative mb-[100px] flex flex-row justify-center  items-center">
                <BorderSolidScale getSectionSpace={getSectionSpace} index={6} />
                <AngleBracket className="showcase-bracket--left text-tl" height="120px" />
                <p className="showcase-header font-bold text-tl text-[0px]"> {content.title}</p>
                <AngleBracket
                    className="showcase-bracket--right text-tl relative top-[-1px]"
                    height="120px "
                    direction="left"
                />
            </div>
            <div className="section_scroll-x w-[100vw] relative mb-[100px] flex flex-col justify-center  items-center">
                <Image
                    src={images.showcasePage}
                    width={0}
                    height={0}
                    className="w-1/2 rounded showcase-img object-contain rounded-lg"
                    alt="showcase img not fetch! "
                />
                <p className="showcase-text--1 text-[40px] w-4/5 font-md text-tl text-center mt-4">
                    {content.firstContent}{' '}
                </p>
            </div>
        </>
    );
}

export default Showcase;
