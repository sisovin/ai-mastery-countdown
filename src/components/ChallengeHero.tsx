import { Brain, Zap } from "lucide-react";

const ChallengeHero = () => {
  return (
    <section className="text-center py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 gradient-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 gradient-accent rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-card rounded-2xl border border-border shadow-2xl animate-glow">
            <Brain className="w-12 h-12 text-primary" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            AI IS HARD FOR YOU?
          </span>
        </h1>
        
        <div className="flex items-center justify-center gap-3 mb-8">
          <Zap className="w-6 h-6 text-ai-yellow animate-pulse" />
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-semibold">
            28-DAY CHALLENGE FOR 40+
          </h2>
          <Zap className="w-6 h-6 text-ai-yellow animate-pulse" />
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Master AI tools that matter. One tool per day, 15 minutes each. 
          <br className="hidden md:block" />
          Transform your workflow in just 28 days.
        </p>
      </div>
    </section>
  );
};

export default ChallengeHero;