import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/lib/data';

const Footer = () => {
  return (
    <footer id="contact" className="w-full py-12 md:py-16 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 font-headline">Get in Touch</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
        </p>
        <div className="flex justify-center items-center space-x-6 mb-8">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-7 h-7" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-7 h-7" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-7 h-7" />
          </a>
        </div>
        <div className="border-t pt-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Narra Srujan. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
