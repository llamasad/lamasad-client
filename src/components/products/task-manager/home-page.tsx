'use client';

import { useContext } from 'react';
import ListStatus from './components/list-status';
import ListTask from './components/list-task';
import { ResponsiveContext } from '@/components/wrapper-components/macbook-wrapper';
function HomePage() {
    const display = useContext(ResponsiveContext);
    return (
        <div className="flex flex-col">
            <ListStatus display={display} />
            <ListTask display={display} />
        </div>
    );
}

export default HomePage;