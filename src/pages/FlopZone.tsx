import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, TrendingDown, Lightbulb, RefreshCw } from 'lucide-react';

const FlopZone = () => {
  const flops = [
    {
      title: "The Calculator That Couldn't Calculate",
      description: "My ambitious attempt at building a 'smart' calculator that would solve any math problem.",
      lesson: "Don't try to reinvent complex systems. Start small, then expand.",
      impact: "Learned the importance of planning and understanding scope.",
      timeSpent: "2 months",
      severity: "Epic",
    },
    {
      title: "The Discord Bot That Crashed Every Server",
      description: "Built a bot with infinite loops that would spam messages until servers kicked it out.",
      lesson: "Always test your code before deploying. Rate limiting exists for a reason.",
      impact: "Got banned from 5 Discord servers, but learned about async programming.",
      timeSpent: "3 weeks",
      severity: "Catastrophic",
    },
    {
      title: "The Website That Only Worked on My Computer",
      description: "Proudly showed my website to friends, only to discover it only worked with my specific browser setup.",
      lesson: "Cross-browser testing isn't optional. Neither is responsive design.",
      impact: "Learned about web standards, browser compatibility, and user testing.",
      timeSpent: "1 month",
      severity: "Embarrassing",
    },
    {
      title: "The AI That Gave Random Answers",
      description: "Created an 'AI assistant' that gave completely random responses because I misunderstood how APIs work.",
      lesson: "Read the documentation. Then read it again. Then test with small examples.",
      impact: "Finally understood APIs, JSON, and proper error handling.",
      timeSpent: "2 weeks",
      severity: "Educational",
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Epic': return 'text-purple-400';
      case 'Catastrophic': return 'text-red-400';
      case 'Embarrassing': return 'text-yellow-400';
      case 'Educational': return 'text-green-400';
      default: return 'text-muted-foreground';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'Epic': return TrendingDown;
      case 'Catastrophic': return AlertTriangle;
      case 'Embarrassing': return RefreshCw;
      case 'Educational': return Lightbulb;
      default: return AlertTriangle;
    }
  };

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
            <div className="flex items-center justify-center space-x-3 mb-6">
              <AlertTriangle className="h-8 w-8 text-accent" />
              <h1 className="text-4xl sm:text-5xl font-bold">
                The <span className="text-accent">Flop Zone</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              My biggest coding disasters and the valuable lessons they taught me. 
              Because every failure is just a lesson in disguise.
            </p>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-sm text-accent font-medium">
                💡 Pro Tip: Failures are features, not bugs. They're how we level up!
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {flops.map((flop, index) => {
              const SeverityIcon = getSeverityIcon(flop.severity);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <Card className="card-enhanced h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <SeverityIcon className={`h-5 w-5 ${getSeverityColor(flop.severity)}`} />
                          <span className={`text-sm font-medium ${getSeverityColor(flop.severity)}`}>
                            {flop.severity} Flop
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                          {flop.timeSpent}
                        </span>
                      </div>
                      <CardTitle className="text-xl leading-tight">
                        {flop.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {flop.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-accent mb-2 flex items-center">
                          <Lightbulb className="h-4 w-4 mr-2" />
                          What I Learned
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {flop.lesson}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2 flex items-center">
                          <TrendingDown className="h-4 w-4 mr-2" />
                          The Impact
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {flop.impact}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <Card className="card-enhanced max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">
                  The <span className="gradient-text">Flop Philosophy</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-left">
                <p className="text-muted-foreground leading-relaxed">
                  Every failure taught me something valuable. Some taught me technical skills, 
                  others taught me about planning, testing, or user experience. But the most 
                  important thing they taught me was resilience.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  In coding, you'll fail a lot. Your code won't work, your logic will be flawed, 
                  your ambitious projects will crash and burn. That's not a sign you're bad at 
                  coding - that's a sign you're learning.
                </p>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-6">
                  <p className="text-primary font-medium text-center">
                    "I have not failed. I've just found 10,000 ways that won't work." - Thomas Edison
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default FlopZone;