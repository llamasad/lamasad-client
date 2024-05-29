import useSWR from 'swr';
import { fetcher } from './use-activities-fetcher';
function useDependentTasks(dependent_id: number[] | any, isActive: boolean) {
    const { data, error, isLoading } = useSWR(
        isActive ? `${process.env.NEXT_PUBLIC_SERVER_SIDE_URL as string}/tasks` : null,
        (url: string) => fetcher(url, dependent_id),
        { revalidateOnFocus: false, refreshInterval: 0, revalidateOnReconnect: false },
    );

    return {
        denpendentTasks: data,
        isLoading,
        isError: error,
    };
}

export default useDependentTasks;
