import { TypeOfSatatusInterface } from './status';
import Select from 'react-select';
import TaskDetailDataField from './task-detail-data-field';
import DependentTasks from './dependent-task';
import PercentBar from './percent-bar';
import TaskDetailPercentBar from './task-detail-percent-bar';
import AddUserToTask from './add-user-to-task';
import { GarbageIcon } from '@/components/icons';
import RemoveTask from './remove-task';
function TaskDetailSide({
    hasMacWrap,
    tilte,
    overview,
    type,
    project,
    timeStart,
    timeEnd,
    dependent,
    status,
    limits,
    task_id,
    history_id,
}: {
    hasMacWrap: boolean;
    tilte: string;
    overview: string | null;
    type: 'macro' | 'micro';
    project: number | null;
    timeStart: string;
    timeEnd: string;
    dependent: Array<string> | null;
    status: keyof TypeOfSatatusInterface;
    limits?: string;
    task_id: string;
    history_id: number;
}) {
    return (
        <div className="w-full mx-[10px] min-w-[260px]">
            <h2 className="text-xl text-center  font-semibold ">Details</h2>
            <AddUserToTask task_id={task_id} />
            <TaskDetailDataField
                history_id={history_id}
                task_id={task_id}
                valueOfDetail={tilte}
                title="Title"
                type="text"
                name="title"
            />
            <span className="my-[8px] block">Type</span>
            <div className=" text-lg h-10 w-full rounded flex bg-cooler items-center px-2">
                {type === 'micro' ? 'Micro task' : 'Macro task'}
            </div>
            {limits && <TaskDetailPercentBar limits={limits} />}
            <TaskDetailDataField
                history_id={history_id}
                task_id={task_id}
                valueOfDetail={overview ? overview : ''}
                title="Overview"
                type="textarea"
                name="overview"
            />
            <TaskDetailDataField
                history_id={history_id}
                task_id={task_id}
                type="select"
                name="status"
                title="Status"
                valueOfDetail={status}
                className="z-20"
            />
            <TaskDetailDataField
                history_id={history_id}
                task_id={task_id}
                valueOfDetail={timeStart}
                title="From"
                type="date"
                name="timeStart"
            />
            <TaskDetailDataField
                history_id={history_id}
                task_id={task_id}
                valueOfDetail={timeEnd}
                title="To"
                type="date"
                name="timeEnd"
            />
            <TaskDetailDataField
                history_id={history_id}
                task_id={task_id}
                type="select"
                className="z-10"
                name="project"
                title="Project"
                valueOfDetail={project ? 'cc' : 'No project'}
            />
            <DependentTasks dependent={dependent} project_id={project} />
            <RemoveTask task_id={task_id} hasMacWrap={hasMacWrap} />
        </div>
    );
}

export default TaskDetailSide;
