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
            colors: {
                current: 'currentColor',
                bg: 'rgb(var(--foreground-rgb))',
                tl: 'var(--title-color)',
                weak: 'var(--weak-color)',
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
                'mb-body': '340px',
                'tl-body': '620px',
                'lt-body': '1004px',
                'dt-body': '1260px',
            },
            height: {},
        },
    },
    plugins: [],
};
export default config;
