import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import XIcon from './XIcon';
import MobileNav from './components/MobileNav';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'nocodeguy - Zero Code, Infinite Possibilities',
  description: 'Join me on a journey where we harness the power of AI to build amazing apps - no coding required.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/a62d4477ce9d9aca7d9f9669/script.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={inter.className}>
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background">
          <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors">
                nocodeguy
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
              <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">Resources</Link>
              <Link href="/apps" className="text-muted-foreground hover:text-foreground transition-colors">Apps</Link>
              <Link href="https://x.com/nocodeguy_" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <XIcon className="h-5 w-5" />
              </Link>
            </div>
            {/* Mobile Navigation */}
            <div className="flex items-center md:hidden">
              <MobileNav />
            </div>
          </nav>
        </header>
        <div className="pt-16">
          <main>{children}</main>
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
                    <XIcon className="h-6 w-6" />
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
                        <Link href="/resources" className="text-base text-gray-500 hover:text-gray-900">Resources</Link>
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