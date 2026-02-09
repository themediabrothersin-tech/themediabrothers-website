import { Inter, Caveat } from 'next/font/google';

// Configure Inter font (EXACT weights from whymedia.in)
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

// Configure Caveat font (EXACT weight from whymedia.in)
export const caveat = Caveat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-caveat',
  display: 'swap',
});
