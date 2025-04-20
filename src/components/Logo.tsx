
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  return (
    <div className={cn("relative", className)}>
      {isOnline ? (
        <img 
          src="/logo-2025.svg" 
          alt="Логотип 2025 года"
          className="h-full w-auto"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
        />
      ) : (
        <div className="flex items-center justify-center h-full bg-muted rounded-md p-2">
          <span className="text-xs text-muted-foreground">Логотип недоступен</span>
        </div>
      )}
      {isOnline && (
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      )}
    </div>
  );
};
