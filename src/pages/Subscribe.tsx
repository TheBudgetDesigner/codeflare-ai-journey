import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Mail, Zap, BookOpen, TrendingUp, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate subscription (replace with real newsletter service integration)
    setTimeout(() => {
      setIsSubscribed(true);
      toast({
        title: "Welcome to CodeFlare! 🎉",
        description: "You'll receive your first coding tip within 24 hours.",
      });
    }, 1000);
  };

  const benefits = [
    {
      icon: Zap,
      title: "Weekly Coding Tips",
      description: "Practical tips that actually work, tested by a 12-year-old coder.",
    },
    {
      icon: BookOpen,
      title: "Exclusive Stories",
      description: "Behind-the-scenes stories from my coding projects and failures.",
    },
    {
      icon: TrendingUp,
      title: "AI Development Insights",
      description: "How to leverage AI tools to become a better, faster coder.",
    },
    {
      icon: Users,
      title: "Community Access",
      description: "Join a community of beginner coders supporting each other.",
    },
  ];

  if (isSubscribed) {
    return (
      <Layout>
        <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-4">
                Welcome to the <span className="gradient-text">CodeFlare</span> Community! 🎉
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                You're now part of a community of aspiring coders. Check your inbox for a welcome message!
              </p>
              <div className="space-y-4 text-left bg-muted/30 rounded-lg p-6">
                <h3 className="font-semibold text-lg">What happens next?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✅ Welcome email with exclusive resources (within 5 minutes)</li>
                  <li>✅ Your first coding tip (within 24 hours)</li>
                  <li>✅ Weekly newsletter every Wednesday</li>
                  <li>✅ Access to subscriber-only content</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Join the <span className="gradient-text">CodeFlare</span> Newsletter
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get weekly coding tips, AI insights, and motivational stories delivered straight to your inbox. 
              No spam, just practical advice from one beginner to another.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="card-enhanced">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <Mail className="h-6 w-6 text-accent" />
                      <CardTitle className="text-2xl">Start Learning Today</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Join 1,000+ beginners who are learning to code with AI assistance. 
                      Get practical tips that you can apply immediately.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="h-12 text-base"
                          required
                        />
                      </div>
                      <Button 
                        type="submit" 
                        variant="hero" 
                        size="hero" 
                        className="w-full"
                      >
                        Subscribe to CodeFlare
                      </Button>
                    </form>
                    <p className="text-xs text-muted-foreground mt-4 text-center">
                      No spam, ever. Unsubscribe at any time. I respect your inbox as much as you do.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="card-enhanced">
                  <CardHeader>
                    <CardTitle className="text-lg">📊 Newsletter Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subscribers</span>
                      <span className="font-semibold">1,247</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Open Rate</span>
                      <span className="font-semibold text-green-500">94%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Frequency</span>
                      <span className="font-semibold">Weekly</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="card-enhanced">
                  <CardHeader>
                    <CardTitle className="text-lg">💬 What Readers Say</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-sm text-muted-foreground italic">
                      "Rayan's tips helped me finally understand React hooks. 
                      The way he explains complex concepts is amazing!"
                    </blockquote>
                    <p className="text-xs text-muted-foreground mt-2">- Sarah, 16, Student</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              What You'll Get
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="card-enhanced text-center h-full">
                    <CardHeader>
                      <div className="p-3 bg-accent/10 rounded-lg w-fit mx-auto mb-3">
                        <benefit.icon className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Subscribe;