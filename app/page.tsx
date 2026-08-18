import HeroSection from "@/components/HeroSection";
import HowWeHelp from "@/components/HowWeHelp";
import PlatformOrbit from "@/components/PlatformOrbit";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

/**
 * Home narrative (template layout preserved):
 * 1. Hero — what we run
 * 2. Platforms — estate map
 * 3. How we help — Migrate / Secure / Operate
 * 4. What we offer — service hubs
 * 5. Proof — stats
 * 6. Featured solutions
 * 7. Social proof + FAQ + footer
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PlatformOrbit />
      <HowWeHelp />
      <ServicesSection />
      <StatsSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </>
  );
}
