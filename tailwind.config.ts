import type { Config } from 'tailwindcss';
/** @type {import('tailwindcss').Config} */
const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            transitionProperty: {
                size: 'width,height',
            },
            colors: {
                pimary: 'var(--pimary-color)',
                current: 'currentColor',
                bg: 'rgb(var(--foreground-rgb))',
                tl: 'var(--title-color)',
                weak: 'var(--weak-color)',
                cooler: 'var(--cooler-color)',
            },
            screens: {
                mb: '360px',
                tl: '640px',
                lt: '1024px',
                dt: '1280px',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                iconFont: ['iconFont', 'sans-serif'],
            },
            borderWidth: {},
            width: {
                '1/5-minus-8px': 'calc(20% - 16px)',
                '1/4-minus-8px': 'calc(25% - 16px)',
                '1/2-minus-8px': 'calc(50% - 16px)',
                'full-minus-8px': 'calc(100% - 16px)',
                'mb-body': '340px',
                'tl-body': '620px',
                'lt-body': '1004px',
                'dt-body': '1260px',
            },
            height: {
                '37': '148px',
                '47': '188px',
            },
        },
    },
    plugins: [],
};
export default config;
