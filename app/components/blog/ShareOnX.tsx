'use client';

import { XIcon } from 'lucide-react';

export default function ShareOnX({ title, url }: { title: string; url: string }) {
  const shareUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;

  return (
    <a
      href={shareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
    >
      <XIcon className="w-4 h-4" />
      <span>Share on X</span>
    </a>
  );
}
