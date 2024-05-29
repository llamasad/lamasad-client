'use client';
import MacbookWrapper from '@/components/wrapper-components/macbook-wrapper';
import { ReactNode } from 'react';
import HeaderTaskManager from '@/components/products/task-manager/header';
import OverlayWrapper from '@/components/wrapper-components/overlay-wrapper';
import UserHeaderTaskManager from '@/components/products/task-manager/user-header';
import useTypeUserFetch from '@/hooks/use-type-user-fetcher';
import { useSelector } from '@/lib/redux';
import { selectTMUser } from '@/lib/redux/slices/tm-user-slice';

function Layout({ children, auth }: { children: ReactNode; auth: ReactNode }) {
    const { type, isError, isLoading } = useTypeUserFetch();
    const TMUser = useSelector(selectTMUser);
    console.log(type, TMUser);

    return (
        <MacbookWrapper url={'taskmanager.com'}>
            <>
                {!type && <HeaderTaskManager />}

                {type === 'custom' && <HeaderTaskManager />}
                {type === 'user' && <UserHeaderTaskManager />}
                {type === 'userNonAuth' && auth}
                <OverlayWrapper>{children}</OverlayWrapper>
            </>
        </MacbookWrapper>
    );
}

export default Layout;
