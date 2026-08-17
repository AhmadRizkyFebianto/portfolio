import { Variants } from 'framer-motion';

// Easing curves - Framer Motion Bezier curves
export const easeOut = [0.25, 1, 0.5, 1] as const;
export const easeInOut = [0.4, 0, 0.2, 1] as const;
export const easeOutQuart = [0.165, 0.84, 0.44, 1] as const;
export const easeInQuart = [0.76, 0, 0.24, 1] as const;

// Animation variants - centralized motion system

export const fadeUp: Variants = {
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

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

export const staggerContainer: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
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

export const imageReveal: Variants = {
  initial: { opacity: 0, scale: 1.1 },
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

export const parallax: Variants = {
  initial: { y: 0 },
  animate: {
    y: -20,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: easeInQuart,
    },
  },
};

export const hoverLift: Variants = {
  initial: { y: 0 },
  whileHover: {
    y: -5,
    transition: {
      duration: 0.2,
      ease: easeOut,
    },
  },
};

export const magneticButton: Variants = {
  initial: { scale: 1 },
  whileHover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
  whileTap: {
    scale: 0.95,
  },
};

// Panel variants
export const panelVariants: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOutQuart,
    },
  },
};

export const panelStaggerContainer: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Project card variants
export const projectCardVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOutQuart,
    },
  },
  whileHover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
};

// Text reveal variants
export const textReveal: Variants = {
  initial: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
  animate: {
    opacity: 1,
    clipPath: 'inset(0 0% 0 0)',
    transition: {
      duration: 0.8,
      ease: easeInOut,
    },
  },
};

// Scale variants
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};