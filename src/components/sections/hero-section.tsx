'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const imageScale = Math.max(1, 1 + scrollY / 2000);
  const imageY = scrollY / 2;
  const contentY = -scrollY / 5;
  const contentOpacity = Math.max(0, 1 - scrollY / 400);

  return (
    <section id="home" className="h-screen sticky top-0">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <Image
          src="https://picsum.photos/seed/background/1920/1080"
          alt="Parallax background"
          fill
          priority
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            transform: `translateY(${imageY}px) scale(${imageScale})`,
          }}
          data-ai-hint="abstract background"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div
        className="relative h-full flex flex-col justify-center items-center text-center text-primary-foreground p-4"
        style={{
          transform: `translateY(${contentY}px)`,
          opacity: contentOpacity,
        }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 font-headline drop-shadow-lg">
          {personalInfo.name}
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl text-primary-foreground/80 drop-shadow-md mb-8">
          {personalInfo.tagline}
        </p>
        <Button asChild size="lg" className="bg-primary/90 hover:bg-primary text-primary-foreground">
            <a href="/portfolio/resume.pdf" download="Narra_Srujan_Resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
            </a>
        </Button>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-foreground"
        style={{
          opacity: contentOpacity,
        }}
      >
        <ArrowDown className="animate-bounce w-8 h-8" />
      </div>
    </section>
  );
};

export default HeroSection;
