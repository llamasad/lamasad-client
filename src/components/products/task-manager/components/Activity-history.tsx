import useHistoryFetcher from '@/hooks/use-history-fetcher';
import ActivityHistoryList from './activity-history-list';

function ActivityHistory({ history_id }: { history_id: number }) {
    const { histories, isLoading, isError } = useHistoryFetcher(history_id);

    return (
        <div className="w-full ">
            <h2 className="text-tl text-lg">Activity History</h2>
            {isLoading || (histories && <ActivityHistoryList historiesList={histories.data} />)}
        </div>
    );
}

export default ActivityHistory;
