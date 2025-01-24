import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'nocodeguy - Building the Future with AI',
  description: 'Join me on a journey to explore AI technology and build amazing projects without writing code. Learn how to leverage artificial intelligence in practical ways.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-border/40 bg-background/80">
          <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              nocodeguy
            </div>
            <div className="flex gap-8">
              <a href="#featured" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            </div>
          </nav>
        </header>
        <div className="pt-16">
          {children}
        </div>
        <footer className="border-t py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} nocodeguy. Crafted with AI, powered by curiosity.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}