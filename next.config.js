/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
   basePath: '/test.github.io',
   assetPrefix: '/test.github.io ', 
    env: {
      infuraKey: process.env.INFURA_KEY,
      alchemyKey: process.env.ALCHEMY_KEY,
      magicKey: process.env.MAGIC_KEY,
    },
  }
  
  module.exports = nextConfig