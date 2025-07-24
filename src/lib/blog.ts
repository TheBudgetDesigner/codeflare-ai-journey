import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Vite's import.meta.glob for eager import of all markdown files
const postFiles = import.meta.glob('/src/content/blog/*.md', { eager: true, as: 'raw' });

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  featured: boolean;
  content: string; // HTML
};

function parseFrontmatter(raw: string, filePath: string): BlogPost {
  const { data, content } = matter(raw);
  // Convert markdown to HTML
  const processedContent = remark().use(html).processSync(content).toString();
  // Slug from frontmatter or filename
  const slug = data.slug || filePath.split('/').pop()?.replace(/\.md$/, '') || '';
  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    category: data.category || '',
    readTime: data.readTime || '',
    featured: !!data.featured,
    content: processedContent,
  };
}

export function getAllPosts(): BlogPost[] {
  const posts: BlogPost[] = [];
  for (const filePath in postFiles) {
    const raw = postFiles[filePath] as string;
    posts.push(parseFrontmatter(raw, filePath));
  }
  // Sort by date (latest first)
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
} 