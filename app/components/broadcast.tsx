"use client";
import { useEffect, useRef, useState } from "react";

export default function BroadcastSignal({
  rings = 3,
  maxRadius = 100,
}: {
  rings?: number;
  maxRadius?: number;
}) {
  const [offset, setOffset] = useState(0);

  return (
    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid meet"
      >
        <g transform="translate(100,100)">
          {[...Array(rings)].map((_, i) => {
            const r = ((i + 1) / rings) * maxRadius;
            return (
              <circle
                key={i}
                r={r}
                fill="none"
                stroke="rgb(23, 37, 84)"
                strokeWidth={0.5}
                strokeDasharray={`${r * Math.PI * 1.5} ${r * Math.PI * 0.5}`}
                strokeDashoffset={(offset * (i + 1)) / rings}
                style={{ animation: "rotate 20s linear infinite", scale: 0.95 }}
              />
            );
          })}
          {/* central node */}
          <circle cx={0} cy={0} r={5} fill="rgb(23, 37, 84)" />
          <style jsx>{`
            @keyframes rotate {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}</style>
        </g>
      </svg>
    </div>
  );
}
