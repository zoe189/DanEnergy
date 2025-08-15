import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CourseGrid from "@/components/CourseGrid";
import CodePlayground from "@/components/CodePlayground";
import ProgressSection from "@/components/ProgressSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CourseGrid />
      <CodePlayground />
      <ProgressSection />
      <Footer />
    </div>
  );
};

export default Index;
