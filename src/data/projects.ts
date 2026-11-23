export interface Project {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  technologies: string[];
  links: {
    github?: string;
    live?: string;
    caseStudy?: string;
  };
  featured: boolean;
  sortOrder: number;
}

export const projects: Project[] = [
  {
    id: "sallagri",
    name: "SallAgri",
    slug: "sallagri",
    description:
      "An English-learning platform created for agriculture students, with interactive lessons and progress tracking.",
    longDescription:
      "SallAgri is an English-learning platform for agriculture students. I built its responsive interface and more than ten interactive activities, including quizzes, word exercises, audio with transcripts, and text-to-speech practice, then connected learner progress to Laravel REST APIs.",
    imageUrl: "/assets/sallagri.png",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Laravel REST API",
    ],
    links: {
      live: "https://sallagri.com",
    },
    featured: true,
    sortOrder: 1,
  },
  {
    id: "NOC App",
    name: "NOC App",
    slug: "noc-app",
    description:
      "A community health survey platform for gathering responses and supporting early risk detection.",
    longDescription:
      "NOC is a community health survey platform designed to collect responses, surface useful insights, and encourage early risk detection.",
    imageUrl: "/assets/NOC.png",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    links: {
      live: "https://noc-app.vercel.app/",
    },
    featured: true,
    sortOrder: 2,
  },
  {
    id: "azwa-architecture",
    name: "Azwa Architecture",
    slug: "azwa-architecture",
    description:
      "Digital portfolio and project showcase for Azwa Architecture studio",
    longDescription:
      "A minimalist yet powerful portfolio website for Azwa Architecture, featuring immersive project displays, detailed case studies, and an elegant editorial design that showcases their award-winning work.",
    imageUrl: "/assets/azwa.png",
    technologies: ["Laravel", "Tailwind CSS", "REST API"],
    links: {
      live: "https://www.azwadesignstudio.com/",
    },
    featured: false,
    sortOrder: 3,
  },
  {
    id: "bakoel-oli",
    name: "Bakoel Oli",
    slug: "bakoel-oli",
    description:
      "An automotive oil-service platform with home-visit technicians and service status tracking.",
    longDescription:
      "I designed and built the responsive frontend for Bakoel Oli, an automotive oil-service platform. It includes a home-visit technician feature with service status tracking and uses REST APIs to display dynamic data.",
    imageUrl: "/assets/bakoel-oli.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    links: {
      live: "https://bakoel-oli.my.id/",
    },
    featured: false,
    sortOrder: 4,
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((p) => p.featured).sort((a, b) => a.sortOrder - b.sortOrder);
};

export const getAllProjects = (): Project[] => {
  return projects.sort((a, b) => a.sortOrder - b.sortOrder);
};
