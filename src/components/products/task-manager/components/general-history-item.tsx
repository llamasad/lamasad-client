import classNames from 'classnames';
import { HistoryItemType } from './general-history-list';
import { formatDate } from './custom-chat';
function processArray(arr: string[]): string[] {
    let result = [] as string[];

    arr.forEach((item) => {
        if (item.includes('#')) {
            // Split the item by '#'
            let splitItems = item.split('#');
            // Handle the case where splitItems[0] might be an empty string if item starts with '#'
            if (splitItems[0] !== '') {
                result.push(splitItems[0]);
            }
            // Add '#' before each subsequent part and push to the result
            for (let i = 1; i < splitItems.length; i++) {
                result.push('#' + splitItems[i]);
            }
        } else {
            // If item does not contain '#', add it to the result array
            result.push(item);
        }
    });

    return result;
}

function GeneralHistoryItem({ entity, historyAction, timeRelease }: HistoryItemType) {
    const historySplit = processArray(historyAction.split(' '));

    return (
        <li>
            {historySplit.map((word, index) => {
                const isPrimary = entity.includes(word);
                return (
                    <span key={index} className={classNames('', { 'text-green-500': isPrimary })}>
                        {index && !word.includes('#') ? ' ' + word : word}
                    </span>
                );
            })}
            <span className="text-sm text-weak">-{formatDate(timeRelease as Date)}</span>
        </li>
    );
}

export default GeneralHistoryItem;
