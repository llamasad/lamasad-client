import { AddUserIcon, ExitIcon, LoadIcon } from '@/components/icons';
import useDebounce from '@/hooks/use-debounce';
import { Input } from 'antd';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import Image from 'next/image';
import apiFecther from '@/service/task-manger-fetcher/api-fetcher';

function AddUserToTask({ task_id }: { task_id: string }) {
    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState<string>('');
    const [result, setResult] = useState<any[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [user, setUser] = useState<any>(null);
    const debouncedValue = useDebounce(value, 500);

    useEffect(() => {
        if (debouncedValue) {
            setIsSearching(true);
            apiFecther(`/api/users?name=${debouncedValue}&task_id=${task_id}`, 'GET')
                .then((res: any) => {
                    setResult(res);
                    setIsSearching(false);
                })
                .catch((err) => {
                    setIsSearching(false);
                });
        }
    }, [debouncedValue, task_id]);
    return (
        <div className="w-full">
            {isFocus || (
                <div className="flex justify-between items-center">
                    <button
                        className="flex items-center"
                        onClick={() => {
                            setIsFocus(true);
                        }}
                    >
                        <AddUserIcon className="w-5 h-5 mr-1" /> add user
                    </button>
                </div>
            )}
            {isFocus && (
                <div>
                    <div className="flex items-center w-full">
                        <span
                            onClick={() => {
                                setIsFocus(false);
                                setUser(null);
                                setValue('');
                                setResult([]);
                            }}
                        >
                            <ExitIcon className="w-4 h-4" />
                        </span>
                        {!!user || (
                            <Tippy
                                placement="bottom"
                                visible={result && result.length > 0}
                                interactive={true}
                                offset={[0, 0]}
                                render={(attrs) => {
                                    return (
                                        value &&
                                        result &&
                                        result.length && (
                                            <ul
                                                {...attrs}
                                                className="bg-[rgb(var(--background-start-rgb))] min-w-[240px] py-2 space-y-2 shadow shadow-weak"
                                            >
                                                {result.map((rs: any, id: number) => (
                                                    <li
                                                        onClick={() => {
                                                            setUser(rs);
                                                        }}
                                                        className="px-3 text-center cursor-pointer"
                                                        key={id}
                                                    >
                                                        <div className="flex items-center">
                                                            <Image
                                                                src={rs.imgSrc}
                                                                alt=""
                                                                width={36}
                                                                height={36}
                                                                className="w-9 h-9 rounded-full mr-2"
                                                            />
                                                            <span>{rs.username}</span>
                                                            <span className="text-weak">{rs.userTag}</span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        )
                                    );
                                }}
                            >
                                <div className="relative w-full">
                                    <input
                                        value={value}
                                        onChange={(ev) => {
                                            setValue(ev.target.value);
                                        }}
                                        type="text"
                                        className="bg-cooler outline-none h-9 rounded w-full"
                                    />
                                    {isSearching && (
                                        <LoadIcon className="animate-spin absolute rounded right-0 h-6 w-6 top-[8px]" />
                                    )}
                                </div>
                            </Tippy>
                        )}

                        {user && (
                            <div className="px-3 flex items-center cursor-pointer rounded w-full">
                                <div className="flex items-center">
                                    <Image
                                        src={user.imgSrc}
                                        alt=""
                                        width={36}
                                        height={36}
                                        className="w-9 h-9 rounded-full mr-2"
                                    />
                                    <span>{user.username}</span>
                                    <span className="text-weak">{user.userTag}</span>
                                </div>
                            </div>
                        )}
                    </div>
                    {user && (
                        <>
                            <div className="flex justify-center">
                                <input
                                    type="radio"
                                    id="radio-permission-1"
                                    name="permission"
                                    value={'1'}
                                    defaultChecked
                                />
                                <label htmlFor="radio-permission-1" className=" mr-3 curs">
                                    view
                                </label>
                                <input type="radio" id="radio-permission-3" name="permission" value={'3'} />
                                <label htmlFor="radio-permission-3">view + edit</label>
                            </div>
                            <button
                                onClick={() => {
                                    const raidoIp = [
                                        document.getElementById('radio-permission-1'),
                                        document.getElementById('radio-permission-3'),
                                    ];
                                    var permission;
                                    if (raidoIp[0] && raidoIp[1]) {
                                        permission = (raidoIp.find((el: any) => el.checked) as HTMLInputElement).value;
                                    }
                                    if (permission) {
                                        setIsFocus(false);
                                        setUser(null);
                                        setValue('');
                                        setResult([]);
                                        apiFecther('/api/user-permission', 'POST', { ...user, permission, task_id })
                                            .then(() => {})
                                            .catch((err) => {});
                                    }
                                }}
                                className="bg-cooler w-28 rounded h-8"
                            >
                                Add
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default AddUserToTask;
