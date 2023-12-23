import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'vi'];

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as any)) {
        console.log('ko tim thay');
    }

    return {
        messages: (await import(`../messages/${locale}.json`)).default,
    };
});
