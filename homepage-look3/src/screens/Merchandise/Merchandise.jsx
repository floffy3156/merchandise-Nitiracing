import { StorefrontContentSection } from "./sections/StorefrontContentSection/StorefrontContentSection";
import { StorefrontHeroSection } from "./sections/StorefrontHeroSection/StorefrontHeroSection";

export const Merchandise = () => {
  return (
    <main
      className="relative flex flex-col items-center overflow-hidden bg-black"
      data-model-id="407:344"
    >
      <StorefrontHeroSection />
      <StorefrontContentSection />
    </main>
  );
};
