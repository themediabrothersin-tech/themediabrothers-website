"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Mail, Phone, ExternalLink } from "lucide-react";
import { SITE_CONFIG, DEVELOPER_CREDIT } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0A0A] text-white border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        {/* Brand Name - Centered and Large */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            THE <span className="text-[#FF3333]">MEDIA</span> BROTHERS
          </h2>
          <p className="text-sm md:text-base tracking-widest text-gray-400 mb-6">
            {SITE_CONFIG.tagline}
          </p>
          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
            {SITE_CONFIG.description}
          </p>
        </motion.div>

        {/* Contact & Social Media - Centered */}
        <motion.div
          className="flex flex-col items-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              <Mail size={18} />
              {SITE_CONFIG.email}
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              <Phone size={18} />
              {SITE_CONFIG.phone}
            </a>
          </div>

          {/* Social Media */}
          <div className="flex gap-4">
            <motion.a
              href={SITE_CONFIG.social.instagram.main}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF3333] transition-colors duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a
              href={SITE_CONFIG.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF3333] transition-colors duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Youtube size={20} />
            </motion.a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            © {currentYear} The Media Brothers. All rights reserved.
          </motion.p>

          {/* Developer Credit */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <span>A digital experience crafted by</span>
            <motion.a
              href={DEVELOPER_CREDIT.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#FF3333] hover:text-[#ff4d4d] transition-colors duration-300 flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              {DEVELOPER_CREDIT.name}
              <ExternalLink size={14} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#FF3333] to-transparent" />
    </footer>
  );
}
