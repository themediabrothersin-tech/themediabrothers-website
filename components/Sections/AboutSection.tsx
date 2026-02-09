"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ABOUT_CONTENT } from "@/lib/constants";
import { fontClasses, cn } from "@/lib/fonts";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-32 bg-white text-[#0A0A0A] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #FF3333 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Handwritten Accent */}
        <motion.p
          className={cn(fontClasses.handwrittenLarge, "text-gray-700 mb-4")}
          variants={itemVariants}
        >
          our story
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          className={cn(fontClasses.sectionHeading, "mb-12 text-left")}
          variants={itemVariants}
        >
          {ABOUT_CONTENT.heading.split(" ").map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-3 md:mr-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {word === "Language." ? (
                <span className="text-[#FF3333]">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - First Paragraph */}
          <motion.div variants={itemVariants}>
            <p className={cn(fontClasses.bodyLarge, "mb-6")}>
              {ABOUT_CONTENT.paragraph1}
            </p>
            <p className={fontClasses.bodyLarge}>
              {ABOUT_CONTENT.paragraph2}
            </p>
          </motion.div>

          {/* Right Column - Vision Card */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="relative p-8 md:p-10 bg-[#0A0A0A] text-white rounded-2xl overflow-hidden group"
              whileHover={{ scale: 1.02, rotateY: 2, rotateX: 2 }}
              transition={{ duration: 0.3 }}
            >
              {/* YouTube Video Background */}
              <div className="absolute inset-0 opacity-70 overflow-hidden">
                <iframe
                  className="absolute"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0&modestbranding=1"
                  allow="autoplay; encrypted-media"
                  style={{ 
                    pointerEvents: 'none', 
                    width: '300%',
                    height: '100%',
                    left: '-100%',
                    top: '0'
                  }}
                />
              </div>
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-[#0A0A0A]/20" />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF3333]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#FF3333]">
                  Our Vision
                </h3>

                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  To help brands and individuals build trust, authority, and
                  identity through authentic visual storytelling.
                </p>

                {/* Decorative Element */}
                <motion.div
                  className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FF3333]/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          className="mt-20 text-center"
          variants={itemVariants}
        >
          <p className="font-handwriting text-3xl md:text-4xl lg:text-5xl text-[#FF3333]">
            "People don't connect with brands —<br />they connect with stories."
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
