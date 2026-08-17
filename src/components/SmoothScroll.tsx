'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface SmoothScrollProps {
  children: React.ReactNode;
}

interface LenisOptions {
  lerp?: number;
  smoothTouch?: boolean;
  smooth?: boolean;
  wheelMultiplier?: number;
  syncTouch?: boolean;
  syncTouchLerp?: number;
  touchInertiaMultiplier?: number;
  duration?: number;
  easing?: (t: number) => number;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const lenisOptions: LenisOptions = {
      lerp: 0.1,
      smoothTouch: false,
      smooth: true,
      wheelMultiplier: 1,
      syncTouch: true,
      syncTouchLerp: 0.1,
      touchInertiaMultiplier: 1.2,
    };

    const lenis = new Lenis(lenisOptions);

    lenisRef.current = lenis;

    const update = (time: number) => {
      lenisRef.current?.raf(time);
    };

    const loop = (time: number) => {
      update(time);
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    lenis.start();

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  return <>{children}</>;
}