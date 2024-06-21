import useSWR from 'swr';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { TMUserSlice } from '@/lib/redux/slices/tm-user-slice';
import { TMUserSliceState } from '@/lib/redux/slices/tm-user-slice';
export function getAccessToken(cookieName: string) {
    return localStorage.getItem(cookieName) || '';
}
function userTypeFetcher(url: string, dispatch: Dispatch<any>) {
    return axios
        .get(url, {
            headers: {
                Authorization: `Bearer ${getAccessToken('access-token') as string}`,
            },
        })
        .then((res) => {
            if (res.data.message === 'user') {
                dispatch(TMUserSlice.actions.setState(res.data.user));
            }
            return res.data.message;
        })
        .catch((error) => {});
}
export default function useTypeUserFetcher(): {
    type: 'user' | 'custom' | 'userNonAuth';
    isLoading: boolean;
    isError: any;
} {
    const dispatch = useDispatch();
    const fetcher = (url: string) => userTypeFetcher(url, dispatch);

    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_SERVER_SIDE_URL as string}/user-check`,
        fetcher,
        { revalidateOnFocus: false, refreshInterval: 0, revalidateOnReconnect: false },
    );

    return {
        type: data,
        isLoading,
        isError: error,
    };
}
