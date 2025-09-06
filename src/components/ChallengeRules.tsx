import { Clock, Target, Zap, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ChallengeRules = () => {
  const rules = [
    {
      icon: Target,
      title: "Stop scrolling",
      description: "Focus on one AI tool per day. No distractions, just learning."
    },
    {
      icon: Clock,
      title: "Take a 1-min quiz",
      description: "Test your understanding before diving into each tool."
    },
    {
      icon: Zap,
      title: "Spend 15 minutes a day",
      description: "Just 15 minutes of focused practice with each AI tool."
    },
    {
      icon: CheckCircle,
      title: "Mark completion",
      description: "Track your progress and build momentum every single day."
    }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Challenge Rules</h3>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Simple rules for maximum impact. Follow these guidelines to get the most out of your AI learning journey.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {rules.map((rule, index) => {
          const Icon = rule.icon;
          const colors = [
            "gradient-primary",
            "gradient-accent", 
            "gradient-secondary",
            "bg-ai-purple"
          ];
          
          return (
            <Card key={index} className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className={`p-4 ${colors[index]} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-foreground" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold">
                  {index + 1}. {rule.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {rule.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-card/30 backdrop-blur border border-border/50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Ready to Transform Your AI Skills?
          </h4>
          <p className="text-muted-foreground text-lg mb-6">
            Join thousands of professionals who have already mastered AI tools. Start your journey today and see real results in just 28 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-ai-green">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">No prior experience needed</span>
            </div>
            <div className="flex items-center gap-2 text-ai-blue">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">15 minutes per day</span>
            </div>
            <div className="flex items-center gap-2 text-ai-purple">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Real-world applications</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeRules;