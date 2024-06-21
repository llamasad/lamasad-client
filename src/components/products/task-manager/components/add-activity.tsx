import { ArrowIcon, PlusIcon } from '@/components/icons';
import { Dispatch, SetStateAction, useState } from 'react';
import { Transition } from 'react-transition-group';
import ActivityItemForm from './activity-item-form';
import AddActivityItemForm from './add-activity-item-form';
import AddActivityTaskItemForm from './add-activity-task-item-form';

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

function AddActitvity({
    setState,
    task_id,
    type,
    project_id,
    hasMacWrap,
}: {
    setState: {
        setActivities: Dispatch<SetStateAction<any>>;
        setMicroTasks: Dispatch<SetStateAction<any>>;
    };
    task_id: string;
    type: 'macro' | 'micro';
    project_id?: number | null;
    hasMacWrap: boolean;
}) {
    const [isShow, setIsShow] = useState(false);
    return (
        <div>
            <div
                onClick={() => {
                    setIsShow(true);
                }}
                className="px-[10px] cursor-pointer rounded mb-[10px] py-[8px] border border-current flex bg-weak   items-center justify-center"
            >
                <span className="text-lg mr-[10px]">{type === 'micro' ? 'Add activity' : 'Add task/activity'}</span>
                <ArrowIcon className="rotate-[-90deg] w-[16px] h-[16px] z-10 text-tl" />
            </div>
            {type === 'micro' ? (
                <Transition in={isShow} timeout={duration} unmountOnExit>
                    {(state) => (
                        <>
                            <div className="absolute inset-0  overflow-hidden z-10">
                                <div
                                    className="absolute inset-y-0  inset-x-[-2px] px-[4px]"
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

                                        <AddActivityItemForm
                                            setActivities={setState.setActivities}
                                            setIsShow={setIsShow}
                                            task_id={task_id}
                                        />
                                    </div>
                                    <div className="absolute  inset-0 bg-[rgb(var(--background-start-rgb))]"> </div>
                                </div>
                            </div>
                        </>
                    )}
                </Transition>
            ) : (
                <Transition in={isShow} timeout={duration} unmountOnExit>
                    {(state) => (
                        <>
                            <div className="absolute inset-0  overflow-hidden z-10">
                                <div
                                    className="absolute inset-y-0  inset-x-[-2px] px-[4px]"
                                    style={{
                                        ...defaultStyle,
                                        ...(transitionStyles as any)[state],
                                    }}
                                >
                                    <div className="relative z-20 h-full">
                                        <span className="absolute top-[6px] z-10" onClick={() => setIsShow(false)}>
                                            <ArrowIcon className="w-[20px] rotate-90 h-[20px]" />
                                        </span>
                                        <AddActivityTaskItemForm
                                            hasMacWrap={hasMacWrap}
                                            setIsShow={setIsShow}
                                            setState={setState}
                                            project_id={project_id}
                                            task_id={task_id}
                                        />
                                    </div>
                                    <div className="absolute  inset-0 bg-[rgb(var(--background-start-rgb))]"> </div>
                                </div>
                            </div>
                        </>
                    )}
                </Transition>
            )}
        </div>
    );
}

export default AddActitvity;
