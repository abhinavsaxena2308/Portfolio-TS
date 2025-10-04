import { Code2, Smartphone, Brain, MessageSquare, Sparkles, Zap, Globe, Database, GitBranch } from "lucide-react";
import { useEffect, useState } from "react";

const AnimatedSkills = () => {
  const skills = [
    { icon: Code2, name: "React", delay: 0 },
    { icon: Globe, name: "Web", delay: 1 },
    { icon: Smartphone, name: "Mobile", delay: 2 },
    { icon: Brain, name: "ML", delay: 3 },
    { icon: MessageSquare, name: "NLP", delay: 4 },
    { icon: Sparkles, name: "AI", delay: 5 },
    { icon: Database, name: "DB", delay: 6 },
    { icon: GitBranch, name: "Git", delay: 7 },
    { icon: Zap, name: "API", delay: 8 },
  ];

  const [particles, setParticles] = useState<Array<{
    id: number;
    skill: typeof skills[0];
    x: number;
    y: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const newParticles = skills.map((skill, index) => ({
      id: index,
      skill,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 20 + Math.random() * 20,
      delay: skill.delay * 0.5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
      {particles.map((particle) => {
        const Icon = particle.skill.icon;
        return (
          <div
            key={particle.id}
            className="absolute animate-float-skill"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
              <Icon className="w-8 h-8 text-primary/60 relative z-10" />
            </div>
          </div>
        );
      })}
      
      {/* Additional particle effects */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }} />
    </div>
  );
};

export default AnimatedSkills;
