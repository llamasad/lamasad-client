import useSWR from 'swr';
import axios from 'axios';
import { getAccessToken } from './use-type-user-fetcher';
import { TypeOfSatatusInterface } from '@/components/products/task-manager/components/status';
export function fetcher(url: string, data: any) {
    return axios
        .get(url, {
            params: data,
            headers: {
                Authorization: `Bearer ${getAccessToken('access-token') as string}`,
            },
        })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            throw error;
        });
}

function useUserTasksFetcher(
    isActive: boolean,
    params?: {
        filter?: Array<'macro' | 'micro' | 'inProject' | 'notInProject'> | null;
        status?: keyof TypeOfSatatusInterface | 'all';
        sort: 'a-z' | 'z-a' | 'latest' | 'oldest';
        page: number;
        search?: string;
    },
) {
    const { data, error, isLoading } = useSWR(
        isActive ? [`${process.env.NEXT_PUBLIC_SERVER_SIDE_URL as string}/api/tasks`, params] : null,
        ([url]) => fetcher(url, params),
        {
            revalidateOnFocus: false,
            refreshInterval: 0,
            revalidateOnReconnect: false,
        },
    );

    return {
        tasks: data,
        isLoading,
        isError: error,
    };
}

export default useUserTasksFetcher;
