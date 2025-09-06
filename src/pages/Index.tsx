import { Helmet } from "react-helmet";
import ChallengeHero from "@/components/ChallengeHero";
import ChallengeGrid from "@/components/ChallengeGrid";
import ChallengeRules from "@/components/ChallengeRules";
import ProgressTracker from "@/components/ProgressTracker";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>28-Day AI Mastery Challenge - Transform Your Skills</title>
        <meta name="description" content="Join the 28-day AI mastery challenge designed for 40+ professionals. Master AI tools like ChatGPT, Canva, Copy.ai and more with daily focused learning." />
      </Helmet>
      
      <div className="min-h-screen gradient-bg">
        <main className="container mx-auto px-4 py-8">
          <ChallengeHero />
          <ProgressTracker />
          <ChallengeGrid />
          <ChallengeRules />
        </main>
      </div>
    </>
  );
};

export default Index;