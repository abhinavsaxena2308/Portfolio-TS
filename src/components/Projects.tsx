import { useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const categories = ["All", "Web Dev", "App Dev", "LLM"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects = [
    {
      title: "E-Com Platform for Instant Cakes",
      category: "Web Dev",
      banner: "./instantcake.png",
      description: "A full-stack e-commerce website for ordering cakes online. with real-time inventory management and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe","Firebase", "Vite", "Express.JS"],
      link: "https://instant-cake-ecom.vercel.app/",
      github: "https://github.com/abhinavsaxena2308/InstantCakeEcom---MERN-",
    },
    {
      title: "Task Flow : Organize and Manage your Tasks",
      category: "Web Dev",
      banner: "./taskflow.png",
      description: "TaskFlow is a modern, responsive task management application built with cutting-edge technologies.",
      tech: ["React", "GoLang", "Postgresql", "Supabase","React-Router", "Vite"],
      link: "https://to-do-master-beta.vercel.app/",
      github: "https://github.com/abhinavsaxena2308/TaskFlow",
    },
    {
      title: "E-Com Platform for Military Apparel and Gear",
      category: "Web Dev",
      banner: "./rohilla.png",
      description: "A full-stack e-commerce website for ordering military gears-with real-time inventory management and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe","Firebase", "Vite", "Express.JS"],
      link: "https://poc-rohilla.vercel.app/",
      github: "https://github.com/abhinavsaxena2308/POC-ROHILLA",
    },
    {
      title: "BudgetWise - Expense Tracker",
      category: "Web Dev",
      banner: "./budgetwise.png",
      description: "BudgetWise is a modern, responsive web application for personal budget management and expense tracking..",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Firebase", "Genkit", "Recharts"],
      link: "https://budget-wise-expense-tracker.vercel.app/",
      github: "https://github.com/abhinavsaxena2308/BudgetWise-ExpenseTracker",
    },
    {
      title: "Weather App",
      category: "App Dev",
      description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics.",
      tech: ["Flutter", "Firebase", "ML Kit"],
      link: "https://example.com",
      banner: "./weather.png",
      github: "https://github.com/abhinavsaxena2308/Weather-app",
    },
    {
      title: "AI Resume Builder",
      category: "Web Dev",
      banner: "./resume.png",
      description: "Resume Builder is a next-gen AI-powered resume generator that crafts professional summaries using the Google Generative Language API..",
      tech: ["ReactJS", "EJS", "Google GenAI"],
      link: "https://ai-resume-builder-six-kappa.vercel.app/",
      github: "https://github.com/abhinavsaxena2308/AI-Resume-Builder"
    },
    {
      title: "Text Vault",
      category: "Web Dev",
      banner: "./textvault.png",
      description: "A beautiful, modern web application for securely storing and managing your text notes using Firebase Realtime Database. Features a stunning neumorphic + glassmorphic design with dark/light mode support.",
      tech: ["HTML", "CSS", "JS", "Firebase"],
      link: "https://text-vault-01.vercel.app/",
      github: "https://github.com/abhinavsaxena2308/TextVault"
    },
    {
      title: "RamX - Python based Assistant",
      category: "LLM",
      banner:"./RamX.png",
      description: "RamX is designed to support studies, coding, and personal tasks while speaking naturally in both Hindi and English.",
      tech: ["OpenAI", "LangChain", "Python", "Mem0"],
      github: "https://github.com/abhinavsaxena2308/RamX---Python-AI-Assistant",
    },
    {
      title: "CodeGen - Component Creator",
      category: "LLM",
      banner:"./CodeGen.png",
      description: "CODEGEN: Transform natural language prompts into ready-to-use UI components instantly..",
      tech: ["OpenAI", "LangChain", "React"],
      link: "https://code-gen-component-creator.vercel.app/",
      github: "https://github.com/abhinavsaxena2308/CodeGen-ComponentCreator",
    },
    {
      title: "CodeWave - A simple code editor",
      category: "Web Dev",
      banner: "./code-wave.png",
      description: "CodeWave is a modern, web-based code editor that supports HTML, CSS, JavaScript, and Python. ",
      tech: ["HTML", "CSS", "JavaScript", "Python"],
      link: "https://code-wave-editor.netlify.app/",
      github: "https://github.com/abhinavsaxena2308/codewave-editor",
    },
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore my recent work across web, mobile, and AI domains
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-16 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "border border-primary/30 text-foreground hover:border-primary/60 hover:bg-primary/5"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="animate-slide-in-right"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "backwards",
              }}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card className="group relative h-full flex flex-col overflow-hidden bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">

                <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
                  <img
                    src={project.banner}
                    alt={`${project.title} banner`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-primary-foreground shadow-lg text-xs font-semibold">
                      {project.category}
                    </Badge>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      {project.link && (
                        <button
                          onClick={() => window.open(project.link, "_blank")}
                          className="p-2 bg-primary/90 hover:bg-primary text-primary-foreground rounded-full transition-all duration-300 shadow-lg"
                          aria-label="Visit project"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={() => window.open(project.github, "_blank")}
                        className="p-2 bg-primary/90 hover:bg-primary text-primary-foreground rounded-full transition-all duration-300 shadow-lg"
                        aria-label="View source code"
                      >
                        <Github className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex-1 p-6 flex flex-col space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex-1 flex flex-wrap gap-2 items-start content-start">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/60 hover:bg-secondary text-xs rounded-full font-medium border border-border/50 transition-all duration-300 whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-4 border-t border-border/30">
                    {project.link && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex-1 text-primary hover:bg-primary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        <span className="text-xs">Visit</span>
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 text-primary hover:bg-primary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-1" />
                      <span className="text-xs">Code</span>
                    </Button>
                  </div>
                </div>

                <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${hoveredProject === project.title ? "opacity-100" : "opacity-0"}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
