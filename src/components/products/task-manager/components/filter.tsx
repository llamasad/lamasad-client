'use client';
import { FilterIcon, SearchIcon } from '@/components/icons';
import { ChangeEvent, useState } from 'react';
import Categories from './categories';
import CategoryItem from './category-item';
import Tippy from '@tippyjs/react/headless';
import CategoryContainer from './category-container';

function Filter() {
    const [searchValue, setSearchValue] = useState<string>('');
    const [categories, setCategories] = useState<Array<string>>([]);
    return (
        <div>
            <div className="mt-[20px]  h-[40px] w-full bg-[var(--cooler-color)] flex items-center px-[16px]">
                <input
                    type="text"
                    name=""
                    onFocus={(event: any) => {
                        (event.target as HTMLInputElement).classList.add('border-green-500');
                        (event.target as HTMLInputElement).classList.remove('border-weak');
                    }}
                    onBlur={(event: any) => {
                        (event.target as HTMLInputElement).classList.remove('border-green-500');
                        (event.target as HTMLInputElement).classList.add('border-weak');
                    }}
                    value={searchValue}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setSearchValue(event.target.value);
                    }}
                    className="h-[calc(100%-16px)] border-b border-weak my-[8px] flex-1 bg-[var(--cooler-color)]  outline-none"
                    id=""
                />
                <SearchIcon className="w-[44px] cursor-pointer h-[32px] pr-[12px] border-r border-weak" />
                <div>
                    <Tippy
                        hideOnClick={true}
                        placement="bottom"
                        trigger="click"
                        interactive={true}
                        render={(attrs) => <CategoryContainer setState={setCategories} state={categories} {...attrs} />}
                    >
                        <div>
                            <FilterIcon className="w-[26px]  cursor-pointer h-[26px] ml-[12px]" />
                        </div>
                    </Tippy>
                </div>
            </div>
            <Categories>
                {categories.map((value, index) => (
                    <CategoryItem isActived={true} setState={setCategories} key={index} content={value} />
                ))}
            </Categories>
        </div>
    );
}

export default Filter;
