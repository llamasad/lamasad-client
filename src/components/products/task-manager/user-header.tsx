import images from '@/assets/images';
import classNames from 'classnames';
import Image from 'next/image';
import { Jockey_One } from 'next/font/google';
import { useEffect, useState } from 'react';
import apiFecther from '@/service/task-manger-fetcher/api-fetcher';
import { UserData } from '@/service/task-manger-fetcher/api-fetcher';
import Link from 'next/link';
const jockeyOne = Jockey_One({ weight: '400', preload: false });

function UserHeaderTaskManager() {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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
                <Image src={images.logo} className="cursor-pointer" width={60} height={60} alt="" />
                <Link href={'/en/showcase/product/task-manager/home'}> test</Link>
                <Link href="/en/showcase/product/task-manager/task-detail/123">123</Link>
                <span className="ml-[-10px] rotate-3 text-3xl font-extralight text-weak">/</span>
                <h2 className={classNames('ml-[5px] text-tl cursor-pointer text-3xl font-medium', jockeyOne.className)}>
                    TManager
                </h2>
                <div className="border-b border-thin w-screen absolute bottom-0 border-weak  inset-x-[50%] mx-[-50vw] l-0"></div>
            </div>
            {userData && (
                <div className="flex items-center">
                    <img src={userData.imgSrc} alt="avatar" className="w-9 h-9 rounded-full" />
                    <span className="text-lg text-tl ml-1">{userData.username}</span>
                </div>
            )}
        </header>
    );
}

export default UserHeaderTaskManager;
