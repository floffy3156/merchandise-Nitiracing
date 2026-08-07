import { StorefrontContentSection } from "./sections/StorefrontContentSection/StorefrontContentSection";
import { StorefrontHeaderSection } from "./sections/StorefrontHeaderSection/StorefrontHeaderSection";

export const Merchandise = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center relative bg-black overflow-hidden"
      data-model-id="316:338"
    >
      <StorefrontHeaderSection />
      <StorefrontContentSection />
    </div>
  );
};
