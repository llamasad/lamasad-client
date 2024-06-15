import useSWR from 'swr';
import { fetcher } from './use-activities-fetcher';

function useDependentTasksFetcher(dependent_id: number[] | any, isActive: boolean) {
    const { data, error, isLoading } = useSWR(
        isActive ? [`${process.env.NEXT_PUBLIC_SERVER_SIDE_URL as string}/tasks`, dependent_id] : null,
        ([url, dependent_id]) => fetcher(url, dependent_id),
        { revalidateOnFocus: false, refreshInterval: 0, revalidateOnReconnect: false },
    );

    return {
        dependentTasks: data,
        isLoading,
        isError: error,
    };
}
export default useDependentTasksFetcher;
