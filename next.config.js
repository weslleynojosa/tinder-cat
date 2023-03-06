/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true
  }
}

const images = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'cdn2.thecatapi.com/',
      pathname: '/images/**',
    },
  ],
}

module.exports = { 
  nextConfig: {
    reactStrictMode: false,
    compiler: {
      styledComponents: true
    }
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn2.thecatapi.com',
        pathname: '/images/**',
      },
    ],
  }
}