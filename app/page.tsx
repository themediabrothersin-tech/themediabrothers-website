import CustomCursor from "@/components/shared/CustomCursor";
import LoadingScreen from "@/components/shared/LoadingScreen";
import Navbar from "@/components/Navigation/Navbar";
import HeroSection from "@/components/Hero/HeroSection";
import AboutSection from "@/components/Sections/AboutSection";
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
      <Navbar />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <WhyChooseUs />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
