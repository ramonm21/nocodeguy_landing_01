'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MenuIcon from './MenuIcon';
import XIcon from '../XIcon';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { href: '/projects', label: 'Projects' },
    { href: '/apps', label: 'Apps' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
  ];

  return (
    <div className="md:hidden" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 -mr-2 flex items-center justify-center"
        aria-label="Toggle menu"
      >
        <div className="w-5 h-5 flex items-center justify-center">
          <MenuIcon isOpen={isOpen} />
        </div>
      </button>

      {/* Mobile menu panel */}
      <div
        className={`
          fixed right-0 top-[72px] bg-white rounded-lg shadow-lg
          transform transition-all duration-200 ease-out z-50 min-w-[200px]
          ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'}
          border border-gray-200 py-2 mr-4
        `}
      >
        <nav>
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
            <XIcon className="h-4 w-4 mr-2" />
            <span>Follow on X</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
