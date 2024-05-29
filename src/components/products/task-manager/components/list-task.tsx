import { MacbookDisplayType } from '@/components/wrapper-components/macbook-wrapper';
import Task from './task';
import CreateTask from './create-task';
function ListTask({ display }: { display: MacbookDisplayType }) {
    return (
        <div className="flex flex-wrap mt-[20px]  ">
            <CreateTask display={display} />
            <Task type={'completed'} display={display} />
            <Task type={'todo'} display={display} />
            <Task type={'onHold'} display={display} />

            <Task type={'inProgress'} display={display} />

            <Task type={'inProgress'} display={display} />
        </div>
    );
}

export default ListTask;
