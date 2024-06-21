'use client';

import StaticLink from '@/components/navigation/staic-link';
import { useRouter } from '@/navigation/next-intl';
import classNames from 'classnames';
import { Jockey_One } from 'next/font/google';
const jockeyOne = Jockey_One({ weight: '400', preload: false });
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    const router = useRouter();
    return (
        <main className="pt-16 flex h-full items-center justify-center">
            <div className="text-center mr-2 px-2 py-4 border-r border-weak">
                <p className={classNames(' text-tl mb-2 text-3xl font-medium', jockeyOne.className)}>TManager</p>
                <p className="text-lg text-tl font-semibold">403</p>
            </div>
            <div>
                <h2 className=" mb-2 ">Forbiden,login before access</h2>
                <p className=" text-weak mb-2">
                    <span
                        className="pointer-cursor text-green-500"
                        onClick={() => {
                            reset();
                            router.refresh();
                        }}
                    >
                        reset
                    </span>{' '}
                    if you logged
                </p>
                <StaticLink
                    isHighlight={false}
                    href="/showcase/product/task-manager"
                    className="rounded-md bg-green-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
                >
                    Back to home
                </StaticLink>
            </div>
        </main>
    );
}
