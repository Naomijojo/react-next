
const nextConfig = {
  // 移除內建的 i18n 配置，使用 react-i18next
  // i18n: {
  //   locales: ['en', 'zh'],
  //   defaultLocale: 'zh',
  // },
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.accupass.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
