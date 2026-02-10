import {
  Cloud,
  Code,
  Database,
  GitMerge,
  Github,
  Container,
  Cpu,
  Cog,
  Library,
  BrainCircuit,
  CheckCircle,
  type LucideIcon,
  FlaskConical,
} from 'lucide-react';

export type Skill = {
  name: string;
  icon: LucideIcon;
};

export type SkillCategory = {
  name: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: [
      { name: 'Python', icon: Code },
      { name: 'JavaScript', icon: Code },
      { name: 'Java', icon: Code },
      { name: 'C++', icon: Code },
      { name: 'HTML5', icon: Code },
      { name: 'CSS', icon: Code },
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      { name: 'Microsoft Azure', icon: Cloud },
      { name: 'AWS', icon: Cloud },
      { name: 'Google Cloud Platform', icon: Cloud },
      { name: 'Docker', icon: Container },
      { name: 'Kubernetes', icon: Container },
      { name: 'Terraform', icon: Cog },
      { name: 'Jenkins', icon: Cog },
      { name: 'Git', icon: GitMerge },
      { name: 'GitHub Actions', icon: Github },
    ],
  },
  {
    name: 'Frameworks & Libraries',
    skills: [
      { name: 'React.js', icon: Library },
      { name: 'Node.js', icon: Library },
      { name: 'Express.js', icon: Library },
      { name: 'Spring Boot', icon: Library },
      { name: 'Flask', icon: FlaskConical },
      { name: 'Angular', icon: Library },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'MongoDB', icon: Database },
      { name: 'SQL', icon: Database },
      { name: 'Cosmos DB', icon: Database },
    ],
  },
  {
    name: 'Tools & Methodologies',
    skills: [
      { name: 'Postman', icon: Cog },
      { name: 'Agile Methodology', icon: CheckCircle },
      { name: 'Swagger', icon: Cog },
      { name: 'Prefect', icon: Cog },
    ],
  },
  {
    name: 'AI/ML',
    skills: [
      { name: 'YOLO', icon: BrainCircuit },
      { name: 'OpenCV', icon: Cpu },
    ],
  },
];

export default skillCategories;
