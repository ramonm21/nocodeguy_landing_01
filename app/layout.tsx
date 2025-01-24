import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Twitter from './Twitter';

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
            <div className="flex items-center">
              <Link href="/" className="text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors">
                nocodeguy
              </Link>
            </div>
            <div className="flex gap-8">
              <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
              <Link href="/apps" className="text-muted-foreground hover:text-foreground transition-colors">Apps</Link>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link href="https://x.com/nocodeguy_" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </nav>
        </header>
        <div className="pt-16">
          {children}
        </div>
        <footer className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              {/* Brand Section */}
              <div className="space-y-8 xl:col-span-1">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-gray-900">nocodeguy</span>
                </Link>
                <p className="text-gray-500">
                  Empowering creators to build amazing things with AI and no-code tools.
                </p>
                <div className="flex space-x-6">
                  <a href="https://twitter.com/nocodeguy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="https://github.com/nocodeguy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Links Sections */}
              <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Navigation</h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <Link href="/projects" className="text-base text-gray-500 hover:text-gray-900">Projects</Link>
                      </li>
                      <li>
                        <Link href="/apps" className="text-base text-gray-500 hover:text-gray-900">Apps</Link>
                      </li>
                      <li>
                        <Link href="/blog" className="text-base text-gray-500 hover:text-gray-900">Blog</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <Link href="/privacy" className="text-base text-gray-500 hover:text-gray-900">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link href="/imprint" className="text-base text-gray-500 hover:text-gray-900">Imprint</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-200 pt-8">
              <p className="text-base text-gray-400 text-center">
                &copy; {new Date().getFullYear()} nocodeguy. Crafted with AI, powered by curiosity.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}