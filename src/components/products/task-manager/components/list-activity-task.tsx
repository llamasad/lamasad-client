import ActivityItem from './activity-item';

function ListActivityTask({
    microTasks_id,
    activities_id,
}: {
    microTasks_id: null | string[];
    activities_id: string[] | null;
}) {
    return (
        <ul className="space-y-[10px] h-[33%] overflow-y-auto py-[10px] border-y border-current">
            <ActivityItem />
            <ActivityItem />
            <ActivityItem />

            <ActivityItem />

            <ActivityItem />
        </ul>
    );
}

export default ListActivityTask;
