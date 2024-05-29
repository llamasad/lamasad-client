import { SortIcon } from '@/components/icons';

function Sort() {
    return (
        <div
            onClick={() => {
                console.log(document.querySelector('.tm-select-sort'));
                (document.querySelector('.tm-select-sort') as HTMLSelectElement).click();
            }}
            className="flex items-center text-center relative  rounded   h-[32px]  shrink-0  bg-[var(--cooler-color)]"
        >
            <select
                id="tm-select-sort-label"
                className="tm-select-sort  pl-4 pr-5 appearance-none bg-transparent   w-full"
            >
                <option>123</option>
                <option>123</option>
            </select>
            <SortIcon className=" w-[14px] h-[14px] absolute select-none right-[2px] pointer-events-none" />
        </div>
    );
}

export default Sort;
