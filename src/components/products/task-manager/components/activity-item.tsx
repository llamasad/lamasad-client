'use client';
import { ArrowIcon } from '@/components/icons';
import { useState } from 'react';
import { Transition } from 'react-transition-group';
import ActivityItemForm from './activity-item-form';
const duration = 300;
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
    transform: 'translateX(-100%)', // Start off-screen to the left
};

const transitionStyles = {
    entering: { transform: 'translateX(0%)' }, // Slide in to view
    entered: { transform: 'translateX(0%)' },
    exiting: { transform: 'translateX(-100%)' }, // Slide out to the left
    exited: { transform: 'translateX(-100%)' },
};

function ActivityItem() {
    const [isShow, setIsShow] = useState(false);

    return (
        <>
            <li
                onClick={() => setIsShow(true)}
                className="px-[8px] rounded py-[8px] border border-current min-w-[240px] flex flex-wrap bg-weak  hover:p-[9px] items-center justify-center hover"
            >
                <span className="text-lg w-full mr-[10px] text-center">Add activity</span>
                <span className="text-lg w-1/2 border-r border-current text-center">
                    Percent <span className="text-green-500">18%</span>
                </span>
                <span className="text-lg w-1/2 text-center">Unfinish</span>
            </li>
            <Transition in={isShow} timeout={duration} unmountOnExit>
                {(state) => (
                    <>
                        <div className="absolute inset-0 top-[-10px] overflow-hidden z-10">
                            <div
                                className="absolute  inset-0"
                                style={{
                                    ...defaultStyle,
                                    ...(transitionStyles as any)[state],
                                }}
                            >
                                <div className="relative z-20 h-full">
                                    <span className="absolute top-[6px]" onClick={() => setIsShow(false)}>
                                        <ArrowIcon className="w-[20px] rotate-90 h-[20px]" />
                                    </span>
                                    <h2 className="text-xl  text-center  font-semibold">Activity detail</h2>

                                    <ActivityItemForm />
                                </div>
                                <div className="absolute  inset-0 bg-[rgb(var(--background-start-rgb))]"> </div>
                            </div>
                        </div>
                    </>
                )}
            </Transition>
        </>
    );
}

export default ActivityItem;
