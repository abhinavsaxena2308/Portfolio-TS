import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const categories = ["All", "Web Dev", "App Dev", "ML", "NLP", "LLM"];
  const [activeCategory, setActiveCategory] = useState("All");

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
      title: "BudgetWise - Expense Tracker",
      category: "Web Dev",
      banner: "./budgetwise.png",
      description: "BudgetWise is a modern, responsive web application for personal budget management and expense tracking..",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Firebase", "Genkit", "Recharts"],
      link: "https://budget-wise-expense-tracker.vercel.app/",
      github: "https://github.com/abhinavsaxena2308/BudgetWise-ExpenseTracker",
    },
    {
      title: "Fitness Tracker App",
      category: "App Dev",
      description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics.",
      tech: ["Flutter", "Firebase", "ML Kit"],
      link: "https://example.com",
      github: "https://github.com",
    },
    {
      title: "Image Classification Model",
      category: "ML",
      description: "Deep learning model for multi-class image classification with 95% accuracy.",
      tech: ["Python", "TensorFlow", "CNN"],
      link: "https://example.com",
      github: "https://github.com",
    },
    {
      title: "Sentiment Analysis Tool",
      category: "NLP",
      description: "Real-time sentiment analysis for social media posts and customer reviews.",
      tech: ["Python", "NLTK", "Transformers"],
      link: "https://example.com",
      github: "https://github.com",
    },
    {
      title: "AI Chatbot Assistant",
      category: "LLM",
      description: "Intelligent chatbot powered by GPT for customer support automation.",
      tech: ["OpenAI", "LangChain", "React"],
      link: "https://example.com",
      github: "https://github.com",
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
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work across different domains
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={
                activeCategory === category
                  ? "bg-gradient-to-r from-primary to-purple-500 hover:opacity-90"
                  : "border-primary/50 hover:bg-primary/10"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="group overflow-hidden bg-gradient-to-br from-card via-card to-card/50 border-border hover:border-primary transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/30 animate-slide-in-right backdrop-blur-sm"
              style={{
                animationDelay: `${index * 0.15}s`,
                animationFillMode: "backwards",
              }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/30 via-purple-500/20 to-primary/10 relative overflow-hidden">
                <img
                  src={project.banner}
                  alt={`${project.title} banner`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-primary to-purple-500 text-primary-foreground shadow-lg">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-xs rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/50 hover:bg-primary/10 "
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Website
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
