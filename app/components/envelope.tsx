"use client";

import { useEffect, useRef } from "react";

export default function Envelope() {
  const flapRef = useRef<SVGPolygonElement>(null);

  useEffect(() => {
    let t = 0;
    const animate = () => {
      t += 0.05;
      if (flapRef.current) {
        // Slight flap motion for subtle animation
        const dy = Math.sin(t) * 2;
        flapRef.current.setAttribute("points", `10,10 50,${30 + dy} 90,10`);
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
      <svg
        className="w-96 h-96"
        viewBox="0 0 100 100"
        fill="none"
        stroke="rgb(23, 37, 84)"
        strokeWidth="0.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(0,100)"
      >
        {/* Envelope body */}
        <rect x="10" y="10" width="80" height="60" />

        {/* Flap */}
        <polygon ref={flapRef} points="10,10 50,30 90,10" />

        {/* Optional line dividing flap */}
        <line x1="10" y1="10" x2="50" y2="40" />
        <line x1="90" y1="10" x2="50" y2="40" />
      </svg>
    </div>
  );
}
