import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/app/types/blog';

const POSTS_PATH = path.join(process.cwd(), 'content/blog');

export async function getAllPosts(): Promise<BlogPost[]> {
  const files = fs.readdirSync(POSTS_PATH);
  
  const posts = files
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => {
      const filePath = path.join(POSTS_PATH, file);
      const source = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(source);
      
      return {
        ...data,
        slug: file.replace(/\.mdx?$/, ''),
        content,
      } as BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
    const source = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(source);
    
    return {
      ...data,
      slug,
      content,
    } as BlogPost;
  } catch (error) {
    return null;
  }
}

export async function getRelatedPosts(currentSlug: string, tags: string[]): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  
  return allPosts
    .filter(post => 
      post.slug !== currentSlug && 
      post.tags.some(tag => tags.includes(tag))
    )
    .slice(0, 3);
}
