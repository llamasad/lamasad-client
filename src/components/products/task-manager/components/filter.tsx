'use client';
import { FilterIcon, SearchIcon } from '@/components/icons';
import { ChangeEvent, useState } from 'react';
import Categories from './categories';
import CategoryItem from './category-item';
import Tippy from '@tippyjs/react/headless';
import CategoryContainer from './category-container';
import { Dispatch, SetStateAction } from 'react';
import { TypeOfSatatusInterface } from './status';
interface params {
    filter: Array<'macro' | 'micro' | 'inProject' | 'notInProject'>;
    status: keyof TypeOfSatatusInterface | 'all';
    sort: 'a-z' | 'z-a' | 'latest' | 'oldest';
    page: number;
    search?: string;
}

function Filter({ state }: { state: { setParams: Dispatch<SetStateAction<params>>; params: params } }) {
    const [value, setValue] = useState<string>('');

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
                    value={value}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setValue(event.target.value);
                    }}
                    className="h-[calc(100%-16px)] border-b border-weak my-[8px] flex-1 bg-[var(--cooler-color)]  outline-none"
                    id=""
                />
                <span
                    onClick={() => {
                        state.setParams((params) => {
                            return { ...params, search: value, page: 1 };
                        });
                    }}
                >
                    <SearchIcon className="w-[44px] cursor-pointer h-[32px] pr-[12px] border-r border-weak" />
                </span>{' '}
                <div>
                    <Tippy
                        hideOnClick={true}
                        placement="bottom"
                        trigger="click"
                        interactive={true}
                        render={(attrs) => (
                            <CategoryContainer
                                setState={(
                                    statee:
                                        | Array<'macro' | 'micro' | 'inProject' | 'notInProject'>
                                        | ((
                                              lastState?: Array<'macro' | 'micro' | 'inProject' | 'notInProject'>,
                                          ) => Array<'macro' | 'micro' | 'inProject' | 'notInProject'>),
                                ) => {
                                    if (typeof statee === 'function') {
                                        const newState = statee(state.params.filter);
                                        statee = newState;
                                    }
                                    state.setParams((params: params) => {
                                        return {
                                            ...params,
                                            filter: statee as Array<'macro' | 'micro' | 'inProject' | 'notInProject'>,
                                            page: 1,
                                        };
                                    });
                                }}
                                state={state.params.filter}
                                {...attrs}
                            />
                        )}
                    >
                        <div>
                            <FilterIcon className="w-[26px]  cursor-pointer h-[26px] ml-[12px]" />
                        </div>
                    </Tippy>
                </div>
            </div>
            <Categories
                sort={state.params.sort}
                setSort={(
                    statee:
                        | 'a-z'
                        | 'z-a'
                        | 'latest'
                        | 'oldest'
                        | ((lastState?: 'a-z' | 'z-a' | 'latest' | 'oldest') => 'a-z' | 'z-a' | 'latest' | 'oldest'),
                ) => {
                    if (typeof statee === 'function') {
                        const newState = statee(state.params.sort);
                        statee = newState;
                    }
                    state.setParams((params) => {
                        return { ...params, sort: statee as 'a-z' | 'z-a' | 'latest' | 'oldest', page: 1 };
                    });
                }}
            >
                {[...state.params.filter, state.params.status].map((value, index) => {
                    if (value === 'all') return null;
                    return (
                        <CategoryItem
                            isActived={true}
                            setState={(
                                statee:
                                    | Array<'macro' | 'micro' | 'inProject' | 'notInProject'>
                                    | ((
                                          lastState?: Array<'macro' | 'micro' | 'inProject' | 'notInProject'>,
                                      ) => Array<'macro' | 'micro' | 'inProject' | 'notInProject'>),
                            ) => {
                                if (typeof statee === 'function') {
                                    const newState = statee(state.params.filter);
                                    if (!newState) {
                                        state.setParams((params) => {
                                            return { ...params, status: 'all', page: 1 };
                                        });
                                        return;
                                    }
                                    statee = newState;
                                }

                                state.setParams((params) => {
                                    return {
                                        ...params,
                                        filter: statee as Array<'macro' | 'micro' | 'inProject' | 'notInProject'>,
                                        page: 1,
                                    };
                                });
                            }}
                            key={index}
                            content={value}
                        />
                    );
                })}
            </Categories>
        </div>
    );
}

export default Filter;
