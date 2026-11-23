"use client";

import { motion, easeOut, Easing } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useReducedMotion } from '@/lib/use-reduced-motion';

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

const badgeReveal = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
};

const titleReveal = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOut,
      delay: 0.1,
    },
  },
};

const textReveal = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
      delay: 0.2,
    },
  },
};

const buttonReveal = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeOut,
      delay: 0.3,
    },
  },
};

const imageReveal = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easeOut,
      delay: 0.2,
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
  const reducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // If reduced motion is preferred, show content immediately
  if (reducedMotion) {
    return (
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12 bg-background"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-surface-secondary text-sm font-medium text-secondary dark:text-secondary border border-border dark:border-border dark:bg-surface-secondary">
                <span className="w-2 h-2 bg-primary dark:bg-primary rounded-full mr-2"></span>
                Available for work
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary dark:text-primary">
                Web apps for
                <br />
                <span className="text-secondary dark:text-secondary">real work.</span>
              </h1>

              <p className="text-lg md:text-xl text-secondary dark:text-secondary max-w-xl leading-relaxed">
                I build responsive e-commerce, learning, and enterprise apps with Laravel, React, Next.js, and TypeScript—from user interface to API integration.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <motion.a
                  href="#work"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-primary text-white dark:bg-[#e5e5e5] dark:text-[#0a0a0a] rounded-lg font-medium transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 dark:hover:bg-[#f5f5f5]"
                >
                  View my work
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-surface dark:bg-surface text-primary dark:text-primary border border-border dark:border-border rounded-lg font-medium transition-all hover:bg-background-subtle dark:hover:bg-surface-secondary hover:border-border-light dark:hover:border-border-light shadow-md"
                >
                  Contact me
                </motion.a>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[2/3]">
              <div className="absolute inset-0 bg-gradient-to-br from-background-subtle to-border dark:from-surface dark:to-border rounded-3xl transform translate-x-4 translate-y-4" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-border dark:border-border">
                <Image
                  src="/assets/my.jpg"
                  alt="Profile of Ahmad Rizky Febianto"
                  fill className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12 bg-background"
    >
      <motion.div
        variants={containerVariants}
        initial={isMounted ? 'initial' : undefined}
        animate={isMounted ? 'animate' : 'animate'}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div className="order-2 lg:order-1">
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div variants={badgeReveal}>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-surface-secondary text-sm font-medium text-secondary dark:text-secondary border border-border dark:border-border dark:bg-surface-secondary">
                <span className="w-2 h-2 bg-primary dark:bg-primary rounded-full mr-2"></span>
                Available for work
              </div>
            </motion.div>

            <motion.h1 variants={titleReveal} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary dark:text-primary">
              Web apps for
              <br />
              <span className="text-secondary dark:text-secondary">real work.</span>
            </motion.h1>

            <motion.p variants={textReveal} className="text-lg md:text-xl text-secondary dark:text-secondary max-w-xl leading-relaxed">
              I build responsive e-commerce, learning, and enterprise apps with Laravel, React, Next.js, and TypeScript—from user interface to API integration.
            </motion.p>

            <motion.div variants={buttonReveal} className="flex flex-wrap gap-4 pt-4">
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
            </motion.div>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <motion.div
            variants={imageReveal}
            className="relative w-full max-w-md aspect-[2/3]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-background-subtle to-border dark:from-surface dark:to-border rounded-3xl transform translate-x-4 translate-y-4" />
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-border dark:border-border">
              <Image
                src="/assets/my.jpg"
                alt="Profile of Ahmad Rizky Febianto"
                fill className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
