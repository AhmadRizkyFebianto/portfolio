/**
 * Design Tokens - Portfolio System
 * Production-quality design system for editorial/technical portfolio
 */

// Animation easing configurations for Framer Motion
// Using Framer's built-in easing constants for compatibility
const easeOut = [0.32, 0.72, 0, 1];
const easeIn = [0.76, 0, 0.24, 1];
const easeInOut = [0.76, 0, 0.24, 1];
const easeElastic = [0.68, -0.55, 0.265, 1.55];

// Color System
export const colors = {
  // Primary accent - deep charcoal for editorial feel
  primary: {
    DEFAULT: '#1a1a1a',
    light: '#2a2a2a',
    dark: '#0f0f0f',
  },
  // Secondary - warm off-white for editorial contrast
  secondary: {
    DEFAULT: '#f5f5f5',
    light: '#fafafa',
    dark: '#e0e0e0',
  },
  // Text colors
  text: {
    primary: '#1a1a1a',
    secondary: '#666666',
    muted: '#999999',
  },
  // Border colors
  border: {
    DEFAULT: '#e5e5e5',
    light: '#f0f0f0',
    dark: '#d0d0d0',
  },
  // Background colors
  background: {
    DEFAULT: '#ffffff',
    subtle: '#f9f9f9',
    dark: '#0a0a0a',
  },
  // Accent colors for tech stack
  accent: {
    tech: '#000000',
    portfolio: '#1a1a1a',
    enterprise: '#2a2a2a',
  },
} as const;

// Spacing System (8px base)
export const spacing = {
  none: 0,
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
  '4xl': 96,
  '5xl': 128,
  '6xl': 192,
} as const;

// Border Radius
export const borderRadius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 24,
  '3xl': 32,
  full: 9999,
} as const;

// Typography System
export const typography = {
  fontFamily: {
    sans: ['Geist Sans', 'Inter', 'system-ui', 'sans-serif'].join(', '),
    mono: ['Geist Mono', 'monospace'].join(', '),
  },
  fontSize: {
    xs: ['12px', { lineHeight: '16px' }],
    sm: ['14px', { lineHeight: '20px' }],
    base: ['16px', { lineHeight: '24px' }],
    lg: ['18px', { lineHeight: '28px' }],
    xl: ['20px', { lineHeight: '28px' }],
    '2xl': ['24px', { lineHeight: '32px' }],
    '3xl': ['30px', { lineHeight: '40px' }],
    '4xl': ['36px', { lineHeight: '48px' }],
    '5xl': ['48px', { lineHeight: '56px' }],
    '6xl': ['60px', { lineHeight: '68px' }],
    '7xl': ['72px', { lineHeight: '78px' }],
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
} as const;

// Panel Configuration
export const panel = {
  padding: {
    sm: spacing.lg,
    md: spacing['2xl'],
    lg: spacing['3xl'],
    xl: spacing['4xl'],
  },
  borderRadius: {
    sm: borderRadius.lg,
    md: borderRadius.xl,
    lg: borderRadius['2xl'],
    xl: borderRadius['3xl'],
  },
  border: '1px solid #e5e5e5',
  shadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
} as const;

// Animation Configuration
export const animation = {
  duration: {
    fast: 0.15,
    normal: 0.3,
    slow: 0.5,
    verySlow: 0.8,
  },
  ease: {
    out: easeOut,
    in: easeIn,
    inOut: easeInOut,
    elastic: easeElastic,
  },
} as const;

// Breakpoints
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Z-Index Scale
export const zIndex = {
  dropdown: 1000,
  fixed: 1020,
  modal: 1040,
  tooltip: 1060,
  hero: 10,
  nav: 20,
  panel: 30,
} as const;

// Default export for easy import
export default {
  colors,
  spacing,
  borderRadius,
  typography,
  panel,
  animation,
  breakpoints,
  zIndex,
};