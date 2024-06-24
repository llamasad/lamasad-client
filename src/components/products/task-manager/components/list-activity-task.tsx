'use client';
import { Dispatch, SetStateAction } from 'react';
import ActivityItem from './activity-item';
import TaskItem from './task-item';

function ListActivityTask({
    hasMacWrap,
    microTasks,
    activities,
    type,
    setTrigger,
}: {
    hasMacWrap: boolean;
    type: 'micro' | 'macro';
    microTasks: any[];
    activities: any[];
    setTrigger: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <ul className="space-y-[10px] h-[33%] overflow-y-auto py-[10px] border-y border-current">
            {activities &&
                activities
                    .map((activity: any) => (
                        <ActivityItem
                            setTrigger={setTrigger}
                            _id={activity._id}
                            key={activity._id}
                            request={activity.request}
                            title={activity.title}
                            limits={activity.limits}
                            status={activity.status}
                            chat_id={activity.chat_id}
                            history_id={activity.history_id}
                            fileAttach_id={activity.fileAttach_id}
                        />
                    ))
                    .reverse()}
            {microTasks
                .map((microTask: any) => (
                    <TaskItem
                        hasMacWrap={hasMacWrap}
                        key={microTask._id}
                        title={microTask.title}
                        limits={microTask.limits}
                        status={microTask.status}
                        task_id={microTask._id}
                    />
                ))
                .reverse()}
        </ul>
    );
}

export default ListActivityTask;
