import { ArrowRight, Calendar, Clock, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import FilteredPosts from '@/app/components/blog/FilteredPosts';

export const revalidate = 3600; // Revalidate every hour

export default async function Blog() {
  const posts = await getAllPosts();
  const tags = Array.from(new Set(posts.flatMap(post => post.tags))).sort();

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-0">
          Blog
        </h1>
      </div>

      <FilteredPosts posts={posts} tags={tags} />
    </main>
  );
}
