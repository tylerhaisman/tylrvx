"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    // Track hover on links and buttons
    const interactiveEls = document.querySelectorAll(
      "a, button, [data-cursor]"
    );
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const size = hovering ? 30 : 48; // shrink when hovering (8px vs 48px)

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 rounded-full 
                 bg-white mix-blend-difference transition-all duration-150 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(${pos.x - size / 2}px, ${pos.y - size / 2}px)`,
      }}
    />
  );
}
