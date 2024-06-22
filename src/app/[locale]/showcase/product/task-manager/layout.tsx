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
            header.style.display = 'block';
            window.removeEventListener('popstate', popStateHandle);
        };
    }, []);
    if (isLoading)
        return (
            <div className="min-h-[calc(100vh-171px)] flex justify-center items-center">
                <div>
                    <l-tail-chase size="80" speed="1.75" color="currentColor"></l-tail-chase>{' '}
                </div>
            </div>
        );

    return (
        <>
            {!type && <HeaderTaskManager hasMacWrap={false} />}
            {type === 'custom' && <HeaderTaskManager hasMacWrap={false} />}
            {type === 'user' && <UserHeaderTaskManager hasMacWrap={false} />}
            {type === 'userNonAuth' && auth}
            <div className="min-h-[calc(100vh-171px)]">{children}</div>
        </>
    );
}

export default Layout;
