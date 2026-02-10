import { personalInfo } from '@/lib/data';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-primary mb-3 font-headline">
            About Me
          </h2>
          <p className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight md:leading-snug font-headline">
            I'm a passionate developer building scalable cloud solutions and intuitive user experiences.
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            {personalInfo.about}
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-center mt-20">
           <h3 className="text-3xl md:text-4xl font-bold tracking-tighter font-headline mb-4">What I Bring to the Table</h3>
           <p className="text-lg text-muted-foreground">
           I bring a strong foundation in software engineering combined with hands-on experience building real-world systems. At Airbus, I worked on designing and developing scalable APIs and backend components, following industry-grade practices to ensure performance, reliability, and maintainability. I focus on solving problems end to end—understanding requirements, writing clean code, and improving workflows through automation and thoughtful design. My experience across projects has strengthened my understanding of backend development, system design fundamentals, and modern development tools. What sets me apart is my ability to learn quickly, take ownership, and deliver with quality. I adapt easily to new technologies, collaborate effectively with teams, and consistently aim to create solutions that drive meaningful impact. I’m seeking opportunities in Software Development, Backend, or Full-Stack roles where I can contribute immediately and grow alongside a strong engineering team.
           </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
