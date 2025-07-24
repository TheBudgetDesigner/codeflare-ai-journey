import { motion } from 'framer-motion';
import { Brain, Hammer, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const WhatYoullLearn = () => {
  const learningCards = [
    {
      icon: Brain,
      emoji: "🤖",
      title: "AI Coding",
      description: "Master modern AI tools like ChatGPT, GitHub Copilot, and Claude to supercharge your development workflow.",
      color: "text-primary"
    },
    {
      icon: Hammer,
      emoji: "🔨", 
      title: "Project Building",
      description: "Build real projects from scratch - from simple calculators to complex SaaS applications that users love.",
      color: "text-accent"
    },
    {
      icon: TrendingDown,
      emoji: "💥",
      title: "Failing Like a Pro", 
      description: "Learn how to fail fast, debug smart, and turn epic coding disasters into valuable learning experiences.",
      color: "text-primary-glow"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What You'll{' '}
            <span className="gradient-text">Learn</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three essential skills that transformed me from a coding newbie to an AI-powered developer
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {learningCards.map((card, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group"
            >
              <Card className="glass-card hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <div className={`p-4 rounded-2xl bg-muted/50 ${card.color} group-hover:scale-110 transition-transform duration-300`}>
                        <card.icon className="h-8 w-8 icon-float" />
                      </div>
                      <div className="absolute -top-2 -right-2 text-2xl">
                        {card.emoji}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {card.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;