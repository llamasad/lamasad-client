import { ReactNode } from 'react';

function HardLink({ children, className, href }: { children: ReactNode; className?: string; href: string }) {
    return (
        <a href={href} className={className}>
            {children}
        </a>
    );
}

export default HardLink;
