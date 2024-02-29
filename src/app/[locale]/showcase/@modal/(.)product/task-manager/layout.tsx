import MacbookWrapper from '@/components/wrapper-components/macbook-wrapper';
import { ReactNode } from 'react';
import HeaderTaskManager from '@/components/products/task-manager/header';
function layout({ children }: { children: ReactNode }) {
    return (
        <MacbookWrapper url={'taskmanager.com'}>
            <>
                <HeaderTaskManager />
                {children}
            </>
        </MacbookWrapper>
    );
}

export default layout;
