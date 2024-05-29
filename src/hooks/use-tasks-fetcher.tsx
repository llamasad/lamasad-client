import useSWR from 'swr';
import { fetcher } from './use-activities-fetcher';
function useTasksFetcher(tasks_id: number[], type: 'macro' | 'micro') {
    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_SERVER_SIDE_URL as string}/tasks/${type}`,
        (url: string) => {
            fetcher(url, tasks_id);
        },
        { revalidateOnFocus: false, refreshInterval: 0, revalidateOnReconnect: false },
    );

    return {
        tasks: data,
        isLoading,
        isError: error,
    };
}

export default useTasksFetcher;
