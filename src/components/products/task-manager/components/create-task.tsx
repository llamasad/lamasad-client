'use client';
import { PlusIcon } from '@/components/icons';
import { MacbookDisplayType } from '@/components/wrapper-components/macbook-wrapper';
import classNames from 'classnames';
import { useState } from 'react';
import { ComponentChildContext } from '@/components/wrapper-components/overlay-wrapper';
import { useContext } from 'react';
import CreateTaskDetail from './create-task-detail';
import Overlay from '@/components/overlay';
function CreateTask({ display, hasMacWrap }: { display: MacbookDisplayType; hasMacWrap: boolean }) {
    const { ComponentChild, mountChild, unmountChild } = useContext(ComponentChildContext);
    const [isCreateTaskDetail, setIsCreateTaskDetail] = useState(false);
    return (
        <>
            <div
                onClick={() => {
                    console.log('component2', CreateTaskDetail);

                    if (hasMacWrap) mountChild(<CreateTaskDetail hasMacWrap={hasMacWrap} />);
                    else setIsCreateTaskDetail(true);
                }}
                className={classNames(
                    {
                        'w-1/5-minus-8px': display === 'desktop',
                        'w-1/4-minus-8px': display === 'laptop',
                        'w-1/2-minus-8px': display === 'tablet',
                        'w-full-minus-8px': display === 'mobile',
                        'h-37': display === 'desktop' || display === 'laptop',
                        'h-47': display === 'tablet' || display === 'mobile',
                        'mb:w-full-minus-8px tl:w-1/2-minus-8px lt:w-1/4-minus-8px dt:w-1/5-minus-8px dt:h-37 lt:h-37 tl:h-47 mb:h-47':
                            !hasMacWrap,
                    },
                    'flex flex-wrap mt-[20px] cursor-pointer select-none px-[8px]  mt-[16px] mx-[8px]  m-[4px] relative',
                )}
            >
                <div className="absolute top-0 right-0 w-1/4 border-t-2 border-r-2  border-dashed border-tl   h-1/3"></div>
                <div className="absolute top-0 left-0 w-1/4 border-t-2 border-l-2 border-dashed border-tl   h-1/3"></div>
                <div className="absolute bottom-0 right-0 w-1/4 border-b-2 border-r-2 border-dashed border-tl   h-1/3"></div>
                <div className="flex flex-col items-center justify-center w-full">
                    <PlusIcon className="w-[40px]  h-[40px]" />
                    <span className="text-xl font-medium">Create a task</span>
                </div>
                <div className="absolute bottom-0 left-0 w-1/4 border-b-2 border-l-2 border-dashed border-tl   h-1/3"></div>
            </div>
            {!hasMacWrap && isCreateTaskDetail && (
                <>
                    <Overlay />
                    <div className="z-50 absolute top-8 left-[50vw] translate-x-[-50%]">
                        <CreateTaskDetail hasMacWrap={hasMacWrap} setIsCreateTaskDetail={setIsCreateTaskDetail} />
                    </div>
                </>
            )}
        </>
    );
}

export default CreateTask;
