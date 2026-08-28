'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { useReducedMotion } from '@/lib/use-reduced-motion';
import { motion } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  once?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  disableOnMobile?: boolean;
}

/**
 * Scroll reveal component that triggers animation when element enters viewport
 */
export default function Reveal({
  children,
  className = '',
  threshold = 0.1,
  once = true,
  direction = 'up',
  delay = 0,
  disableOnMobile = true,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  // Check if on mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // If reduced motion is preferred, skip animation
  if (reducedMotion) {
    return (
      <div className={className} ref={elementRef}>
        {children}
      </div>
    );
  }

  // If on mobile and disableOnMobile is true, skip animation
  // (Keep animation for mobile but make it simpler)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, once]);

  // Animation variants based on direction
  const variants = {
    up: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
    },
    down: {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
    },
    left: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
    },
    right: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
    },
  };

  return (
    <motion.div
      className={className}
      ref={elementRef}
      variants={variants[direction]}
      initial="initial"
      animate={isVisible ? 'animate' : 'initial'}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.165, 0.84, 0.44, 1],
      }}
    >
      {children}
    </motion.div>
  );
}