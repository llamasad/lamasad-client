import classNames from 'classnames';
import { HistoryItemType } from './general-history-list';

function GeneralHistoryItem({ entity, historyAction, timeRelease }: HistoryItemType) {
    const primaryEntity = entity.split(',');
    const historySplit = historyAction.split(' ');

    return (
        <li>
            {historySplit.map((word, index) => {
                const isPrimary = primaryEntity.includes(word);
                return (
                    <span key={index} className={classNames('', { 'text-green-500': isPrimary })}>
                        {index ? ' ' + word : word}
                    </span>
                );
            })}
            <span className="text-sm text-weak">-{timeRelease}</span>
        </li>
    );
}

export default GeneralHistoryItem;
