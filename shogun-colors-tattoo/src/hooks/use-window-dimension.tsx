import { useEffect, useState } from "react";

export const getWindowDimensions = () => {
  if (typeof window === "undefined") {
    return { width: 0, height: 0 };
  }

  const { innerWidth: width = 0, innerHeight: height = 0 } = window;
  return { width, height };
};

export const useWindowDimensions = () => {
  const isClient = typeof window !== "undefined";

  const [dimensions, setDimensions] = useState(() =>
    isClient ? { width: 0, height: 0 } : { width: 0, height: 0 }
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      const next = getWindowDimensions();
      setDimensions(next);
      setIsLoading(false);
    };

    // Set initial dimensions on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  return { ...dimensions, isLoading };
};
