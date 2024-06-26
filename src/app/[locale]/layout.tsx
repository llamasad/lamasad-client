import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { cookies } from 'next/headers';
import '../globals.css';
import Header from '@/components/layout/header';
import ThemeColorWraper from '@/components/wrapper-components/theme-color-wrapper';
import { Providers as StoreProvider } from '@/lib/provide';
import PluginInit from '@/components/plugin-init';
import LoadingLineProvider from '@/components/provider/loading-bar-provider';
import Footer from '@/components/layout/footer';
import Script from 'next/script';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
// import { Providers as StoreProvider } from '@/lib/provide';
import Loading from './loading';
import Image from 'next/image';
import images from '@/assets/images';
import { LogoIcon } from '@/components/icons';
import HomeLoading from '@/components/Loading/home-loading';
// const PluginInit = dynamic(() => import('@/components/plugin-init'), { ssr: false });
// const ThemeColorWraper = dynamic(() => import('@/components/wrapper-components/theme-color-wrapper'), { ssr: false });
// const LoadingLineProvider = dynamic(() => import('@/components/provider/loading-bar-provider'), { ssr: false });

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});
export const metadata: Metadata = {
    title: 'Llamasad',
    description: 'Generated by create next app',
    icons: { icon: '/logo-llama.svg' },
};
export default function RootLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
    const cookieStore = cookies();
    const theme = cookieStore.get('theme');
    // unstable_setRequestLocale(params.locale);

    // const t = useTranslations('Index');
    // (t('title'));
    return (
        <html lang={params.locale}>
            <body className={roboto.className} theme-data={theme?.value}>
                <Script type="module" src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/tailChase.js" />
                <HomeLoading />
                <StoreProvider>
                    <PluginInit>
                        <ThemeColorWraper>
                            <LoadingLineProvider>
                                <>
                                    <Header />
                                    <div className="mb:w-mb-body tl:w-tl-body lt:w-lt-body dt:w-dt-body min-h-[calc(100vh-172px)] mx-auto">
                                        {children}
                                    </div>
                                    <Footer />
                                </>
                            </LoadingLineProvider>
                        </ThemeColorWraper>
                    </PluginInit>
                </StoreProvider>
            </body>
        </html>
    );
}
