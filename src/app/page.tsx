import Header from '@/components/header';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ProjectsSection from '@/components/sections/projects-section';
import ExperienceSection from '@/components/sections/experience-section';
import SkillsSection from '@/components/sections/skills-section';
import CertificationsSection from '@/components/sections/certifications-section';
import EducationSection from '@/components/sections/education-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <div className="relative z-10 bg-background">
          <AboutSection />
          <EducationSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <CertificationsSection />
          <Footer />
        </div>
      </main>
    </>
  );
}
