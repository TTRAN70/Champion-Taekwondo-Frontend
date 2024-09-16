"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function TaekwondoLoader() {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["bg-white", "bg-white", "bg-white"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-64 h-64">
        <div
          className={`absolute inset-0 rounded-full transition-colors duration-1000 ease-in-out ${colors[colorIndex]}`}
          style={{
            clipPath: "circle(50% at 50% 50%)",
          }}
        ></div>
        <Image
          src="/ctkdlogo.png"
          alt="U.S. Martial Arts Athletes Federation Logo"
          className="absolute inset-0 w-full h-full animate-pulse"
          style={{ objectFit: "cover" }}
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
