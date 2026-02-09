"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Phone, MapPin, Instagram, Youtube } from "lucide-react";
import { CONTACT_CONTENT, SITE_CONFIG } from "@/lib/constants";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    // EmailJS configuration - You need to set this up
    // For now, we'll simulate the email sending
    try {
      // Uncomment and configure when EmailJS is set up
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   {
      //     from_name: formData.name,
      //     from_email: formData.email,
      //     phone: formData.phone,
      //     message: formData.message,
      //     to_email: SITE_CONFIG.email,
      //   },
      //   'YOUR_PUBLIC_KEY'
      // );

      // Simulate successful submission
      setTimeout(() => {
        setFormStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });

        // Reset after 5 seconds
        setTimeout(() => {
          setFormStatus("idle");
        }, 5000);
      }, 1500);
    } catch (error) {
      console.error("Email send error:", error);
      setFormStatus("error");

      // Reset error after 5 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 md:py-32 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundImage: [
              "radial-gradient(circle at 30% 40%, #FF3333 0%, transparent 50%)",
              "radial-gradient(circle at 70% 60%, #FF3333 0%, transparent 50%)",
              "radial-gradient(circle at 30% 40%, #FF3333 0%, transparent 50%)",
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
            GET IN TOUCH
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white">
            {CONTACT_CONTENT.heading}
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            {CONTACT_CONTENT.subheading}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                Let's start a <span className="text-[#FF3333]">conversation</span>
              </h3>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Email */}
                <motion.a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-xl border border-gray-800 hover:border-[#FF3333] transition-all duration-300 group"
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="w-12 h-12 bg-[#FF3333] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white">Email Us</h4>
                    <p className="text-gray-400">{SITE_CONFIG.email}</p>
                  </div>
                </motion.a>

                {/* Phone */}
                <motion.a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-xl border border-gray-800 hover:border-[#FF3333] transition-all duration-300 group"
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="w-12 h-12 bg-[#FF3333] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white">Call Us</h4>
                    <p className="text-gray-400">{SITE_CONFIG.phone}</p>
                  </div>
                </motion.a>

                {/* Social Media */}
                <div className="p-6 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-xl border border-gray-800">
                  <h4 className="text-lg font-semibold mb-4 text-white">Follow Our Journey</h4>
                  <div className="flex gap-4">
                    <motion.a
                      href={SITE_CONFIG.social.instagram.main}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#FF3333] rounded-full flex items-center justify-center hover:bg-[#ff4d4d] transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Instagram size={24} />
                    </motion.a>
                    <motion.a
                      href={SITE_CONFIG.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#FF3333] rounded-full flex items-center justify-center hover:bg-[#ff4d4d] transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Youtube size={24} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="p-8 md:p-10 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl border border-gray-800 space-y-6"
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:border-[#FF3333] focus:outline-none focus:ring-2 focus:ring-[#FF3333]/20 transition-all text-white"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:border-[#FF3333] focus:outline-none focus:ring-2 focus:ring-[#FF3333]/20 transition-all text-white"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:border-[#FF3333] focus:outline-none focus:ring-2 focus:ring-[#FF3333]/20 transition-all text-white"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                  Tell us about your project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:border-[#FF3333] focus:outline-none focus:ring-2 focus:ring-[#FF3333]/20 transition-all resize-none text-white"
                  placeholder="Share your vision, goals, and what you're looking to create..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={formStatus === "loading"}
                className="w-full px-8 py-4 bg-[#FF3333] text-white font-bold text-lg rounded-full hover:bg-[#ff4d4d] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={formStatus === "idle" ? { scale: 1.02 } : {}}
                whileTap={formStatus === "idle" ? { scale: 0.98 } : {}}
              >
                {formStatus === "loading" ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                ) : formStatus === "success" ? (
                  <>✓ Message Sent!</>
                ) : formStatus === "error" ? (
                  <>✗ Failed to Send</>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {formStatus === "success" && (
                <motion.p
                  className="text-green-400 text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you! We'll get back to you within 24 hours.
                </motion.p>
              )}

              {formStatus === "error" && (
                <motion.p
                  className="text-red-400 text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Oops! Something went wrong. Please try again or email us directly.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
