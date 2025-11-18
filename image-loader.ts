// image-loader.ts

// This MUST match the 'repoName' in your next.config.ts
const repoName = 'studio'; 

export default function customLoader({ src, width, quality }: { src: string, width: number, quality?: number }) {
  
  // For local development (npm run dev), images will work normally.
  // For production (on GitHub Pages), it will add the repository name.
  if (process.env.NODE_ENV === 'development') {
    return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
  }

  // When deployed, this ensures images load from '/studio/image-path'
  return `/${repoName}${src}?w=${width}&q=${quality || 75}`;
}