import useSWR from 'swr';
import axios from 'axios';
import { getAccessToken } from './use-type-user-fetcher';

export function fetcher(url: string) {
    return axios
        .get(url, {
            headers: {
                Authorization: `Bearer ${getAccessToken('access-token') as string}`,
            },
        })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {});
}

function useChatFetcher(chat_id: number) {
    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_SERVER_SIDE_URL as string}/chat/${chat_id}`,
        fetcher,
        { revalidateOnFocus: false, refreshInterval: 0, revalidateOnReconnect: false },
    );

    return {
        messages: data,
        isLoading,
        isError: error,
    };
}

export default useChatFetcher;
