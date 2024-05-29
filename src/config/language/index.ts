import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'vi'] as const;

const staticPathnames = {
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
    '/showcase/product/task-manager': {
        en: '/showcase/product/task-manager',
        vi: '/tr%C6%B0ng%20b%C3%A0y/s%E1%BA%A3n%20ph%E1%BA%A9m/qu%E1%BA%A3n%20l%C3%BD%20c%C3%B4ng%20vi%E1%BB%87c',
    },
    '/showcase/product/task-manager/home': {
        en: '/showcase/product/task-manager/home',
        vi: '/tr%C6%B0ng%20b%C3%A0y/s%E1%BA%A3n%20ph%E1%BA%A9m/qu%E1%BA%A3n%20l%C3%BD%20c%C3%B4ng%20vi%E1%BB%87c/trang%20ch%E1%BB%A7',
    },
} satisfies Pathnames<typeof locales>;

const dynamicPathnames = {
    '/showcase/product/task-manager/task-detail/[id]': {
        en: '/showcase/product/task-manager/task-detail/[id]',
        vi: '/tr%C6%B0ng%20b%C3%A0y/s%E1%BA%A3n%20ph%E1%BA%A9m/qu%E1%BA%A3n%20l%C3%BD%20c%C3%B4ng%20vi%E1%BB%87c/chi%20ti%E1%BA%BFt%20c%C3%B4ng%20vi%E1%BB%87c/[id]',
    },
} satisfies Pathnames<typeof locales>;

export const pathnames = {
    ...staticPathnames,
    ...dynamicPathnames,
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppStaticsPathnames = keyof typeof staticPathnames;
export type AppDynamicPathnames = keyof typeof dynamicPathnames;
export type AppPathnames = AppStaticsPathnames | AppDynamicPathnames;
