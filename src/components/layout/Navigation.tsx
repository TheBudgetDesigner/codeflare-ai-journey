import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Code2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Journey', path: '/journey' },
    { name: 'Blog', path: '/blog' },
    { name: 'Flop Zone', path: '/flop-zone' },
    { name: 'Subscribe', path: '/subscribe' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Code2 className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
              <Zap className="h-4 w-4 text-accent absolute -top-1 -right-1 animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold gradient-text">CodeFlare</span>
              <span className="text-sm text-muted-foreground ml-2">by Rayan</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-accent'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="cta" size="sm" asChild>
              <Link to="/subscribe">Start Learning</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive(item.path)
                    ? 'text-accent bg-accent/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <Button variant="cta" className="w-full" asChild>
                <Link to="/subscribe" onClick={() => setIsOpen(false)}>
                  Start Learning
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;