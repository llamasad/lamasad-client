'use client';
import { useContext } from 'react';
import Status from './status';
import { ResponsiveContext } from '@/components/wrapper-components/macbook-wrapper';
import { MacbookDisplayType } from '@/components/wrapper-components/macbook-wrapper';
function ListStatus({ display }: { display: MacbookDisplayType }) {
    return (
        <div className="flex w-full  mt-[20px] overflow-x-auto">
            <Status display={display} total={0} statusType="todo" />
            <Status display={display} total={0} statusType="yetToStart" />
            <Status display={display} total={0} statusType="inProgress" />
            <Status display={display} total={0} statusType="onHold" />
            <Status display={display} total={0} statusType="completed" />
        </div>
    );
}

export default ListStatus;
