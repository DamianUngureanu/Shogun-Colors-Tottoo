import { useEffect, useState } from "react";

export const getWindowDimensions = () => {
  if (typeof window === "undefined") {
    return { width: 0, height: 0 };
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

export const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let frameId: number;

    const handleResize = () => {
      // Debounce cu requestAnimationFrame pentru stabilitate
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        setDimensions(getWindowDimensions());
        setIsLoading(false);
      });
    };

    // Asigură-te că layout-ul e complet
    const onLoad = () => {
      handleResize();

      // Ascultă redimensionările ulterioare
      window.addEventListener("resize", handleResize);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", onLoad);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return { ...dimensions, isLoading };
};
