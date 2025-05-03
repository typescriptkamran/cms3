// next.config.ts
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fr', 'de'],  // Add supported languages
    defaultLocale: 'en',
  },
};
module.exports = nextConfig;
