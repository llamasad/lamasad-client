import PercentBar from './percent-bar';

function TaskDetailPercentBar({ limits }: { limits: string }) {
    return (
        <div>
            <h2 className="my-2">Limits</h2>

            <PercentBar onEditMode={false} initState={Number(limits.split('%')[0])} />
        </div>
    );
}

export default TaskDetailPercentBar;
