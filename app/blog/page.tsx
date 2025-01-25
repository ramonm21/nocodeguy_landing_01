import { ArrowRight, Calendar, Clock, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

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
        
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <Link
              key={tag}
              href={`/blog/tag/${tag.toLowerCase().replace(/ /g, '-')}`}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="space-y-8">
        {posts.map((post) => (
          <Link 
            href={`/blog/${post.slug}`}
            key={post.slug}
          >
            <article 
              className="group relative rounded-2xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative h-48 md:h-full">
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
    </main>
  );
}
