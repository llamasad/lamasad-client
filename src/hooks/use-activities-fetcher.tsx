import useSWR from 'swr';
import axios from 'axios';
import { getCookie } from './use-type-user-fetcher';
export function fetcher(url: string, ids: number[]) {
    return axios //send a get request to the server with array task id to get the task details
        .get(url, {
            params: {
                data: ids,
            },
            headers: {
                Authorization: `Bearer ${getCookie('access-token') as string}`,
            },
        })
        .then((res) => {
            return res;
        })
        .catch((error) => {
            console.error(error);
        });
}

function useActivitiesFetcher(activitys_id: number[]) {
    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_SERVER_SIDE_URL as string}/activities`,
        (url: string) => fetcher(url, activitys_id),
        { revalidateOnFocus: false, refreshInterval: 0, revalidateOnReconnect: false },
    );

    return {
        activities: data,
        isLoading,
        isError: error,
    };
}

export default useActivitiesFetcher;
