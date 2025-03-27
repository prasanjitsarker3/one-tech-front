"use client";

import Image from "next/image";
import { ReactNode } from "react";

interface ExampleCarouselImageProps {
  src?: string;
  alt?: string;
  text?: string;
  width?: number;
  height?: number;
}

export default function ExampleCarouselImage({
  src = "/default-image.jpg", // Fallback image
  alt = "Carousel Image",
  text = "",
  width = 800,
  height = 400,
}: ExampleCarouselImageProps) {
  return (
    <div style={{ width: "100%", height: `${height}px`, position: "relative" }}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      {text && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
}