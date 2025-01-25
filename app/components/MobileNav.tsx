'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MenuIcon from './MenuIcon';
import Twitter from '../Twitter';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { href: '/projects', label: 'Projects' },
    { href: '/apps', label: 'Apps' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 -mr-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        <MenuIcon isOpen={isOpen} />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/10 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={`
          fixed right-4 top-[72px] bg-white rounded-lg shadow-lg
          transform transition-all duration-200 ease-out z-50
          ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'}
          border border-gray-200 py-2
        `}
      >
        <nav className="w-48">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`
                  block px-4 py-2 text-sm transition-colors
                  ${isActive 
                    ? 'bg-gray-50 text-gray-900 font-medium' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
              >
                {label}
              </Link>
            );
          })}
          
          <div className="h-px bg-gray-200 my-2 mx-4" />
          
          <Link
            href="https://x.com/nocodeguy_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
          >
            <Twitter className="h-4 w-4 mr-2" />
            <span>Follow on X</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
