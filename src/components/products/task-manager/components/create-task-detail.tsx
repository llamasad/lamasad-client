import { Dispatch, SetStateAction } from 'react';
import CreateTaskDetailForm from './create-task-detail-from';
interface CreateTaskDetailProps {
    setIsCreateTaskDetail?: Dispatch<SetStateAction<boolean>>;
    hasMacWrap: boolean;
}
function CreateTaskDetail({ setIsCreateTaskDetail }: { setIsCreateTaskDetail?: Dispatch<SetStateAction<boolean>> }) {
    const hasMacWrap = true;
    return <CreateTaskDetailForm hasMacWrap={hasMacWrap} setIsCreateTaskDetail={setIsCreateTaskDetail} />;
}

export default CreateTaskDetail;
