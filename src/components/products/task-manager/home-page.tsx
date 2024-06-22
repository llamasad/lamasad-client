'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import ListStatus from './components/list-status';
import ListTask from './components/list-task';
import { ResponsiveContext } from '@/components/wrapper-components/macbook-wrapper';
import Filter from './components/filter';
import { TypeOfSatatusInterface } from './components/status';
import Pagination from './components/pagination';
import { SWRConfig } from 'swr';
import { Cache, Key } from 'swr';

// Define the Cache interface

// Create a custom cache provider that disables caching for a specific route

type StringKey = string;

const customCacheProvider = (): Cache => {
    const map = new Map<StringKey, any>();

    return {
        get: (key: Key) => {
            if (typeof key !== 'string') {
                throw new Error('Key must be a string');
            }
            if (key === '/api/tasks') return undefined; // Disable cache for this specific route
            return map.get(key);
        },
        set: (key: Key, value: any) => {
            if (typeof key !== 'string') {
                throw new Error('Key must be a string');
            }
            if (key !== '/api/tasks') map.set(key, value);
        },
        delete: (key: Key) => {
            if (typeof key !== 'string') {
                throw new Error('Key must be a string');
            }
            map.delete(key);
        },
        keys: () => {
            return map.keys();
        },
    };
};

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

    return (
        <div className="flex flex-col">
            <Filter state={{ params, setParams }} />
            <ListStatus hasMacWrap={hasMacWrap} statusRef={statusRef} state={{ params, setParams }} display={display} />
            <SWRConfig
                value={{
                    provider: customCacheProvider,
                }}
            >
                <ListTask
                    hasMacWrap={hasMacWrap}
                    setTrigger={setTrigger}
                    ref={statusRef}
                    params={params}
                    display={display}
                />
            </SWRConfig>
            <Pagination state={{ params, setParams }} pageCountInit={statusRef.current.pageCount} />
        </div>
    );
}

export default HomePage;
