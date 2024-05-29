import ActivityItem from './activity-item';
import AddActitvity from './add-activity';
import GeneralHistory from './general-activity';
import GeneralChat from './general-chat';
import ListActivityTask from './list-activity-task';

function TaskActivitySide({
    type,
    history_id,
    microTasks_id,
    activities_id,
    chat_id,
}: {
    type: 'micro' | 'macro';
    history_id: number;
    microTasks_id: null | string[];
    activities_id: string[] | null;
    chat_id: number;
}) {
    return (
        <div className="relative w-full flex flex-col mx-[10px]">
            <h2 className="text-xl text-center  font-semibold ">Activity</h2>
            <AddActitvity />
            <h3 className="text-lg">{type === 'macro' ? 'List activity/task' : 'List activity'}</h3>
            <ListActivityTask microTasks_id={microTasks_id} activities_id={activities_id} />
            <GeneralHistory history_id={history_id} />
            <h3 className="text-lg mt-[10px]">General chat</h3>
            <GeneralChat chat_id={chat_id} />
        </div>
    );
}

export default TaskActivitySide;
