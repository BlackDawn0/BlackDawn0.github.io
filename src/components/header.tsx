import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center px-4 md:px-6">
                <Link href="/" className="mr-4 flex items-center space-x-2">
                    <span className="font-bold sm:inline-block">BlackDawn</span>
                </Link>
                <nav className="flex items-center gap-2 text-sm md:gap-4 lg:gap-6">
                    <Link href="/" className="text-foreground/60 transition-colors hover:text-foreground/80">
                        Home
                    </Link>
                    {/* This "Contact" link is kept */}
                    <Link href="/contact" className="text-foreground/60 transition-colors hover:text-foreground/80">
                        Contact
                    </Link>
                </nav>
                <div className="flex flex-1 items-center justify-end gap-2">
                    <ThemeToggle />
                    {/* The "Get in Touch" button has been removed. */}
                    {/*
                    <Button asChild>
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                    */}
                </div>
            </div>
        </header>
    );
}