"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fontClasses, cn } from "@/lib/fonts";

export default function TrustedBrandsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Dummy brand logos - replace with actual client logos later
  const brands = [
    { name: "Brand 1", width: 120 },
    { name: "Brand 2", width: 140 },
    { name: "Brand 3", width: 130 },
    { name: "Brand 4", width: 150 },
    { name: "Brand 5", width: 125 },
    { name: "Brand 6", width: 135 },
    { name: "Brand 7", width: 145 },
    { name: "Brand 8", width: 120 },
  ];

  // Duplicate brands for seamless scrolling
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#FF3333 1px, transparent 1px), linear-gradient(90deg, #FF3333 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            className={cn(fontClasses.sectionHeading, "mb-4 text-white")}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Trusted by{" "}
            <span className="text-[#FF3333]">Industry Leaders</span>
          </motion.h2>

          <motion.p
            className={cn(fontClasses.bodyLarge, "text-gray-300 mb-2")}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            and 10+ brands
          </motion.p>

          <motion.p
            className={cn(fontClasses.handwrittenLarge, "text-[#FF3333]")}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            And we're just getting started.
          </motion.p>
        </div>

        {/* Scrolling Logos */}
        <div className="relative w-full overflow-hidden py-8">
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />

          {/* Scrolling Container */}
          <motion.div
            className="flex gap-12 items-center"
            animate={{
              x: [0, -1920], // Adjust based on total width
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300 border border-gray-700"
                style={{ width: `${brand.width}px`, height: "80px" }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-400 mb-1">
                      {brand.name.split(" ")[1]}
                    </div>
                    <div className="text-xs text-gray-500 font-semibold">
                      LOGO
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
