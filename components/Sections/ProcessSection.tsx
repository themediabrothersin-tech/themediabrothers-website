"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { PROCESS_STEPS } from "@/lib/constants";

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.section
      id="process"
      ref={ref}
      className="relative py-20 md:py-32 bg-white overflow-hidden"
      style={{ opacity, scale }}
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

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block text-[#FF3333] font-medium text-sm md:text-base tracking-widest mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            HOW WE WORK
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-[#0A0A0A]">
            Our <span className="text-[#FF3333]">Process</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            From concept to delivery, every project follows a proven framework that
            ensures quality, consistency, and results.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line (Mobile) */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#FF3333]/30 md:hidden" />

          {/* Process Steps */}
          <div className="space-y-12 md:space-y-20">
            {PROCESS_STEPS.map((step, index) => {
              const stepRef = useRef(null);
              const stepInView = useInView(stepRef, { once: true, amount: 0.5 });
              
              return (
                <motion.div
                  key={step.number}
                  ref={stepRef}
                  className="relative"
                  initial={{ opacity: 0, y: 100, scale: 0.8 }}
                  animate={stepInView ? { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    rotate: [0, 2, -2, 0]
                  } : {}}
                  transition={{ 
                    delay: index * 0.15, 
                    duration: 0.8,
                    ease: "easeOut",
                    rotate: {
                      duration: 0.6,
                      ease: "easeInOut"
                    }
                  }}
                >
                <div
                  className={`flex flex-col md:flex-row items-start gap-8 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Step Number Circle */}
                  <div className="relative flex-shrink-0">
                    <motion.div
                      className="w-16 h-16 md:w-20 md:h-20 bg-[#FF3333] rounded-full flex items-center justify-center z-10 relative shadow-xl"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={stepInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ 
                        delay: index * 0.15 + 0.2,
                        duration: 0.6,
                        type: "spring",
                        bounce: 0.5
                      }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                    >
                      <span className="text-2xl md:text-3xl font-bold text-white">
                        {step.number}
                      </span>
                    </motion.div>

                    {/* Connecting Line (Desktop) */}
                    {index < PROCESS_STEPS.length - 1 && (
                      <motion.div
                        className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-20 bg-[#FF3333]/30"
                        initial={{ height: 0 }}
                        animate={isInView ? { height: 80 } : {}}
                        transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                      />
                    )}
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    animate={stepInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      delay: index * 0.15 + 0.3,
                      duration: 0.7,
                      type: "spring",
                      damping: 20
                    }}
                    whileHover={{ scale: 1.03, y: -5 }}
                  >
                    <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-200 hover:border-[#FF3333] hover:shadow-2xl transition-all duration-300">
                      {/* Title */}
                      <motion.h3 
                        className="text-2xl md:text-3xl font-bold mb-3 text-[#0A0A0A]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={stepInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.15 + 0.5 }}
                      >
                        {step.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p 
                        className="text-base md:text-lg text-gray-700 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={stepInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.15 + 0.6 }}
                      >
                        {step.description}
                      </motion.p>
                    </div>
                  </motion.div>

                  {/* Spacer for alternating layout (Desktop) */}
                  <div className="hidden md:block flex-1" />
                </div>
              </motion.div>
            );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
        >
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 bg-[#FF3333] text-white font-bold text-lg rounded-full hover:bg-[#ff4d4d] transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.1, boxShadow: "0 20px 40px rgba(255, 51, 51, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Ready to Start? Let's Talk →
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
