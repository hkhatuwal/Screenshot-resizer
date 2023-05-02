/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
    PUBLIC: __dirname+"/uploads"
  }
}

module.exports = nextConfig
