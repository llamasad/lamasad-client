'use client';
import images from '@/assets/images';
import classNames from 'classnames';
import Image from 'next/image';
import { Jockey_One } from 'next/font/google';
import { PlusIcon } from '@/components/icons';
import Tippy from '@tippyjs/react/headless';
import LoginCreateAcount from './login-create-acount';
import { useState } from 'react';
import styled from 'styled-components';
import { useSpring, motion } from 'framer-motion';
import Link from 'next/link';

const Box = styled(motion.div)``;
const jockeyOne = Jockey_One({ weight: '400', preload: false });

function HeaderTaskManager() {
    const [isTrigger, setIsTrigger] = useState<boolean>(false);
    const springConfig = { damping: 15 };
    const initialScale = 0.5;
    const opacity = useSpring(0, springConfig);
    const scale = useSpring(initialScale, springConfig);
    function onMount() {
        scale.set(1);
        opacity.set(1);
        setIsTrigger(true);
    }

    function onHide({ unmount }: { unmount: any }) {
        setIsTrigger(false);
        const cleanup = scale.onChange((value) => {
            if (value <= initialScale) {
                cleanup();
                unmount();
            }
        });

        scale.set(initialScale);
        opacity.set(0);
    }
    return (
        <header className="task-manager_header flex items-center justify-between relative ">
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
            <div className="flex items-center">
                <div>
                    <Tippy
                        hideOnClick={true}
                        placement="bottom"
                        trigger="click"
                        interactive={true}
                        onMount={onMount}
                        onHide={onHide}
                        render={(attrs) =>
                            isTrigger && (
                                <Box style={{ scale, opacity }} {...attrs}>
                                    <LoginCreateAcount />
                                </Box>
                            )
                        }
                    >
                        <button className="select-none cursor-pointer text-base mr-4">Login/Create Acount</button>
                    </Tippy>
                </div>

                <button className="rounded border flex items-center border-dashed border-weak p-1 ">
                    <PlusIcon width="20" height="20" className="mr-1" />
                    Create a task
                </button>
            </div>
        </header>
    );
}

export default HeaderTaskManager;
