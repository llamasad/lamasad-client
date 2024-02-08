'use client';
import classNames from 'classnames';
import { Link } from '@/navigation/next-intl';
import type { AppPathnames } from '@/config/language';
import { ReactNode, useContext, useLayoutEffect, useState } from 'react';
import { usePathname } from '@/navigation/next-intl';
import { LoadingBarContext } from '../provider/loading-bar-provider';
function StaticLink({ href, children, className }: { href: AppPathnames; children: ReactNode; className?: string }) {
    const loadingbarState = useContext(LoadingBarContext);
    const [trigger, setTrigger] = useState<boolean>(false);
    const pn = usePathname();
    useLayoutEffect(() => {
        if (pn !== href) {
            setTrigger(false);
        } else {
            setTrigger(true);
        }
    }, [pn]);

    return (
        <Link
            className={classNames(className, { 'text-pimary': trigger, 'font-semibold': trigger })}
            href={href}
            onClick={(ev: any) => {
                Array.from(ev.target.parentNode.parentNode.querySelectorAll('.static-link')).forEach((vl: any, id) => {
                    if (ev.target !== vl && vl.classList.contains('text-pimary')) {
                        vl.classList.remove('text-pimary');
                        vl.classList.remove('font-semibold');
                    }
                });
                setTrigger(true);
                {
                    if (pn === href) {
                        loadingbarState.setProgress(100);
                    } else {
                        loadingbarState.setProgress(70);
                    }
                }
            }}
        >
            {children}
        </Link>
    );
}

export default StaticLink;
