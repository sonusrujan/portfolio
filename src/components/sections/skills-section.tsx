import { Badge } from '@/components/ui/badge';
import skillCategories from '@/lib/skills';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter font-headline">Technical Skills</h2>
          <p className="mt-4 text-muted-foreground">
            A snapshot of the technologies, languages, and tools I work with.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-10">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="text-xl font-bold tracking-tight mb-6 text-center font-headline md:text-2xl">{category.name}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill.name} 
                    variant="default" 
                    className="text-base px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 border flex items-center gap-2"
                  >
                    <skill.icon className="h-4 w-4"/>
                    <span>{skill.name}</span>
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
