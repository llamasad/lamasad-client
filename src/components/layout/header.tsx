import Image from 'next/image';
import images from '@/assets/images';
import gsap from 'gsap';
//import Tippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';
import LanguageOption from '../language-option';
import observerTheme from '@/util/cookies/theme/observers/theme-observer';
import Llamas from '../llamas';
import { useTranslations } from 'next-intl';
import LogoIcon from '../animation/logo-icon';
import StaticLink from '../navigation/staic-link';
import { GithubIcon } from '../icons';
import Link from 'next/link';
function Header() {
    const t = useTranslations('Navigation');
    return (
        <>
            <div className="h-[61px]"></div>
            <header className="fixed top-0 left-0 h-[60px] border-b-[1px] border-weak backdrop-blur-2xl w-full z-10">
                <div className="   h-full">
                    <div className="lg  m-auto dt:w-dt-body lt:w-lt-body tl:w-tl-body mb:w-mb-body  select-none flex h-full justify-between items-center">
                        <div className="h-full flex">
                            <Llamas />
                            <StaticLink href={'/'} className="flex h-full">
                                <LogoIcon />
                                <h1 className="ml-[6px] cursor-pointer text-tl font-iconFont text-3xl  h-full flex items-center justify-content-center">
                                    lamasad
                                </h1>
                            </StaticLink>
                            <div className="flex items-center justify-content-center ">
                                <span className="ml-[20px] text-[16px] font-normal cursor-pointer hover:text-tl">
                                    <StaticLink className="static-link" href="/skill">
                                        {t('skill')}
                                    </StaticLink>
                                </span>
                                <span className="ml-[20px] text-[16px] font-normal cursor-pointer hover:text-tl">
                                    <StaticLink className="static-link" href="/showcase">
                                        {' '}
                                        {t('showcase')}
                                    </StaticLink>
                                </span>
                                <span className="ml-[20px] text-[16px] font-normal cursor-pointer hover:text-tl">
                                    <StaticLink className="static-link" href={'/comunity'}>
                                        {' '}
                                        {t('comunity')}
                                    </StaticLink>
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center ">
                            <Link href={'https://github.com/llamasad'}>
                                <GithubIcon className="w-5 h-5 mr-[6px] hover:text-tl" />
                            </Link>
                            <LanguageOption />
                            {/* <Tippy
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
                            </Tippy> */}
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
