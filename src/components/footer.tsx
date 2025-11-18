import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background/80 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2 md:gap-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-bold">BlackDawn</span>
                    </Link>
                    <p className="hidden text-sm text-muted-foreground md:block">
                        © {new Date().getFullYear()} BlackDawn. All Rights Reserved.
                    </p>
                </div>
                <div className="flex items-center gap-2 md:gap-4 text-sm">
                    <Link href="#" className="text-foreground/60 transition-colors hover:text-foreground/80">
                        Privacy
                    </Link>
                    <Link href="#" className="text-foreground/60 transition-colors hover:text-foreground/80">
                        Terms
                    </Link>
                </div>
            </div>
        </footer>
    );
}
