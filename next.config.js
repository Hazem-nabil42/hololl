/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack: (config, { isServer }) => {
    // Add webpack rule to handle .mp3 files
    config.module.rules.push({
      test: /\.(mp3)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'sounds/' // Adjust the output path as needed
        }
      }
    });

    // Important: return the modified config
    return config;
  }
}

module.exports = nextConfig;
