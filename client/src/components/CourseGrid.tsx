import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Star, Users, ArrowRight } from "lucide-react";
import languagesImage from "@/assets/coding-languages.jpg";

const courses = [
  {
    id: 1,
    title: "Scratch Programming",
    description: "Perfect for beginners! Learn programming basics with visual blocks and create fun animations.",
    age: "6-12 years",
    duration: "4 weeks",
    lessons: 20,
    students: 15420,
    rating: 4.9,
    color: "bg-accent",
    level: "Beginner"
  },
  {
    id: 2,
    title: "Web Development with HTML & CSS",
    description: "Build your first websites! Learn HTML structure and CSS styling to create beautiful web pages.",
    age: "10-16 years", 
    duration: "6 weeks",
    lessons: 35,
    students: 12890,
    rating: 4.8,
    color: "bg-info",
    level: "Beginner"
  },
  {
    id: 3,
    title: "JavaScript Adventures",
    description: "Make websites interactive! Learn JavaScript programming and create games and interactive features.",
    age: "12-18 years",
    duration: "8 weeks", 
    lessons: 45,
    students: 9560,
    rating: 4.9,
    color: "bg-secondary",
    level: "Intermediate"
  },
  {
    id: 4,
    title: "Python Programming",
    description: "Code with one of the world's most popular languages! Perfect for beginners and future data scientists.",
    age: "13-18 years",
    duration: "10 weeks",
    lessons: 50,
    students: 8920,
    rating: 4.8,
    color: "bg-primary",
    level: "Intermediate"
  },
  {
    id: 5,
    title: "Mobile App Development",
    description: "Create your own mobile apps! Learn to build apps that run on phones and tablets.",
    age: "14-18 years",
    duration: "12 weeks",
    lessons: 60,
    students: 5430,
    rating: 4.7,
    color: "bg-warning",
    level: "Advanced"
  },
  {
    id: 6,
    title: "Game Development",
    description: "Build your own video games! Learn game design principles and create 2D games from scratch.",
    age: "12-18 years",
    duration: "10 weeks",
    lessons: 40,
    students: 7890,
    rating: 4.9,
    color: "bg-destructive",
    level: "Intermediate"
  }
];

const CourseGrid = () => {
  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Coding Journey
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From visual programming to advanced development, we have courses designed for every age and skill level.
          </p>
          
          {/* Course Languages Visual */}
          <div className="mt-8 max-w-md mx-auto">
            <img 
              src={languagesImage} 
              alt="Programming languages" 
              className="w-full h-40 object-cover rounded-xl shadow-card"
            />
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={course.id} 
              className="group p-6 bg-gradient-card border-border hover:shadow-glow transition-all duration-500 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Course Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`${course.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {course.level}
                </div>
                <div className="flex items-center gap-1 text-warning">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="font-medium">{course.rating}</span>
                </div>
              </div>

              {/* Course Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {course.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {course.description}
              </p>

              {/* Course Meta */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Age: {course.age}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{course.lessons} Lessons</span>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.students.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button className="w-full group/btn" variant="default">
                Start Course
                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        {/* View All Courses */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Courses
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;