"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { WHY_CHOOSE_US } from "@/lib/constants";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-32 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundImage: [
              "radial-gradient(circle at 20% 30%, #FF3333 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, #FF3333 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, #FF3333 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
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
            WHY US
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white">
            Why Choose <span className="text-[#FF3333]">The Media Brothers</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            We're not just another production company. Here's what makes us different.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((feature, index) => (
            <motion.div
              key={feature.number}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <motion.div
                className="relative p-8 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl border border-gray-800 hover:border-[#FF3333] transition-all duration-300 h-full overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
              >
                {/* Number Badge */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-[#FF3333] rounded-full mb-6"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <span className="text-2xl font-bold text-white">
                    {feature.number}
                  </span>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-[#FF3333] transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Glow Effect */}
                <motion.div
                  className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#FF3333]/20 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
