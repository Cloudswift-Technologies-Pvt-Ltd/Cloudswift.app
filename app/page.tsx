import HeroSection from "@/components/HeroSection";
import IntroCTA from "@/components/IntroCTA";
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
 * 2. Intro — problem + how CloudSwift helps
 * 3. How we help — Migrate / Secure / Operate
 * 4. Platforms — ecosystem we run
 * 5. What we offer — service hubs
 * 6. Proof — stats
 * 7. Featured solutions
 * 8. Social proof + FAQ + footer
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroCTA />
      <HowWeHelp />
      <PlatformOrbit />
      <ServicesSection />
      <StatsSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </>
  );
}
