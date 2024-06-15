'use client';

import TaskDetailPage from '@/components/products/task-manager/task-detail-page';
import apiFecther from '@/service/task-manger-fetcher/api-fetcher';
import { useEffect, useState } from 'react';
import { TypeOfSatatusInterface } from '@/components/products/task-manager/components/status';
export interface task {
    _id: number;
    activities_id: string[] | null;
    chat_id: number;
    dependent: null | string[];
    endTime: string;
    history_id: number;
    microTasks_id: null | string[];
    overview: null | string;
    project_id: null | number;
    startTime: string;
    status: keyof TypeOfSatatusInterface;
    title: string;
    type: 'micro' | 'macro';
    limits?: string | null;
}
function TaskDetail({ params }: { params: { id: string } }) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [task, setTask] = useState<task | null>(null);
    const [error, setError] = useState<any>(null);
    useEffect(() => {
        apiFecther(`/api/task/${params.id}`, 'GET')
            .then((res: any) => {
                setIsLoading(false);
                setTask(res);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err);
            });
    }, [params.id]);
    if (error) return <div>something is wrong!!</div>;
    return <>{!isLoading && task && <TaskDetailPage hasMacWrap={false} {...task} />}</>;
}

export default TaskDetail;
