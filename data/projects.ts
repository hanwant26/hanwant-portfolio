export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  status: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "ResumeAI - ATS Friendly Resume Builder",

    description:
      "ResumeAI is my major ongoing project. It is an ATS-friendly resume builder developed using modern web technologies. The application allows users to create professional resumes, preview them in real time, and download them as PDF documents. I am continuously improving the project by adding new templates, better UI, and advanced features.",

    image: "/projects/resume-ai.png",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Supabase",
    ],

    github: "https://github.com/yourusername/resume-ai",

    live: "#",

    status: "🚧 In Development",

    featured: true,
  },

  {
    id: 2,

    title: "Portfolio Website",

    description:
      "A modern personal portfolio website built using Next.js and TypeScript to showcase my education, technical skills, learning journey, and projects.",

    image: "/projects/portfolio.png",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],

    github: "https://github.com/hanwant26/portfolio",

    live: "#",

    status: "🚧 Currently Building",
  },

  {
    id: 3,

    title: "Data Science Projects",

    description:
      "This section will include upcoming data science and machine learning projects that I build during my MCA journey.",

    image: "/projects/coming-soon.png",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Machine Learning",
    ],

    github: "#",

    live: "#",

    status: "Coming Soon",
  },

  {
    id: 4,

    title: "More Projects",

    description:
      "I am continuously learning and building new applications. More web development and data science projects will be added here soon.",

    image: "/projects/coming-soon.png",

    technologies: [
      "Learning",
      "Building",
      "Growing",
    ],

    github: "#",

    live: "#",

    status: "Coming Soon",
  },
];