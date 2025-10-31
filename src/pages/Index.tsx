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
      {/* Fixed light rays that stay visible while scrolling */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <LightRays
          raysOrigin="top-center"
          raysColor="#f05a9a"
          raysSpeed={1.5}
          lightSpread={0.9}
          rayLength={1.8}
          followMouse={true}
          mouseInfluence={0.2}
          noiseAmount={0.1}
          distortion={0.05}
          className="opacity-80 blur-sm"
        />
      </div>
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
