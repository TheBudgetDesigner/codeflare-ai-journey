import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSortedPostsData, PostMetadata } from '@/lib/posts';

export default function BlogPage() {
  const [posts, setPosts] = useState<PostMetadata[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const allPosts = await getSortedPostsData();
        setPosts(allPosts);
      } catch (error) {
        console.error('Error loading posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-12">Blog</h1>
        <div className="text-center">Loading posts...</div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-12">Blog</h1>
      
      {posts.length === 0 ? (
        <div className="text-center">No blog posts found.</div>
      ) : (
        <div className="grid gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border-b pb-8 last:border-b-0 last:pb-0"
            >
              <Link to={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-bold hover:text-primary transition-colors">
                  {post.title}
                </h2>
              </Link>
              
              <div className="flex items-center text-sm text-muted-foreground mt-2 mb-4">
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
                <span className="text-primary">{post.category}</span>
              </div>
              
              {post.excerpt && (
                <p className="text-muted-foreground">
                  {post.excerpt}
                </p>
              )}
              
              <Link 
                to={`/blog/${post.slug}`}
                className="inline-block mt-4 text-primary hover:underline"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
