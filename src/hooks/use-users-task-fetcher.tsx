import useSWR from 'swr';

import { fetcher } from './use-chat-fetcher';

function useUsersTaskFetcher(task_id: string) {
    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_SERVER_SIDE_URL as string}/api/users-task?task_id=${task_id}`,
        fetcher,
        { revalidateOnFocus: false, refreshInterval: 0, revalidateOnReconnect: false },
    );

    return {
        usersTask: data,
        isLoading,
        isError: error,
    };
}

export default useUsersTaskFetcher;
