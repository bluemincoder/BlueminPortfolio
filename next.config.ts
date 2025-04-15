import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                hostname: "avatars.githubusercontent.com",
            },
        ],
    },
};

export default nextConfig;
