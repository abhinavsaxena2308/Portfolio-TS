import { useState } from "react";
import { Send, Github, Linkedin, Twitter, Mail , Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.status === "success") {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      throw new Error(result.message || "Failed to send message");
    }
  } catch (error: any) {
    toast({
      title: "Error",
      description: error.message || "Something went wrong. Please try again later.",
    });
  }
};



  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/abhinavsaxena2308" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/abhinav-saxena-6379a3290/" },
    { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/abhiiiii_2308/" },
    { icon: Mail, label: "Email", url: "mailto:abhinav.2025@gmail.com?subject=Hello%20Abhinav&body=I%20want%20to%20contact%20you%20regarding..." },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="p-8 bg-card border-border animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 hover:scale-105 transition-all"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-8 animate-fade-in">
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all group"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="font-medium group-hover:text-primary transition-colors">
                        {social.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-purple-500/10 border-primary/20">
              <h3 className="text-xl font-bold mb-4">Download CV</h3>
              <p className="text-muted-foreground mb-6">
                Get a copy of my resume to learn more about my experience and skills.
              </p>
              <Button
                onClick={() => window.open("https://www.google.com", "_blank")}
                className="w-full bg-gradient-to-r from-primary to-purple-500 hover:opacity-90"
              >
                Download CV
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
