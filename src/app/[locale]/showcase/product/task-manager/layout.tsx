'use client';

import { ReactNode, useEffect } from 'react';
import HeaderTaskManager from '@/components/products/task-manager/header';

import { ArrowIcon } from '@/components/icons';
import { useRouter } from 'next/navigation';
function Layout({ children }: { children: ReactNode }) {
    const Route = useRouter();
    useEffect(() => {
        function popStateHandle(event: any) {
            location.reload();
        }
        window.addEventListener('popstate', popStateHandle);
        (document.querySelector('.header') as HTMLDivElement).style.display = 'none';
        return () => {
            (document.querySelector('.header') as HTMLDivElement).style.display = 'block';
            window.removeEventListener('popstate', popStateHandle);
        };
    }, []);
    return (
        <>
            <HeaderTaskManager />

            {children}
        </>
    );
}

export default Layout;
