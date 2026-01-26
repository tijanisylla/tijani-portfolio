import React, { useState, ImgHTMLAttributes } from "react";
import LoadingSpinner from "./LoadingSpinner";

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  placeholder,
  className = "",
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg-secondary)]">
          <LoadingSpinner size="sm" />
        </div>
      )}
      {hasError ? (
        <div className="w-full h-full bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-muted)]">
          <span>Image not available</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;
