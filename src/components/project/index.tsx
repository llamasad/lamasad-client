'use client';

import Image from 'next/image';
import { OpenIcon } from '../icons';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import MacbookWrapper from '../wrapper-components/macbook-wrapper';
import { memo, useState } from 'react';
import Link from 'next/link';
function Project({
    img,
    title,
    description,
    bgColor,
}: {
    img: string | StaticImport;
    title: string;
    description: string;
    bgColor?: string;
}) {
    const [trigger, setTrigger] = useState<boolean>(false);
    img = JSON.stringify(img);
    img = JSON.parse(img);
    return (
        <>
            <Link
                href={'/en/showcase/product/1234'}
                className={`w-[calc(33.3%-12px)] px-[20px] bg-no-repeat bg-contain overflow-hidden  rounded-lg hover:shadow text-current hover:shadow-weak  h-[300px] cursor-pointer`}
            >
                <div className="mt-[20px] flex  h-[70%] bg-weak rounded-lg relative overflow-hidden ">
                    <Image className="object-contain" src={img} alt="123" />
                    <div className="rounded p-[4px] bg-weak absolute top-[10px] hover:bg-pimary   right-[10px]">
                        <OpenIcon className="w-[20px] text-tl  h-[20px]" />
                    </div>
                </div>
                <h2 className="mt-[8px] text-tl text-[18px] font-medium">{title}</h2>
                <p className="">{description}</p>
            </Link>
        </>
    );
}

export default memo(Project);
