import { Code2, Smartphone, Brain, MessageSquare, Sparkles, Zap, ZapOff, TowerControl } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const skills = [
    { icon: Code2, name: "Web Development", description: "HTML, CSS, Javascript, ReactJS, NextJS, NodeJS, ExpressJS, DaisyIU, TypeScript, Tailwind" },
    { icon: Smartphone, name: "App Development", description: "Flutter, React Native, Expo, Firebase, Kotlin" },
    { icon: Brain, name: "AI/Machine Learning", description: "TensorFlow, PyTorch,Python, NumPy, Pandas, Scikit-learn, TensorFlow, OpenAI, LangChain"},
    { icon: Sparkles, name: "Database & Backend", description: "MongoDB, Firebase Firestore, Mysql, REST API" },
    { icon: Zap, name: "LLM", description: "LangChain, LlamaIndex" },
    { icon: TowerControl, name: "Tools", description: "Git & GitHub, VS Code, Postman, Figma, Vercel, Netlify" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl blur-2xl" />
              <div className="relative bg-card rounded-2xl p-8 border border-border shadow-lg">
                <div className="w-full aspect-square bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-xl flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold">Hello! I'm a Developer</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about creating elegant, efficient solutions to complex problems. With hands-on experience in web 
              development, mobile applications, and advanced AI technologies, I thrive on turning ideas into impactful digital 
              experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
             Driven by curiosity and a constant desire to innovate, my journey in tech is about building things that matter 
             — from crafting intuitive user interfaces to training machine learning models and developing intelligent 
             systems powered by LLMs. I’m always eager to explore, learn, and push the boundaries of what technology 
             can do.
            </p>
            <div className="flex flex-wrap gap-3">
              {["React", "Python", "TypeScript", "Flutter", "AI/ML", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={skill.name}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
