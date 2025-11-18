import type { NextConfig } from 'next';

// Define the name of your GitHub repository
const repoName = 'studio'; 
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /**
   * Configure Next.js to export a static site.
   * This is required for GitHub Pages.
   */
  output: 'export',

  /**
   * Set the base path to your repository name.
   * This is only applied in production (when deploying to GitHub Pages).
   */
  basePath: isProd ? `/${repoName}` : '',

  // Your existing configurations
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: 'custom',
    loaderFile: './image-loader.ts',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;