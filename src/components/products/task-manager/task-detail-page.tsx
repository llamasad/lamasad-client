'use client';

import { TypeOfSatatusInterface } from './components/status';
import Split from 'react-split';
import TaskDetailSide from './components/task-detail-side';
import TaskActivitySide from './components/task-activity-side';
import { task } from '@/app/[locale]/showcase/@modal/(.)product/task-manager/task-detail/[id]/page';
function TaskDetailPage({
    _id,
    activities_id,
    chat_id,
    dependent,
    endTime,
    history_id,
    microTasks_id,
    overview,
    project_id,
    startTime,
    status,
    title,
    type,
}: task) {
    return (
        <Split className="flex w-full" sizes={[70, 30]} minSize={[100, 200]} gutterSize={10} direction="horizontal">
            <TaskDetailSide
                tilte={title}
                overview={overview}
                type={type}
                dependent={dependent}
                status={status}
                project={project_id}
                timeEnd={endTime}
                timeStart={startTime}
            />
            <TaskActivitySide type={type} history_id={history_id} microTasks_id={microTasks_id}  activities_id={activities_id} chat_id={chat_id}/>
        </Split>
    );
}

export default TaskDetailPage;
