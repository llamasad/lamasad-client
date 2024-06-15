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
        <div className="header">
            <div className="h-[61px]"></div>
            <header className="fixed top-0 left-0 h-[60px] border-b-[1px] border-weak backdrop-blur-2xl w-full z-10">
                <div className="   h-full">
                    <div className="lg m-auto dt:w-dt-body lt:w-lt-body tl:w-tl-body mb:w-mb-body  select-none flex h-full justify-between items-center">
                        <div className="h-full flex">
                            <Llamas />
                            <StaticLink href={'/'} className="flex h-full">
                                <span className="mb:hidden tl:block">
                                    <LogoIcon />
                                </span>{' '}
                                <h1 className="ml-[6px] cursor-pointer text-tl font-iconFont text-2xl  h-full flex items-center justify-content-center">
                                    lamasad
                                </h1>
                            </StaticLink>
                            <div className="flex items-center justify-content-center ">
                                <span className="dt:ml-[20px] lt:ml-[20px] tl:ml-[20px] mb:ml-3 text-[16px] font-normal cursor-pointer hover:text-tl">
                                    <StaticLink className="static-link" href="/skill">
                                        {t('skill')}
                                    </StaticLink>
                                </span>
                                <span className="dt:ml-[20px] lt:ml-[20px] tl:ml-[20px] mb:ml-3 text-[16px] font-normal cursor-pointer hover:text-tl">
                                    <StaticLink className="static-link" href="/showcase">
                                        {' '}
                                        {t('showcase')}
                                    </StaticLink>
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center ">
                            <Link href={'https://github.com/llamasad'}>
                                <GithubIcon className="w-5 h-5 mr-[6px] hover:text-tl" />
                            </Link>
                            <LanguageOption />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
