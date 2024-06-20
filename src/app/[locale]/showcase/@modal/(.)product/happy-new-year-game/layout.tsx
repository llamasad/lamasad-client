// import MacbookWrapper from '@/components/wrapper-components/macbook-wrapper';
import { ReactNode } from 'react';
import MacbookWrapper from '@/components/wrapper-components/macbook-wrapper';
function Layout({ children }: { children: ReactNode }) {
    return <MacbookWrapper url="happy-new-year-game.com">{children}</MacbookWrapper>;
}

export default Layout;
