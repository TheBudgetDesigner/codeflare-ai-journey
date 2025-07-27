import fm from 'front-matter';
import { marked } from 'marked';

// Vite's import.meta.glob for eager import of all markdown files
const postFiles = import.meta.glob('/src/content/blog/*.md', { eager: true, as: 'raw' });

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  featured: boolean;
  excerpt?: string;
  tags?: string[];
  content: string; // HTML
};

async function parseFrontmatter(raw: string, filePath: string): Promise<BlogPost> {
  const { attributes, body } = fm<any>(raw);
  const processedContent = await marked.parse(body);
  const slug = attributes.slug || filePath.split('/').pop()?.replace(/\.md$/, '') || '';
  return {
    slug,
    title: attributes.title || slug,
    date: attributes.date || '',
    category: attributes.category || '',
    readTime: attributes.readTime || '',
    featured: !!attributes.featured,
    excerpt: attributes.excerpt,
    tags: attributes.tags,
    content: processedContent,
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];
  for (const filePath in postFiles) {
    const raw = postFiles[filePath] as string;
    posts.push(await parseFrontmatter(raw, filePath));
  }
  // Sort by date (latest first)
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const allPosts = await getAllPosts();
  return allPosts.find(post => post.slug === slug) || null;
}