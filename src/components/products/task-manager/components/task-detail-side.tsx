import { TypeOfSatatusInterface } from './status';
import Select from 'react-select';
import TaskDetailDataField from './task-detail-data-field';
import DependentTasks from './dependent-task';
function TaskDetailSide({
    tilte,
    overview,
    type,
    project,
    timeStart,
    timeEnd,
    dependent,
    status,
}: {
    tilte: string;
    overview: string | null;
    type: 'macro' | 'micro';
    project: string | null;
    timeStart: string;
    timeEnd: string;
    dependent: Array<string> | null;
    status: keyof TypeOfSatatusInterface;
}) {
    return (
        <div className="w-full mx-[10px] ">
            <h2 className="text-xl text-center  font-semibold ">Details</h2>

            <TaskDetailDataField valueOfDetail={tilte} title="Title" type="text" name="title" />

            <TaskDetailDataField
                valueOfDetail={type === 'micro' ? 'Micro task' : 'Macro task'}
                title="Type"
                type="text"
                name="type"
            />
            <TaskDetailDataField valueOfDetail={overview ? overview : ''} title="Type" type="textarea" name="type" />
            <TaskDetailDataField type="select" name="status" title="Status" valueOfDetail={status} className="z-20" />
            <TaskDetailDataField valueOfDetail={timeStart} title="From" type="date" name="timeStart" />
            <TaskDetailDataField valueOfDetail={timeEnd} title="To" type="date" name="timeEnd" />

            <TaskDetailDataField
                type="select"
                className="z-10"
                name="project"
                title="Project"
                valueOfDetail={project ? project : 'No project'}
            />

            <DependentTasks dependent={dependent} project_id={project} />
        </div>
    );
}

export default TaskDetailSide;
