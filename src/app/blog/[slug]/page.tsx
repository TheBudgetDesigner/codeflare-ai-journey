import { notFound } from 'next/navigation';
import { getPostData, getSortedPostsData } from '@/lib/posts';
import { MarkdownRenderer } from '@/components/blog/MarkdownRenderer';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;
  let post;
  
  try {
    post = await getPostData(slug);
  } catch (error) {
    console.error('Error loading post:', error);
    notFound();
  }

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-4xl py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <div className="flex items-center text-muted-foreground text-sm">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
          <span className="mx-2">•</span>
          <span className="inline-block px-2 py-1 text-xs rounded-full bg-muted">
            {post.category}
          </span>
        </div>
      </header>
      
      <div className="prose dark:prose-invert max-w-none">
        <MarkdownRenderer content={post.content || ''} />
      </div>
    </article>
  );
}
