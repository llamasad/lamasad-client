import { MacbookDisplayType } from '@/components/wrapper-components/macbook-wrapper';
import Task from './task';
function ListTask({ display }: { display: MacbookDisplayType }) {
    return (
        <div className="flex flex-wrap">
            <Task display={display} />
        </div>
    );
}

export default ListTask;
