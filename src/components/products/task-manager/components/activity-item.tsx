'use client';
import { ArrowIcon } from '@/components/icons';
import { Dispatch, SetStateAction, useState } from 'react';
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

function ActivityItem({
    setTrigger,
    _id,
    status,
    limits,
    title,
    request,
    chat_id,
    history_id,
    fileAttach_id,
}: {
    status: 'complete' | 'incomplete' | 'ceased';
    limits: string;
    title: string;
    request: string;
    chat_id: number;
    history_id: number;
    fileAttach_id: number[];
    _id: number;
    setTrigger: Dispatch<SetStateAction<boolean>>;
}) {
    const [isShow, setIsShow] = useState(false);
    limits;
    return (
        <>
            <li
                onClick={() => setIsShow(true)}
                className="px-[8px] rounded py-[8px] border border-current min-w-[240px] flex flex-wrap bg-weak   items-center justify-center cursor-pointer"
            >
                <span className="text-lg w-full mr-[10px] text-center">
                    Activity:<span className="text-green-500">{title}</span>
                </span>
                <span className="text-lg w-1/2 border-r border-current text-center">
                    Percent <span className="text-green-500">{limits}</span>
                </span>
                <span className="text-lg w-1/2 text-center">{status}</span>
            </li>
            <Transition in={isShow} timeout={duration} unmountOnExit>
                {(state) => (
                    <>
                        <div className="absolute inset-0 top-[-10px] overflow-hidden z-10">
                            <div
                                className="absolute  inset-y-0  inset-x-[-2px] px-[2px]"
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

                                    <ActivityItemForm
                                        setTrigger={setTrigger}
                                        _id={_id}
                                        files={fileAttach_id}
                                        title={title}
                                        chat_id={chat_id}
                                        history_id={history_id}
                                        request={request}
                                        status={status}
                                        limits={limits}
                                    />
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
