import { Dispatch, SetStateAction } from 'react';
import CategoryItem from './category-item';

const array = ['123', '456', '789', '789', '789', '789', '789', '789', '789'];

function CategoryContainer({
    setState,
    state,
    ...Props
}: {
    setState?: Dispatch<SetStateAction<Array<string>>>;
    state: Array<string>;
    Props?: any;
}) {
    return (
        <div
            className="p-2 rounded border-tl border-2 border-solid w-[200px] justify-evenly bg-[rgb(var(--background-start-rgb))] flex flex-wrap"
            {...Props}
        >
            {array.map((value, index) => (
                <CategoryItem
                    setState={setState}
                    state={state}
                    className="mb-[8px] ml-[8px]"
                    isActived={false}
                    key={index}
                    content={value}
                />
            ))}
        </div>
    );
}

export default CategoryContainer;
