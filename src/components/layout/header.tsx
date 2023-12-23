'use client';
import Image from 'next/image';
import images from '@/assets/images';
import gsap from 'gsap';
import Tippy from '@tippyjs/react/headless';

import { useEffect, useRef, useState } from 'react';
import observerTheme from '@/util/cookies/theme/observers/theme-observer';
import Llamas from '../llamas';
import { GithubIcon, ArrowIcon } from '../icons';
function Header() {
    const logoTween = useRef<gsap.core.Timeline | null>(null);
    const [iconKey, setIconKey] = useState(() => {
        const theme = document.body.getAttribute('theme-data');
        let key = `${theme}Logo` as 'darkLogo' | 'lightLogo';
        return key;
    });

    const iconRef = useRef<HTMLImageElement>(null);
    let icon = images[iconKey];
    useEffect(() => {
        const tl = gsap.timeline();
        tl.to('.logo_hover', { rotateY: 90, duration: 0.5 });
        tl.to('.logo_hover-lama', { opacity: 1, duration: 0 });
        tl.to('.logo_hover-l', { opacity: 0, duration: 0 }, '<');
        tl.to('.logo_hover', { rotateY: 180, duration: 0.5 });
        tl.pause();
        logoTween.current = tl;
    }, []);
    useEffect(() => {
        gsap.fromTo(iconRef.current, { y: -100 }, { y: 0, duration: 1, ease: 'bounce.out' });
    }, [iconKey]);
    useEffect(() => {
        const observer = observerTheme((mutation) => {
            setIconKey(() => {
                const theme = document.body.getAttribute('theme-data');
                let key = `${theme}Logo` as 'darkLogo' | 'lightLogo';
                return key;
            });
        });
        return () => {
            observer.disconnect();
        };
    }, []);
    return (
        <>
            <div className="h-[67px]"></div>
            <header className="fixed top-0 left-0 h-[66px] border-b-[1px] border-weak backdrop-blur-2xl w-full z-10">
                <div className="   h-full">
                    <div className="lg  m-auto dt:w-dt-body lt:w-lt-body tl:w-tl-body mb:w-mb-body  select-none flex h-full justify-between items-center">
                        <div className="h-full flex">
                            <div
                                className=" h-[46px] relative h-[46px] top-[9px]"
                                onMouseEnter={() => {
                                    if (logoTween.current) {
                                        logoTween.current.play();
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (logoTween.current) {
                                        logoTween.current.reverse();
                                    }
                                }}
                            >
                                <div className=" logo_hover ">
                                    <Image
                                        draggable="false"
                                        ref={iconRef}
                                        src={icon}
                                        width={46}
                                        className="logo_hover-l cursor-pointer h-full"
                                        alt="logo"
                                    />
                                    <Image
                                        draggable="false"
                                        src={images.lamasadImg}
                                        width={46}
                                        className="logo_hover-lama cursor-pointer h-[46px] rounded-[10px] top-0 absolute overflow-hidden opacity-0"
                                        alt="logo"
                                    />
                                </div>
                            </div>
                            <Llamas />
                            <h1 className="ml-[6px] cursor-pointer text-tl font-iconFont text-3xl  h-full flex items-center justify-content-center">
                                lamasad
                            </h1>
                            <div className="flex items-center justify-content-center ">
                                <span className="ml-[20px] text-lg font-base cursor-pointer hover:text-tl">Skill</span>
                                <span className="ml-[20px] text-lg font-base cursor-pointer hover:text-tl">
                                    Showcase
                                </span>
                                <span className="ml-[20px] text-lg font-base cursor-pointer hover:text-tl">
                                    Comunity
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <GithubIcon className="mr-[6px] w-5  h-5" />
                            <Tippy
                                trigger="click"
                                hideOnClick={true}
                                interactive={true}
                                offset={[-2, 0]}
                                onShow={() => {
                                    const arrowIcon = document.querySelector('.language-arrow ') as HTMLElement;
                                    arrowIcon.style.transform = 'rotate(180deg)';
                                }}
                                onHide={() => {
                                    const arrowIcon = document.querySelector('.language-arrow ') as HTMLElement;
                                    arrowIcon.style.transform = 'rotate(0)';
                                }}
                                render={() => (
                                    <ul className="font-base cursor-pointer  text-sm">
                                        <li className="hover:text-tl">EN</li>
                                        <li className="hover:text-tl">VI</li>
                                    </ul>
                                )}
                            >
                                <div
                                    onClick={() => {}}
                                    className="pl-[6px] border-solid border-l-[1px] cursor-pointer text-sm flex font-base items-center hover:text-tl border-weak"
                                >
                                    EN
                                    <ArrowIcon className="language-arrow w-[8px] ml-[3px] h-[8px]" />
                                </div>
                            </Tippy>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
