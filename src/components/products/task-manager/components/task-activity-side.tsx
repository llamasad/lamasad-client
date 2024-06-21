import { useEffect, useState } from 'react';
import ActivityItem from './activity-item';
import AddActitvity from './add-activity';
import GeneralHistory from './general-history';
import GeneralChat from './general-chat';
import ListActivityTask from './list-activity-task';
import apiFecther from '@/service/task-manger-fetcher/api-fetcher';

function TaskActivitySide({
    type,
    history_id,
    microTasks_id,
    activities_id,
    chat_id,
    task_id,
    project_id,
    hasMacWrap,
}: {
    type: 'micro' | 'macro';
    history_id: number;
    microTasks_id: null | string[];
    activities_id: string[] | null;
    chat_id: number;
    task_id: string;
    project_id?: number | null;
    hasMacWrap: boolean;
}) {
    const [activities, setActivities] = useState<Array<any>>([]);
    const [microTasks, setMicroTasks] = useState<Array<any>>([]);
    const [trigger, setTrigger] = useState<boolean>(false);
    useEffect(() => {
        if (type === 'macro') {
            apiFecther(
                `/api/tasks-activities-child${
                    microTasks_id && microTasks_id.length > 0
                        ? `?tasks=${microTasks_id.join(',')}${`${
                              activities_id && activities_id.length > 0
                                  ? `&activities=${
                                        (activities && activities.map((el) => el._id).join(',')) ||
                                        activities_id.join(',')
                                    }`
                                  : ''
                          }`}`
                        : `${
                              activities_id && activities_id.length > 0
                                  ? `?activities=${
                                        (activities && activities.map((el) => el._id).join(',')) ||
                                        activities_id.join(',')
                                    }`
                                  : ''
                          }`
                }`,
                'GET',
            )
                .then((res: any) => {
                    setActivities(res.data.activites);
                    setMicroTasks(res.data.microsTasks);
                })
                .catch((err) => {});
        } else {
            apiFecther(
                `/api/tasks-activities-child${`${
                    activities_id && activities_id.length > 0 ? `?activities=${activities_id.join(',')}` : ''
                }`}`,
                'GET',
            )
                .then((res: any) => {
                    setActivities(res.data.activites);
                })
                .catch((err) => {});
        }
    }, [activities_id, microTasks_id, type, trigger]);
    return (
        <div className="relative w-full flex flex-col mx-[10px]">
            <h2 className="text-xl text-center  font-semibold ">Activity</h2>
            <AddActitvity
                setState={{ setActivities, setMicroTasks }}
                project_id={project_id}
                type={type}
                task_id={task_id}
            />
            <h3 className="text-lg">{type === 'macro' ? 'List activity/task' : 'List activity'}</h3>
            <ListActivityTask
                hasMacWrap={hasMacWrap}
                setTrigger={setTrigger}
                type={type}
                microTasks={microTasks}
                activities={activities}
            />
            <GeneralHistory history_id={history_id} />
            <h3 className="text-lg mt-[10px]">General chat</h3>
            <GeneralChat chat_id={chat_id} task_id={task_id} />
        </div>
    );
}

export default TaskActivitySide;
