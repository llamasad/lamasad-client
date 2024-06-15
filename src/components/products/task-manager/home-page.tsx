'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import ListStatus from './components/list-status';
import ListTask from './components/list-task';
import { ResponsiveContext } from '@/components/wrapper-components/macbook-wrapper';
import Filter from './components/filter';
import { TypeOfSatatusInterface } from './components/status';
import Pagination from './components/pagination';
function HomePage({ hasMacWrap = true }: { hasMacWrap?: boolean }) {
    const display = useContext(ResponsiveContext);
    const statusRef = useRef<{
        status: { todo: number; yetToStart: number; inProgress: number; onHold: number; completed: number };
        pageCount: number;
    }>({ status: { todo: 0, yetToStart: 0, inProgress: 0, onHold: 0, completed: 0 }, pageCount: 0 });
    const [params, setParams] = useState<{
        filter: Array<'macro' | 'micro' | 'inProject' | 'notInProject'>;
        status: keyof TypeOfSatatusInterface | 'all';
        sort: 'a-z' | 'z-a' | 'latest' | 'oldest';
        page: number;
        search?: string;
    }>({ filter: [], status: 'all', sort: 'latest', page: 1 });
    const [trigger, setTrigger] = useState<number>(0);
    console.log('trigger', statusRef.current.pageCount, trigger);
    return (
        <div className="flex flex-col ">
            <Filter state={{ params, setParams }} />
            <ListStatus hasMacWrap={hasMacWrap} statusRef={statusRef} state={{ params, setParams }} display={display} />
            <ListTask
                hasMacWrap={hasMacWrap}
                setTrigger={setTrigger}
                ref={statusRef}
                params={params}
                display={display}
            />
            <Pagination state={{ params, setParams }} pageCountInit={statusRef.current.pageCount} />
        </div>
    );
}

export default HomePage;
