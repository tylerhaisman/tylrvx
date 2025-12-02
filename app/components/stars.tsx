"use client";
import { useEffect, useState } from "react";
import Star from "../../public/assets/images/star.png";
import Image from "next/image";

interface StarData {
  x: number;
  y: number;
  size: number;
  twinkle: boolean;
}

export default function Stars({ count = 100 }: { count?: number }) {
  const [stars, setStars] = useState<StarData[]>([]);

  useEffect(() => {
    const generatedStars: StarData[] = [];
    for (let i = 0; i < count; i++) {
      generatedStars.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1, // 1px - 3px
        twinkle: Math.random() > 0.7, // 30% chance to twinkle
      });
    }
    setStars(generatedStars);
  }, [count]);

  return (
    <div className="absolute top-0 left-0 w-full h-2/5 pointer-events-none overflow-hidden">
      {stars.map((star, index) => (
        <Image
          key={index}
          src={Star}
          alt="star"
          width={star.size * 4}
          height={star.size * 4}
          className={`absolute`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animation: star.twinkle
              ? `twinkle ${Math.random() * 2 + 1}s infinite alternate`
              : "none",
          }}
        />
      ))}
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
