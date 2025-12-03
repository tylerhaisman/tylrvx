"use client";
import { useEffect, useRef, useState } from "react";

interface StarData {
  x: number;
  y: number;
  size: number;
  twinkle: boolean;
  vx: number;
  vy: number;
}

export default function Constellation({ count = 60 }: { count?: number }) {
  const [stars, setStars] = useState<StarData[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);

  // Generate stars
  useEffect(() => {
    const generated: StarData[] = [];
    for (let i = 0; i < count; i++) {
      generated.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        twinkle: Math.random() > 0.7,
        vx: (Math.random() - 0.5) * 0.15, // gentle drifting
        vy: (Math.random() - 0.5) * 0.15,
      });
    }
    setStars(generated);
  }, [count]);

  // Animate fluid movement + cursor attraction
  useEffect(() => {
    const animate = () => {
      setStars((prev) =>
        prev.map((s) => {
          let x = s.x + s.vx;
          let y = s.y + s.vy;

          // bounce edges
          if (x < 0 || x > 100) s.vx *= -1;
          if (y < 0 || y > 100) s.vy *= -1;

          return { ...s, x, y };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current!);
  }, []);

  // Track cursor in %
  function handleMouseMove(e: React.MouseEvent) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 100;
    mouseRef.current.y = ((e.clientY - rect.top) / rect.height) * 100;
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="absolute top-0 left-0 w-full h-full"
      style={{ pointerEvents: "auto" }}
    >
      {/* CONSTELLATION LINES */}
      <svg
        className="absolute inset-0"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        {stars.map((a, i) =>
          stars.map((b, j) => {
            if (i >= j) return null;
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            if (Math.sqrt(dx * dx + dy * dy) < 18) {
              return (
                <line
                  key={`${i}-${j}`}
                  x1={`${a.x}%`}
                  y1={`${a.y}%`}
                  x2={`${b.x}%`}
                  y2={`${b.y}%`}
                  stroke="rgb(23, 37, 84)"
                  strokeWidth="1"
                  strokeOpacity="0.8"
                />
              );
            }
            return null;
          })
        )}
      </svg>

      <style jsx>{`
        @keyframes twinkle {
          0% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}
