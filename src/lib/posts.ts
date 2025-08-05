// This file is not compatible with browser environment
// Removing Node.js specific imports and functions

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

// Note: This file contained Node.js specific code that doesn't work in the browser.
// The blog functionality is now handled by src/lib/blog.ts which uses Vite's import.meta.glob
// This file is kept for type definitions but the functions have been removed.
