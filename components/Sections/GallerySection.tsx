"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, X, Image as ImageIcon } from "lucide-react";

// Sample gallery items - Replace with actual images from Instagram/YouTube
const GALLERY_ITEMS = [
  { id: 1, type: "image", url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80", title: "Brand Story", category: "Corporate" },
  { id: 2, type: "video", url: "https://videos.pexels.com/video-files/5377682/5377682-hd_1920_1080_30fps.mp4", thumbnail: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800&q=80", title: "Podcast Episode", category: "Podcast" },
  { id: 3, type: "image", url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80", title: "Product Shoot", category: "Product" },
  { id: 4, type: "image", url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80", title: "Personal Brand", category: "Branding" },
  { id: 5, type: "video", url: "https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4", thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80", title: "Reel Content", category: "Reels" },
  { id: 6, type: "image", url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80", title: "Vox Pop", category: "Reels" },
  { id: 7, type: "image", url: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80", title: "Corporate Film", category: "Corporate" },
  { id: 8, type: "video", url: "https://videos.pexels.com/video-files/3255275/3255275-hd_1920_1080_25fps.mp4", thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80", title: "UGC Content", category: "Reels" },
  { id: 9, type: "image", url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80", title: "Yoga Frame", category: "Photography" },
];

const CATEGORIES = ["All", "Corporate", "Podcast", "Reels", "Product", "Branding", "Photography"];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <>
      <section
        id="gallery"
        ref={ref}
        className="relative py-20 md:py-32 bg-white overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #FF3333 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 md:mb-16"
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
              OUR WORK
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-[#0A0A0A]">
              Bind The <span className="text-[#FF3333]">Seen</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              A collection of stories we've crafted, moments we've captured, and
              brands we've brought to life.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {CATEGORIES.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#FF3333] text-white shadow-lg"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square bg-gray-200"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => setLightboxItem(item)}
              >
                {/* Image/Video Thumbnail */}
                <div className="absolute inset-0">
                  {item.type === "video" ? (
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img 
                      src={item.url} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{item.category}</p>
                  </div>

                  {/* Play Button for Videos */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-16 h-16 bg-[#FF3333] rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.2 }}
                      >
                        <Play size={28} className="text-white ml-1" fill="white" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Want to see your brand here?
            </p>
            <motion.a
              href="#contact"
              className="inline-block px-8 py-4 bg-[#FF3333] text-white font-bold text-lg rounded-full hover:bg-[#ff4d4d] transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Create Together →
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <motion.div
          className="fixed inset-0 z-[9998] bg-black/95 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightboxItem(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-[#FF3333] transition-colors"
            onClick={() => setLightboxItem(null)}
          >
            <X size={32} />
          </button>

          {/* Content */}
          <motion.div
            className="max-w-5xl w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxItem.type === "video" ? (
              <video 
                src={lightboxItem.url}
                controls
                autoPlay
                className="w-full aspect-video bg-black rounded-lg"
              />
            ) : (
              <img 
                src={lightboxItem.url}
                alt={lightboxItem.title}
                className="w-full rounded-lg"
              />
            )}
            <div className="mt-4 text-white">
              <h3 className="text-2xl font-bold mb-2">{lightboxItem.title}</h3>
              <p className="text-gray-400">{lightboxItem.category}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
