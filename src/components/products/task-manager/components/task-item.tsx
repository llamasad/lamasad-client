import HardLink from '@/components/hard-link';
import { StaticLinkForDynamicRoute } from '@/components/navigation/staic-link';

function TaskItem({
    title,
    limits,
    status,
    task_id,
    hasMacWrap,
}: {
    title: string;
    limits: string;
    status: string;
    task_id: number;
    hasMacWrap: boolean;
}) {
    return (
        <>
            {hasMacWrap ? (
                <StaticLinkForDynamicRoute
                    className="block"
                    pathname="/showcase/product/task-manager/task-detail/[id]"
                    params={'micro' + '-' + task_id}
                >
                    <li className="px-[8px] rounded py-[8px] border border-current min-w-[240px] flex flex-wrap bg-weak   items-center justify-center pointer-cursor">
                        <span className="text-lg w-full mr-[10px] text-center">
                            Task:<span className="text-green-500">{title}</span>
                        </span>
                        <span className="text-lg w-1/2 border-r border-current text-center">
                            Percent <span className="text-green-500">{limits}</span>
                        </span>
                        <span className="text-lg w-1/2 text-center">{status}</span>
                    </li>
                </StaticLinkForDynamicRoute>
            ) : (
                <HardLink href={'/showcase/product/task-manager/task-detail/' + 'micro' + '-' + task_id}>
                    <li className="px-[8px] rounded py-[8px] border border-current min-w-[240px] flex flex-wrap bg-weak   items-center justify-center pointer-cursor">
                        <span className="text-lg w-full mr-[10px] text-center">
                            Task:<span className="text-green-500">{title}</span>
                        </span>
                        <span className="text-lg w-1/2 border-r border-current text-center">
                            Percent <span className="text-green-500">{limits}</span>
                        </span>
                        <span className="text-lg w-1/2 text-center">{status}</span>
                    </li>
                </HardLink>
            )}
        </>
    );
}

export default TaskItem;
