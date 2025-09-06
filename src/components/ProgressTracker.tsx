import { Trophy, Target, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProgressTrackerProps {
  completedDays?: number;
  totalDays?: number;
}

const ProgressTracker = ({ completedDays = 0, totalDays = 28 }: ProgressTrackerProps) => {
  const progressPercentage = (completedDays / totalDays) * 100;
  const remainingDays = totalDays - completedDays;

  return (
    <section className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {/* Progress Card */}
        <Card className="bg-card/50 backdrop-blur border-border/50">
          <CardContent className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 gradient-primary rounded-full">
                <Trophy className="w-6 h-6 text-foreground" />
              </div>
            </div>
            <h4 className="font-bold text-lg mb-2">Progress</h4>
            <div className="relative mb-3">
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className="gradient-primary h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
            <p className="text-2xl font-bold text-primary">
              {completedDays}/{totalDays}
            </p>
            <p className="text-sm text-muted-foreground">Days Completed</p>
          </CardContent>
        </Card>

        {/* Current Streak */}
        <Card className="bg-card/50 backdrop-blur border-border/50">
          <CardContent className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 gradient-accent rounded-full">
                <Target className="w-6 h-6 text-foreground" />
              </div>
            </div>
            <h4 className="font-bold text-lg mb-2">Current Streak</h4>
            <p className="text-2xl font-bold text-ai-orange">
              {completedDays}
            </p>
            <p className="text-sm text-muted-foreground">Days in a Row</p>
          </CardContent>
        </Card>

        {/* Days Remaining */}
        <Card className="bg-card/50 backdrop-blur border-border/50">
          <CardContent className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 gradient-secondary rounded-full">
                <Calendar className="w-6 h-6 text-foreground" />
              </div>
            </div>
            <h4 className="font-bold text-lg mb-2">Remaining</h4>
            <p className="text-2xl font-bold text-ai-teal">
              {remainingDays}
            </p>
            <p className="text-sm text-muted-foreground">Days to Go</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProgressTracker;