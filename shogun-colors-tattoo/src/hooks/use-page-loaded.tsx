import { useState, useEffect } from "react";

function usePageLoaded() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Dacă pagina e deja încărcată (ex. în cazul rerender-ului rapid)
    if (document.readyState === "complete") {
      setLoaded(true);
      return;
    }

    const handleLoad = () => {
      setLoaded(true);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return loaded;
}

export default usePageLoaded;
