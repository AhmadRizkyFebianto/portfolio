'use client';

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

/**
 * Optimized image component with lazy loading, blur-up placeholder, and smooth fade-in
 */
interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  quality?: number;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
  blurHash?: string;
  aspectRatio?: string;
}

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  quality = 75,
  priority = false,
  loading = 'lazy',
  placeholder = 'empty',
  blurHash,
  aspectRatio,
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Handle image load success
  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Handle image load error
  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  // Generate placeholder style
  const getPlaceholderStyle = () => {
    if (placeholder === 'blur' && blurHash) {
      return {
        backgroundImage: `url("data:image/svg+xml;base64,${blurHash}")`,
      };
    }
    return {};
  };

  if (hasError) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-muted text-muted-foreground',
          aspectRatio || 'aspect-video',
          className
        )}
      >
        <span className="text-sm">Failed to load image</span>
      </div>
    );
  }

  return (
    <div
      className={cn('overflow-hidden bg-muted', aspectRatio || 'aspect-video', className)}
      style={{
        transition: 'height 0.3s ease',
        height: isLoaded ? 'auto' : undefined,
      }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          'h-full w-full object-cover transition-all duration-700 ease-out',
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105',
          priority ? ' blur-0' : ' blur-sm'
        )}
      />
    </div>
  );
};

export default OptimizedImage;