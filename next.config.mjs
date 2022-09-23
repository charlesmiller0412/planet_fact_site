/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        loader: "akamai",
        path: "./public/assets/images",
    },
    assetPrefix: "./",
};

export default nextConfig;
