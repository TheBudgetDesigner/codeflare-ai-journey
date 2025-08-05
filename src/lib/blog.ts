import fm from 'front-matter';
import { marked } from 'marked';

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

// Vite's import.meta.glob for eager import of all markdown files
const postFiles = import.meta.glob('/src/content/blog/*.md', { eager: true, as: 'raw' });

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
    try {
      posts.push(await parseFrontmatter(raw, filePath));
    } catch (error) {
      console.error(`Error parsing post ${filePath}:`, error);
    }
  }
  // Sort by date (latest first)
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const allPosts = await getAllPosts();
    return allPosts.find(post => post.slug === slug) || null;
  } catch (error) {
    console.error(`Error getting post by slug ${slug}:`, error);
    return null;
  }
}