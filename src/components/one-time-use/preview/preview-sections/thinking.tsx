'use client';
import { AngleBracket } from '@/components/icons';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import BorderSolidScale from '@/components/animation/border-solid-scale';
import images from '@/assets/images';
type content = {
    title: string;
    firstContent: string;
    secondContent: string;
    thirdContent: string;
    fourthContent: string;
};
function Thinking({ getSectionSpace, content }: { content: content; getSectionSpace: Function }) {
    const imgRef = useRef<HTMLImageElement>(null);
    useEffect(() => {
        let tlForHeader = gsap.timeline({
            scrollTrigger: {
                trigger: '.preview-container',
                start: `${getSectionSpace(1) - 200}px 65px`,
                end: () => '+=10px',
            },
        });

        tlForHeader.to('.thinking-header', { fontSize: 80 });
        tlForHeader.to('.think-bracket--right', { x: 150 }, '<');
        tlForHeader.to('.think-bracket--left', { x: -150 }, '<');
        tlForHeader.to('.think-bracket--right', { x: 0, ease: 'bounce.out' });
        tlForHeader.to('.think-bracket--left', { x: 0, ease: 'bounce.out' }, '<');
        let tlForAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '.preview-container',
                start: `${
                    getSectionSpace(2) +
                    ((document.querySelector('.section_scroll-x') as HTMLElement).offsetWidth +
                        (document.querySelector('.section_scroll-x') as HTMLElement).offsetWidth / 2) /
                        2 -
                    100
                }px 65px`,
                scrub: 1,
                end: () => '+=' + (document.querySelector('.section_scroll-x') as HTMLElement).offsetWidth,
                pinSpacing: false,
            },
        });
        tlForAnimation.to('.thinking-img--fixed', {
            x:
                ((document.querySelector('.section_scroll-x') as HTMLElement).offsetWidth +
                    (document.querySelector('.section_scroll-x') as HTMLElement).offsetWidth / 2) /
                2,
            ease: 'none',
        });
        tlForAnimation.fromTo(
            '.thinking-img-bones--fixed',

            {
                ease: 'none',

                x:
                    -(
                        (document.querySelector('.section_scroll-x') as HTMLElement).offsetWidth +
                        (document.querySelector('.section_scroll-x') as HTMLElement).offsetWidth
                    ) / 2,
            },
            {
                x: () =>
                    '+=' +
                    ((document.querySelector('.section_scroll-x') as HTMLElement).offsetWidth +
                        (document.querySelector('.section_scroll-x') as HTMLElement).offsetWidth / 2) /
                        2,
                ease: 'none',
            },
            '<',
        );
        let tlForText = gsap.timeline({
            scrollTrigger: {
                trigger: '.preview-container',
                start: `${
                    getSectionSpace(2) +
                    (document.querySelector('.section_scroll-x') as HTMLElement).offsetWidth / 2 -
                    400
                }px 65px`,

                end: () => '+=10px',
            },
        });
        tlForText.to('.thinking-text--1', { x: 0, duration: 0.5 });
        tlForText.to('.thinking-text--2', { x: 20, duration: 0.5 }, '<0.25');
        let tweenForText = gsap.fromTo(
            '.thinking-text--3',
            { scaleX: 0, y: 100 },
            {
                duration: 0.5,
                scaleX: 1,
                y: 0,
                scrollTrigger: {
                    trigger: '.preview-container',
                    start: `${
                        getSectionSpace(2) +
                        (document.querySelector('.section_scroll-x') as HTMLElement).offsetWidth / 2
                    }px 65px`,

                    end: () => '+=10px',
                },
            },
        );
        let tweenForText2 = gsap.fromTo(
            '.thinking-text--4',
            { xPercent: -100 },
            {
                xPercent: 0,
                scrollTrigger: {
                    trigger: '.preview-container',
                    start: `${
                        getSectionSpace(3) +
                        (document.querySelector('.section_scroll-x') as HTMLElement).offsetWidth / 2
                    }px 65px`,
                    end: () => '+=10px',
                },
            },
        );

        return () => {
            tlForText.kill();
            tlForHeader.kill();
            tlForAnimation.kill();
            tweenForText.kill();
            tweenForText2.kill();
        };
    }, [getSectionSpace]);
    return (
        <>
            <div className="section_scroll-x w-[100vw] relative mb-[100px] flex flex-row justify-center  items-center">
                <BorderSolidScale getSectionSpace={getSectionSpace} index={1} />
                <AngleBracket className="think-bracket--left " height="120px" />
                <p className="thinking-header font-bold text-[0] "> {content.title}</p>
                <AngleBracket className="think-bracket--right  relative top-[-1px]" height="120px " direction="left" />
            </div>
            <div className="overflow-hidden z-10 section_scroll-x w-[100vw] relative mb-[100px] flex flex-col justify-center  items-center">
                <Image
                    ref={imgRef}
                    src={images.llama}
                    className=" h-[400px] thinking-img--fixed "
                    height={400}
                    width={400}
                    alt=""
                />
                <div className="absolute top-[200px] text-[30px] text-tl left-[10px]">
                    <p className="thinking-text--1  translate-x-[-550px] font-medium ">{content.firstContent}</p>
                    <p className="thinking-text--2 relative top-[20px] font-medium  translate-x-[-530px]">
                        {content.secondContent}
                    </p>
                </div>
                <p className="thinking-text--3 absolute bottom-[60px] left-[50%] font-medium translate-x-[-50%] whitespace-nowrap text-[30px] text-tl">
                    {content.thirdContent}
                </p>
            </div>
            <div className="section_scroll-x w-[100vw] relative mb-[100px]  flex flex-col justify-center  items-center">
                <Image src={images.llamaBones} className="thinking-img-bones--fixed" height={400} width={400} alt="" />
                <div className=" overflow-hidden  absolute left-[50%] text-[40px] font-medium text-tl">
                    <p className="thinking-text--4">{content.fourthContent}</p>
                </div>
            </div>
        </>
    );
}

export default Thinking;
