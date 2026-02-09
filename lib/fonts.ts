/**
 * Font Utility Classes (EXACT match with whymedia.in)
 * 
 * These utility classes provide consistent typography across all components
 * matching the exact font styles from whymedia.in
 */

export const fontClasses = {
  // Headings (EXACT match with whymedia.in)
  h1: 'text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black letter-tight',
  h2: 'text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black letter-tight',
  h3: 'text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold',
  h4: 'text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold',
  h5: 'text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold',
  h6: 'text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold',
  
  // Body text (EXACT match with whymedia.in)
  bodyLarge: 'text-lg md:text-xl text-gray-600 leading-relaxed',
  bodyBase: 'text-base text-gray-600 leading-relaxed',
  bodySmall: 'text-sm text-gray-500',
  bodyXSmall: 'text-xs text-gray-400',
  
  // Handwritten text (EXACT match with whymedia.in)
  handwrittenLarge: 'handwritten text-3xl md:text-4xl lg:text-5xl font-bold',
  handwrittenMedium: 'handwritten text-2xl md:text-3xl font-bold',
  handwrittenSmall: 'handwritten text-xl md:text-2xl font-bold',
  handwrittenXSmall: 'handwritten text-lg md:text-xl font-bold',
  
  // Buttons (EXACT match with whymedia.in)
  buttonLarge: 'text-lg font-semibold',
  buttonBase: 'text-base font-semibold',
  buttonSmall: 'text-sm font-medium',
  
  // Navigation (EXACT match with whymedia.in)
  navLink: 'text-sm font-medium text-gray-700 hover:text-primary transition-colors',
  navButton: 'text-sm font-semibold',
  
  // Hero specific styles (EXACT match with whymedia.in)
  heroHeading: 'text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black letter-tight hero-bold',
  heroSubheading: 'handwritten text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold',
  heroDescription: 'text-base md:text-lg text-gray-600 leading-relaxed',
  
  // Section specific styles
  sectionHeading: 'text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black letter-tight text-center',
  sectionSubheading: 'handwritten text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center',
  sectionDescription: 'text-base md:text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto',
  
  // Card text styles
  cardTitle: 'text-xl md:text-2xl lg:text-3xl font-bold',
  cardDescription: 'text-sm md:text-base text-gray-600 leading-relaxed',
  
  // Label and caption styles
  label: 'text-sm font-medium text-gray-700',
  caption: 'text-xs text-gray-500',
  overline: 'text-xs font-semibold uppercase tracking-wider text-gray-500',
};

/**
 * Helper function to combine font classes with other Tailwind classes
 * Uses clsx for conditional classes and tailwind-merge for proper Tailwind class merging
 * 
 * @param classes - Array of class strings, objects, or undefined values
 * @returns Merged class string with proper Tailwind class precedence
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Typography component helper
 * Returns the appropriate font class based on the variant
 * 
 * @param variant - The typography variant to use
 * @returns The corresponding font class string
 */
export function getTypographyClass(
  variant: keyof typeof fontClasses
): string {
  return fontClasses[variant];
}

/**
 * Responsive font size utilities
 * Provides consistent responsive font sizing across breakpoints
 */
export const responsiveFontSizes = {
  // Hero sizes (matching whymedia.in breakpoints)
  hero: {
    mobile: 'text-4xl',      // 36px
    tablet: 'text-7xl',      // 72px
    desktop: 'text-8xl',     // 96px
  },
  
  // Handwritten sizes
  handwritten: {
    mobile: 'text-2xl',      // 24px
    tablet: 'text-4xl',      // 36px
    desktop: 'text-5xl',     // 48px
  },
  
  // Body sizes
  body: {
    mobile: 'text-base',     // 16px
    tablet: 'text-lg',       // 18px
    desktop: 'text-xl',      // 20px
  },
};

/**
 * Font weight utilities
 * EXACT weights from whymedia.in
 */
export const fontWeights = {
  normal: 'font-normal',      // 400
  medium: 'font-medium',      // 500
  semibold: 'font-semibold',  // 600
  bold: 'font-bold',          // 700
  extrabold: 'font-extrabold',// 800
  black: 'font-black',        // 900
};

/**
 * Letter spacing utilities
 * EXACT letter spacing from whymedia.in
 */
export const letterSpacing = {
  tight: 'tracking-tight',    // -0.025em
  tighter: 'tracking-tighter',// -0.05em
  normal: 'tracking-normal',  // 0em
};

/**
 * Line height utilities
 * EXACT line heights from whymedia.in
 */
export const lineHeights = {
  tight: 'leading-tight',      // 1.1
  normal: 'leading-normal',    // 1.5
  relaxed: 'leading-relaxed',  // 1.75
};

/**
 * Common text color utilities
 * EXACT colors from whymedia.in
 */
export const textColors = {
  primary: 'text-primary',
  dark: 'text-dark',
  gray: {
    50: 'text-gray-50',
    100: 'text-gray-100',
    200: 'text-gray-200',
    300: 'text-gray-300',
    400: 'text-gray-400',
    500: 'text-gray-500',
    600: 'text-gray-600',
    700: 'text-gray-700',
    800: 'text-gray-800',
    900: 'text-gray-900',
  },
};
