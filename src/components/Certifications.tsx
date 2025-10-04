import { useState } from "react";
import { Award, Eye, Download, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "Coursera",
      date: "2024",
      category: "Web Dev",
      skills: ["React", "Node.js", "MongoDB"],
      description: "Comprehensive full-stack development course covering modern web technologies, RESTful APIs, and database management.",
      certificateUrl: "https://example.com/cert1",
      credential: "ABC123XYZ",
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford Online",
      date: "2023",
      category: "ML",
      skills: ["Python", "TensorFlow", "Scikit-learn"],
      description: "Advanced machine learning course covering supervised learning, unsupervised learning, and neural networks.",
      certificateUrl: "https://example.com/cert2",
      credential: "DEF456ABC",
    },
    {
      title: "Mobile App Development",
      issuer: "Udacity",
      date: "2023",
      category: "App Dev",
      skills: ["Flutter", "Dart", "Firebase"],
      description: "Cross-platform mobile development with Flutter, including state management and backend integration.",
      certificateUrl: "https://example.com/cert3",
      credential: "GHI789DEF",
    },
    {
      title: "Natural Language Processing",
      issuer: "DeepLearning.AI",
      date: "2024",
      category: "NLP",
      skills: ["Python", "NLTK", "Transformers"],
      description: "In-depth NLP course covering tokenization, sentiment analysis, and transformer architectures.",
      certificateUrl: "https://example.com/cert4",
      credential: "JKL012GHI",
    },
    {
      title: "LLM Application Development",
      issuer: "OpenAI",
      date: "2024",
      category: "LLM",
      skills: ["GPT", "LangChain", "Prompt Engineering"],
      description: "Building production-ready applications with Large Language Models and prompt engineering techniques.",
      certificateUrl: "https://example.com/cert5",
      credential: "MNO345JKL",
    },
    {
      title: "Cloud Computing Fundamentals",
      issuer: "AWS",
      date: "2023",
      category: "Cloud",
      skills: ["AWS", "Docker", "Kubernetes"],
      description: "Cloud architecture, containerization, and deployment strategies on AWS infrastructure.",
      certificateUrl: "https://example.com/cert6",
      credential: "PQR678MNO",
    },
  ];

  const [selectedCert, setSelectedCert] = useState(certifications[0]);

  return (
    <section id="certifications" className="py-24 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and continuous learning journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Certifications List - 2 columns */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Dialog key={cert.credential}>
                <DialogTrigger asChild>
                  <Card
                    className="group cursor-pointer overflow-hidden bg-gradient-to-br from-card via-card to-card/50 border-border hover:border-primary transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/30 animate-slide-in-right backdrop-blur-sm"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: 'backwards'
                    }}
                    onClick={() => setSelectedCert(cert)}
                  >
                    <div className="p-6 space-y-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="p-3 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <Award className="w-6 h-6 text-primary" />
                        </div>
                        <Badge variant="outline" className="border-primary/50 text-xs">
                          {cert.category}
                        </Badge>
                      </div>

                      <div>
                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {cert.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer} • {cert.date}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {cert.skills.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-secondary/50 text-xs rounded-full border border-border"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-primary pt-2">
                        <Eye className="w-4 h-4" />
                        <span>View Details</span>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-4 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl">
                        <Award className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <DialogTitle className="text-2xl mb-2">{cert.title}</DialogTitle>
                        <DialogDescription className="text-base">
                          {cert.issuer} • {cert.date}
                        </DialogDescription>
                      </div>
                    </div>
                  </DialogHeader>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">About This Certification</h4>
                      <p className="text-muted-foreground">{cert.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Skills Acquired</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground mb-1">Credential ID</p>
                      <p className="font-mono font-semibold">{cert.credential}</p>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        className="flex-1 bg-gradient-to-r from-primary to-purple-500 hover:opacity-90"
                        onClick={() => window.open(cert.certificateUrl, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificate
                      </Button>
                      <Button
                        variant="outline"
                        className="border-primary/50 hover:bg-primary/10"
                        onClick={() => window.open(cert.certificateUrl, "_blank")}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* Featured Certificate Preview - 1 column */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 bg-gradient-to-br from-card via-card to-primary/5 border-primary/30 overflow-hidden animate-fade-in backdrop-blur-sm">
              <div className="p-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Featured Certificate</h3>
                    <p className="text-sm text-muted-foreground">Most Recent</p>
                  </div>
                </div>

                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-purple-500/10 to-primary/20 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5" />
                  <div className="text-center relative z-10">
                    <Award className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">Certificate Preview</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 line-clamp-2">{selectedCert.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {selectedCert.issuer} • {selectedCert.date}
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {selectedCert.description}
                  </p>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-to-r from-primary to-purple-500 hover:opacity-90">
                      <Eye className="w-4 h-4 mr-2" />
                      View Full Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-4 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl">
                          <Award className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <DialogTitle className="text-2xl mb-2">{selectedCert.title}</DialogTitle>
                          <DialogDescription className="text-base">
                            {selectedCert.issuer} • {selectedCert.date}
                          </DialogDescription>
                        </div>
                      </div>
                    </DialogHeader>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">About This Certification</h4>
                        <p className="text-muted-foreground">{selectedCert.description}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Skills Acquired</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedCert.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                        <p className="text-sm text-muted-foreground mb-1">Credential ID</p>
                        <p className="font-mono font-semibold">{selectedCert.credential}</p>
                      </div>

                      <div className="flex gap-3">
                        <Button
                          className="flex-1 bg-gradient-to-r from-primary to-purple-500 hover:opacity-90"
                          onClick={() => window.open(selectedCert.certificateUrl, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Certificate
                        </Button>
                        <Button
                          variant="outline"
                          className="border-primary/50 hover:bg-primary/10"
                          onClick={() => window.open(selectedCert.certificateUrl, "_blank")}
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
