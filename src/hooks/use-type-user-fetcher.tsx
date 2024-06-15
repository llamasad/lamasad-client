import useSWR from 'swr';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { TMUserSlice } from '@/lib/redux/slices/tm-user-slice';
import { TMUserSliceState } from '@/lib/redux/slices/tm-user-slice';
export function getCookie(cookieName: string) {
    const name = cookieName + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    const cookie = cookieArray.find((el) => {
        return el.includes(name);
    });
    if (cookie) {
        let rs = cookie.split(name);
        return rs[rs.length - 1];
    }

    return '';
}
function userTypeFetcher(url: string, dispatch: Dispatch<any>) {
    return axios
        .get(url, {
            headers: {
                Authorization: `Bearer ${getCookie('access-token') as string}`,
            },
        })
        .then((res) => {
            console.log(res);
            if (res.data.message === 'user') {
                dispatch(TMUserSlice.actions.setState(res.data.user));
            }
            return res.data.message;
        })
        .catch((error) => {
            console.error(error);
        });
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
    console.log(data);
    return {
        type: data,
        isLoading,
        isError: error,
    };
}
