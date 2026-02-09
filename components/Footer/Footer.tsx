"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Mail, Phone, ExternalLink } from "lucide-react";
import { SITE_CONFIG, DEVELOPER_CREDIT } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0A0A] text-white border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                THE <span className="text-[#FF3333]">MEDIA</span> BROTHERS
              </h3>
              <p className="text-sm tracking-widest text-gray-400 mb-6">
                {SITE_CONFIG.tagline}
              </p>
              <p className="text-gray-400 leading-relaxed max-w-md">
                {SITE_CONFIG.description}
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4 text-[#FF3333]">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "Process", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-[#FF3333] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4 text-[#FF3333]">Get In Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                  <Mail size={16} />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                  <Phone size={16} />
                  {SITE_CONFIG.phone}
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex gap-3">
                <motion.a
                  href={SITE_CONFIG.social.instagram.main}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF3333] transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram size={18} />
                </motion.a>
                <motion.a
                  href={SITE_CONFIG.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF3333] transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Youtube size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

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

        {/* Extra Credit Line */}
        <motion.div
          className="mt-4 text-center text-xs text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>
            Designed with 💫 and built with cutting-edge technology to deliver a
            premium digital experience.
          </p>
        </motion.div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#FF3333] to-transparent" />
    </footer>
  );
}
