import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-primary/20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          <p className="text-muted-foreground flex items-center gap-2">
            Designed & Developed with <Heart className="w-4 h-4 text-primary fill-primary" /> by{" "}
            <span className="text-primary font-semibold">Your Name</span>
          </p>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
