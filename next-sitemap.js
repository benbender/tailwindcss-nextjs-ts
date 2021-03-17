require("@next/env").loadEnvConfig(".", process.env.NODE_ENV !== "production");

module.exports = {
  siteUrl: "your-site-url-here",
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: [],
};
