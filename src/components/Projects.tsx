import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const categories = ["All", "Web Dev", "App Dev", "LLM"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="animate-slide-in-right h-full"
              style={{
                animationDelay: `${index * 0.08}s`,
                animationFillMode: "backwards",
              }}
            >
              <div
                className="relative h-full cursor-pointer"
                onMouseEnter={() => setExpandedProject(project.title)}
                onMouseLeave={() => setExpandedProject(null)}
              >
                <Card className="group relative overflow-hidden bg-gradient-to-br from-card to-card/50 border-border/50 h-40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                  <img
                    src={project.banner}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-between p-4">
                    <Badge className="bg-primary/90 text-primary-foreground text-xs font-semibold w-fit">
                      {project.category}
                    </Badge>
                    <h3 className="text-sm font-bold text-white line-clamp-2">
                      {project.title}
                    </h3>
                  </div>
                </Card>

                {expandedProject === project.title && (
                  <div className="absolute inset-0 z-50 animate-fade-in">
                    <Card className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 bg-gradient-to-br from-card to-card/50 border-border/50 shadow-2xl shadow-primary/30 overflow-hidden">
                      <div className="relative">
                        <img
                          src={project.banner}
                          alt={project.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                          {project.category}
                        </Badge>
                      </div>

                      <div className="p-6 space-y-4">
                        <h3 className="text-lg font-bold text-foreground">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-secondary/60 text-xs rounded-full font-medium border border-border/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-2 pt-4 border-t border-border/30">
                          {project.link && (
                            <Button
                              size="sm"
                              className="flex-1 text-xs bg-primary hover:bg-primary/90"
                              onClick={() => window.open(project.link, "_blank")}
                            >
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Visit
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 text-xs border-primary/30 hover:bg-primary/10"
                            onClick={() => window.open(project.github, "_blank")}
                          >
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
