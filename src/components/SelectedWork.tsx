'use client';

import { motion, easeOut } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { getAllProjects } from '@/data/projects';

// Animation variants
const containerVariants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const projectCardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

const linkVariant = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: easeOut,
      delay: 0.4,
    },
  },
};

export default function SelectedWork() {
  const allProjects = getAllProjects();
  // Filter out the primary featured project (SallAgri) for the grid
  const gridProjects = allProjects.filter((p) => p.id !== 'sallagri');

  return (
    <section id="selected-work" className="py-24 lg:py-32 px-6 bg-background">
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div
          variants={projectCardVariants}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary dark:text-primary mb-6">
            Selected Work
          </h2>
          <div className="h-1 w-24 bg-primary dark:bg-primary rounded-full" />
        </motion.div>

        {/* Grid Layout - 2 columns */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {gridProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectCardVariants}
              className="group block cursor-pointer"
              onClick={() => window.open(project.links.live, '_blank', 'noopener,noreferrer')}
            >
              {/* Project Card Panel */}
              <div className="bg-surface dark:bg-surface rounded-3xl border border-border dark:border-border shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Image */}
                <div className="relative aspect-[2.1/1] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <div className="bg-surface/90 dark:bg-surface-secondary/90 backdrop-blur-sm p-3 rounded-full">
                      <ArrowUpRight className="w-6 h-6 text-primary dark:text-primary" />
                    </div>
                  </div>
                  <Image src={project.imageUrl} alt={project.name} fill className="object-contain" priority />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-2xl font-bold tracking-tight text-primary dark:text-primary mb-3 group-hover:text-secondary dark:text-secondary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-secondary dark:text-secondary leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-gray-100 dark:bg-[#1a1a1a] text-secondary dark:text-secondary rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2.5 py-1 bg-background-subtle dark:bg-surface-secondary text-muted dark:text-muted rounded-md text-xs">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    {project.links.live && (
                      <motion.a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={linkVariant}
                        className="flex items-center text-sm font-medium text-primary dark:text-primary group/link"
                      >
                        Live Site
                        <ArrowUpRight className="w-4 h-4 ml-1 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </motion.a>
                    )}
                     {project.links.github && (
                       <motion.a
                         href={project.links.github}
                         target="_blank"
                         rel="noopener noreferrer"
                         variants={linkVariant}
                         className="text-sm font-medium text-gray-500 dark:text-gray-500 hover:text-primary dark:text-primary transition-colors"
                       >
                         Code
                       </motion.a>
                     )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}






