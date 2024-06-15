'use client';
import useHistoryFetcher from '@/hooks/use-history-fetcher';
import GeneralHistoryList from './general-history-list';

function GeneralHistory({ history_id }: { history_id: number }) {
    const { histories, isLoading, isError } = useHistoryFetcher(history_id);

    return (
        <div>
            <h2 className="text-lg ">General history</h2>
            {isLoading || (histories && <GeneralHistoryList historiesList={histories.data} />)}
        </div>
    );
}

export default GeneralHistory;
