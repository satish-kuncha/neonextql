const  NextFederationPlugin  = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const deps = require('./package.json').dependencies;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  webpack: true,
  webpack(config, options) {
    const { webpack, isServer } = options;
    config.experiments = { 
      topLevelAwait: true,
      layers: true
     };

     
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename : "temp",
        remotes: {
          remoteNeodash: 'remoteNeodash@https://cloned-neo-dash.vercel.app/remoteEntry.js',
        },
      }),
      
    );
    return config;
  },
}

module.exports = nextConfig
