import { Button } from "@/components/ui/button";
import { Code, Menu, User } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gradient-primary rounded-lg animate-glow">
            <Code className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            CodeCamp
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#courses" className="text-foreground hover:text-primary transition-colors">
            Courses
          </a>
          <a href="#playground" className="text-foreground hover:text-primary transition-colors">
            Playground
          </a>
          <a href="#progress" className="text-foreground hover:text-primary transition-colors">
            Progress
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <User className="h-4 w-4" />
            Login
          </Button>
          <Button variant="hero" size="sm">
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;