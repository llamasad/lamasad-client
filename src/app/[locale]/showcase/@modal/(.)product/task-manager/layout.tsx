'use client';
import MacbookWrapper from '@/components/wrapper-components/macbook-wrapper';
import { ReactNode } from 'react';
import HeaderTaskManager from '@/components/products/task-manager/header';
import OverlayWrapper from '@/components/wrapper-components/overlay-wrapper';
import UserHeaderTaskManager from '@/components/products/task-manager/user-header';
import useTypeUserFetch from '@/hooks/use-type-user-fetcher';
import Footer from '@/components/products/task-manager/footer';
function Layout({ children, auth }: { children: ReactNode; auth: ReactNode }) {
    const { type, isError, isLoading } = useTypeUserFetch();
    if (isLoading)
        return (
            <div className="min-h-[calc(100vh-171px)] flex justify-center items-center">
                <div>
                    <l-tail-chase size="80" speed="1.75" color="currentColor"></l-tail-chase>{' '}
                </div>
            </div>
        );
    return (
        <MacbookWrapper url={'taskmanager.com'}>
            <>
                {!type && <HeaderTaskManager />}

                {type === 'custom' && <HeaderTaskManager />}
                {type === 'user' && <UserHeaderTaskManager />}
                {type === 'userNonAuth' && auth}
                <OverlayWrapper>{children}</OverlayWrapper>
            </>
            <Footer />{' '}
        </MacbookWrapper>
    );
}

export default Layout;
