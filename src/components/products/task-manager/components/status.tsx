'use client';
import { ResponsiveContext, MacbookDisplayType } from '@/components/wrapper-components/macbook-wrapper';
import classNames from 'classnames';
import { useContext } from 'react';
import { Dispatch, SetStateAction } from 'react';
interface params {
    filter: Array<'macro' | 'micro' | 'inProject' | 'notInProject'>;
    status: keyof TypeOfSatatusInterface | 'all';
    sort: 'a-z' | 'z-a' | 'latest' | 'oldest';
    page: number;
    search?: string;
}
interface type {
    color: string;
    text: string;
}
export interface TypeOfSatatusInterface {
    todo: type;
    yetToStart: type;
    inProgress: type;
    onHold: type;
    completed: type;
}
export const TypeOfSatatus = {
    todo: { color: '#bd0fb1', text: 'To do' },
    yetToStart: { color: '#a3990b', text: 'Yet to start' },
    inProgress: { color: '#146dba', text: 'In progress' },
    onHold: { color: '#a35914', text: 'On hold' },
    completed: { color: '#1f9c16', text: 'Completed' },
};
function Status({
    display,
    setParams,
    statusType,
    total,
    hasMacWrap,
}: {
    setParams: Dispatch<SetStateAction<params>>;
    display: MacbookDisplayType;
    statusType: 'todo' | 'yetToStart' | 'inProgress' | 'onHold' | 'completed';
    total: number;
    hasMacWrap: boolean;
}) {
    const bg = TypeOfSatatus[statusType].color as string;
    const text = TypeOfSatatus[statusType].text;
    return (
        <div
            onClick={() => setParams((params) => ({ ...params, status: statusType, page: 1 }))}
            className={classNames('h-[40px] shrink-0', {
                'w-1/5': display === 'desktop' && hasMacWrap,
                'w-1/4': display === 'laptop' && hasMacWrap,
                'w-1/3': display == 'tablet' && hasMacWrap,
                'w-1/2': display == 'mobile' && hasMacWrap,
                'mb:w-1/2 tl:w-1/3 lt:w-1/4 dt:w-1/5': !hasMacWrap,
            })}
        >
            <div
                className={classNames(
                    'rounded-lg cursor-pointer px-[8px] mx-[8px] leading-10 font-medium select-none flex justify-between items-center',
                )}
                style={{ backgroundColor: bg }}
            >
                <span className="">{text}</span>
                <span className="bg-white text-[#333]  leading-[20px]  text-center rounded-full shadow-xl w-[20px] h-[20px]">
                    {total}
                </span>
            </div>
        </div>
    );
}

export default Status;
