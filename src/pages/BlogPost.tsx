import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { getPostBySlug, BlogPost as BlogPostType } from '@/lib/blog';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import 'highlight.js/styles/github-dark.css';

// Helper to remove the first heading tag from HTML
function stripFirstHeading(html: string) {
  return html.replace(/^<h[1-6][^>]*>.*?<\/h[1-6]>/i, '');
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) {
        setError('No post specified');
        setLoading(false);
        return;
      }

      try {
        const postData = await getPostBySlug(slug);
        if (!postData) {
          setError('Post not found');
          navigate('/404');
          return;
        }
        setPost(postData);
      } catch (err) {
        console.error('Error loading post:', err);
        setError('Failed to load post');
        navigate('/404');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug, navigate]);

  if (loading) {
    return (
        <Layout>
          <div className="pt-20 text-center text-2xl">Loading post...</div>
        </Layout>
    );
  }

  if (error || !post) {
    return (
        <Layout>
          <div className="pt-20 text-center text-2xl text-red-500">
            {error || 'Post not found'}
          </div>
        </Layout>
    );
  }

  return (
      <Layout>
        <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button
                variant="ghost"
                onClick={() => navigate(-1)}
                className="mb-10 -ml-3 flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Blog
            </Button>

            <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
              <header className="mb-16">
                <div className="flex items-center space-x-6 text-lg text-muted-foreground mb-8">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>{post.readTime}</span>
                  </div>
                  <Badge variant="outline" className="text-base px-3 py-1">{post.category}</Badge>
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold mb-8">
                  {post.title}
                </h1>
                <div className="flex flex-wrap gap-3 mt-6">
                  {post.tags?.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-base px-3 py-1">
                        {tag}
                      </Badge>
                  ))}
                </div>
              </header>

              <div
                  className="prose dark:prose-invert prose-2xl max-w-none text-[1.5rem]"
                  dangerouslySetInnerHTML={{ __html: stripFirstHeading(post.content) }}
              />

              <footer className="mt-20 pt-10 border-t border-border">
                <div className="flex justify-between items-center">
                  <Button
                      variant="outline"
                      onClick={() => navigate(-1)}
                      className="flex items-center gap-3 text-lg"
                  >
                    <ArrowLeft className="h-5 w-5" />
                    Back to Blog
                  </Button>
                  <div className="text-lg text-muted-foreground">
                    Thanks for reading!
                  </div>
                </div>
              </footer>
            </motion.article>
          </div>
        </div>
      </Layout>
  );
};

export default BlogPost;