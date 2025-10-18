import { useState, useEffect } from "react";
import { Github, Linkedin, Instagram, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import LightRays from "./LightRays";

const Hero = () => {
  const roles = [
    "Web Development",
    "App Development",
    "ML Engineering",
    "NLP Implementation",
    "LLM Implementation",
  ];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      <div className="absolute inset-0 z-0">
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
          className="opacity-60 blur-sm"
        />
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* 🔹 Hero Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Hi, I'm </span>
            <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
              Abhinav
            </span>
          </h1>

          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground">
              Passionate about{" "}
              <span className="text-primary font-semibold transition-all duration-500 inline-block">
                {roles[currentRole]}
              </span>
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Turning ideas into elegant solutions with code. Exploring the
            intersection of creativity and technology.
          </p>

          {/* 🔹 Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 hover:scale-105 transition-all"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Get In Touch
            </Button>
          </div>

          {/* 🔹 Social Icons */}
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/abhinavsaxena2308"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhinav-saxena-6379a3290/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/abhiiiii_2308/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Instagram size={24} />
            </a>
            <a
              href="mailto:abhinav.2025@iic.ac.in?subject=Hello%20Abhinav&body=I%20want%20to%20contact%20you%20regarding..."
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Scroll Down Icon */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
