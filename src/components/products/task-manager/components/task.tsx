import { MacbookDisplayType } from '@/components/wrapper-components/macbook-wrapper';
import classNames from 'classnames';
import { TypeOfSatatus } from './status';
function Task({ display }: { display: MacbookDisplayType }) {
    return (
        <div
            className={classNames(
                {
                    'w-1/5': display === 'desktop',
                    'w-1/4': display === 'laptop',
                    'w-1/3': display === 'tablet',
                    'w-1/2': display === 'mobile',
                },
                'h-[160px] bg-[#999]',
            )}
        ></div>
    );
}

export default Task;
