"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";
import { easeOut } from "framer-motion";

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

const imageReveal = {
  initial: { width: "0%" },
  animate: {
    width: "100%",
    transition: {
      duration: 0.8,
      ease: easeOut,
      delay: 0.2,
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

const staggerItem = {
  initial: { opacity: 0, y: 20 },
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
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easeOut,
      delay: 0.6,
    },
  },
};

export default function FeaturedProject() {
  const featuredProjects = getFeaturedProjects();
  const primaryProject = featuredProjects.find((p) => p.id === "sallagri");

  if (!primaryProject) return null;

  return (
    <section id="featured" className="py-24 lg:py-32 px-6 bg-background">
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={staggerItem} className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary dark:text-primary mb-6">
            Featured Project
          </h2>
          <div className="h-1 w-24 bg-primary dark:bg-primary rounded-full" />
        </motion.div>

        {/* Featured Project Panel */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="bg-surface dark:bg-surface rounded-3xl border border-border dark:border-border shadow-2xl overflow-hidden"
        >
          {/* Image Section with Reveal Effect */}
          <div className="relative aspect-[2.5/1] lg:aspect-[2.5/1] overflow-hidden">
            <motion.div
              variants={imageReveal}
              initial="initial"
              animate="animate"
              className="absolute inset-0 bg-gradient-to-br from-background to-border dark:from-surface dark:to-surface-secondary"
            />
            <Image
              src={primaryProject.imageUrl}
              alt={primaryProject.name}
              fill className="object-contain"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="p-8 lg:p-12 xl:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left: Project Info */}
              <div className="lg:col-span-2 space-y-8">
                <motion.div variants={staggerItem}>
                  <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary dark:text-primary mb-4">
                    {primaryProject.name}
                  </h3>
                  <p className="text-lg lg:text-xl text-secondary dark:text-secondary leading-relaxed">
                    {primaryProject.longDescription}
                  </p>
                </motion.div>

                {/* Technologies */}
                <motion.div variants={staggerItem} className="pt-4">
                  <h4 className="text-sm font-semibold text-muted dark:text-muted uppercase tracking-wider mb-4">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {primaryProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-background-subtle dark:bg-surface-secondary text-secondary dark:text-secondary rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right: Links */}
              <div className="lg:col-span-1 space-y-4">
                <motion.div variants={linkVariant}>
                  <a
                    href={primaryProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-6 py-4 bg-[#1a1a1a] text-white dark:bg-[#e5e5e5] dark:text-[#0a0a0a] rounded-xl font-medium transition-all hover:bg-[#0a0a0a] dark:hover:bg-[#f5f5f5] hover:shadow-lg group"
                  >
                    <span className="mr-2">Visit Website</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </motion.div>

                {primaryProject.links.github && (
                  <motion.div variants={linkVariant}>
                    <a
                      href={primaryProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full px-6 py-4 bg-surface dark:bg-surface text-primary dark:text-primary border border-border dark:border-border rounded-xl font-medium transition-all hover:bg-background-subtle dark:hover:bg-surface-secondary hover:border-border-light group"
                    >
                      <span className="text-sm font-medium group-hover:text-primary dark:text-primary transition-colors">View Code</span>
                    </a>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}






