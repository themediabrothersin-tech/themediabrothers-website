"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { SERVICES } from "@/lib/constants";
import { fontClasses, cn } from "@/lib/fonts";

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Services with images
  const servicesWithImages = [
    {
      ...SERVICES[0],
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80",
      color: "#FF3333"
    },
    {
      ...SERVICES[1],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      color: "#FF6B6B"
    },
    {
      ...SERVICES[2],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
      color: "#FF3333"
    },
    {
      ...SERVICES[3],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      color: "#FF6B6B"
    },
    {
      ...SERVICES[5],
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
      color: "#FF3333"
    },
    {
      ...SERVICES[6],
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      color: "#FF6B6B"
    },
  ];

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const totalSteps = servicesWithImages.length;
      const stepSize = 1 / totalSteps;
      const newStep = Math.min(
        Math.floor(latest / stepSize),
        totalSteps - 1
      );
      setCurrentStep(newStep);
    });

    return () => unsubscribe();
  }, [scrollYProgress, servicesWithImages.length]);

  const currentService = servicesWithImages[currentStep];

  return (
    <section id="services" className="relative">
      {/* Spacer div to create scroll space */}
      <div
        ref={containerRef}
        style={{ height: `${servicesWithImages.length * 100}vh` }}
        className="relative"
      >
        {/* Fixed content */}
        <div className="sticky top-0 h-screen w-full bg-[#0A0A0A] overflow-hidden">
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

          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Content */}
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Section Label */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <p className={cn(fontClasses.handwrittenMedium, "text-[#FF3333] mb-2")}>
                      what we do
                    </p>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                      Our{" "}
                      <span className="text-[#FF3333]">Services</span>
                    </h2>
                  </motion.div>

                  {/* Service Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-12 h-1 rounded"
                        style={{ backgroundColor: currentService.color }}
                      />
                      <span className="text-gray-400 text-sm font-semibold tracking-wider">
                        {String(currentStep + 1).padStart(2, "0")} / {String(servicesWithImages.length).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {currentService.title}
                    </h3>
                  </motion.div>

                  {/* Service Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-300 text-lg leading-relaxed"
                  >
                    {currentService.description}
                  </motion.p>

                  {/* Progress Indicators */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex gap-2 pt-4"
                  >
                    {servicesWithImages.map((_, index) => (
                      <div
                        key={index}
                        className={cn(
                          "h-1 rounded-full transition-all duration-500",
                          index === currentStep
                            ? "w-12 bg-[#FF3333]"
                            : index < currentStep
                            ? "w-8 bg-[#FF3333]/50"
                            : "w-8 bg-gray-700"
                        )}
                      />
                    ))}
                  </motion.div>

                  {/* Scroll Hint */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-500 text-sm pt-4"
                  >
                    Scroll to explore all services
                  </motion.p>
                </motion.div>

                {/* Right Side - Image */}
                <motion.div
                  key={`image-${currentStep}`}
                  initial={{ opacity: 0, scale: 0.9, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative max-w-sm mx-auto"
                >
                  <div className="relative aspect-[5/4] rounded-2xl overflow-hidden">
                    {/* Glow Effect */}
                    <div
                      className="absolute -inset-4 rounded-2xl blur-3xl opacity-30"
                      style={{ backgroundColor: currentService.color }}
                    />
                    
                    {/* Image */}
                    <img
                      src={currentService.image}
                      alt={currentService.title}
                      className="relative w-full h-full object-cover rounded-2xl"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                    
                    {/* Number Badge */}
                    <div className="absolute top-6 right-6 bg-[#FF3333] text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl">
                      {String(currentStep + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full blur-3xl"
                    style={{ backgroundColor: currentService.color }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
