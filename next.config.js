const webpack = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    // Add a DefinePlugin to replace __REACT_DEVTOOLS_GLOBAL_HOOK__ with an object
    config.plugins.push(
      new webpack.DefinePlugin({
        '__REACT_DEVTOOLS_GLOBAL_HOOK__': '({ isDisabled: true })'
      })
    );
    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
