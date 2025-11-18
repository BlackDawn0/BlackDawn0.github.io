import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Code, Gamepad2, ExternalLink } from 'lucide-react';

const assets = [
  { id: '1', name: 'Git LFS Essentials', description: 'Easy setup for .gitignore and .gitattributes for Git LFS.', link: 'https://black-dawn.itch.io/stealing-from-the-demon', imageUrl: '/GitLFS.png', comingSoon: true },
];

const games = [
  { id: '1', name: 'Stealing From The Demon', description: 'A horror game where you must steal from a demon.', link: 'https://black-dawn.itch.io/stealing-from-the-demon', imageUrl: '/StealingFromTheDemon.png' },
];

function getImageUrl(id: string) {
  return PlaceHolderImages.find(img => img.id === id)?.imageUrl ?? '';
}

function getImageHint(id: string) {
  return PlaceHolderImages.find(img => img.id === id)?.imageHint ?? '';
}

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero');

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full pt-10 pb-20 md:pt-16 md:pb-32 flex items-center justify-center text-center">
        <div className="relative z-10 container px-4 md:px-6">
          <Image src="/mainlogo.png" alt="BlackDawn Logo" width={370} height={370} className="mx-auto mb-0" />
          <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to <span className="text-primary">BlackDawn</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Indie Unity developer, building editor tools that streamline your workflow and unleash your creativity.
          </p>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-12 md:py-24 lg:py-32 bg-card">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl flex items-center justify-center gap-2">
                <Gamepad2 className="w-8 h-8" />
                My Games
              </h2>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {games.map((game) => (
              <Card key={game.id} className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl bg-card">
                <CardHeader className="p-0">
                  <Image
                    src={game.imageUrl}
                    alt={game.name}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold">{game.name}</CardTitle>
                  <p className="mt-2 text-sm text-muted-foreground h-10">{game.description}</p>
                  <Button variant="link" className="px-0 mt-4 text-primary" asChild>
                    <Link href={game.link} target="_blank" rel="noopener noreferrer">
                      Check it out
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Assets Section */}
      <section id="assets" className="py-12 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl flex items-center justify-center gap-2">
                <Code className="w-8 h-8" />
                My Assets
              </h2>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {assets.map((asset) => (
              <Card key={asset.id} className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl bg-card">
                <CardHeader className="p-0">
                  <Image
                    src={asset.imageUrl}
                    alt={asset.name}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold">{asset.name}</CardTitle>
                  <p className="mt-2 text-sm text-muted-foreground h-10">{asset.description}</p>
                  {asset.comingSoon ? (
                    <Button variant="link" className="px-0 mt-4" disabled>
                      Coming Soon
                    </Button>
                  ) : (
                    <Button variant="link" className="px-0 mt-4 text-primary" asChild>
                      <Link href={asset.link}>
                        Check it out <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
