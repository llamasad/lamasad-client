import { GarbageIcon } from '@/components/icons';
import OverlayWrapper from '../wrappers/overlay-wrapper';
import { useState } from 'react';
import apiFecther from '@/service/task-manger-fetcher/api-fetcher';
import { useRouter } from '@/navigation/next-intl';
import classNames from 'classnames';
function RemoveTask({ task_id, hasMacWrap }: { task_id: string; hasMacWrap: boolean }) {
    const [isTrigger, setIsTrigger] = useState(false);
    const router = useRouter();
    const [onDelete, setOnDelete] = useState(false);
    return (
        <div className="mt-4">
            <span
                className="cursor-pointer text-weak"
                onClick={() => {
                    setIsTrigger(true);
                }}
            >
                <GarbageIcon className="w-5 w-5 mr-2 inline-block" />
                remove task
            </span>
            {isTrigger && (
                <OverlayWrapper>
                    <div className="top-[50%] translate-y-[-50%] relative z-50 mx-auto w-[280px] h-[110px] bg-cooler rounded ">
                        <div className="w-full h-[70px] p-2 flex items-center">
                            <span>do you want to remove this task?</span>
                        </div>
                        <div className="w-full h-[40px] border-t border-weak flex">
                            <div
                                onClick={() => {
                                    setIsTrigger(false);
                                }}
                                className="w-1/2 text-center leading-[40px] cursor-pointer"
                            >
                                Cancel
                            </div>
                            <div
                                onClick={() => {
                                    setOnDelete(true);
                                    apiFecther(`/api/task/${task_id}`, 'DELETE').then((res) => {
                                        hasMacWrap && router.push('/showcase/product/task-manager/home');
                                        !hasMacWrap && (window.location.href = '/showcase/product/task-manager/home ');
                                        setOnDelete(false);
                                    });
                                }}
                                className={classNames(
                                    'w-1/2 text-center leading-[40px] cursor-pointer border-l border-weak',
                                    { 'pointer-events-none': onDelete },
                                )}
                            >
                                Ok
                            </div>
                        </div>
                    </div>
                </OverlayWrapper>
            )}
        </div>
    );
}

export default RemoveTask;
