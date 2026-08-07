import { useState } from "react";

const assetBaseUrl = "https://c.animaapp.com/71eaCrAH/img";

const suggestions = [
  "Essential T-Shirt",
  "Essential T-Shirt",
  "Essential T-Shirt",
];

const tags = ["Essential T-shirt", "Essential T-shirt"];

const products = [
  {
    id: "essential-tshirt-1",
    image: `${assetBaseUrl}/frame-493.svg`,
    category: "tshirt",
    name: "Essential T-Shirt",
    price: "Rp150.000",
  },
  {
    id: "essential-tshirt-2",
    image: `${assetBaseUrl}/frame-493-1.svg`,
    category: "tshirt",
    name: "Essential T-Shirt",
    price: "Rp150.000",
  },
  {
    id: "essential-tshirt-3",
    image: `${assetBaseUrl}/frame-493-2.svg`,
    category: "tshirt",
    name: "Essential T-Shirt",
    price: "Rp150.000",
  },
  {
    id: "essential-tshirt-4",
    image: `${assetBaseUrl}/frame-493-3.svg`,
    category: "tshirt",
    name: "Essential T-Shirt",
    price: "Rp150.000",
  },
];

export const ProductSearchResultsSection = () => {
  const [selectedSuggestion, setSelectedSuggestion] = useState("");

  const handleSuggestionSelect = (suggestion) => {
    setSelectedSuggestion(suggestion);
  };

  return (
    <section
      className="flex items-start justify-around gap-[27px] px-20 py-[57px] relative self-stretch w-full flex-[0_0_auto] border border-solid border-black bg-[linear-gradient(0deg,rgba(0,0,0,0.63)_0%,rgba(0,0,0,0.74)_100%)]"
      aria-label="Product search results"
    >
      <div className="flex items-start gap-24 relative flex-1 grow">
        <aside className="inline-flex flex-col items-start justify-center gap-2.5 relative flex-[0_0_auto]">
          <h2 className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-normal text-white text-xs tracking-[0] leading-3 whitespace-nowrap">
            Top Suggestions
          </h2>
          {suggestions.map((suggestion, index) => (
            <button
              key={`${suggestion}-${index}`}
              type="button"
              onClick={() => handleSuggestionSelect(suggestion)}
              aria-pressed={selectedSuggestion === suggestion}
              className="relative w-fit [font-family:'Tektur',Helvetica] font-bold text-white text-base tracking-[0] leading-[14.1px] whitespace-nowrap text-left"
            >
              {suggestion}
            </button>
          ))}
        </aside>
        <div className="inline-flex flex-col items-start justify-center gap-5 relative flex-[0_0_auto]">
          <div
            className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]"
            aria-label="Suggested searches"
          >
            {tags.map((tag, index) => (
              <button
                key={`${tag}-${index}`}
                type="button"
                onClick={() => handleSuggestionSelect(tag)}
                aria-pressed={selectedSuggestion === tag}
                className="inline-flex items-center justify-center gap-2.5 px-[25px] py-2.5 relative flex-[0_0_auto] bg-[#ffffff3d] rounded-3xl border border-solid border-white"
              >
                <span className="w-fit mt-[-1.00px] font-normal text-xs leading-[10.6px] whitespace-nowrap relative [font-family:'Tektur',Helvetica] text-white tracking-[0]">
                  {tag}
                </span>
              </button>
            ))}
          </div>
          <section
            className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]"
            aria-labelledby="product-results-heading"
          >
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex h-9 items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                <h2
                  id="product-results-heading"
                  className="relative w-fit [font-family:'Tektur',Helvetica] font-normal text-white text-base tracking-[0] leading-[14.1px] whitespace-nowrap"
                >
                  Product
                </h2>
              </div>
              <button
                type="button"
                onClick={() => handleSuggestionSelect("View all products")}
                className="inline-flex h-9 items-center justify-center gap-2.5 relative flex-[0_0_auto]"
                aria-label="View all products"
              >
                <span className="relative w-fit [font-family:'Tektur',Helvetica] font-normal text-white text-base tracking-[0] leading-[14.1px] whitespace-nowrap">
                  View all
                </span>
                <span
                  className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]"
                  aria-hidden="true"
                >
                  <img
                    className="relative w-9 h-9"
                    alt=""
                    src={`${assetBaseUrl}/chevron-backward.svg`}
                  />
                </span>
              </button>
            </div>
            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              {products.map((product) => (
                <article
                  key={product.id}
                  className="inline-flex flex-col items-center relative flex-[0_0_auto] rounded-[10px] overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => handleSuggestionSelect(product.name)}
                    className="relative w-[216px] h-[229px] bg-cover bg-[50%_50%]"
                    style={{ backgroundImage: `url(${product.image})` }}
                    aria-label={`View ${product.name}`}
                  />
                  <div className="flex flex-col w-[216px] items-start gap-2.5 relative flex-[0_0_auto] rounded-[10px]">
                    <div className="flex flex-col items-start gap-2.5 px-5 py-[31px] relative self-stretch w-full flex-[0_0_auto]">
                      <div
                        className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]"
                        aria-hidden="true"
                      >
                        <div
                          className="relative w-[29px] h-[35px] bg-cover bg-[50%_50%]"
                          style={{
                            backgroundImage: `url(${assetBaseUrl}/frame-555-3@2x.png)`,
                          }}
                        />
                        <div
                          className="relative w-[29px] h-[35px] bg-cover bg-[50%_50%]"
                          style={{
                            backgroundImage: `url(${assetBaseUrl}/frame-556-3@2x.png)`,
                          }}
                        />
                      </div>
                      <p className="relative self-stretch [font-family:'Tektur',Helvetica] font-normal text-[#9c9c9c] text-xs tracking-[0] leading-[10.6px]">
                        {product.category}
                      </p>
                      <h3 className="self-stretch font-bold text-base leading-[14.1px] relative [font-family:'Tektur',Helvetica] text-white tracking-[0]">
                        {product.name}
                      </h3>
                      <p className="self-stretch font-normal text-base leading-[14.1px] relative [font-family:'Tektur',Helvetica] text-white tracking-[0]">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
