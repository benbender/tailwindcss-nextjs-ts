const withPreact = require("next-plugin-preact");

const webpack = (config) => {
  config.module.rules.push({
    test: /\.svg$/,
    issuer: /\.(js|ts)x?$/,
    use: ["@svgr/webpack", "url-loader"],
  });

  return config;
};

const config = withPreact({
  webpack,

  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizeFonts: true,
    optimizeImages: true,
    optimizeCss: true,
  },
  future: {
    strictPostcssConfiguration: true,
    excludeDefaultMomentLocales: true,
    webpack5: true,
  },
});

module.exports = config;
