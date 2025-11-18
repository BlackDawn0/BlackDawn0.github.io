// image-loader.ts

export default function customLoader({ src, width, quality }: { src: string, width: number, quality?: number }) {
  
  // If we are in development, use the default Next.js behavior
  if (process.env.NODE_ENV === 'development') {
    return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
  }

  // FOR GITHUB PAGES (Root Domain)
  // We just return the src directly because we are at the root (blackdawn0.github.io)
  return `${src}?w=${width}&q=${quality || 75}`;
}
