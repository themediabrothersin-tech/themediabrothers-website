"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SERVICES } from "@/lib/constants";

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-20 md:py-32 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Background Grid */}
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
            WHAT WE DO
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white">
            Our <span className="text-[#FF3333]">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            From strategy to execution, we provide end-to-end visual storytelling
            solutions that elevate your brand.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              className="relative group"
            >
              <div className="relative p-8 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl border border-gray-800 hover:border-[#FF3333] transition-all duration-300 h-full overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-50">
                  <img 
                    src={`https://images.unsplash.com/photo-${[
                      '1611162616305-c69b3fa7fbe0',
                      '1590650153855-d9e808231d41',
                      '1516321318423-f06f85e504b3',
                      '1557804506-669a67965ba0',
                      '1492691527719-9d1e07e534b4',
                      '1505740420928-5e560c06d30e',
                      '1542744173-8e7e53415bb0',
                      '1560179707-f14e90ef3623',
                      '1544367567-0f2fcb009e0b'
                    ][index % 9]}?w=600&q=80`}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/50 to-[#0A0A0A]/50" />
                
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF3333]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Counter */}
                  <motion.div
                    className="text-5xl md:text-6xl font-bold text-[#FF3333]/20 mb-4"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {String(service.id).padStart(2, "0")}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className="text-4xl md:text-5xl mb-4"
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-[#FF3333] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Decorative Corner */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 bg-[#FF3333]/10 blur-2xl"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  />
                </div>

                {/* Bottom Border Animation */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#FF3333] to-transparent"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-lg md:text-xl text-gray-400 mb-6">
            Ready to elevate your brand with premium storytelling?
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 bg-[#FF3333] text-white font-bold text-lg rounded-full hover:bg-[#ff4d4d] transition-all duration-300 glow-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Story →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
