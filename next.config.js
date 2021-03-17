const withPreact = require("next-plugin-preact");

const config = withPreact({
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
});

module.exports = config;
