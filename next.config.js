/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REACT_APP_GITHUB_TOKEN: process.env.REACT_APP_GITHUB_TOKEN,
  },
}

module.exports = nextConfig
