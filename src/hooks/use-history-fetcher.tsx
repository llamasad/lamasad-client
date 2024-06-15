import useSWR from 'swr';
import { fetcher } from './use-chat-fetcher';

function useHistoryFetcher(history_id: number) {
    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_SERVER_SIDE_URL as string}/api/history?id=${history_id}`,
        fetcher,
        { revalidateOnFocus: false, refreshInterval: 0, revalidateOnReconnect: false },
    );

    return {
        histories: data,
        isLoading,
        isError: error,
    };
}

export default useHistoryFetcher;
