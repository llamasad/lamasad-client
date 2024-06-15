import { Dispatch, ReactNode, SetStateAction } from 'react';
import Sort from './sort';

function Categories({ children, setSort, sort }: { children: ReactNode; setSort: Function; sort: string }) {
    return (
        <div className="flex items-center mt-[10px] space-x-2 overflow-scroll">
            <Sort setSort={setSort} sort={sort} />
            <div className="shrink-0 w-[1px] h-full bg-weak min-h-[36px] mx-2"></div>
            {children}
        </div>
    );
}

export default Categories;
