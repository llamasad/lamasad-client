import { ExitIcon } from '@/components/icons';
import classNames from 'classnames';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const status = ['todo', 'yetToStart', 'inProgress', 'onHold', 'completed'];
function CategoryItem({
    content,
    setState,
    isActived,
    className,
    state,
}: {
    className?: string;
    content: string;
    setState?: Function;
    isActived: Boolean;
    state?: Array<string>;
}) {
    const [type, setType] = useState<'cancel' | 'active' | 'notActive'>('notActive');
    useEffect(() => {
        if (!state?.includes(content)) {
            setType('notActive');
        }
    }, [state]);
    return (
        <div
            onClick={() => {
                if (!isActived) {
                    switch (type) {
                        case 'cancel':
                            setType('notActive');
                            if (setState) {
                                setState((state: Array<string>) => {
                                    const index = state.indexOf(content);
                                    const newState = [...state];
                                    newState.splice(index, 1);
                                    return newState;
                                });
                            }
                            break;
                        case 'active':
                            setType('cancel');
                            break;
                        case 'notActive':
                            setType('active');
                            if (setState) {
                                setState((state: Array<string>) => {
                                    const newState = [...state, content];
                                    return newState;
                                });
                            }
                        default:
                            break;
                    }
                }
            }}
            className={classNames(
                'shrink-0 bg-[var(--cooler-color)]  text-center cursor-pointer leading-[24px] h-[32px]  rounded pl-4  py-1 relative select-none  border-solid ',
                { 'pr-5': isActived, 'pr-4': !isActived },
                { 'border border-green-500': type === 'active', 'border border-red-500': type === 'cancel' },
                className,
            )}
        >
            {content}
            {isActived && (
                <div
                    onClick={() => {
                        if (setState) {
                            setState((state: Array<string>) => {
                                if (status.includes(content)) return false;
                                const index = state.indexOf(content);
                                const newState = [...state];
                                newState.splice(index, 1);
                                return newState;
                            });
                        }
                    }}
                    className="p-[2px] w-[16px] absolute top-1/2 translate-y-[calc(-50%+1px)] right-[3px]  h-[16px] hover:bg-weak rounded-full cursor-pointer"
                >
                    <ExitIcon className="  w-[14px] h-[14px] relative top-[-1px] left-[-1px]" />
                </div>
            )}
        </div>
    );
}

export default CategoryItem;
