import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AnimatedSkills from "@/components/AnimatedSkills";
import LightRays from "@/components/LightRays";

const Index = () => {
  return (
    <div className="min-h-screen relative bg-background text-foreground overflow-hidden">
      <Header />
      <Hero />
      <AnimatedSkills />
      <About />
  <Experience />
      <Projects />
      {/* <Certifications /> */}
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
