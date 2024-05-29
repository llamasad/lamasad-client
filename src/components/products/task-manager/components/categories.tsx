import { ReactNode } from 'react';
import Sort from './sort';

function Categories({ children }: { children: ReactNode }) {
    return (
        <div className="flex items-center mt-[10px] space-x-2 overflow-scroll">
            <Sort />
            <div className="shrink-0 w-[1px] h-full bg-weak min-h-[36px] mx-2"></div>
            {children}
        </div>
    );
}

export default Categories;
