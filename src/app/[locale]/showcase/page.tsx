import { unstable_setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import Respositories from '@/components/respositories';
import { useTranslations } from 'next-intl';
type Props = {
    params: { locale: string };
};
function ShowcasePage({ params: { locale } }: Props) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('Showcase');
    return (
        <div>
            <h1 className="lt:text-[48px] text-tl lt:w-4/5 mb:w-full tl:text-[36px] mb:text-[28px] font-semibold mx-auto mt-[100px] text-center">
                {t('description')}{' '}
            </h1>

            <Respositories />
        </div>
    );
}

export default ShowcasePage;
