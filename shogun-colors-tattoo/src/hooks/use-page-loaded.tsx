import { useState, useEffect } from "react";

function usePageLoaded() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dacă pagina e deja încărcată (ex. în cazul rerender-ului rapid)
    if (document.readyState === "complete") {
      setLoading(false);
      return;
    }

    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return loading;
}

export default usePageLoaded;
