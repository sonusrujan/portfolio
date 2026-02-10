import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from "next/image";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter font-headline">Education</h2>
          <p className="mt-4 text-muted-foreground">Academic background and credentials.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Image src="/portfolio/vit.webp" alt="VIT Logo" width={120} height={40} className="object-contain" />
                </div>
                <CardTitle className="text-xl font-headline">Bachelor of Technology in Computer Science</CardTitle>
                <CardDescription>Vellore Institute Of Technology, Chennai | Aug 2021 – Jul 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">CGPA: 7.49</p>
                <p className="text-muted-foreground mt-2">Chennai, India</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
