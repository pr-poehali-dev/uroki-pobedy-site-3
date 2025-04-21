
import { useState, useEffect } from 'react';
import { useOnlineStatus } from '@/hooks/use-online-status';

interface OnlineImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
}

const OnlineImage = ({ src, alt, fallbackSrc = '/placeholder.svg', className = '' }: OnlineImageProps) => {
  const isOnline = useOnlineStatus();
  const [imageSrc, setImageSrc] = useState<string>(fallbackSrc);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (isOnline) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
      img.onerror = () => {
        setImageSrc(fallbackSrc);
        setIsLoaded(true);
      };
    } else {
      setImageSrc(fallbackSrc);
      setIsLoaded(true);
    }
  }, [isOnline, src, fallbackSrc]);

  return (
    <div className="relative">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-pulse w-full h-full bg-gray-200"></div>
        </div>
      )}
      <img 
        src={imageSrc} 
        alt={alt} 
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`} 
      />
      {isOnline && isLoaded && imageSrc !== fallbackSrc && (
        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
          Live
        </div>
      )}
    </div>
  );
};

export default OnlineImage;
