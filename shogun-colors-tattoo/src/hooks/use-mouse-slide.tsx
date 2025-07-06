import { useEffect, useRef, useState } from "react";

type Slide = {
  xSlide: -1 | 0 | 1;
  ySlide: -1 | 0 | 1;
};

export function useMouseSlide(targetElement: HTMLElement | null): Slide {
  const [slide, setSlide] = useState<Slide>({ xSlide: 0, ySlide: 0 });
  const isPointerDown = useRef(false);
  const prevCoords = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    if (!targetElement) return;

    const getDirection = (prev: number, current: number): -1 | 0 | 1 => {
      if (current - prev >= 1) return 1;
      if (prev - current >= 1) return -1;
      return 0;
    };

    const handlePointerDown = (x: number, y: number) => {
      isPointerDown.current = true;
      prevCoords.current = { x, y };
    };

    const handlePointerMove = (x: number, y: number) => {
      if (!isPointerDown.current) return;

      const dx = getDirection(prevCoords.current.x, x);
      const dy = getDirection(prevCoords.current.y, y);

      if (dx !== 0 || dy !== 0) {
        prevCoords.current = { x, y };
        setSlide({ xSlide: dx, ySlide: dy });
      }
    };

    const handlePointerUp = () => {
      isPointerDown.current = false;
      setSlide({ xSlide: 0, ySlide: 0 });
    };

    // Mouse
    const handleMouseDown = (e: MouseEvent) =>
      handlePointerDown(e.clientX, e.clientY);
    const handleMouseMove = (e: MouseEvent) =>
      handlePointerMove(e.clientX, e.clientY);

    // Touch
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) handlePointerDown(touch.clientX, touch.clientY);
    };
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) handlePointerMove(touch.clientX, touch.clientY);
    };

    // Add listeners
    targetElement.addEventListener("mousedown", handleMouseDown);
    targetElement.addEventListener("touchstart", handleTouchStart);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    window.addEventListener("mouseup", handlePointerUp);
    window.addEventListener("touchend", handlePointerUp);
    window.addEventListener("touchcancel", handlePointerUp);

    return () => {
      targetElement.removeEventListener("mousedown", handleMouseDown);
      targetElement.removeEventListener("touchstart", handleTouchStart);

      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);

      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchend", handlePointerUp);
      window.removeEventListener("touchcancel", handlePointerUp);
    };
  }, [targetElement]);

  return slide;
}
