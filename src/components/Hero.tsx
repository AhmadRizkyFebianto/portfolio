'use client';

import { motion, easeOut, Easing } from 'framer-motion';

// Animation variants
const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const buttonLift = {
  initial: { y: 0 },
  hover: {
    y: -4,
    transition: {
      duration: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96] as Easing,
    },
  },
  tap: { scale: 0.95 },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12 bg-background"
    >
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left Column - Content */}
        <div className="order-2 lg:order-1">
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-surface-secondary text-sm font-medium text-secondary dark:text-secondary border border-border dark:border-border dark:bg-surface-secondary">
              <span className="w-2 h-2 bg-primary dark:bg-primary rounded-full mr-2"></span>
              Available for work
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary dark:text-primary">
              Building digital
              <br />
              <span className="text-secondary dark:text-secondary">experiences</span> that matter.
            </h1>

            <p className="text-lg md:text-xl text-secondary dark:text-secondary max-w-xl leading-relaxed">
              Fullstack developer specializing in modern web technologies.
              Creating elegant solutions for complex problems with a focus on
              performance, accessibility, and beautiful user interfaces.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="#work"
                variants={buttonLift}
                whileHover="hover"
                whileTap="tap"
                className="px-6 py-3 bg-primary text-white dark:bg-[#e5e5e5] dark:text-[#0a0a0a] rounded-lg font-medium transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 dark:hover:bg-[#f5f5f5]"
              >
                View my work
              </motion.a>
              <motion.a
                href="#contact"
                variants={buttonLift}
                whileHover="hover"
                whileTap="tap"
                className="px-6 py-3 bg-surface dark:bg-surface text-primary dark:text-primary border border-border dark:border-border rounded-lg font-medium transition-all hover:bg-background-subtle dark:hover:bg-surface-secondary hover:border-border-light dark:hover:border-border-light shadow-md"
              >
                Contact me
              </motion.a>
            </div>

            <div className="flex items-center gap-4 pt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-surface dark:border-surface bg-background-subtle dark:bg-surface-secondary overflow-hidden"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-background-subtle to-border dark:from-surface dark:to-border" />
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted dark:text-muted">
                Trusted by 50+ clients
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Portrait Panel */}
        <div className="order-1 lg:order-2 flex justify-center">
          <motion.div
            variants={itemVariants}
            className="relative w-full max-w-md aspect-[4/5] lg:aspect-[3/5]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-background-subtle to-border dark:from-surface dark:to-border rounded-3xl transform translate-x-4 translate-y-4" />
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-border dark:border-border">
              <div className="w-full h-full bg-gradient-to-br from-background to-border-subtle dark:from-surface dark:to-surface-secondary flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-border dark:bg-border rounded-full mb-4" />
                  <div className="h-4 w-32 bg-border dark:bg-border mx-auto rounded" />
                  <div className="h-3 w-48 bg-border dark:bg-border mx-auto rounded mt-2" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}