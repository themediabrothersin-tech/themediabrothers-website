import CustomCursor from "@/components/shared/CustomCursor";
import LoadingScreen from "@/components/shared/LoadingScreen";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import Navbar from "@/components/Navigation/Navbar";
import HeroSection from "@/components/Hero/HeroSection";
import AboutSection from "@/components/Sections/AboutSection";
import TrustedBrandsSection from "@/components/Sections/TrustedBrandsSection";
import ServicesSection from "@/components/Sections/ServicesSection";
import GallerySection from "@/components/Sections/GallerySection";
import WhyChooseUs from "@/components/Sections/WhyChooseUs";
import ProcessSection from "@/components/Sections/ProcessSection";
import ContactSection from "@/components/Sections/ContactSection";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <WhatsAppButton />
      <Navbar />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TrustedBrandsSection />
        <GallerySection />
        <WhyChooseUs />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
