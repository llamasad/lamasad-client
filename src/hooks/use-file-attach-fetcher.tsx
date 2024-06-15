import useSWR from 'swr';
import { fetcher } from './use-chat-fetcher';
function useFileAttachFetcher(id: number, isActive: boolean) {
    const { data, error, isLoading } = useSWR(
        isActive ? `${process.env.NEXT_PUBLIC_SERVER_SIDE_URL as string}/api/file-attach/${id}` : null,
        fetcher,
        { revalidateOnFocus: false, refreshInterval: 0, revalidateOnReconnect: false },
    );

    return {
        filesAttach: data as any,
        isLoading,
        isError: error,
    };
}
export default useFileAttachFetcher;
