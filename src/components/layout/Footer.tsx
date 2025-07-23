import { Link } from 'react-router-dom';
import { Code2, Github, Twitter, Mail, Heart, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:rayan@codeflare.dev', label: 'Email' },
  ];

  const footerLinks = [
    {
      title: 'Content',
      links: [
        { name: 'Blog Posts', href: '/blog' },
        { name: 'My Journey', href: '/journey' },
        { name: 'Flop Zone', href: '/flop-zone' },
      ],
    },
    {
      title: 'Learning',
      links: [
        { name: 'Newsletter', href: '/subscribe' },
        { name: 'Tips & Tricks', href: '/blog' },
        { name: 'AI Coding', href: '/blog' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { name: 'About Me', href: '/journey' },
        { name: 'Contact', href: 'mailto:rayan@codeflare.dev' },
        { name: 'Collaborations', href: 'mailto:rayan@codeflare.dev' },
      ],
    },
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Code2 className="h-8 w-8 text-primary" />
                <Zap className="h-4 w-4 text-accent absolute -top-1 -right-1" />
              </div>
              <div>
                <span className="text-xl font-bold gradient-text">CodeFlare</span>
                <span className="text-sm text-muted-foreground ml-2">by Rayan</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Helping beginners learn to code, flop, and win with AI. 
              Join thousands of aspiring developers on their coding journey.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-accent transition-colors p-2 hover:bg-accent/10 rounded-lg"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} CodeFlare by Rayan. Built with{' '}
            <Heart className="inline h-4 w-4 text-red-500 mx-1" />
            and lots of coffee.
          </p>
          <p className="text-muted-foreground text-sm mt-2 sm:mt-0">
            Made for beginners, by a beginner who never stopped learning.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;