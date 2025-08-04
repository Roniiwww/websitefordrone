import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import GallerySection from "@/components/gallery-section";
import DemoSection from "@/components/demo-section";
import FeaturesSection from "@/components/features-section";
import CodeSection from "@/components/code-section";
import ContactFooter from "@/components/contact-footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--darker)] text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <GallerySection />
      <DemoSection />
      <FeaturesSection />
      <CodeSection />
      <ContactFooter />
    </div>
  );
}
