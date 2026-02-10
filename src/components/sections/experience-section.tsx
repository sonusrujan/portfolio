import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { workExperience } from "@/lib/data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import Image from "next/image";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter font-headline">Work Experience</h2>
          <p className="mt-4 text-muted-foreground">My professional journey and key contributions.</p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" aria-hidden="true"></div>
          <div className="space-y-12">
            {workExperience.map((job, index) => (
              <Dialog key={job.company}>
                <div className="relative flex items-center">
                  <div className="hidden md:block w-1/2 pr-8 text-right">
                    {index % 2 === 0 && (
                      <Card>
                        <CardHeader>
                          {job.company === "Airbus India Private Limited" && (
                            <div className="flex justify-end mb-4">
                              <Image
                                src="/logo_black.webp"
                                alt="Airbus Logo"
                                width={120}
                                height={40}
                                className="object-contain"
                                data-ai-hint="company logo"
                              />
                            </div>
                          )}
                          {job.company === "Global Software Solutions Pvt Ltd." && (
                            <div className="flex justify-end mb-4">
                              <Image
                                src="/global.webp"
                                alt="Global Software Solutions Logo"
                                width={120}
                                height={40}
                                className="object-contain"
                                data-ai-hint="company logo"
                              />
                            </div>
                          )}
                          {job.company === "G3 Technologies" && (
                            <div className="flex justify-end mb-4">
                              <Image
                                src="/g3.webp"
                                alt="G3 Technologies Logo"
                                width={120}
                                height={40}
                                className="object-contain"
                                data-ai-hint="company logo"
                              />
                            </div>
                          )}
                          <CardTitle className="text-xl font-headline">{job.title}</CardTitle>
                          <CardDescription>{job.company} | {job.duration}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex justify-end">
                          <DialogTrigger asChild>
                            <Button variant="outline">
                              <Eye className="mr-2 h-4 w-4" /> View Summary
                            </Button>
                          </DialogTrigger>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                  <div className="w-full md:w-1/2 md:pl-8">
                    {index % 2 !== 0 ? (
                      <Card>
                        <CardHeader>
                          {job.company === "Airbus India Private Limited" && (
                            <div className="flex justify-start mb-4">
                              <Image
                                src="/logo_black.webp"
                                alt="Airbus Logo"
                                width={120}
                                height={40}
                                className="object-contain"
                                data-ai-hint="company logo"
                              />
                            </div>
                          )}
                          {job.company === "Global Software Solutions Pvt Ltd." && (
                            <div className="flex justify-start mb-4">
                              <Image
                                src="/global.webp"
                                alt="Global Software Solutions Logo"
                                width={120}
                                height={40}
                                className="object-contain"
                                data-ai-hint="company logo"
                              />
                            </div>
                          )}
                          {job.company === "G3 Technologies" && (
                            <div className="flex justify-start mb-4">
                              <Image
                                src="/g3.webp"
                                alt="G3 Technologies Logo"
                                width={120}
                                height={40}
                                className="object-contain"
                                data-ai-hint="company logo"
                              />
                            </div>
                          )}
                          <CardTitle className="text-xl font-headline">{job.title}</CardTitle>
                          <CardDescription>{job.company} | {job.duration}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <DialogTrigger asChild>
                            <Button variant="outline">
                              <Eye className="mr-2 h-4 w-4" /> View Summary
                            </Button>
                          </DialogTrigger>
                        </CardContent>
                      </Card>
                    ) : (
                      <div className="block md:hidden">
                         <Card>
                        <CardHeader>
                           {job.company === "Airbus India Private Limited" && (
                            <div className="mb-4">
                              <Image
                                src="/logo_black.webp"
                                alt="Airbus Logo"
                                width={120}
                                height={40}
                                className="object-contain"
                                data-ai-hint="company logo"
                              />
                            </div>
                          )}
                          {job.company === "Global Software Solutions Pvt Ltd." && (
                            <div className="mb-4">
                              <Image
                                src="/global.webp"
                                alt="Global Software Solutions Logo"
                                width={120}
                                height={40}
                                className="object-contain"
                                data-ai-hint="company logo"
                              />
                            </div>
                          )}
                          {job.company === "G3 Technologies" && (
                            <div className="mb-4">
                              <Image
                                src="/g3.webp"
                                alt="G3 Technologies Logo"
                                width={120}
                                height={40}
                                className="object-contain"
                                data-ai-hint="company logo"
                              />
                            </div>
                          )}
                          <CardTitle className="text-xl font-headline">{job.title}</CardTitle>
                          <CardDescription>{job.company} | {job.duration}</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <DialogTrigger asChild>
                            <Button variant="outline">
                              <Eye className="mr-2 h-4 w-4" /> View Summary
                            </Button>
                          </DialogTrigger>
                        </CardContent>
                      </Card>
                      </div>
                    )}
                  </div>
                </div>
                <DialogContent className="sm:max-w-2xl bg-background/95 backdrop-blur-sm">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold mb-1 font-headline">{job.title}</DialogTitle>
                    <DialogDescription>{job.company} | {job.duration}</DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                     <h4 className="font-semibold text-lg mb-3">Key Responsibilities</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {job.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                    </ul>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
