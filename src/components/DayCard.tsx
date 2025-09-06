import { Check, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface DayCardProps {
  day: number;
  toolName: string;
  toolIcon: LucideIcon;
  color: string;
  description: string;
  isCompleted: boolean;
  onToggle: () => void;
}

const DayCard = ({ 
  day, 
  toolName, 
  toolIcon: Icon, 
  color, 
  description, 
  isCompleted, 
  onToggle 
}: DayCardProps) => {
  return (
    <div className="group">
      {/* Day Circle */}
      <div 
        className={cn(
          "relative w-20 h-20 mx-auto mb-3 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-110",
          "flex items-center justify-center shadow-lg border-2",
          isCompleted 
            ? "bg-primary border-primary shadow-primary/50" 
            : `${color} border-transparent hover:shadow-2xl`
        )}
        onClick={onToggle}
      >
        {isCompleted ? (
          <Check className="w-8 h-8 text-primary-foreground" />
        ) : (
          <Icon className="w-8 h-8 text-foreground" />
        )}
        
        {/* Pulse Ring Effect */}
        {!isCompleted && (
          <div className={cn(
            "absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 animate-pulse-ring",
            color.replace("bg-", "border-2 border-")
          )} />
        )}
      </div>

      {/* Day Label */}
      <div className="text-center">
        <p className="text-sm font-bold text-foreground mb-1">
          DAY {day}
        </p>
        <p className={cn(
          "text-xs font-medium transition-colors",
          isCompleted ? "text-primary" : "text-muted-foreground"
        )}>
          {toolName}
        </p>
      </div>

      {/* Hover Description */}
      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 mt-2">
        <div className="bg-card border border-border rounded-lg p-3 shadow-xl">
          <p className="text-xs text-muted-foreground text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DayCard;