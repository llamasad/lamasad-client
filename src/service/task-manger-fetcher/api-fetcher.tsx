import { getCookie } from '@/hooks/use-type-user-fetcher';
import axios from 'axios';
export interface UserData {
    username: string;
    imgSrc: string;
    userTag: string;
    // Add other fields as necessary
}
async function apiFecther<T>(
    pathname: string,
    method: 'POST' | 'GET' | 'PUT' | 'DELETE',

    data?: object,
    Content_Type: string = 'application/json',
): Promise<T | undefined> {
    try {
        const url = (process.env.NEXT_PUBLIC_SERVER_SIDE_URL as string) + pathname;
        const headers = {
            Authorization: `Bearer ${getCookie('access-token') as string}`,
            'Content-Type': Content_Type,
        };
        switch (method) {
            case 'GET':
                return await axios
                    .get<T>(url, {
                        withCredentials: true,
                        headers,
                    })
                    .then((response) => response.data);
            case 'POST':
                return await axios
                    .post<T>(url, data, {
                        withCredentials: true,
                        headers,
                    })
                    .then((response) => response.data);
            case 'PUT':
                return await axios
                    .put<T>(url, data, {
                        withCredentials: true,
                        headers,
                    })
                    .then((response) => response.data);
            case 'DELETE':
                return await axios
                    .delete<T>(url, {
                        withCredentials: true,
                        headers,
                    })
                    .then((response) => response.data);
            default:
                return undefined;
        }
    } catch (err) {
        throw err;
    }
}

export default apiFecther;
