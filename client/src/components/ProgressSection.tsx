import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Target, Code, Zap, Award } from "lucide-react";

const ProgressSection = () => {
  const achievements = [
    { icon: Code, title: "First Code", description: "Completed your first lesson", earned: true },
    { icon: Target, title: "Goal Setter", description: "Set your learning goals", earned: true },
    { icon: Zap, title: "Speed Learner", description: "Completed 5 lessons in one day", earned: true },
    { icon: Star, title: "Rising Star", description: "Earned 3 perfect scores", earned: false },
    { icon: Trophy, title: "Course Master", description: "Completed your first course", earned: false },
    { icon: Award, title: "Coding Champion", description: "Completed 10 courses", earned: false }
  ];

  const courses = [
    { name: "Scratch Programming", progress: 100, completed: true },
    { name: "HTML & CSS Basics", progress: 85, completed: false },
    { name: "JavaScript Adventures", progress: 45, completed: false },
    { name: "Python Programming", progress: 0, completed: false }
  ];

  return (
    <section id="progress" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your Learning
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Progress
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your coding journey, celebrate achievements, and see how far you've come!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Stats Overview */}
          <Card className="p-6 bg-gradient-card border-border shadow-card animate-scale-in">
            <h3 className="text-xl font-bold text-foreground mb-6">Overall Stats</h3>
            
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">342</div>
                <div className="text-muted-foreground">Lessons Completed</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">15</div>
                <div className="text-muted-foreground">Hours of Coding</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">7</div>
                <div className="text-muted-foreground">Day Streak</div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-success/10 rounded-lg border border-success/20">
              <div className="flex items-center gap-2 text-success">
                <Trophy className="h-5 w-5" />
                <span className="font-medium">Level 5 Coder!</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Keep going to reach Level 6!
              </p>
            </div>
          </Card>

          {/* Course Progress */}
          <Card className="p-6 bg-gradient-card border-border shadow-card animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-bold text-foreground mb-6">Course Progress</h3>
            
            <div className="space-y-6">
              {courses.map((course, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground text-sm">{course.name}</span>
                    {course.completed && (
                      <Badge variant="secondary" className="bg-success text-white">
                        Complete
                      </Badge>
                    )}
                  </div>
                  <Progress 
                    value={course.progress} 
                    className="h-2"
                  />
                  <div className="text-right text-sm text-muted-foreground">
                    {course.progress}%
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-info/10 rounded-lg border border-info/20">
              <div className="text-sm text-muted-foreground">
                <strong className="text-foreground">Next milestone:</strong> Complete HTML & CSS Basics to unlock JavaScript Adventures!
              </div>
            </div>
          </Card>

          {/* Achievements */}
          <Card className="p-6 bg-gradient-card border-border shadow-card animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold text-foreground mb-6">Achievements</h3>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div 
                    key={index}
                    className={`flex items-start gap-3 p-3 rounded-lg border transition-all ${
                      achievement.earned 
                        ? 'bg-primary/10 border-primary/20' 
                        : 'bg-muted/30 border-border opacity-60'
                    }`}
                  >
                    <div className={`p-2 rounded-full ${
                      achievement.earned ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-medium ${
                        achievement.earned ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                    {achievement.earned && (
                      <Trophy className="h-5 w-5 text-warning" />
                    )}
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;