/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'external-content.duckduckgo.com',
                pathname: '**',
            }
        ]
    },
};

module.exports = nextConfig;
