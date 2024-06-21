import { Dispatch, SetStateAction } from 'react';
import CreateTaskDetailForm from './create-task-detail-from';
function CreateTaskDetail({ setIsCreateTaskDetail }: { setIsCreateTaskDetail?: Dispatch<SetStateAction<boolean>> }) {
    return <CreateTaskDetailForm setIsCreateTaskDetail={setIsCreateTaskDetail} />;
}

export default CreateTaskDetail;
