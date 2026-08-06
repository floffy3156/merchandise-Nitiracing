import { StorefrontContentSection } from "./sections/StorefrontContentSection/StorefrontContentSection";
import { StoreHeaderSection } from "./sections/StoreHeaderSection/StoreHeaderSection";

export const Merchandise = () => {
  return (
    <main
      className="relative flex flex-col items-center overflow-hidden bg-black"
      data-model-id="316:338"
    >
      <StoreHeaderSection />
      <StorefrontContentSection />
    </main>
  );
};
