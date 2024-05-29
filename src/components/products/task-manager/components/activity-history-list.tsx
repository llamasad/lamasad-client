import GeneralHistoryItem from './general-history-item';
import { HistoryItemType } from './general-history-list';

function ActivityHistoryList({ historiesList }: { historiesList: Array<HistoryItemType> }) {
    return (
        <ul className=" list-disc w-full pl-[14px]  overflow-y-auto space-y-2 my-2 h-[100px] border border-tl rounded-lg">
            {historiesList.map((value, index) => (
                <GeneralHistoryItem key={index} {...value} />
            ))}
        </ul>
    );
}

export default ActivityHistoryList;
