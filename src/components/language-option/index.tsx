'use client';
import { useLayoutEffect, useTransition } from 'react';
import { locales } from '@/config/language';
import { usePathname, useRouter } from '@/navigation/next-intl';
import { languageSlice, selectLanguage } from '@/lib/redux/slices/language-slice';
import { useDispatch, useSelector } from '@/lib/redux';

function LanguageOption() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const dispatch = useDispatch();
    const pathname = usePathname();
    const language = useSelector(selectLanguage);
    useLayoutEffect(() => {
        let lang = window.location.pathname.split('/')[1] as 'vi' | 'en';
        if (lang !== language) {
            dispatch(languageSlice.actions.switch(lang));
        }
    }, []);
    const switchLanguage = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = ev.target.value as 'en' | 'vi';
        startTransition(() => {
            nextLocale;
            router.replace('/', { locale: nextLocale });
            dispatch(languageSlice.actions.switch(nextLocale));
        });
    };
    return (
        <select
            onChange={switchLanguage}
            name="languages"
            className="pl-[6px] border-solid text-[16px] font-base border-l-[1px] border-weak cursor-pointer bg-inherit hover:text-tl"
            id=""
            value={language}
        >
            {locales.map((locale, index) => {
                return (
                    <option className="cursor-pointer" value={locale} key={index}>
                        {locale}
                    </option>
                );
            })}
        </select>
    );
}

export default LanguageOption;
