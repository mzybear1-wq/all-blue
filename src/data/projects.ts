export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for e-commerce platforms with real-time analytics, inventory management, and sales tracking features.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "2",
    title: "AI Content Generator",
    description: "A SaaS application that leverages OpenAI's API to generate blog posts, social media content, and marketing copy automatically.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    technologies: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "3",
    title: "Task Management App",
    description: "A collaborative Kanban-style task management tool with drag-and-drop functionality, team workspaces, and deadline reminders.",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=1000",
    technologies: ["React", "Redux", "Framer Motion", "Firebase"],
    liveUrl: "#",
    githubUrl: "#"
  }
];
