import { Dispatch, SetStateAction } from 'react';
import CreateTaskDetailForm from './create-task-detail-from';
function CreateTaskDetail({
    setIsCreateTaskDetail,
    hasMacWrap = true,
}: {
    setIsCreateTaskDetail?: Dispatch<SetStateAction<boolean>>;
    hasMacWrap?: boolean;
}) {
    return <CreateTaskDetailForm hasMacWrap={hasMacWrap} setIsCreateTaskDetail={setIsCreateTaskDetail} />;
}

export default CreateTaskDetail;
