import { useState } from "react";
import DayCard from "./DayCard";
import { challengeData } from "@/data/challengeData";

const ChallengeGrid = () => {
  const [completedDays, setCompletedDays] = useState<Set<number>>(new Set());

  const toggleDay = (day: number) => {
    const newCompletedDays = new Set(completedDays);
    if (newCompletedDays.has(day)) {
      newCompletedDays.delete(day);
    } else {
      newCompletedDays.add(day);
    }
    setCompletedDays(newCompletedDays);
  };

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Your AI Journey</h3>
        <p className="text-muted-foreground text-lg">
          Click each day to mark your progress through the challenge
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-6xl mx-auto">
        {challengeData.map((challenge) => (
          <DayCard
            key={challenge.day}
            day={challenge.day}
            toolName={challenge.toolName}
            toolIcon={challenge.toolIcon}
            color={challenge.color}
            description={challenge.description}
            isCompleted={completedDays.has(challenge.day)}
            onToggle={() => toggleDay(challenge.day)}
          />
        ))}
      </div>
    </section>
  );
};

export default ChallengeGrid;