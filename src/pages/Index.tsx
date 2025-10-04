import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AnimatedSkills from "@/components/AnimatedSkills";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedSkills />
      <Header />
      <Hero />
      <About />
      <Projects />
      {/* <Certifications /> */}
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
