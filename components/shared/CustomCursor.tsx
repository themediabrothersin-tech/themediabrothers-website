"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Trail {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [trails, setTrails] = useState<Trail[]>([]);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Fast, tight control for main cursor
  const springConfig = { damping: 25, stiffness: 500, mass: 0.3 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (isMobile) return;

    let frameCount = 0;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);

      // Create trail less frequently for smoother effect
      frameCount++;
      if (frameCount % 3 === 0) {
        const newTrail = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
        };
        setTrails((prev) => [...prev, newTrail]);

        // Remove trail after animation
        setTimeout(() => {
          setTrails((prev) => prev.filter((t) => t.id !== newTrail.id));
        }, 800);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button" ||
        target.style.cursor === "pointer";

      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("resize", checkMobile);
    };
  }, [cursorX, cursorY, isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Smooth Trail Effect with Glitter */}
      {trails.map((trail) => (
        <motion.div
          key={trail.id}
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: trail.x - 12,
            top: trail.y - 12,
          }}
          initial={{ scale: 0.8, opacity: 0.7 }}
          animate={{ 
            scale: 0,
            opacity: 0,
          }}
          transition={{ 
            duration: 1.2,
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          {/* Glittery particle */}
          <div className="relative w-6 h-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF3333] to-[#ff6666] blur-md opacity-70" />
            <div className="absolute inset-1 rounded-full bg-white blur-sm opacity-40 animate-pulse" />
          </div>
        </motion.div>
      ))}

      {/* Main Cursor */}
      <motion.div
        className="custom-cursor cursor-dot fixed pointer-events-none z-[9999]"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        }}
        transition={{
          scale: { duration: 0.15, ease: "easeOut" },
        }}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
        >
          {/* Outer circle with glow */}
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="#FF3333"
            strokeWidth="1.5"
            fill="none"
            opacity="0.9"
          />
          {/* Inner circle */}
          <circle
            cx="20"
            cy="20"
            r="13"
            stroke="#FF3333"
            strokeWidth="1"
            fill="none"
            opacity="0.7"
          />
          {/* Center square with glow */}
          <rect
            x="14"
            y="14"
            width="12"
            height="12"
            rx="2"
            fill="#FF3333"
            opacity="0.9"
          />
          {/* Small sparkle stars */}
          <circle cx="20" cy="20" r="1" fill="#FFFFFF" opacity="0.9" />
        </svg>
      </motion.div>
    </>
  );
}
