import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Frontend Developer",
    company: "SPIE - The Photonics Initiative",
    dates: "Feb 2023 - Jan 2025",
    description:
      "Build the SPIE website using NextJS, tailwindCSS, and Vercel to enhance user engagement and accessibility.",
    tech: ["NextJS", "MaterialUI", "Vite", "Tailwind"],
  },
  {
    role: "Technical Head Intern",
    company: "BookwithUVA",
    dates: "Feb 2023- Dec 2023",
    description:
      "Led the technical team to develop and maintain the BookwithUVA platform, improving user experience and increasing engagement by",
    tech: ["Inventory Management", "Web Development", "Team Management"]
  },
  {
    role: "Social Media Intern",
    company: "ANDC InStart Foundation",
    dates: "March 2024 - Aug 2024",
    description:
      "Managed and grew social media presence, creating content that increased engagement by 30%.",
    tech: ["Content Creation", "Social Media Management", "Analytics"],
  },
  {
    role: "UI/UX Designer & Social Media Manager",
    company: "Mind2Mind Classes",
    dates: "Nov 2024 - Present",
    description:
      "Managed design and social media strategies, boosting online presence and user engagement.",
    tech: ["UI/UX Design","Figma", "Social Media Management", "Adobe XD" ],
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

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-[50%] h-full w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />

          {experiences.map((item, idx) => (
            <div
              key={`${item.company}-${idx}`}
              className="relative flex flex-col md:grid md:grid-cols-2 gap-8 mb-16 group animate-fade-in"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Timeline dot and icon */}
              <div className="absolute left-4 md:left-[50%] w-8 h-8 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>
              </div>

              {/* Content sections with alternating layout */}
              <div className={`ml-16 md:ml-0 ${
                idx % 2 === 0 
                  ? 'md:text-right md:pr-12' 
                  : 'md:col-start-2 md:pl-12'
              }`}>
                <div className={`flex items-center gap-2 mb-2 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  <h3 className="font-semibold text-xl text-foreground">{item.role}</h3>
                </div>
                
                <div className={`flex items-center gap-3 text-primary mb-3 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse md:justify-start' : ''
                }`}>
                  <span className="font-medium">{item.company}</span>
                  <span className="text-muted-foreground text-sm flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {item.dates}
                  </span>
                </div>

                <div className="relative">
                  <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>

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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
