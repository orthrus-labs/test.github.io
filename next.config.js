/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
   basePath: process.env.NEXT_PUBLIC_BASE_PATH,
   assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH, 
    env: {
      infuraKey: process.env.INFURA_KEY,
      alchemyKey: process.env.ALCHEMY_KEY,
      magicKey: process.env.MAGIC_KEY,
    },
  }
  
  module.exports = nextConfig