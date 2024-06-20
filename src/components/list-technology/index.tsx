'use client';
import { tech } from '@/app/[locale]/skill/page';
import TechnologyItem from '@/components/technology-item';
import to2dArray from '@/util/cookies/theme/array/to-2d-array';
import RowTechnogy from '../row-technology';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';
import images from '@/assets/images';
function ListTechnology() {
    const isDesktopScreen = useMediaQuery({ query: '(min-width: 1280px)' });
    const isLaptopScreen = useMediaQuery({ query: '(min-width: 1024px)' });
    const isTabletScreen = useMediaQuery({ query: '(min-width: 640px)' });
    const isMobileScreen = useMediaQuery({ query: '(max-width: 639px)' });
    var collum = 4;
    if (isMobileScreen) {
        collum = 1;
    }
    if (isTabletScreen) {
        collum = 2;
    }
    if (isLaptopScreen) {
        collum = 4;
    }

    useEffect(() => {
        const handleOnClick = (ev: any) => {
            ev.stopPropagation();
            const triggeredElement = Array.from(document.querySelectorAll('.technology-item')).find((v) => {
                return v.className.includes('trigger');
            }) as HTMLLIElement;
            if (triggeredElement) {
                const parent = triggeredElement.parentNode as HTMLDivElement;
                triggeredElement.classList.remove('trigger');
                gsap.to(triggeredElement.querySelectorAll('.techonology-item_ref'), {
                    stagger: 0.2,
                    duration: 1,
                    x: 180,
                });
                Array.from(parent.querySelectorAll('.technology-item') as NodeList).forEach((v, i) => {
                    (v as HTMLLIElement).style.width = 'calc(25% - 12px)';
                    parent.style.width = '80%';
                });
            }
        };
        window.addEventListener('click', handleOnClick);
        return () => {
            window.removeEventListener('click', handleOnClick);
        };
    }, []);
    let arr: tech[] = [
        {
            title: 'React',
            proficiency: 'AboveCompetent',
            image: images.reactIcon,
            reference: [{ link: 'https://github.com/llamasad/webmanga', alias: 'website manga' }],
        },
        {
            title: 'NextJs(App)',
            proficiency: 'AboveCompetent',
            reference: [{ link: 'https://github.com/llamasad/lamasad-client', alias: 'lamasad app' }],
            image: images.nextjsIcon,
        },
        {
            title: 'Gsap',
            proficiency: 'Competent',
            reference: [{ link: 'https://github.com/llamasad/lamasad-client', alias: 'lamasad app' }],
            image: images.gsapIcon,
        },
        {
            title: 'Redux',
            proficiency: 'Competent',
            reference: [{ link: 'https://github.com/llamasad/lamasad-client', alias: 'lamasad app' }],
            image: images.reduxIcon,
        },
        {
            title: 'MongoDB',
            proficiency: 'AboveFamiliar',
            reference: [{ link: 'https://github.com/llamasad/halloween', alias: 'Hallowin FaceAPI' }],
            image: images.mongodbIcon,
        },
        {
            title: 'Postgres',
            proficiency: 'AboveFamiliar',
            reference: [{ link: 'https://github.com/llamasad/lamasad-server', alias: 'lamasad server' }],
            image: images.postgresIcon,
        },
        {
            title: 'Mysql',
            proficiency: 'AboveFamiliar',
            reference: [
                { link: 'http://localhost:3000/en', alias: 'link to anything' },
                { link: 'http://localhost:3000/en', alias: 'link to anything' },
            ],
            image: images.mysqlIcon,
        },
        {
            title: 'Nodejs',
            proficiency: 'AboveFamiliar',
            reference: [
                { link: 'https://github.com/llamasad/lamasad-server', alias: 'lamasad sever' },
                { link: 'https://github.com/llamasad/halloween', alias: 'Hallowin FaceAPI' },
            ],
            image: images.nodejsIcon,
        },
        {
            title: 'Linux',
            proficiency: 'AboveFamiliar',
            reference: [],
            image: images.linuxIcon,
        },
        {
            title: 'Socket.io',
            proficiency: 'AboveFamiliar',
            reference: [
                { link: 'https://github.com/llamasad/lamasad-server', alias: 'lamasad sever' },
                { link: 'https://github.com/llamasad/lamasad-client', alias: 'lamasad client' },
            ],
            image: images.socketIcon,
        },
    ];
    let arr2d = to2dArray<tech>(arr, collum);
    return (
        <ul className="technology-container   space-y-[12px] flex-row mt-[100px] ">
            {arr2d.map((v, index) => (
                <RowTechnogy key={index}>
                    <>
                        {v.map((v, i) => (
                            <TechnologyItem
                                responsive={{ isDesktopScreen, isLaptopScreen, isTabletScreen, isMobileScreen }}
                                data={v}
                                key={i}
                                index={i}
                                row={index + 1}
                            />
                        ))}
                    </>
                </RowTechnogy>
            ))}
        </ul>
    );
}

export default ListTechnology;
