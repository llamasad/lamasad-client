'use client';

import Image from 'next/image';
import { OpenIcon } from '../icons';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import MacbookWrapper from '../wrapper-components/macbook-wrapper';
import StaticLink from '../navigation/staic-link';
import { memo, useState } from 'react';
import Link from 'next/link';
import { AppStaticsPathnames } from '@/config/language';
function Project({
    img,
    title,
    description,
    bgColor,
    src,
    isExternalRef = false,
}: {
    img: string | StaticImport;
    title: string;
    description: string;
    bgColor?: string;
    src: AppStaticsPathnames | string;
    isExternalRef?: boolean;
}) {
    const [trigger, setTrigger] = useState<boolean>(false);
    img = JSON.stringify(img);
    img = JSON.parse(img);
    return (
        <>
            {!isExternalRef ? (
                <StaticLink
                    isHighlight={false}
                    href={src as AppStaticsPathnames}
                    className={`lt:w-[calc(33.3%-12px)] tl:w-[calc(50%-12px)] mb-3 mb:w-full px-[20px] bg-no-repeat bg-contain overflow-hidden  rounded-lg hover:shadow text-current hover:shadow-weak  h-[300px] cursor-pointer`}
                >
                    <div className="mt-[20px] flex  h-[70%] bg-weak rounded-lg relative overflow-hidden ">
                        <Image className="object-contain" src={img} alt="123" />
                        {isExternalRef && (
                            <div className="rounded p-[4px] bg-weak absolute top-[10px] hover:bg-pimary   right-[10px]">
                                <OpenIcon className="w-[20px] text-tl  h-[20px]" />
                            </div>
                        )}
                    </div>
                    <h2 className="mt-[8px] text-tl text-[18px] font-medium">{title}</h2>
                    <p className="">{description}</p>
                </StaticLink>
            ) : (
                <Link
                    target="_blank"
                    href={src}
                    className={`lt:w-[calc(33.3%-12px)] tl:w-[calc(50%-12px)] mb:w-full px-[20px] bg-no-repeat bg-contain overflow-hidden  mb-3 rounded-lg hover:shadow text-current hover:shadow-weak  h-[300px] cursor-pointer`}
                >
                    <div className="mt-[20px] flex items-center h-[70%] bg-weak rounded-lg relative overflow-hidden ">
                        <Image className="object-contain h-4/5" src={img} alt="123" />
                        {isExternalRef && (
                            <div className="rounded p-[4px] bg-weak absolute top-[10px] hover:bg-pimary   right-[10px]">
                                <OpenIcon className="w-[20px] text-tl  h-[20px]" />
                            </div>
                        )}
                    </div>
                    <h2 className="mt-[8px] text-tl text-[18px] font-medium">{title}</h2>
                    <p className="">{description}</p>
                </Link>
            )}
        </>
    );
}

export default memo(Project);
