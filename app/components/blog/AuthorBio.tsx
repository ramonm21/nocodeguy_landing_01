'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Author } from '@/app/types/blog';

export default function AuthorBio({ author }: { author: Author }) {
  return (
    <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl">
      <div className="relative w-16 h-16 rounded-full overflow-hidden">
        <Image
          src={author.avatar}
          alt={author.name}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{author.name}</h3>
        {author.bio && (
          <p className="text-gray-600 text-sm mt-1">{author.bio}</p>
        )}
        <Link
          href={`https://x.com/${author.x}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 text-sm hover:underline mt-2 inline-block"
        >
          Follow on X →
        </Link>
      </div>
    </div>
  );
}
