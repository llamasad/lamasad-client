import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'vi'] as const;

export const pathnames = {
    '/': '/',
    '/skill': {
        en: '/skill',
        vi: '/k%E1%BB%B9%20n%C4%83ng',
    },
    '/showcase': {
        en: '/showcase',
        vi: '/tr%C6%B0ng%20b%C3%A0y',
    },
    '/comunity': {
        en: '/comunity',
        vi: '/c%E1%BB%99ng%20%C4%91%E1%BB%93ng',
    },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
