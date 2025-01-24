'use client';

import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      title: "Creating Landing Pages with AI Tools: A Comprehensive Guide",
      description: "Learn how to leverage AI tools to design and develop stunning landing pages efficiently. From copywriting to design, discover the best practices and tools.",
      date: "Coming Soon",
      readTime: "10 min read",
      category: "AI Tools",
      slug: "creating-landing-pages-with-ai",
    },
    {
      title: "Programming Basics for No-Code Developers",
      description: "Understanding basic programming concepts can help you better utilize no-code tools. Explore key concepts without diving deep into coding.",
      date: "Coming Soon",
      readTime: "8 min read",
      category: "Education",
      slug: "programming-basics-nocode",
    },
    {
      title: "AI Tools Comparison: ChatGPT vs Claude vs Gemini",
      description: "A detailed comparison of popular AI tools, their strengths, weaknesses, and best use cases for different development scenarios.",
      date: "Coming Soon",
      readTime: "12 min read",
      category: "AI Tools",
      slug: "ai-tools-comparison",
    }
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
        Blog
      </h1>

      {/* Blog Posts Grid */}
      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <article 
            key={post.slug}
            className="group relative rounded-2xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="p-8">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-50 text-purple-600">
                  {post.category}
                </span>
                <span className="inline-flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
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
                <span>Coming Soon</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
