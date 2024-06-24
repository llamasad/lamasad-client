'use client';

import { TypeOfSatatusInterface } from './components/status';
import Split from 'react-split';
import TaskDetailSide from './components/task-detail-side';
import TaskActivitySide from './components/task-activity-side';
import { task } from '@/app/[locale]/showcase/product/task-manager/task-detail/[id]/page';
import { useContext } from 'react';
import { ResponsiveContext } from '@/components/wrapper-components/macbook-wrapper';
import { useMediaQuery } from 'react-responsive';
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
    limits,
    hasMacWrap = true,
}: task & { hasMacWrap?: boolean }) {
    const responsiveType = useContext(ResponsiveContext);
    const isMobileScreen = useMediaQuery({ query: '(max-width: 639px)' });
    let isSplit = true;
    switch (hasMacWrap) {
        case true:
            if (responsiveType === 'mobile') {
                isSplit = false;
            }
            break;
        case false:
            if (isMobileScreen) {
                isSplit = false;
            }
            break;
    }

    return (
        <>
            {isSplit ? (
                <Split
                    className="flex w-full"
                    sizes={[50, 50]}
                    minSize={[200, 200]}
                    gutterSize={10}
                    direction="horizontal"
                >
                    <TaskDetailSide
                        hasMacWrap={hasMacWrap}
                        tilte={title}
                        overview={overview}
                        type={type}
                        dependent={dependent}
                        status={status}
                        project={project_id}
                        timeEnd={endTime}
                        timeStart={startTime}
                        limits={limits as string}
                        task_id={type + '-' + _id}
                        history_id={history_id}
                    />
                    <TaskActivitySide
                        hasMacWrap={hasMacWrap}
                        project_id={project_id}
                        task_id={type + '-' + _id}
                        type={type}
                        history_id={history_id}
                        microTasks_id={microTasks_id}
                        activities_id={activities_id}
                        chat_id={chat_id}
                    />
                </Split>
            ) : (
                <div>
                    <TaskDetailSide
                        hasMacWrap={hasMacWrap}
                        tilte={title}
                        overview={overview}
                        type={type}
                        dependent={dependent}
                        status={status}
                        project={project_id}
                        timeEnd={endTime}
                        timeStart={startTime}
                        limits={limits as string}
                        task_id={type + '-' + _id}
                        history_id={history_id}
                    />
                    <div className="border-weak border my-2 w-full"></div>
                    <TaskActivitySide
                        hasMacWrap={hasMacWrap}
                        project_id={project_id}
                        task_id={type + '-' + _id}
                        type={type}
                        history_id={history_id}
                        microTasks_id={microTasks_id}
                        activities_id={activities_id}
                        chat_id={chat_id}
                    />
                </div>
            )}
        </>
    );
}

export default TaskDetailPage;
