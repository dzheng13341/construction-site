"use client";

import { useState } from "react";
import Image from "next/image";

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-xl bg-neutral-200 select-none">
      {/* AFTER image (base layer, never moves) */}
      <Image
        src="/images/built_int.png"
        alt="After commercial construction"
        fill
        className="object-cover"
        sizes="(min-width: 768px) 50vw, 100vw"
      />

      {/* BEFORE image (clipped, not resized) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        <Image
          src="/images/plan_int.png"
          alt="Before commercial construction"
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-md"
        style={{ left: `${position}%` }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-black rounded-full shadow flex items-center justify-center text-sm font-bold z-20 pointer-events-none"
        style={{ left: `calc(${position}% - 16px)` }}
      >
        ⇆
      </div>

      {/* Slider control */}
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
      />

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 text-sm rounded">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 text-sm rounded">
        After
      </div>
    </div>
  );
}
