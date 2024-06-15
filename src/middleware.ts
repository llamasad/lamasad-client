import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from '../i18n-config';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import createIntlMiddleware from 'next-intl/middleware';
import { pathnames, locales, localePrefix } from '@/config/language';

function getLocale(request: NextRequest): string | undefined {
    const language: any = request.cookies.get('NEXT_LOCALE');
    if (!language) {
        const negotiatorHeaders: Record<string, string> = {};
        request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

        // @ts-ignore locales are readonly
        const locales: string[] = i18n.locales;

        // Use negotiator and intl-localematcher to get best locale
        let languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);
        new Negotiator({ headers: negotiatorHeaders });
        const locale = matchLocale(languages, locales, i18n.defaultLocale);

        return locale;
    }
    return language.value;
}

export default async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    if (
        [
            '/iconsvg',
            '/logo-llama.svg',
            '/logo.svg',
            // Your other files in `public`
        ].includes(pathname)
    )
        return;

    // Check if there is any supported locale in the pathname

    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );
    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);
        // e.g. incoming request is /products
        // The new URL is now /en-US/products
        return NextResponse.redirect(
            new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url),
        );
    }
    const handleI18nRouting = createIntlMiddleware({
        locales: i18n.locales,
        defaultLocale: i18n.defaultLocale,
        pathnames,
        localePrefix,
    });
    const response = handleI18nRouting(request);

    return response;
}

// export const config = {
//     // Match only internationalized pathnames
//     matcher: ['/', '/(vi|en)/:path*'],
// };
export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
