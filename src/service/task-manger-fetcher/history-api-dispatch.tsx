import { useSelector } from '@/lib/redux';
import { selectTMUser } from '@/lib/redux/slices/tm-user-slice';
import apiFecther from './api-fetcher';
function HistoryApiDispatch(text: string, entity: string[]) {
    const TMUser = useSelector(selectTMUser);
    if (TMUser) {
        entity.push(TMUser.username);
        text = TMUser.username + TMUser.userTag + ' ' + text;
    }
    return apiFecther('/api/history', 'POST', { text, entity });
}

export default HistoryApiDispatch;
