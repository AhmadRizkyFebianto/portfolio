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
    id: 'sallagri',
    name: 'SallAgri',
    slug: 'sallagri',
    description: 'Enterprise agricultural marketplace connecting farmers with buyers across Indonesia',
    longDescription: 'SallAgri is a comprehensive enterprise-grade agricultural e-commerce platform designed to revolutionize the way farmers and buyers connect. Built with modern technologies, it provides a seamless experience for listing, discovering, and purchasing agricultural products at scale.',
    imageUrl: '/images/sallagri.jpg',
    technologies: ['Next.js', 'TypeScript', 'Laravel', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/sallagri',
      live: 'https://sallagri.com',
    },
    featured: true,
    sortOrder: 1,
  },
  {
    id: 'sallbondo',
    name: 'SALL-Bondo',
    slug: 'sallbondo',
    description: 'Specialized bonding and certification system for agricultural products',
    longDescription: 'SALL-Bondo is a sophisticated bonding and certification platform that ensures quality and traceability for agricultural products throughout the supply chain. The system provides digital certification management and quality assurance workflows.',
    imageUrl: '/images/sallbondo.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    links: {
      github: 'https://github.com/sallbondo',
      live: 'https://sallbondo.com',
    },
    featured: true,
    sortOrder: 2,
  },
  {
    id: 'azwa-architecture',
    name: 'Azwa Architecture',
    slug: 'azwa-architecture',
    description: 'Digital portfolio and project showcase for Azwa Architecture studio',
    longDescription: 'A minimalist yet powerful portfolio website for Azwa Architecture, featuring immersive project displays, detailed case studies, and an elegant editorial design that showcases their award-winning work.',
    imageUrl: '/images/azwa-architecture.jpg',
    technologies: ['Next.js', 'GSAP', 'Three.js', 'Framer Motion'],
    links: {
      live: 'https://azwa-architecture.com',
    },
    featured: false,
    sortOrder: 3,
  },
  {
    id: 'bakoel-oli',
    name: 'Bakoel Oli',
    slug: 'bakoel-oli',
    description: 'Online marketplace for premium cooking oils and kitchen essentials',
    longDescription: 'Bakoel Oli is an e-commerce platform specializing in premium cooking oils and kitchen essentials. The platform features a curated product selection, subscription options, and educational content about healthy cooking.',
    imageUrl: '/images/bakoel-oli.jpg',
    technologies: ['Vue.js', 'Stripe', 'Tailwind CSS', 'Firebase'],
    links: {
      live: 'https://bakoel-oli.com',
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