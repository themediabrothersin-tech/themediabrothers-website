// Animation variants for Framer Motion

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6 }
};

export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 400, damping: 17 }
};

export const rotateOnHover = {
  whileHover: { rotate: 5, scale: 1.05 },
  transition: { duration: 0.3 }
};

export const glowOnHover = {
  whileHover: {
    boxShadow: "0 0 30px rgba(255, 51, 51, 0.7)",
    transition: { duration: 0.3 }
  }
};

export const textReveal = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const cardHover = {
  rest: { scale: 1, rotateY: 0 },
  hover: {
    scale: 1.05,
    rotateY: 5,
    rotateX: 5,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300
    }
  }
};

export const expandOnHover = {
  whileHover: {
    scale: 1.02,
    transition: { duration: 0.3 }
  }
};

export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const infiniteScroll = {
  animate: {
    x: [0, -1920],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear"
      }
    }
  }
};

// Custom easing functions
export const customEasing = {
  smooth: [0.25, 0.1, 0.25, 1],
  bouncy: [0.68, -0.55, 0.265, 1.55],
  elastic: [0.175, 0.885, 0.32, 1.275]
};

// Page transition variants
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
};

// Cursor variants
export const cursorVariants = {
  default: {
    scale: 1,
    backgroundColor: "rgba(255, 51, 51, 0.9)"
  },
  hover: {
    scale: 1.5,
    backgroundColor: "rgba(255, 51, 51, 1)"
  },
  click: {
    scale: 0.8,
    backgroundColor: "rgba(255, 51, 51, 1)"
  }
};
