import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Frontend Engineer",
    company: "Acme Studios",
    dates: "Jan 2024 — Present",
    description:
      "Building modern, accessible web applications with React, TypeScript and Tailwind. Focused on performance and delightful UX.",
    tech: ["React", "TypeScript", "Vite", "Tailwind"],
  },
  {
    role: "Full Stack Developer",
    company: "BakerTech",
    dates: "Aug 2022 — Dec 2023",
    description:
      "Worked across frontend and backend to deliver e-commerce features, payments and analytics using Node and MongoDB.",
    tech: ["Node.js", "Express", "MongoDB", "Stripe"],
  },
  {
    role: "AI/ML Intern",
    company: "NeuroLabs",
    dates: "May 2021 — Jul 2022",
    description:
      "Developed prototypes for image classification and NLP tasks; integrated models into web demos.",
    tech: ["Python", "TensorFlow", "PyTorch"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Roles and projects where I shipped product features, improved performance, and learned a lot.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />

          {experiences.map((item, idx) => (
            <div
              key={`${item.company}-${idx}`}
              className="relative flex flex-col md:flex-row gap-8 mb-12 group animate-fade-in"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Timeline dot and icon */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>
              </div>

              {/* Content sections with alternating layout */}
              <div className={`flex-1 ml-16 md:ml-0 ${
                idx % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'
              }`}>
                <div className={`flex items-center gap-2 mb-1 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  <h3 className="font-semibold text-xl text-foreground">{item.role}</h3>
                </div>
                
                <div className={`flex items-center gap-2 text-primary mb-2 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse md:justify-start' : ''
                }`}>
                  <span className="font-medium">{item.company}</span>
                  <span className="text-muted-foreground text-sm flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {item.dates}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4">{item.description}</p>

                <div className={`flex flex-wrap gap-2 ${
                  idx % 2 === 0 ? 'md:justify-end' : ''
                }`}>
                  {item.tech.map((t) => (
                    <Badge 
                      key={t} 
                      className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
