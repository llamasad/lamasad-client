'use client';
import { MacbookDisplayType } from '@/components/wrapper-components/macbook-wrapper';
import Task from './task';
import CreateTask from './create-task';
import useUserTasksFetcher from '@/hooks/use-user-tasks-fetcher';
import { LoadIcon } from '@/components/icons';
import { TypeOfSatatusInterface } from './status';
import { Dispatch, ForwardedRef, SetStateAction, forwardRef, memo, useImperativeHandle } from 'react';
import { useSWRConfig } from 'swr';
interface params {
    filter: Array<'macro' | 'micro' | 'inProject' | 'notInProject'>;
    status: keyof TypeOfSatatusInterface | 'all';
    sort: 'a-z' | 'z-a' | 'latest' | 'oldest';
    page: number;
    search?: string;
}
const ListTask = forwardRef(function A(
    {
        display,
        params,
        setTrigger,
        hasMacWrap,
    }: {
        display: MacbookDisplayType;
        params: params;
        setTrigger: Dispatch<SetStateAction<number>>;
        hasMacWrap: boolean;
    },
    ref: ForwardedRef<any>,
) {
    const { cache, mutate, ...extraConfig } = useSWRConfig();
    const { tasks, isLoading, isError } = useUserTasksFetcher(true, params);
    useImperativeHandle(
        ref,
        () => {
            if (tasks) {
                setTimeout(
                    () =>
                        setTrigger((prev) => {
                            return prev + 1;
                        }),
                    0,
                );
            }
            return {
                pageCount: tasks ? tasks.pageCount : 0,
                status: tasks
                    ? { todo: 0, yetToStart: 0, inProgress: 0, onHold: 0, completed: 0, ...tasks.status }
                    : { todo: 0, yetToStart: 0, inProgress: 0, onHold: 0, completed: 0 },
            };
        },
        [tasks, setTrigger],
    );
    if (isError && isError.response && isError.response.status === 403) {
        cache.delete(`${process.env.NEXT_PUBLIC_SERVER_SIDE_URL as string}/api/tasks`);
        throw new Error('You are not authorized to access this page');
    }
    return (
        <>
            {isLoading ? (
                <div className={'flex items-center min-h-[120px] justify-center mt-8 '}>
                    <l-tail-chase size="80" speed="1.75" color="currentColor"></l-tail-chase>{' '}
                </div>
            ) : tasks && Array.isArray(tasks.data) ? ( // Check if tasks is an array
                <div className="flex flex-wrap mt-[20px]  ">
                    <CreateTask hasMacWrap={hasMacWrap} display={display} />
                    {(tasks.data as Array<any>).map((task: any, index) => (
                        <Task
                            hasMacWrap={hasMacWrap}
                            key={index}
                            _id={task._id as number}
                            title={task.title}
                            type={task.type}
                            startTime={task.startTime}
                            display={display}
                            status={task.status}
                        />
                    ))}
                </div>
            ) : (
                'No tasks found'
            )}
        </>
    );
});

export default memo(ListTask);
