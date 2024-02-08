import { unstable_setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import Respositories from '@/components/respositories';
type Props = {
    params: { locale: string };
};
function showcasePage({ params: { locale } }: Props) {
    unstable_setRequestLocale(locale);

    return (
        <div>
            <h1 className="text-[48px] text-tl w-[80%] font-semibold mx-auto mt-[100px] text-center">
                This serves as a showcase for my projects and also functions as a comprehensive repositories
            </h1>

            <Respositories />
        </div>
    );
}

export default showcasePage;
