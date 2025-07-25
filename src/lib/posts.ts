import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PostMetadata {
  title: string;
  date: string;
  category: string;
  readTime: string;
  featured?: boolean;
  excerpt?: string;
  slug: string;
  content: string;
}

const postsDirectory = path.join(import.meta.env.BASE_URL, 'src/content/blog');

export async function getSortedPostsData(): Promise<PostMetadata[]> {
  try {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = await Promise.all(
      fileNames
        .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
        .map(async (fileName) => {
          // Remove ".md" or ".mdx" from file name to get id
          const slug = fileName.replace(/\.mdx?$/, '');
          return await getPostData(slug);
        })
    );

    // Sort posts by date
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error('Error getting sorted posts:', error);
    return [];
  }
}

export function getAllPostSlugs() {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    
    return fileNames
      .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
      .map((fileName) => {
        return {
          params: {
            slug: fileName.replace(/\.mdx?$/, ''),
          },
        };
      });
  } catch (error) {
    console.error('Error getting post slugs:', error);
    return [];
  }
}

export async function getPostData(slug: string): Promise<PostMetadata> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the slug and content
    return {
      slug,
      content: matterResult.content,
      ...(matterResult.data as Omit<PostMetadata, 'slug' | 'content'>),
    };
  } catch (error) {
    console.error(`Error getting post data for slug ${slug}:`, error);
    throw error;
  }
}
