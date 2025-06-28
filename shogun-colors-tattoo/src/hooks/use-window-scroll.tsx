import { useState, useEffect } from "react";

function useWindowScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0); // Poziția anterioară

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      // Setăm valoarea pentru dacă se dă scroll în sus sau nu
      setIsScrollingUp(currentScrollPosition < prevScrollPosition);

      // Actualizăm poziția curentă și cea anterioară
      setScrollPosition(currentScrollPosition);
      setPrevScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition]); // Dependență de poziția anterioară a scroll-ului

  return {
    scrollPosition,
    isScrollingUp,
  };
}

export default useWindowScroll;
