// next.config.js
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: require('./next-i18next.config.js').i18n, // Integration with i18next config
}

module.exports = nextConfig
