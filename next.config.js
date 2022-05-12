/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['selfiepop-dev-media.s3.us-west-2.amazonaws.com'],
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    // localeDetection: false,
  },
}

module.exports = nextConfig
