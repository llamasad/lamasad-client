import { useLayoutEffect, useEffect, useRef, useState } from 'react';
import { ThemeIcon } from '../icons';
import { useDispatch, useSelector } from '@/lib/redux';
import { themeSlice, selectMode, type theme } from '@/lib/redux/slices/theme-slice';
import themeCookies from '@/util/cookies/theme';
// Call this function when the theme is changed

import gsap from 'gsap';
interface TweenRefCurrent {
    rotateTween: gsap.core.Tween;
    raysTween: gsap.core.Tween;
    eclipseTween: gsap.core.Tween;
}
type AnimationHandler = {
    changeTheme: Function; // Replace `void` with the actual return type of `changeTheme`
};
function IconThemeTrans() {
    const dispatch = useDispatch();
    const eleRef = useRef<HTMLButtonElement>(null);
    const tweenRef = useRef<TweenRefCurrent | null>(null);
    const animationHandlerRef = useRef<AnimationHandler | null>(null);
    const theme = useSelector(selectMode);
    useLayoutEffect(() => {
        const body = document.body;
        function changeTheme(theme: theme) {
            // Define the end values for each theme
            const themes = {
                light: {
                    ' --cooler-color': '#c9c9c9',

                    '--color': '#413f3e',
                    '--title-color': '#000000',
                    '--foreground-rgb': '0, 0, 0',
                    '--background-start-rgb': '214, 219, 220',
                    '--background-end-rgb': '255, 255, 255',
                },
                dark: {
                    ' --cooler-color': '#272827',

                    '--title-color': '#ffffff',
                    '--color': '#cac5c0',
                    '--foreground-rgb': '255, 255, 255',
                    '--background-start-rgb': '0, 0, 0',
                    '--background-end-rgb': '0, 0, 0',
                },
            };

            // Use GSAP to animate the CSS variables
            gsap.to('body', {
                duration: 1, // Animation duration in seconds
                css: themes[theme], // End values
                ease: 'power1.out', // Easing function
            });
        }

        var rotateTween = gsap.to('.rays', {
            rotation: 360,
            repeat: -1,
            paused: true,
            ease: 'none',
            duration: 3,
            transformOrigin: '50% 50%',
        });
        var raysTween = gsap.to('.rays', {
            scale: 3,
            opacity: 0,
            duration: 1,
            paused: true,
            ease: 'back.inOut(4)',
            transformOrigin: '50% 50%',
        });
        var eclipseTween = gsap.to('.eclipse', {
            scale: 3,
            duration: 1,
            paused: true,
            ease: 'back.inOut(4)',
            y: -200,
            x: 40,
        });
        animationHandlerRef.current = { changeTheme };
        tweenRef.current = { rotateTween, raysTween, eclipseTween };
        if (theme === 'dark') {
            eclipseTween.play();
            raysTween.play();
        }
        changeTheme(theme);
    }, []);
    useEffect(() => {
        console.log(theme);
        const eleRefCur = eleRef.current;
        if (eleRefCur) {
            var handleMouseEnter = () => {
                tweenRef.current && tweenRef.current.rotateTween.play();
            };

            var handleMouseLeave = () => {
                tweenRef.current && tweenRef.current.rotateTween.pause();
            };
            var handleMouseClick = () => {
                if (theme === 'light' && tweenRef.current) {
                    themeCookies.create('dark');
                    animationHandlerRef.current?.changeTheme('dark');

                    document.body.setAttribute('theme-data', 'dark');
                    tweenRef.current.raysTween.play();
                    tweenRef.current.eclipseTween.play();
                } else if (tweenRef.current) {
                    themeCookies.create('light');
                    animationHandlerRef.current?.changeTheme('light');

                    document.body.setAttribute('theme-data', 'light');
                    tweenRef.current.raysTween.reverse();
                    tweenRef.current.eclipseTween.reverse();
                }
            };
            eleRefCur.addEventListener('click', handleMouseClick);
            eleRefCur.addEventListener('mouseenter', handleMouseEnter);
            eleRefCur.addEventListener('mouseleave', handleMouseLeave);
        }
        return () => {
            if (eleRefCur) {
                eleRefCur.removeEventListener('click', handleMouseClick);
                eleRefCur.removeEventListener('mouseenter', handleMouseEnter);
                eleRefCur.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, [theme]);

    return (
        <button
            ref={eleRef}
            className="text-inherit fixed z-30 bottom-[10px] left-[10px]"
            onClick={() => {
                dispatch(themeSlice.actions.toggle());
            }}
        >
            <ThemeIcon width="24px" className="rounded-[50%]" height="24px" />
        </button>
    );
}

export default IconThemeTrans;
