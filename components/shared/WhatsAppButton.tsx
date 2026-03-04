"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Remove special characters from phone number
    const phoneNumber = SITE_CONFIG.phone.replace(/[^0-9]/g, "");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi! I'd like to know more about your services.`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#FF3333] hover:bg-[#ff4d4d] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Pulse Animation */}
      <motion.div
        className="absolute inset-0 bg-[#FF3333] rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* WhatsApp Icon */}
      <MessageCircle 
        size={28} 
        className="relative z-10 group-hover:rotate-12 transition-transform duration-300" 
        fill="white"
      />

      {/* Tooltip */}
      <motion.div
        className="absolute right-full mr-3 px-4 py-2 bg-[#0A0A0A] text-white text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={{ x: 10, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
      >
        Chat with us on WhatsApp
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-[#0A0A0A] rotate-45" />
      </motion.div>
    </motion.button>
  );
}
