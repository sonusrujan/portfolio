'use client';

import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/data';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group relative rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
          <Image
            src={project.image.imageUrl}
            alt={project.title}
            width={600}
            height={400}
            data-ai-hint={project.image.imageHint}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl font-bold text-primary-foreground mb-1 font-headline">{project.title}</h3>
            <p className="text-primary-foreground/80 text-sm">{project.description}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] bg-background/95 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold mb-2 font-headline">{project.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground text-base">
            {project.description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Key Highlights</h4>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {project.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-lg">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="font-mono">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
