"use client";

import { useState, useEffect } from "react";

export function useMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (browser environment)
    if (typeof window !== "undefined") {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth < breakpoint);
      };

      // Initial check
      checkIfMobile();

      // Add event listener
      window.addEventListener("resize", checkIfMobile);

      // Clean up
      return () => {
        window.removeEventListener("resize", checkIfMobile);
      };
    }
  }, [breakpoint]);

  return isMobile;
}
