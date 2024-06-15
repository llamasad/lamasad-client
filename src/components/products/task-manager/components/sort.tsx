import { SortIcon } from '@/components/icons';
import { Dispatch, SetStateAction } from 'react';

function Sort({ sort, setSort }: { sort: string; setSort: Function }) {
    return (
        <div
            onClick={() => {
                document.querySelector('.tm-select-sort');
                (document.querySelector('.tm-select-sort') as HTMLSelectElement).click();
            }}
            className="flex items-center text-center relative  rounded   h-[32px]  shrink-0  bg-[var(--cooler-color)]"
        >
            <select
                value={sort}
                onChange={(event) => {
                    setSort(event.target.value);
                }}
                id="tm-select-sort-label"
                className="tm-select-sort  pl-4 pr-5 appearance-none bg-transparent   w-full"
            >
                <option>a-z</option>
                <option>z-a</option>
                <option>latest</option>

                <option>older</option>
            </select>
            <SortIcon className=" w-[14px] h-[14px] absolute select-none right-[2px] pointer-events-none" />
        </div>
    );
}

export default Sort;
