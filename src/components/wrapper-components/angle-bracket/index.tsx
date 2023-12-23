import { ReactNode } from 'react';
import { AngleBracket } from '@/components/icons';
import classNames from 'classnames';
function AngleBracketsXWrapper({
    children,
    width,
    height,
    className,
}: {
    children: ReactNode;
    width?: string;
    height?: string;
    className?: string;
}) {
    const size = { width: width, height: height };
    return (
        <div className={classNames('angle-brackets_wrapper flex justify-items-center items-center', className)}>
            <AngleBracket {...size} direction="right" />
            {children}
            <AngleBracket {...size} direction="left" />
        </div>
    );
}

export default AngleBracketsXWrapper;
