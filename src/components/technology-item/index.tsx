'use client';
import Image from 'next/image';
import { tech } from '@/app/[locale]/skill/page';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import SkillBar from '../skill-bar';
import { skill } from '../skill-bar';
import Link from 'next/link';
import gsap from 'gsap';
function TechnologyItem({
    data,
    index,
    row,
    responsive,
}: {
    data: tech;
    index: number;
    row: number;
    responsive: { isDesktopScreen: boolean; isLaptopScreen: boolean; isTabletScreen: boolean; isMobileScreen: boolean };
}) {
    return (
        <li
            onClick={(ev: React.MouseEvent<HTMLLIElement>) => {
                ev.stopPropagation();
                const target = ev.currentTarget as HTMLLIElement;
                target.className.includes('trigger');
                const parent = target.parentNode as HTMLElement;
                const listLi = document.querySelectorAll('.technology-item');
                const rowsElement = document.querySelectorAll(`.technology-item_row-${row}`);
                const triggerElement = Array.from(listLi).find((v, i) => {
                    return v.className.includes('trigger');
                }) as HTMLLIElement;
                if (!target.className.includes('trigger')) {
                    if (triggerElement) {
                        triggerElement
                            .querySelector('.techonology-item_extra')
                            ?.getElementsByTagName('ul')[0]
                            ?.classList.add('hidden');

                        triggerElement.classList.remove('trigger');
                        // triggerElement.style.height = '200px';
                        gsap.to(triggerElement.querySelectorAll('.techonology-item_ref'), {
                            stagger: 0.2,
                            duration: 1,
                            x: 180,
                        });

                        if (!triggerElement.className.includes(`technology-item_row-${row}`)) {
                            const rowUnTrigger = (triggerElement.parentNode as HTMLElement).querySelectorAll(
                                '.technology-item',
                            );
                            if (responsive.isLaptopScreen) {
                                (rowUnTrigger[0].parentNode as HTMLElement).style.width = '80%';
                            } else if (responsive.isTabletScreen) {
                                (rowUnTrigger[0].parentNode as HTMLElement).style.width = '70%';
                            } else if (responsive.isMobileScreen) {
                                (rowUnTrigger[0].parentNode as HTMLElement).style.width = '60%';
                            }

                            rowUnTrigger.forEach((v, i) => {
                                if (responsive.isLaptopScreen) {
                                    (v as HTMLElement).style.width = 'calc(25% - 12px) ';
                                } else if (responsive.isTabletScreen) {
                                    (v as HTMLElement).style.width = 'calc(50% - 12px) ';
                                } else if (responsive.isMobileScreen) {
                                    (v as HTMLElement).style.width = 'calc(100% - 12px) ';
                                }
                            });
                        }
                    }
                    gsap.to(target.querySelectorAll('.techonology-item_ref'), { stagger: 0.2, duration: 1, x: 0 });
                    target.classList.add('trigger');
                    // target.style.height = '400px';
                    rowsElement.forEach((v, i) => {
                        if (responsive.isLaptopScreen) {
                            (v as HTMLElement).style.width = 'calc(20% - 12px) ';
                        } else if (responsive.isTabletScreen) {
                            (v as HTMLElement).style.width = 'calc(35% - 12px)';
                        } else if (responsive.isMobileScreen) {
                            (v as HTMLElement).style.width = 'calc(100% - 12px) ';
                        }
                    });

                    parent.style.width = '100%';
                    if (responsive.isLaptopScreen) {
                        target.style.width = 'calc(40% - 12px)';
                    } else if (responsive.isTabletScreen) {
                        target.style.width = 'calc(65% - 12px) ';
                    }
                } else {
                    target.classList.remove('trigger');
                    // target.style.height = '200px';
                    rowsElement.forEach((v, i) => {
                        if (responsive.isLaptopScreen) {
                            (v as HTMLElement).style.width = 'calc(25% - 12px) ';
                        } else if (responsive.isTabletScreen) {
                            (v as HTMLElement).style.width = 'calc(50% - 12px) ';
                        }
                    });
                    gsap.to(target.querySelectorAll('.techonology-item_ref'), {
                        stagger: 0.2,
                        duration: 1,
                        x: 180,
                    });
                    if (responsive.isLaptopScreen) {
                        parent.style.width = '80%';
                    } else if (responsive.isTabletScreen) {
                        parent.style.width = '70%';
                    } else if (responsive.isMobileScreen) {
                        parent.style.width = '60%';
                    }
                    if (responsive.isLaptopScreen) {
                        target.style.width = 'calc(25% - 12px) ';
                    } else if (responsive.isTabletScreen) {
                        target.style.width = 'calc(50% - 12px) ';
                    }
                }
            }}
            className={classNames(
                `technology-item technology-item_row-${row} lt:w-[calc(25%-12px)] tl:w-[calc(50%-12px)] mb:w-[calc(100%-12px)]   rounded-lg overflow-hidden cursor-pointer shadow transition-size h-[200px] shadow-weak flex  ease-in-out duration-700`,
            )}
        >
            <div className="dt:min-w-[240px] lt:min-w-[190px] tl:min-w-[205px] mb:min-w-[192px]">
                <Image
                    src={data.image}
                    alt="something wrong!"
                    width={100}
                    height={100}
                    className="h-[100px] object-contain translate-x-[calc(-50%)] relative left-[50%] top-[5%]"
                />
                <h3 className="text-center mt-[30px] text-tl font-normal text-[26px]">{data.title}</h3>
                <div className="flex items-center justify-center ">
                    <span className="text-[16px] mx-[10px]">Proficiency:</span>
                    <SkillBar proficiency={data.proficiency} />
                </div>
            </div>

            <div className=" overflow-hidden border-l-[1px] border-solid border-weak w-full my-[10px] ">
                <ul className="techonology-list_ref ml-[20px] whitespace-nowrap ">
                    <li className="translate-x-[180px] techonology-item_ref text-tl">Reference:</li>
                    {data.reference.map((v, i) => (
                        <li key={i} className="ml-[10px] translate-x-[180px] techonology-item_ref">
                            <Link
                                target="_blank"
                                onClick={(ev) => {
                                    ev.stopPropagation();
                                }}
                                href={v.link}
                            >
                                {v.alias}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    );
}

export default TechnologyItem;
