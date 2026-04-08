export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest"]
  }
];
