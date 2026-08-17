// Performance optimization utilities

/**
 * Optimized image component props
 */
export interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  quality?: number;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
}

/**
 * Generate image URL with optimization parameters
 */
export const optimizeImage = (
  src: string,
  width?: number,
  height?: number,
  quality: number = 75
): string => {
  if (!src) return '';
  
  // If it's already a data URL or external URL with optimization, return as is
  if (src.startsWith('data:') || src.includes('optimize')) {
    return src;
  }

  // Add optimization parameters (this is a placeholder for actual optimization)
  const params = new URLSearchParams();
  params.set('q', quality.toString());
  if (width !== undefined) params.set('w', width.toString());
  if (height !== undefined) params.set('h', height.toString());

  return `${src}${src.includes('?') ? '&' : '?'}${params.toString()}`;
};

/**
 * Lazy load image with intersection observer
 */
export const useLazyImage = () => {
  const loadImage = (img: HTMLImageElement) => {
    if (img.dataset.src) {
      img.src = img.dataset.src;
      img.onload = () => {
        img.classList.remove('opacity-0');
        img.classList.add('opacity-100');
      };
    }
  };

  return { loadImage };
};

/**
 * Debounce utility for performance
 */
export const debounce = <T extends (...args: unknown[]) => T>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle utility for performance
 */
export const throttle = <T extends (...args: unknown[]) => T>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  let lastResult: T;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      lastResult = func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
    return lastResult;
  };
};