/**
 * Typography Examples Component
 * 
 * This component demonstrates all typography styles matching whymedia.in
 * Use these examples as a reference when implementing your components
 */

import { fontClasses, cn } from '@/lib/fonts';

export default function TypographyExamples() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      {/* Hero Section Example - EXACT from whymedia.in */}
      <section className="text-center">
        <h1 className={fontClasses.heroHeading}>
          <span className="text-primary">We Don't Just Create Content.</span>
          <span className="block">We Craft Stories That Build Brands.</span>
        </h1>
        
        <p className={cn(fontClasses.heroSubheading, 'mt-6 text-dark')}>
          Visual storytelling for brands, founders, and creators
        </p>
        
        <p className={cn(fontClasses.heroDescription, 'mt-4 max-w-2xl mx-auto')}>
          We are a storytelling-first media production company built on one belief: 
          people don't connect with brands — they connect with stories.
        </p>
      </section>

      {/* Section Headings Example */}
      <section className="text-center">
        <p className={cn(fontClasses.handwrittenLarge, 'text-gray-700 mb-4')}>
          we are FULL STACK
        </p>
        
        <h2 className={fontClasses.sectionHeading}>
          <span className="text-primary">If It Doesn't Freeze Time,</span>
          <span className="block">It Never Left Our Studio</span>
        </h2>
        
        <p className={cn(fontClasses.sectionDescription, 'mt-6')}>
          We don't just capture footage—we <span className="font-semibold">freeze moments in time</span> 
          that tell your brand's story.
        </p>
      </section>

      {/* Body Text Examples */}
      <section className="space-y-8">
        <h3 className={fontClasses.h3}>Body Text Variations</h3>
        
        <div className="space-y-4">
          <p className={fontClasses.bodyLarge}>
            Large body text - Perfect for introductions and important paragraphs. 
            This text is designed to be highly readable and engaging.
          </p>
          
          <p className={fontClasses.bodyBase}>
            Base body text - The standard text size for most content. 
            Use this for general descriptions, articles, and regular content.
          </p>
          
          <p className={fontClasses.bodySmall}>
            Small body text - Use for captions, footnotes, and secondary information.
          </p>
        </div>
      </section>

      {/* Heading Hierarchy Example */}
      <section className="space-y-6">
        <h1 className={fontClasses.h1}>Heading 1 - Hero Headlines</h1>
        <h2 className={fontClasses.h2}>Heading 2 - Section Titles</h2>
        <h3 className={fontClasses.h3}>Heading 3 - Subsection Titles</h3>
        <h4 className={fontClasses.h4}>Heading 4 - Card Titles</h4>
        <h5 className={fontClasses.h5}>Heading 5 - Smaller Titles</h5>
        <h6 className={fontClasses.h6}>Heading 6 - Minor Headings</h6>
      </section>

      {/* Handwritten Font Examples */}
      <section className="space-y-6">
        <h3 className={fontClasses.h3}>Handwritten Font Variations</h3>
        
        <p className={fontClasses.handwrittenLarge}>
          Large Handwritten - For major decorative headings
        </p>
        
        <p className={fontClasses.handwrittenMedium}>
          Medium Handwritten - For section accents
        </p>
        
        <p className={fontClasses.handwrittenSmall}>
          Small Handwritten - For subtle decorative touches
        </p>
      </section>

      {/* Button Text Examples */}
      <section className="space-y-6">
        <h3 className={fontClasses.h3}>Button Typography</h3>
        
        <div className="space-x-4">
          <button className={cn(
            fontClasses.buttonLarge,
            'px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors'
          )}>
            Large Button
          </button>
          
          <button className={cn(
            fontClasses.buttonBase,
            'px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors'
          )}>
            Base Button
          </button>
          
          <button className={cn(
            fontClasses.buttonSmall,
            'px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors'
          )}>
            Small Button
          </button>
        </div>
      </section>

      {/* Navigation Example */}
      <section className="space-y-6">
        <h3 className={fontClasses.h3}>Navigation Links</h3>
        
        <nav className="flex space-x-8">
          <a href="#" className={fontClasses.navLink}>About</a>
          <a href="#" className={fontClasses.navLink}>Services</a>
          <a href="#" className={fontClasses.navLink}>Gallery</a>
          <a href="#" className={fontClasses.navLink}>Contact</a>
        </nav>
      </section>

      {/* Card Example */}
      <section className="space-y-6">
        <h3 className={fontClasses.h3}>Card Typography</h3>
        
        <div className="bg-gray-50 p-8 rounded-xl">
          <h4 className={fontClasses.cardTitle}>
            Premium Video Production
          </h4>
          <p className={cn(fontClasses.cardDescription, 'mt-4')}>
            From concept to final cut, we create videos that don't just look 
            good—they tell stories that move people to action.
          </p>
        </div>
      </section>

      {/* Labels and Captions */}
      <section className="space-y-6">
        <h3 className={fontClasses.h3}>Labels & Captions</h3>
        
        <div className="space-y-4">
          <div>
            <label className={fontClasses.label}>Form Label</label>
            <input 
              type="text" 
              placeholder="Enter text..." 
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          
          <p className={fontClasses.caption}>
            Caption text - Use for image captions, form hints, and help text
          </p>
          
          <p className={fontClasses.overline}>
            Overline text
          </p>
        </div>
      </section>

      {/* Text Colors Example */}
      <section className="space-y-6">
        <h3 className={fontClasses.h3}>Text Colors</h3>
        
        <div className="space-y-2">
          <p className="text-primary font-semibold">Primary Color Text</p>
          <p className="text-dark font-semibold">Dark Color Text</p>
          <p className="text-gray-600">Gray 600 Text</p>
          <p className="text-gray-500">Gray 500 Text</p>
          <p className="text-gray-400">Gray 400 Text</p>
        </div>
      </section>

      {/* Responsive Example */}
      <section className="space-y-6">
        <h3 className={fontClasses.h3}>Responsive Typography</h3>
        
        <p className={fontClasses.bodyBase}>
          All typography classes are responsive by default. Resize your browser 
          to see how text scales across different screen sizes. This matches the 
          exact behavior from whymedia.in.
        </p>
      </section>
    </div>
  );
}
