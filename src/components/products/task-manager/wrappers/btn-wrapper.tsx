import classNames from 'classnames';
import { ReactNode } from 'react';

function BtnWrapper({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <button
            className={classNames(
                'w-[250px] h-[46px] border-2 border-weak rounded-full flex items-center justify-center transition-all ',
                className,
            )}
        >
            {children}
        </button>
    );
}

export default BtnWrapper;
