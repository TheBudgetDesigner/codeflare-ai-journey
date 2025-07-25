import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to My Blog</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Discover my latest articles and thoughts on technology, AI, and more.
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          View All Posts
        </Link>
      </div>
    </div>
  );
}
