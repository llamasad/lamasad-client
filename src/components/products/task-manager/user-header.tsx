import images from '@/assets/images';
import classNames from 'classnames';
import Image from 'next/image';
import { Jockey_One } from 'next/font/google';
import { useEffect, useState } from 'react';
import apiFecther from '@/service/task-manger-fetcher/api-fetcher';
import { UserData } from '@/service/task-manger-fetcher/api-fetcher';
import StaticLink from '@/components/navigation/staic-link';
const jockeyOne = Jockey_One({ weight: '400', preload: false });
import Tippy from '@tippyjs/react/headless';
import { useRouter } from '@/navigation/next-intl';
import { mutate } from 'swr';
function deleteAccessToken(name: string) {
    localStorage.removeItem(name);
}

function UserHeaderTaskManager({ hasMacWrap = true }: { hasMacWrap?: boolean }) {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const route = useRouter();
    console.log('userData', userData);
    useEffect(() => {
        apiFecther<UserData>('/api/user', 'GET')
            .then((res) => {
                res && setUserData(res);
                setLoading(false);
            })
            .catch((error) => setError(error));
    }, []);
    return (
        <header className="flex items-center justify-between relative">
            <div className="flex items-center ">
                <StaticLink href="/">
                    <Image unoptimized src={images.logo} className="cursor-pointer" width={60} height={60} alt="" />
                </StaticLink>
                <span className="ml-[-10px] rotate-3 text-3xl font-extralight text-weak">/</span>
                <h2 className={classNames('ml-[5px] text-tl cursor-pointer text-3xl font-medium', jockeyOne.className)}>
                    TManager
                </h2>
                <div className="border-b border-thin w-screen absolute bottom-0 border-weak  inset-x-[50%] mx-[-50vw] l-0"></div>
            </div>
            {userData && (
                <Tippy
                    hideOnClick={true}
                    placement="bottom"
                    trigger="click"
                    interactive={true}
                    render={(attr) => (
                        <ul
                            {...attr}
                            className="bg-[rgb(var(--background-start-rgb))] p-2 rounded-md shadow shadow-weak"
                        >
                            {/* <li className="text-tl">Profile</li> */}
                            <li
                                className="text-tl cursor-pointer"
                                onClick={() => {
                                    deleteAccessToken('access-token');
                                    hasMacWrap
                                        ? route.push('/showcase/product/task-manager')
                                        : (window.location.href = '/showcase/product/task-manager');
                                    mutate(`${process.env.NEXT_PUBLIC_SERVER_SIDE_URL as string}/user-check`);
                                }}
                            >
                                Logout
                            </li>
                        </ul>
                    )}
                >
                    <div className="flex items-center cursor-pointer">
                        <Image
                            src={userData.imgSrc}
                            width={36}
                            height={36}
                            alt="avatar"
                            className="w-9 h-9 rounded-full"
                        />
                        <span className="text-lg text-tl ml-1">{userData.username}</span>
                    </div>
                </Tippy>
            )}
        </header>
    );
}

export default UserHeaderTaskManager;
