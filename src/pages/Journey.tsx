import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Calendar, Code2, Trophy, AlertTriangle } from 'lucide-react';

const Journey = () => {
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
              My <span className="gradient-text">Coding Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From complete beginner to AI developer - here's my entire story, the good, the bad, and the ugly.
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-enhanced p-8"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">2023 - The Beginning</h3>
                  <p className="text-muted-foreground">Age 10: First "Hello World"</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                It all started when I saw my older brother coding. I thought it was magic - typing words and making computers do things. 
                My first program took me 3 hours to write because I couldn't figure out why "print" wasn't working (I was using Java, not Python). 
                The moment I finally saw "Hello World" appear on the screen, I was hooked.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card-enhanced p-8"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">2024 - Epic Failures</h3>
                  <p className="text-muted-foreground">Age 11: Learning Through Disasters</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Attempted to build a "smart" calculator that could solve any math problem. Spent 2 months on it, 
                only to realize I was basically trying to reinvent Wolfram Alpha. The calculator couldn't even handle 
                negative numbers properly. But I learned about loops, conditionals, and most importantly - how to debug.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="card-enhanced p-8"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-primary-glow/10 rounded-lg">
                  <Code2 className="h-6 w-6 text-primary-glow" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">2024 - AI Discovery</h3>
                  <p className="text-muted-foreground">Age 12: First AI Bot</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Discovered ChatGPT and realized AI could help me code better. Built my first Discord bot that could 
                answer questions about coding. It was basically a wrapper around AI APIs, but seeing people actually 
                use it and find it helpful was incredible. This was my "aha" moment - AI isn't replacing programmers, 
                it's making us superhuman.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="card-enhanced p-8"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Trophy className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">2025 - CodeFlare</h3>
                  <p className="text-muted-foreground">Age 12: Teaching Others</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Started this blog to share what I've learned. My mission: help other kids and beginners realize that 
                coding isn't as scary as it seems. Every expert was once a beginner, and every beginner can become an expert 
                with the right guidance and a lot of practice (and failures).
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-muted-foreground mb-4">
              Want to follow my ongoing journey?
            </p>
            <motion.a
              href="/subscribe"
              className="inline-flex items-center px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe to Updates
            </motion.a>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Journey;