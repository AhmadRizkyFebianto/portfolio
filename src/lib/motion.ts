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

export const staggerItemSmall: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: easeOut,
    },
  },
};

export const staggerItemLong: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOutQuart,
    },
  },
};

export const fadeInUp: Variants = {
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

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export const imageReveal: Variants = {
  initial: { opacity: 0, scale: 1.05 },
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

export const parallaxUp: Variants = {
  initial: { y: 0 },
  animate: {
    y: -15,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const parallaxDown: Variants = {
  initial: { y: 0 },
  animate: {
    y: 15,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const hoverLiftLarge: Variants = {
  initial: { y: 0 },
  whileHover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
};

export const hoverScale: Variants = {
  initial: { scale: 1 },
  whileHover: {
    scale: 1.03,
    transition: {
      duration: 0.2,
    },
  },
};

export const hoverScaleSmall: Variants = {
  initial: { scale: 1 },
  whileHover: {
    scale: 1.01,
    transition: {
      duration: 0.2,
    },
  },
};

export const buttonLift: Variants = {
  initial: { y: 0 },
  whileHover: {
    y: -4,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
  whileTap: {
    scale: 0.97,
  },
};

export const tapSmall: Variants = {
  whileTap: {
    scale: 0.98,
  },
};

export const linkIconHover: Variants = {
  initial: { x: 0 },
  whileHover: {
    x: 4,
    transition: {
      duration: 0.2,
    },
  },
};

export const linkIconHoverReverse: Variants = {
  initial: { x: 0 },
  whileHover: {
    x: -4,
    transition: {
      duration: 0.2,
    },
  },
};

export const sectionReveal: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOutQuart,
    },
  },
};

export const sectionTitleReveal: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
      delay: 0.1,
    },
  },
};

export const cardReveal: Variants = {
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

export const formFieldReveal: Variants = {
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

export const chipReveal: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
  whileHover: {
    scale: 1.05,
  },
};

export const logoFade: Variants = {
  initial: { opacity: 0, y: -30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
};

export const navLinkReveal: Variants = {
  initial: { opacity: 0, x: -10 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      ease: easeOut,
    },
  },
};

export const navLinkRevealRight: Variants = {
  initial: { opacity: 0, x: 10 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      ease: easeOut,
    },
  },
};

export const scaleInSmall: Variants = {
  initial: { opacity: 0, scale: 0.97 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
};

export const projectCardHover: Variants = {
  whileHover: {
    y: -6,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
};