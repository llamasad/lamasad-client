import { MacbookDisplayType } from '@/components/wrapper-components/macbook-wrapper';
import classNames from 'classnames';
import { TypeOfSatatus, TypeOfSatatusInterface } from './status';
import Image from 'next/image';
import images from '@/assets/images';
import { TaskIcon, MessageIcon, TagsIcon, ViewDocsIcon } from '@/components/icons';
import { StaticLinkForDynamicRoute } from '@/components/navigation/staic-link';
import HardLink from '@/components/hard-link';
function Task({
    display,
    status,
    title,
    type,
    startTime,
    _id,
    hasMacWrap,
}: {
    display: MacbookDisplayType;
    status: keyof TypeOfSatatusInterface;
    title: string;
    startTime: string;
    type: 'macro' | 'micro';
    _id: number;
    hasMacWrap: boolean;
}) {
    let task_id = type + '-' + _id;
    return (
        <div
            style={{ borderColor: TypeOfSatatus[status].color }}
            className={classNames(
                {
                    'w-1/5-minus-8px': display === 'desktop' && hasMacWrap,
                    'w-1/4-minus-8px': display === 'laptop' && hasMacWrap,
                    'w-1/2-minus-8px': display === 'tablet' && hasMacWrap,
                    'w-full-minus-8px': display === 'mobile' && hasMacWrap,
                    'h-37': display === 'desktop' || (display === 'laptop' && hasMacWrap),
                    'h-47': display === 'tablet' || (display === 'mobile' && hasMacWrap),
                    'mb:w-full-minus-8px tl:w-1/2-minus-8px lt:w-1/4-minus-8px dt:w-1/5-minus-8px dt:h-37 lt:h-37 tl:h-47 mb:h-47':
                        !hasMacWrap,
                },
                'px-[8px] bg-[var(--cooler-color)] mt-[16px] mx-[8px] border-t-4 m-[4px]',
            )}
        >
            {hasMacWrap ? (
                <StaticLinkForDynamicRoute
                    pathname="/showcase/product/task-manager/task-detail/[id]"
                    params={task_id}
                    className="w-full"
                    isHighlight={false}
                >
                    <div className="flex flex-col justify-around h-full">
                        <div className="flex justify-between items-center">
                            <span className="text-tl font-medium text-base">{title}</span>
                            <ViewDocsIcon className="w-[34px] cursor-pointer h-[34px]" />
                        </div>
                        <div className="flex justify-between items-center">
                            <Image
                                src={images.avatar}
                                alt=""
                                width={display === 'laptop' || display === 'desktop' ? 44 : 54}
                                height={display === 'laptop' || display === 'desktop' ? 44 : 54}
                            />
                            <div className="flex space-x-2.5">
                                <div className="relative">
                                    <TaskIcon className="w-[22px] cursor-pointer h-[22px]" />
                                    {/* <div className="bg-green-500 text-tl rounded-full w-[20px] h-[20px] absolute top-[-10px] right-[-10px] text-center leading-[20px] text-xs ">
                                </div> */}
                                </div>
                                <div className="relative">
                                    <TagsIcon className="w-[22px] cursor-pointer h-[22px]  " />
                                    {/* <div className="bg-green-500 text-tl rounded-full w-[20px] h-[20px] absolute top-[-10px] right-[-10px] text-center leading-[20px] text-xs ">
                                    
                                </div> */}
                                </div>

                                <div className="relative">
                                    <MessageIcon className="w-[28px] cursor-pointer h-[22px]" />
                                    {/* <div className="bg-green-500 text-tl rounded-full w-[20px] h-[20px] absolute top-[-10px] right-[-6px] text-center leading-[20px] text-xs ">
                                    
                                </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>{task_id}</span>
                            <span className="text-green-500 font-medium ">{startTime}</span>
                        </div>
                        <div className="flex justify-between"></div>
                    </div>
                </StaticLinkForDynamicRoute>
            ) : (
                <HardLink href={'/showcase/product/task-manager/task-detail/' + task_id}>
                    <div className="flex flex-col justify-around h-full">
                        <div className="flex justify-between items-center">
                            <span className="text-tl font-medium text-base">{title}</span>
                            <ViewDocsIcon className="w-[34px] cursor-pointer h-[34px]" />
                        </div>
                        <div className="flex justify-between items-center">
                            <Image
                                src={images.avatar}
                                alt=""
                                width={display === 'laptop' || display === 'desktop' ? 44 : 54}
                                height={display === 'laptop' || display === 'desktop' ? 44 : 54}
                            />
                            <div className="flex space-x-2.5">
                                <div className="relative">
                                    <TaskIcon className="w-[22px] cursor-pointer h-[22px]" />
                                    {/* <div className="bg-green-500 text-tl rounded-full w-[20px] h-[20px] absolute top-[-10px] right-[-10px] text-center leading-[20px] text-xs ">
                                </div> */}
                                </div>
                                <div className="relative">
                                    <TagsIcon className="w-[22px] cursor-pointer h-[22px]  " />
                                    {/* <div className="bg-green-500 text-tl rounded-full w-[20px] h-[20px] absolute top-[-10px] right-[-10px] text-center leading-[20px] text-xs ">
                                    
                                </div> */}
                                </div>

                                <div className="relative">
                                    <MessageIcon className="w-[28px] cursor-pointer h-[22px]" />
                                    {/* <div className="bg-green-500 text-tl rounded-full w-[20px] h-[20px] absolute top-[-10px] right-[-6px] text-center leading-[20px] text-xs ">
                                    
                                </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>{task_id}</span>
                            <span className="text-green-500 font-medium ">{startTime}</span>
                        </div>
                        <div className="flex justify-between"></div>
                    </div>
                </HardLink>
            )}
        </div>
    );
}

export default Task;
