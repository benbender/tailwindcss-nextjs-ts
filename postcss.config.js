const config = {
  plugins: [
    ["@tailwindcss/jit", {}],
    ["autoprefixer", {}],
  ],
};

if (process.env.NODE_ENV === "production") {
  config.plugins.push[["cssnano", {}]];
}

module.exports = config;
