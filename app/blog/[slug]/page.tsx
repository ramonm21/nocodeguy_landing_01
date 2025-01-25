import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import XFeed from '@/app/components/XFeed';
import AuthorBio from '@/app/components/blog/AuthorBio';
import ShareOnX from '@/app/components/blog/ShareOnX';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // MDX components configuration with author data
  const components = {
    XFeed,
    AuthorBio: () => <AuthorBio author={post.author} />,
    ShareOnX: () => <ShareOnX title={post.title} url={`https://nocodeguy.dev/blog/${post.slug}`} />,
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <div className="relative w-full h-[400px] mb-8 rounded-2xl overflow-hidden">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span>{post.author.name}</span>
          </div>
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
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span 
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-50 text-purple-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <MDXRemote source={post.content} components={components} />
      </div>

      {/* Author Bio and Share */}
      <div className="mt-12 pt-8 border-t">
        <AuthorBio author={post.author} />
        <div className="mt-8">
          <ShareOnX title={post.title} url={`https://nocodeguy.dev/blog/${post.slug}`} />
        </div>
      </div>
    </article>
  );
}
