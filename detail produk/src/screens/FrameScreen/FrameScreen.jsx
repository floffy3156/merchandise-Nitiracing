import { MainNavigationSection } from "./sections/MainNavigationSection";
import { ProductDetailsReviewsSection } from "./sections/ProductDetailsReviewsSection/ProductDetailsReviewsSection";
import { ProductPurchaseSection } from "./sections/ProductPurchaseSection/ProductPurchaseSection";
import { StoreUtilityBarSection } from "./sections/StoreUtilityBarSection/StoreUtilityBarSection";

export const FrameScreen = () => {
  return (
    <main
      className="flex flex-col items-center relative min-h-screen bg-[#0b0b0f]"
      data-model-id="371:575"
    >
      <StoreUtilityBarSection />
      <MainNavigationSection />
      <ProductPurchaseSection />
      <div
        className="relative self-stretch w-full h-px bg-[#2a2a2a]"
        aria-hidden="true"
      />
      <ProductDetailsReviewsSection />
    </main>
  );
};
