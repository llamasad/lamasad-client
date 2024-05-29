'use client';

import { ReactNode, useEffect } from 'react';
import HeaderTaskManager from '@/components/products/task-manager/header';
import useTypeUserFetch from '@/hooks/use-type-user-fetcher';
import UserHeaderTaskManager from '@/components/products/task-manager/user-header';

function Layout({ children, auth }: { children: ReactNode; auth: ReactNode }) {
    const { type, isError, isLoading } = useTypeUserFetch();
    useEffect(() => {
        function popStateHandle(event: any) {
            location.reload();
        }
        window.addEventListener('popstate', popStateHandle);
        const header = document.querySelector('.header') as HTMLDivElement;
        if (header) {
            header.style.display = 'none';
        }
        return () => {
            window.removeEventListener('popstate', popStateHandle);
        };
    }, []);
    if (isLoading) return <div>Loading...</div>;
    return (
        <>
            {type === 'custom' && <HeaderTaskManager />}
            {type === 'user' && <UserHeaderTaskManager />}
            {type === 'userNonAuth' && auth}
            {children}
        </>
    );
}

export default Layout;
