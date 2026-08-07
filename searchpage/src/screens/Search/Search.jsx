import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { ProductSearchResultsSection } from "./sections/ProductSearchResultsSection/ProductSearchResultsSection";

export const Search = () => {
  return (
    <main
      className="flex flex-col items-center relative bg-black"
      data-model-id="347:1053"
    >
      <HeaderSection />
      <ProductSearchResultsSection />
    </main>
  );
};
