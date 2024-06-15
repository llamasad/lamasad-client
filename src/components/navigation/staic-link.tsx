'use client';
import classNames from 'classnames';
import { Link } from '@/navigation/next-intl';
import type { AppDynamicPathnames, AppStaticsPathnames, AppDynamicKeyParams } from '@/config/language';
import { ReactNode, useContext, useLayoutEffect, useState } from 'react';
import { usePathname } from '@/navigation/next-intl';
import { LoadingBarContext } from '../provider/loading-bar-provider';
function StaticLink({
    href,
    children,
    className,
    isHighlight = true,
}: {
    href: AppStaticsPathnames;
    children: ReactNode;
    className?: string;
    isHighlight?: boolean;
}) {
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
            className={classNames(className, {
                'text-pimary': trigger && isHighlight,
                'font-semibold': trigger && isHighlight,
            })}
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

export const StaticLinkForDynamicRoute = ({
    pathname,
    params,
    children,
    className,
    isHighlight = true,
}: {
    params: string;
    pathname: AppDynamicPathnames;
    children: ReactNode;
    className?: string;
    isHighlight?: boolean;
}) => {
    const loadingbarState = useContext(LoadingBarContext);
    const [trigger, setTrigger] = useState<boolean>(false);
    const pn = usePathname();
    var bashpath = pathname.split('/');
    var parameter = bashpath.pop() as string;

    bashpath.push(params);
    var href = bashpath.join('/');
    useLayoutEffect(() => {
        if (pn !== href) {
            setTrigger(false);
        } else {
            setTrigger(true);
        }
    }, [pn]);

    return (
        <Link
            className={classNames(className, {
                'text-pimary': trigger && isHighlight,
                'font-semibold': trigger && isHighlight,
            })}
            href={{
                pathname: pathname,
                params: { [parameter.substring(1, parameter.length - 1) as AppDynamicKeyParams]: params },
            }}
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
};

export default StaticLink;
