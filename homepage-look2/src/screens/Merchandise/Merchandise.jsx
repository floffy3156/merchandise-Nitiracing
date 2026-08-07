import { HeroSection } from "./sections/HeroSection/HeroSection";
import { StorefrontContentSection } from "./sections/StorefrontContentSection/StorefrontContentSection";

export const Merchandise = () => {
  return (
    <main
      className="relative flex flex-col items-center overflow-hidden bg-black"
      data-model-id="333:753"
    >
      <HeroSection />
      <StorefrontContentSection />
    </main>
  );
};
