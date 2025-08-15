import Hero from "@/components/Hero";
import CourseGrid from "@/components/CourseGrid";
import CodePlayground from "@/components/CodePlayground";
import ProgressSection from "@/components/ProgressSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <CourseGrid />
      <CodePlayground />
      <ProgressSection />
    </div>
  );
};

export default Index;
