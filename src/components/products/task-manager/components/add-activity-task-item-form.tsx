import { Dispatch, SetStateAction, useState } from 'react';
import AddActivityItemForm from './add-activity-item-form';
import AddTaskItemForm from './add-task-item-form';

function AddActivityTaskItemForm({
    task_id,
    project_id,
    setState,
    setIsShow,
}: {
    task_id: string;
    project_id?: number | null;
    setState: {
        setActivities: Dispatch<SetStateAction<any>>;
        setMicroTasks: Dispatch<SetStateAction<any>>;
    };
    setIsShow: Dispatch<SetStateAction<boolean>>;
}) {
    const [type, setType] = useState<'activity' | 'task'>('activity');

    return (
        <div className="relative">
            <div className="absolute w-[100px]  border border-weak rounded-full h-[30px] top-[6px] right-0">
                <input
                    type="radio"
                    className="peer/task"
                    id="ActivityItemMode1"
                    name="mode"
                    hidden
                    value={'task'}
                    checked={type === 'task'}
                />
                <label
                    onClick={() => {
                        setType('task');
                    }}
                    htmlFor="ActivityItemMode1"
                    className="absolute h-full w-1/2 z-10 cursor-pointer"
                ></label>
                <input
                    type="radio"
                    className="peer/activity"
                    id="ActivityItemMode2"
                    name="mode"
                    hidden
                    value={'activity'}
                    checked={type === 'activity'}
                />
                <label
                    onClick={() => {
                        setType('activity');
                    }}
                    htmlFor="ActivityItemMode2"
                    className="absolute w-1/2 h-full z-10 cursor-pointer right-0"
                ></label>
                <div className="before:content-['T'] before:text-tl text-center w-[54px] h-full rounded-full bg-green-500 transition-transform peer-checked/activity:before:content-['A'] peer-checked/activity:translate-x-[46px] relative"></div>
            </div>
            <h2 className="text-xl  text-center  font-semibold">{type === 'activity' ? 'Activity' : 'Task'}</h2>
            {type === 'activity' && (
                <AddActivityItemForm setIsShow={setIsShow} setActivities={setState.setActivities} task_id={task_id} />
            )}
            {type === 'task' && (
                <AddTaskItemForm project_id={project_id} setMicroTasks={setState.setMicroTasks} task_id={task_id} />
            )}
        </div>
    );
}

export default AddActivityTaskItemForm;
