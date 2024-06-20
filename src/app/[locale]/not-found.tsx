import { LogoIcon } from '@/components/icons';
import StaticLink from '@/components/navigation/staic-link';
import { headers } from 'next/headers';

export default function NotFound() {
    const headersList = headers();
    return (
        <div className=" pt-[24vh] flex items-center justify-center">
            <div className="border-r pr-8 mr-8 border-weak flex flex-col items-center">
                <LogoIcon fill="currentColor" className="w-32 h-32 mb-4 text-black" />
                <h2 className="text-lg font-semibold">404 Not Found</h2>
            </div>
            <div className="">
                <p className="mb-2 text-lg">Could not find requested to resource </p>
                <span className="text-lg">
                    Return{' '}
                    <StaticLink className="text-pimary " href="/">
                        Home
                    </StaticLink>
                </span>
            </div>
        </div>
    );
}
