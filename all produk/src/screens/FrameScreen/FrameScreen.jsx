import { MainNavigationSection } from "./sections/MainNavigationSection";
import { ProductCatalogSection } from "./sections/ProductCatalogSection/ProductCatalogSection";
import { UtilityNavigationSection } from "./sections/UtilityNavigationSection/UtilityNavigationSection";

export const FrameScreen = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col items-center bg-black"
      data-model-id="365:239"
    >
      <header className="w-full">
        <UtilityNavigationSection />
      </header>
      <main className="relative flex w-full flex-col items-start gap-8 border border-solid border-black bg-[linear-gradient(0deg,rgba(0,0,0,0.63)_0%,rgba(0,0,0,0.74)_100%)] px-20 py-[57px]">
        <nav className="w-full" aria-label="Main navigation">
          <MainNavigationSection />
        </nav>
        <section className="w-full" aria-label="Product catalog">
          <ProductCatalogSection />
        </section>
      </main>
    </div>
  );
};
