import { MacbookDisplayType } from '@/components/wrapper-components/macbook-wrapper';
import classNames from 'classnames';
import { TypeOfSatatus, TypeOfSatatusInterface } from './status';
import Image from 'next/image';
import images from '@/assets/images';
import { TaskIcon, MessageIcon, TagsIcon, ViewDocsIcon } from '@/components/icons';
import Link from 'next/link';
function Task({ display, type }: { display: MacbookDisplayType; type: keyof TypeOfSatatusInterface }) {
    return (
        <div
            style={{ borderColor: TypeOfSatatus[type].color }}
            className={classNames(
                {
                    'w-1/5-minus-8px': display === 'desktop',
                    'w-1/4-minus-8px': display === 'laptop',
                    'w-1/2-minus-8px': display === 'tablet',
                    'w-full-minus-8px': display === 'mobile',
                    'h-37': display === 'desktop' || display === 'laptop',
                    'h-47': display === 'tablet' || display === 'mobile',
                },
                'px-[8px] bg-[var(--cooler-color)] mt-[16px] mx-[8px] border-t-4 m-[4px]',
            )}
        >
            <Link href="/showcase/product/task-manager/task-detail/123" className="w-full">
                <div className="flex flex-col justify-around h-full">
                    <div className="flex justify-between items-center">
                        <span className="text-tl font-medium text-base">TASK 1</span>
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
                                <div className="bg-green-500 text-tl rounded-full w-[20px] h-[20px] absolute top-[-10px] right-[-10px] text-center leading-[20px] text-xs ">
                                    123
                                </div>
                            </div>
                            <div className="relative">
                                <TagsIcon className="w-[22px] cursor-pointer h-[22px]  " />
                                <div className="bg-green-500 text-tl rounded-full w-[20px] h-[20px] absolute top-[-10px] right-[-10px] text-center leading-[20px] text-xs ">
                                    123
                                </div>
                            </div>

                            <div className="relative">
                                <MessageIcon className="w-[28px] cursor-pointer h-[22px]" />
                                <div className="bg-green-500 text-tl rounded-full w-[20px] h-[20px] absolute top-[-10px] right-[-6px] text-center leading-[20px] text-xs ">
                                    123
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>micro task 32</span>
                        <span className="text-green-500 font-medium ">27/12/2003</span>
                    </div>
                    <div className="flex justify-between"></div>
                </div>
            </Link>
        </div>
    );
}

export default Task;
