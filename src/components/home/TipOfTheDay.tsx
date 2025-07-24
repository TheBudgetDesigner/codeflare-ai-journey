import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TipOfTheDay = () => {
  const tips = [
    {
      title: "Start Small, Think Big",
      content: "Don't try to build the next Facebook on day one. Start with a simple calculator, then gradually add features. Every expert was once a beginner.",
      category: "Mindset"
    },
    {
      title: "Embrace the Console",
      content: "console.log() is your best friend. Print everything, understand the flow. Don't be ashamed of debugging with prints - even senior devs do it!",
      category: "Debugging"
    },
    {
      title: "Read Error Messages",
      content: "That red text isn't your enemy - it's trying to help! Read error messages carefully. They usually tell you exactly what's wrong and where.",
      category: "Problem Solving"
    },
    {
      title: "Code Every Day",
      content: "Even 15 minutes of coding daily beats 8 hours once a week. Consistency builds muscle memory and keeps concepts fresh in your mind.",
      category: "Habit Building"
    },
    {
      title: "Learn by Building",
      content: "Tutorials are great, but building your own projects is where real learning happens. Clone your favorite apps, then add your own twist.",
      category: "Learning"
    },
    {
      title: "AI is Your Coding Buddy",
      content: "Use AI tools like ChatGPT or GitHub Copilot to explain code, suggest improvements, or help debug. It's like having a senior dev beside you 24/7.",
      category: "AI Tools"
    },
    {
      title: "Version Control is Essential",
      content: "Learn Git early, even for small projects. Being able to revert changes and track your progress is a superpower for developers.",
      category: "Tools"
    },
    {
      title: "Google Like a Pro",
      content: "Learning to search effectively is a skill. Use specific error messages, add the language/framework name, and check Stack Overflow dates.",
      category: "Research"
    },
  ];

  const [currentTip, setCurrentTip] = useState(0);

  const getNewTip = () => {
    const newIndex = Math.floor(Math.random() * tips.length);
    setCurrentTip(newIndex);
  };

  useEffect(() => {
    // Set initial tip based on day of year for consistency
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
    setCurrentTip(dayOfYear % tips.length);
  }, []);

  const tip = tips[currentTip];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            💡 <span className="gradient-text">Tip of the Day</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Daily wisdom to fuel your coding journey
          </p>
        </motion.div>

        <motion.div
          key={currentTip}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="glass-card relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-5" />
            <CardHeader className="relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Lightbulb className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{tip.title}</CardTitle>
                    <span className="text-sm text-accent font-medium">{tip.category}</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={getNewTip}
                  className="hover:bg-accent/10"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <p className="text-muted-foreground leading-relaxed text-lg">
                {tip.content}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-sm text-muted-foreground">
            Want more daily tips?{' '}
            <Button variant="link" className="p-0 h-auto text-accent" asChild>
              <a href="/subscribe">Subscribe to our newsletter</a>
            </Button>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TipOfTheDay;