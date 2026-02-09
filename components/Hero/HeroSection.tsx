"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { HERO_CONTENT } from "@/lib/constants";
import { fontClasses, cn } from "@/lib/fonts";

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const words = HERO_CONTENT.mainHeading.split(" ");

  // Generate fixed positions for geometric shapes to avoid hydration mismatch
  const shapePositions = useMemo(
    () =>
      Array.from({ length: 5 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
      })),
    []
  );

  useEffect(() => {
    if (wordIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + (prev ? " " : "") + words[wordIndex]);
        setWordIndex(wordIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [wordIndex, words]);

  return (
    <section
      id="home"
      className="relative h-screen pt-24 flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, #FF3333 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, #FF3333 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, #FF3333 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, #FF3333 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {shapePositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 border border-[#FF3333]/20 rounded-full"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading with Typing Animation */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-tight mb-6">
            <span className="block text-white mb-2">We Don't Just Create Content.</span>
            <span className="block text-[#FF3333]">We Craft Stories That Build Brands.</span>
          </h1>

          {/* Subheading */}
          <motion.p
            className={cn(fontClasses.handwrittenMedium, "text-gray-300 mb-6 max-w-3xl mx-auto")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {HERO_CONTENT.subheading}
          </motion.p>

          {/* Marquee Tagline */}
          {/* <motion.div
            className="mb-12 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: [0, -1920] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {[...Array(10)].map((_, i) => (
                <span
                  key={i}
                  className="text-sm md:text-base text-[#FF3333] font-medium mx-8"
                >
                  {HERO_CONTENT.tagline}
                </span>
              ))}
            </motion.div>
          </motion.div> */}

          {/* CTAs */}
          {/* {/* <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-[#FF3333] text-white font-semibold text-base rounded-full hover:bg-[#ff4d4d] transition-all duration-300 glow-hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {HERO_CONTENT.cta.primary} →
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 border-2 border-white text-white font-semibold text-base rounded-full hover:bg-white hover:text-[#0A0A0A] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {HERO_CONTENT.cta.secondary}
            </motion.a>
          </motion.div> */}

          {/* Scroll Indicator */}
          {/* <motion.div
            className="absolute bottom-4 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown size={32} className="text-white" />
            </motion.div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
