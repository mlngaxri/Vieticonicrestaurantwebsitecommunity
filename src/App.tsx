import { PremiumHeader } from "./components/premium/PremiumHeader";
import { HeroSection } from "./components/premium/HeroSection";
import { QuickInfoStrip } from "./components/premium/QuickInfoStrip";
import { AboutSection } from "./components/premium/AboutSection";
import { WhyDineWithUs } from "./components/premium/WhyDineWithUs";
import { MenuPreview } from "./components/premium/MenuPreview";
import { GoogleReviews } from "./components/premium/GoogleReviews";
import { GallerySection } from "./components/premium/GallerySection";
import { LocationHours } from "./components/premium/LocationHours";
import { CateringSection } from "./components/premium/CateringSection";
import { PremiumFooter } from "./components/premium/PremiumFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <PremiumHeader />
      <HeroSection />
      <QuickInfoStrip />
      <AboutSection />
      <WhyDineWithUs />
      <MenuPreview />
      <GoogleReviews />
      <GallerySection />
      <CateringSection />
      <LocationHours />
      <PremiumFooter />
    </div>
  );
}