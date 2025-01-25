'use client';

import { ArrowRight, Calendar, Clock, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BlogPost } from '@/app/types/blog';

interface TagFilterProps {
  tags: string[];
  posts: BlogPost[];
}

export default function TagFilter({ tags, posts }: TagFilterProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const filteredPosts = selectedTags.length > 0
    ? posts.filter(post => 
        post.tags.some(tag => selectedTags.includes(tag))
      )
    : posts;

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm transition-colors
              ${selectedTags.includes(tag)
                ? 'bg-teal-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            {tag}
            {selectedTags.includes(tag) && (
              <X className="h-3 w-3 ml-2" />
            )}
          </button>
        ))}
      </div>

      <div className="space-y-12 mt-8">
        {filteredPosts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
          >
            <article 
              className="group relative rounded-2xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative h-48 md:h-full min-h-[200px]">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:col-span-2">
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-4">
                    {post.tags.map(tag => (
                      <span 
                        key={tag}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-50 text-purple-600"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="inline-flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="inline-flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {post.description}
                  </p>
                  <div className="flex items-center text-teal-600 font-medium">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </>
  );
}
