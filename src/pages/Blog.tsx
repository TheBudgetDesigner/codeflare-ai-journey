import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllPosts, BlogPost } from '@/lib/blog';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  if (!posts.length) {
    return (
      <Layout>
        <div className="pt-20 text-center text-lg">Loading posts...</div>
      </Layout>
    );
  }

  const latestPost = posts[0];
  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <Layout>
      <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gradient-text">Blog</span> Posts
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories, honest experiences, and practical tips from my coding journey.
            </p>
            {latestPost && (
              <div className="mt-6">
                <span className="text-lg font-semibold text-accent">Latest Post:</span>{' '}
                <span className="text-lg font-bold">{latestPost.title}</span>
              </div>
            )}
          </motion.div>

          {/* Featured Post */}
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <Card className="card-enhanced overflow-hidden">
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-accent text-accent-foreground">Featured</Badge>
                  </div>
                  <div className="p-8 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <Badge variant="outline">{post.category}</Badge>
                      </div>
                      <CardTitle className="text-2xl sm:text-3xl mb-3 leading-tight">
                        {post.title}
                      </CardTitle>
                      {/* Optionally add excerpt/description here if you add it to frontmatter */}
                    </CardHeader>
                    <Link
                      to={`/posts/${post.slug}`}
                      className="inline-flex items-center text-accent hover:text-accent/80 font-medium group"
                    >
                      Read Full Story
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}

          {/* Regular Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className="card-enhanced hover:scale-105 transition-all duration-300 h-full">
                  <Link to={`/posts/${post.slug}`}>
                    <CardHeader>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span>•</span>
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                      <Badge variant="outline" className="w-fit mb-3">{post.category}</Badge>
                      <CardTitle className="text-lg leading-tight hover:text-accent transition-colors">
                        {post.title}
                      </CardTitle>
                      {/* Optionally add excerpt/description here if you add it to frontmatter */}
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-accent">
                        Read more
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-muted-foreground mb-4">
              Want to get notified when I publish new posts?
            </p>
            <Link
              to="/subscribe"
              className="inline-flex items-center px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover:scale-105 transition-transform"
            >
              Subscribe to Newsletter
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;