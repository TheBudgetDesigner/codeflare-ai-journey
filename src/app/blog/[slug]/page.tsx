import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostData, getSortedPostsData } from '@/lib/posts';
import { MarkdownRenderer } from '@/components/blog/MarkdownRenderer';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<{
    title: string;
    date: string;
    category: string;
    readTime: string;
    excerpt?: string;
    content: string;
    slug: string;
    featured?: boolean;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        const postData = await getPostData(slug);
        setPost(postData);
      } catch (error) {
        console.error('Error loading post:', error);
        navigate('/404');
      } finally {
        setLoading(false);
      }
    };
    
    loadPost();
  }, [slug, navigate]);

  if (loading) {
    return <div className="container py-12 text-center">Loading...</div>;
  }

  if (!post) {
    return <div className="container py-12 text-center">Post not found</div>;
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
