'use client';

import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform, easeOut } from 'framer-motion';
import { useEffect, useState } from 'react';
import { borderRadius, colors, spacing } from '@/lib/design-tokens';

// Navigation configuration
const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Work', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
] as const;

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    initial: { y: -100 },
    animate: {
      y: 0,
      transition: {
        duration: 0.3,
        ease: easeOut,
      },
    },
  };

  const linkVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15,
        staggerChildren: 0.05,
      },
    },
  };

  const linkItemVariants = {
    initial: { opacity: 0, x: -10 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.15,
        ease: easeOut,
      },
    },
  };

  return (
    <motion.nav
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-3' : 'py-6',
      )}
    >
      <div
        className={cn(
          'mx-auto max-w-7xl px-6 rounded-2xl transition-all duration-300',
          isScrolled
            ? 'bg-surface/80 dark:bg-surface/85 backdrop-blur-md shadow-sm border-border/70'
            : 'bg-surface/60 dark:bg-surface/70 backdrop-blur-sm shadow-md border-border/60',
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="font-bold text-xl tracking-tight text-primary dark:text-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Portfolio
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                variants={linkItemVariants}
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg text-sm font-medium text-secondary hover:text-primary dark:text-secondary dark:hover:text-primary transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-background-subtle dark:hover:bg-surface-secondary transition-colors"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={cn(
                  'absolute top-1/2 left-0 w-6 h-0.5 bg-primary dark:bg-primary transform -translate-y-1/2 transition-all',
                  isMobileMenuOpen && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'absolute top-0 left-0 w-6 h-0.5 bg-primary dark:bg-primary transition-all',
                  isMobileMenuOpen && 'rotate-45 translate-y-2',
                )}
              />
              <span
                className={cn(
                  'absolute bottom-0 left-0 w-6 h-0.5 bg-primary dark:bg-primary transition-all',
                  isMobileMenuOpen && '-rotate-45 -translate-y-2',
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            variants={{
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: 'auto' },
              exit: { opacity: 0, height: 0 },
            }}
            className="md:hidden overflow-hidden"
          >
            <div className="mt-4 flex flex-col space-y-1 px-6 pb-4">
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  variants={linkItemVariants}
                  initial="initial"
                  animate="animate"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 rounded-lg text-base font-medium text-secondary hover:text-primary dark:text-secondary dark:hover:text-primary hover:bg-background-subtle dark:hover:bg-surface-secondary transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}