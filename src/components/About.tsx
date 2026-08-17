'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { borderRadius, colors, spacing } from '@/lib/design-tokens';
import { easeOut } from 'framer-motion';

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
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

const textReveal = {
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: easeOut,
    },
  },
};

const AboutContent = () => {
  return (
    <section id="about" className="py-24 lg:py-32 px-6">
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary dark:text-primary mb-6">
            About Me
          </h2>
          <div className="h-1 w-24 bg-primary rounded-full" />
        </motion.div>

        {/* About Grid - 2 Column Layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Portrait Panel - 5 columns wide */}
          <motion.div
            variants={imageReveal}
            className="lg:col-span-5"
          >
            <div className="bg-surface dark:bg-surface rounded-3xl border border-border dark:border-border shadow-2xl overflow-hidden relative group">
              {/* Decorative background element */}
              <div className="absolute inset-0 bg-gradient-to-br from-background-subtle to-border dark:from-surface dark:to-surface-secondary opacity-50" />
              
              {/* Profile Image Container */}
              <div className="relative aspect-[4/5] lg:aspect-[4/6] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-background-subtle to-border dark:from-surface dark:to-surface-secondary flex items-center justify-center">
                  <div className="text-center px-8">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-gray-700 to-gray-950 dark:from-border dark:to-border-light flex items-center justify-center mb-6 shadow-lg">
                      <span className="text-6xl font-bold text-white dark:text-primary">A</span>
                    </div>
                    <h3 className="text-2xl font-bold text-primary dark:text-primary mb-2">Arief</h3>
                    <p className="text-secondary dark:text-secondary">Fullstack Developer</p>
                    <p className="text-muted dark:text-muted text-sm mt-1">Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>

          {/* Content Panel - 7 columns wide */}
          <motion.div
            variants={textReveal}
            className="lg:col-span-7"
          >
            <div className="bg-surface dark:bg-surface rounded-3xl border border-border dark:border-border shadow-xl p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-primary dark:text-primary mb-6">
                Building digital experiences with precision and creativity
              </h3>
              
              <div className="prose prose-lg text-secondary dark:text-secondary max-w-none">
                <p className="mb-6 leading-relaxed">
                  I&apos;m a passionate fullstack developer with a strong foundation in building enterprise-grade applications. My journey began with Laravel and SQL, where I developed a deep appreciation for clean architecture and robust data management.
                </p>
                
                <p className="mb-6 leading-relaxed">
                  Today, I&apos;m combine technical expertise with design sensitivity to create products that are not only functional but also delightful to use. My experience at <strong className="text-primary dark:text-primary">PT INKA</strong> sharpened my skills in developing complex HR systems and enterprise applications.
                </p>
                
                <p className="mb-6 leading-relaxed">
                  When I&apos;m not coding, I&apos;m exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. I believe in continuous learning and sharing knowledge with the community.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 mt-10 pt-8 border-t border-border dark:border-border">
                <div>
                  <div className="text-4xl font-bold text-primary dark:text-primary mb-2">5+</div>
                  <div className="text-sm text-muted dark:text-muted font-medium">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary dark:text-primary mb-2">50+</div>
                  <div className="text-sm text-muted dark:text-muted font-medium">Projects Completed</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutContent;








