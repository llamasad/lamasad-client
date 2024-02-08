'use client';
import { tech } from '@/app/[locale]/skill/page';
import TechnologyItem from '@/components/technology-item';
import to2dArray from '@/util/cookies/theme/array/to-2d-array';
import RowTechnogy from '../row-technology';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
function ListTechnology() {
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
            title: 'react',
            proficiency: 'AboveCompetent',
            image: '',
            reference: [
                { link: 'http://localhost:3000/en', alias: 'link to anything' },
                { link: 'http://localhost:3000/en', alias: 'link to anything' },
            ],
        },
        {
            title: 'react',
            proficiency: 'AboveFamiliar',
            reference: [
                { link: 'http://localhost:3000/en', alias: 'link to anything' },
                { link: 'http://localhost:3000/en', alias: 'link to anything' },
            ],
            image: '',
        },
        {
            title: 'react',
            proficiency: 'Expert',
            reference: [
                { link: 'http://localhost:3000/en', alias: 'link to anything' },
                { link: 'http://localhost:3000/en', alias: 'link to anything' },
            ],
            image: '',
        },
        {
            title: 'react',
            proficiency: 'Familiar',
            reference: [
                { link: 'http://localhost:3000/en', alias: 'link to anything' },
                { link: 'http://localhost:3000/en', alias: 'link to anything' },
            ],
            image: '',
        },
        {
            title: 'react',
            proficiency: 'Familiar',
            reference: [
                { link: 'http://localhost:3000/en', alias: 'link to anything' },
                { link: 'http://localhost:3000/en', alias: 'link to anything' },
            ],
            image: '',
        },
        {
            title: 'react',
            proficiency: 'Competent',
            reference: [
                { link: 'http://localhost:3000/en', alias: 'link to anything' },
                { link: 'http://localhost:3000/en', alias: 'link to anything' },
            ],
            image: '',
        },
    ];
    let arr2d = to2dArray<tech>(arr, 4);
    return (
        <ul className="technology-container   space-y-[12px] flex-row mt-[100px] ">
            {arr2d.map((v, index) => (
                <RowTechnogy key={index}>
                    <>
                        {v.map((v, i) => (
                            <TechnologyItem data={v} key={i} index={i} row={index + 1} />
                        ))}
                    </>
                </RowTechnogy>
            ))}
        </ul>
    );
}

export default ListTechnology;
