import GeneralHistoryItem from './general-history-item';

export interface HistoryItemType {
    entity: string;
    historyAction: string;
    timeRelease: string;
}

function GeneralHistoryList({ historiesList }: { historiesList: Array<HistoryItemType> }) {
    return (
        <ul className="border-y list-disc border-tl pl-[14px] h-[160px] overflow-y-auto space-y-2 my-2">
            {historiesList.map((value, index) => (
                <GeneralHistoryItem key={index} {...value} />
            ))}
        </ul>
    );
}

export default GeneralHistoryList;
