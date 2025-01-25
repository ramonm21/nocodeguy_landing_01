'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import XIcon from '../XIcon';
import { ArrowRight, X } from 'lucide-react';

export default function XSidebar() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Delay the initial appearance
    const showTimer = setTimeout(() => {
      setShouldRender(true);
    }, 3000);

    return () => clearTimeout(showTimer);
  }, []);

  if (!shouldRender || !isVisible) return null;

  return (
    <div 
      className={`fixed z-40 transition-all duration-300 ease-out
        lg:right-6 lg:bottom-8
        right-4 bottom-20`}
    >
      <div className="relative group">
        <a
          href="https://x.com/nocodeguy_"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gray-900 px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
            <Image
              src="/images/avatar.png"
              alt="Ramon's profile"
              width={32}
              height={32}
              className="object-cover"
              priority
            />
          </div>
          <span className="text-sm font-medium whitespace-nowrap text-white">Connect with me on</span>
          <XIcon className="h-5 w-5 text-white" />
          <ArrowRight className="h-4 w-4 text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </a>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800 hover:bg-gray-800 transition-colors cursor-pointer"
        >
          <X className="w-3 h-3 text-white" />
        </button>
      </div>
    </div>
  );
}
