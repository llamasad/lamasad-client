'use client';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import images from '@/assets/images';
import observerTheme from '@/util/cookies/theme/observers/theme-observer';
import gsap from 'gsap';
import { escape } from 'querystring';
function LogoIcon() {
    const logoTween = useRef<gsap.core.Timeline | null>(null);
    const [iconKey, setIconKey] = useState(() => {
        const theme = document.body.getAttribute('theme-data');
        let key;
        if (theme) {
            key = `${theme}Logo` as 'darkLogo' | 'lightLogo';
        } else {
            key = 'lightLogo' as 'darkLogo' | 'lightLogo';
        }

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
        <div
            className=" h-[36px] relative  top-[9px]"
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
                    width={36}
                    className="logo_hover-l cursor-pointer h-full"
                    alt="logo"
                />
                <Image
                    draggable="false"
                    src={images.lamasadImg}
                    width={36}
                    className="logo_hover-lama cursor-pointer h-[36px] rounded-[10px] top-0 absolute overflow-hidden opacity-0"
                    alt="logo"
                />
            </div>
        </div>
    );
}

export default LogoIcon;
