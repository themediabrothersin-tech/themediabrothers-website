import type { Metadata } from "next";
import { inter, caveat } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Media Brothers | Visual Storytelling & Media Production",
  description: "Visual storytelling for brands, founders, and creators who want to be remembered — not scrolled past. Premium media production, personal branding, and digital storytelling.",
  keywords: [
    "media production",
    "visual storytelling",
    "brand storytelling",
    "podcasts",
    "reels",
    "corporate films",
    "product shoots",
    "personal branding",
    "social media content",
    "content strategy",
    "UGC content",
    "vox pop",
    "talking head videos",
  ],
  authors: [{ name: "The Media Brothers" }],
  creator: "The Media Brothers",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://themediabrothers.com",
    title: "The Media Brothers | Premium Visual Storytelling",
    description: "Visual storytelling for brands, founders, and creators who want to be remembered.",
    siteName: "The Media Brothers",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Media Brothers | Premium Visual Storytelling",
    description: "Visual storytelling for brands, founders, and creators who want to be remembered.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable} scroll-smooth`}>
      <head>
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* EXACT font loading from whymedia.in */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Caveat:wght@700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
