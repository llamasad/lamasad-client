import { ReactNode } from 'react';

function RowTechnogy({ children }: { children: ReactNode }) {
    console.log(children);
    return <div className="space-x-[12px]  w-[80%] flex items-center mx-auto transition-size">{children}</div>;
}

export default RowTechnogy;
