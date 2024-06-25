import { Dispatch, FC, SetStateAction } from 'react';
import CreateTaskDetailForm from './create-task-detail-from';
interface CreateTaskDetailProps {
    setIsCreateTaskDetail?: Dispatch<SetStateAction<boolean>>;
    hasMacWrap: boolean;
}
const CreateTaskDetail: FC<CreateTaskDetailProps> = function ({
    setIsCreateTaskDetail,
    hasMacWrap = true,
}: {
    setIsCreateTaskDetail?: Dispatch<SetStateAction<boolean>>;
    hasMacWrap: boolean;
}) {
    return <CreateTaskDetailForm hasMacWrap={hasMacWrap} setIsCreateTaskDetail={setIsCreateTaskDetail} />;
};

export default CreateTaskDetail;
