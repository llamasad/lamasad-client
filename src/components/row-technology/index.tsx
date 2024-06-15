import { ReactNode } from 'react';

function RowTechnogy({ children }: { children: ReactNode }) {
    children;
    return (
        <div className="space-x-[12px]  lt:w-[80%] tl:w-[70%] mb:w-[60%] flex flex-wrap items-center mx-auto transition-size">
            {children}
        </div>
    );
}

export default RowTechnogy;
