import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { getPostBySlug, getRelatedPosts } from '@/lib/blog';
import AuthorBio from '@/app/components/blog/AuthorBio';
import ShareOnX from '@/app/components/blog/ShareOnX';
import ContentUpgrade from '@/app/components/blog/ContentUpgrade';

const components = {
  AuthorBio,
  ShareOnX,
  ContentUpgrade,
};

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(params.slug, post.tags);

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map(tag => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-50 text-purple-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          {post.title}
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          {post.description}
        </p>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <div className="font-medium text-gray-900">{post.author.name}</div>
              <div className="text-gray-500 text-sm">{post.date}</div>
            </div>
          </div>
          <div className="ml-auto">
            <ShareOnX
              title={post.title}
              url={`https://nocodeguy.dev/blog/${post.slug}`}
            />
          </div>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        <MDXRemote
          source={post.content}
          components={components}
        />
      </div>

      {post.contentUpgrade && (
        <div className="my-12">
          <ContentUpgrade upgrade={post.contentUpgrade} />
        </div>
      )}

      <div className="mt-12 pt-8 border-t">
        <AuthorBio author={post.author} />
      </div>

      {relatedPosts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {relatedPosts.map(relatedPost => (
              <a
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="block p-6 bg-white rounded-xl border hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  {relatedPost.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {relatedPost.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
