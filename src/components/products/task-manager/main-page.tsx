'use client';
import images from '@/assets/images';
import Image from 'next/image';
import { Jockey_One } from 'next/font/google';
import { PlusIcon } from '@/components/icons';
import classNames from 'classnames';
import Link from 'next/link';
const jockeyOne = Jockey_One({ weight: '400', preload: false });
import { productUrlSlice, selectUrl } from '@/lib/redux/slices/product-url-slice';
import { useDispatch, useSelector } from '@/lib/redux';
import { LinkForMacWrap } from '@/components/wrapper-components/macbook-wrapper';
import { useRouter } from 'next/navigation';
import HardLink from '@/components/hard-link';
function MainPage({ hasMacWrap }: { hasMacWrap: boolean }) {
    const dispatch = useDispatch();
    const Route = useRouter();
    return (
        <div className="">
            <main>
                <h2 className="text-3xl text-center mt-6">
                    Our task management website delivers superior, tailored solutions designed to optimize your
                    professional workflow.
                </h2>
                <div className="flex items-center justify-center mt-10">
                    {hasMacWrap ? (
                        <LinkForMacWrap
                            href={'/en/showcase/product/task-manager/login'}
                            className="border-weak border text-center leading-[28px] rounded-lg px-3 py-1 text-lg"
                        >
                            get start
                        </LinkForMacWrap>
                    ) : (
                        <HardLink
                            href="/en/showcase/product/task-manager/login"
                            className="border-weak border text-center leading-[28px] rounded-lg px-3 py-1 text-lg"
                        >
                            get start
                        </HardLink>
                    )}
                </div>
            </main>
        </div>
    );
}

export default MainPage;
