import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { locales, pathnames, localePrefix } from '../../config/language';

export const { Link, redirect, usePathname, useRouter } = createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix,
});
