/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: process.env.NEXT_PUBLIC_SERVER_SIDE_URL,
                pathname: '/**',
            },
        ],
    },

    async headers() {
        return [
            {
                // matching all API routes
                source: '/',
                headers: [
                    { key: 'Access-Control-Allow-Credentials', value: 'true' },
                    { key: 'Access-Control-Allow-Origin', value: '*' }, // replace this your actual origin
                    { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
                    },
                ],
            },
        ];
    },
};
const withNextIntl = require('next-intl/plugin')('./src/config/language/i18n.ts');

module.exports = withNextIntl(nextConfig);
