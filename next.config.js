const isProd = process.env.NODE_ENV === "production";

module.exports = nextConfig;
module.exports = {
    assetPrefix: isProd ? "planet-fact-site" : "",
    images: {
        unoptimized: true,
    },
};
