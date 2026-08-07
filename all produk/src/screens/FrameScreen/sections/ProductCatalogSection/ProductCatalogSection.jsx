import { useMemo, useState } from "react";

const categories = [
  "Hat & Cap",
  "Jacket",
  "Jersey",
  "Shirts",
  "T-Shirts",
  "Team Apparel",
];

const types = ["New Arrival", "Best Seller", "Limited Edition"];

const products = [
  {
    id: 1,
    image: "https://c.animaapp.com/YJMTsyCZ/img/frame-493.svg",
    swatchOne: "https://c.animaapp.com/YJMTsyCZ/img/frame-555-3@2x.png",
    swatchTwo: "https://c.animaapp.com/YJMTsyCZ/img/frame-556-3@2x.png",
    isNew: true,
  },
  {
    id: 2,
    image: "https://c.animaapp.com/YJMTsyCZ/img/frame-493-1.svg",
    swatchOne: "https://c.animaapp.com/YJMTsyCZ/img/frame-555-3@2x.png",
    swatchTwo: "https://c.animaapp.com/YJMTsyCZ/img/frame-556-3@2x.png",
    isNew: true,
  },
  {
    id: 3,
    image: "https://c.animaapp.com/YJMTsyCZ/img/frame-493-2.svg",
    swatchOne: "https://c.animaapp.com/YJMTsyCZ/img/frame-555-3@2x.png",
    swatchTwo: "https://c.animaapp.com/YJMTsyCZ/img/frame-556-3@2x.png",
    isNew: true,
  },
  {
    id: 4,
    image: "https://c.animaapp.com/YJMTsyCZ/img/frame-493-3.svg",
    swatchOne: "https://c.animaapp.com/YJMTsyCZ/img/frame-555-3@2x.png",
    swatchTwo: "https://c.animaapp.com/YJMTsyCZ/img/frame-556-3@2x.png",
    isNew: true,
  },
  {
    id: 5,
    image: "https://c.animaapp.com/YJMTsyCZ/img/frame-493-9.png",
    swatchOne: "https://c.animaapp.com/YJMTsyCZ/img/frame-555-9.jpg",
    swatchTwo: "https://c.animaapp.com/YJMTsyCZ/img/frame-556-9.jpg",
    isNew: true,
  },
  {
    id: 6,
    image: "https://c.animaapp.com/YJMTsyCZ/img/frame-493-5.svg",
    swatchOne: "https://c.animaapp.com/YJMTsyCZ/img/frame-555-8@2x.png",
    swatchTwo: "https://c.animaapp.com/YJMTsyCZ/img/frame-556-8@2x.png",
    isNew: false,
  },
  {
    id: 7,
    image: "https://c.animaapp.com/YJMTsyCZ/img/frame-493-6.svg",
    swatchOne: "https://c.animaapp.com/YJMTsyCZ/img/frame-555-8@2x.png",
    swatchTwo: "https://c.animaapp.com/YJMTsyCZ/img/frame-556-8@2x.png",
    isNew: false,
  },
  {
    id: 8,
    image: "https://c.animaapp.com/YJMTsyCZ/img/frame-493-7.svg",
    swatchOne: "https://c.animaapp.com/YJMTsyCZ/img/frame-555-8@2x.png",
    swatchTwo: "https://c.animaapp.com/YJMTsyCZ/img/frame-556-8@2x.png",
    isNew: false,
  },
  {
    id: 9,
    image: "https://c.animaapp.com/YJMTsyCZ/img/frame-493-8.svg",
    swatchOne: "https://c.animaapp.com/YJMTsyCZ/img/frame-555-8@2x.png",
    swatchTwo: "https://c.animaapp.com/YJMTsyCZ/img/frame-556-8@2x.png",
    isNew: true,
  },
  {
    id: 10,
    image: "https://c.animaapp.com/YJMTsyCZ/img/frame-493-9.png",
    swatchOne: "https://c.animaapp.com/YJMTsyCZ/img/frame-555-9.jpg",
    swatchTwo: "https://c.animaapp.com/YJMTsyCZ/img/frame-556-9.jpg",
    isNew: true,
  },
];

const ProductCard = ({ product }) => {
  return (
    <article className="inline-flex flex-col items-center relative flex-[0_0_auto] rounded-[10px] overflow-hidden">
      <div
        className="flex flex-col w-[216px] h-[229px] items-end gap-[204px] p-5 relative bg-cover bg-[50%_50%]"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        {product.isNew ? (
          <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <span className="inline-flex items-center justify-center gap-2.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-[#006ee3] rounded-[5px]">
              <span className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-normal text-white text-xs tracking-[0] leading-[10.6px] whitespace-nowrap">
                New
              </span>
            </span>
          </div>
        ) : null}
      </div>
      <div className="flex flex-col w-[216px] items-start gap-2.5 relative flex-[0_0_auto] rounded-[10px]">
        <div className="flex flex-col items-start gap-2.5 px-5 py-[31px] relative self-stretch w-full flex-[0_0_auto]">
          <div
            className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]"
            aria-label="Available colors"
          >
            <span
              className="relative w-[29px] h-[35px] bg-cover bg-[50%_50%]"
              style={{ backgroundImage: `url(${product.swatchOne})` }}
            />
            <span
              className="relative w-[29px] h-[35px] bg-cover bg-[50%_50%]"
              style={{ backgroundImage: `url(${product.swatchTwo})` }}
            />
          </div>
          <p className="relative self-stretch [font-family:'Tektur',Helvetica] font-normal text-[#9c9c9c] text-xs tracking-[0] leading-[10.6px]">
            tshirt
          </p>
          <h3 className="relative self-stretch [font-family:'Tektur',Helvetica] font-bold text-white text-base tracking-[0] leading-[14.1px]">
            Essential T-Shirt
          </h3>
          <p className="relative self-stretch [font-family:'Tektur',Helvetica] font-normal text-white text-base tracking-[0] leading-[14.1px]">
            Rp150.000
          </p>
        </div>
      </div>
    </article>
  );
};

export const ProductCatalogSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [_selectedCategories, setSelectedCategories] = useState(["Hat & Cap"]);
  const [_selectedTypes, setSelectedTypes] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);

  const visibleProducts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return products;
    }

    return products.filter(() =>
      "essential t-shirt tshirt rp150.000"
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [searchQuery]);

  const toggleSelection = (value, setSelection) => {
    setSelection((currentSelection) =>
      currentSelection.includes(value)
        ? currentSelection.filter((item) => item !== value)
        : [...currentSelection, value],
    );
  };

  const productRows = [
    visibleProducts.slice(0, 5),
    visibleProducts.slice(5, 10),
  ].filter((row) => row.length > 0);

  return (
    <section
      className="flex items-start gap-10 relative self-stretch w-full flex-[0_0_auto] max-md:flex-col"
      aria-label="Product catalog"
    >
      <aside className="flex flex-col w-[220px] items-start gap-8 p-6 relative bg-black rounded-xl max-md:w-full">
        <form
          className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]"
          onSubmit={(event) => event.preventDefault()}
          role="search"
        >
          <label
            htmlFor="product-search"
            className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-bold text-white text-sm tracking-[0] leading-[normal]"
          >
            SEARCH
          </label>
          <div className="flex items-center gap-3 px-4 py-3 relative self-stretch w-full flex-[0_0_auto] bg-[#1a1a1a] rounded-lg">
            <img
              className="relative w-[18px] h-[18px]"
              alt=""
              aria-hidden="true"
              src="https://c.animaapp.com/YJMTsyCZ/img/search-1.svg"
            />
            <input
              id="product-search"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search..."
              className="relative min-w-0 flex-1 mt-[-1.00px] [font-family:'Tektur',Helvetica] font-normal text-white placeholder:text-[#9d9d9d] text-sm tracking-[0] leading-[normal] bg-transparent"
            />
          </div>
        </form>
        <fieldset className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <legend className="sr-only">Category</legend>
          <button
            type="button"
            onClick={() => setIsCategoryOpen((currentValue) => !currentValue)}
            aria-expanded={isCategoryOpen}
            className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] text-left"
          >
            <span className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-bold text-white text-sm tracking-[0] leading-[normal]">
              CATEGORY
            </span>
            <img
              className={`relative w-4 h-4 transition-transform ${isCategoryOpen ? "" : "-rotate-90"}`}
              alt=""
              aria-hidden="true"
              src="https://c.animaapp.com/YJMTsyCZ/img/chevron-down.svg"
            />
          </button>
          {isCategoryOpen ? (
            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              {categories.map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto] cursor-pointer"
                >
                  <input
                    type="checkbox"
                    onChange={() =>
                      toggleSelection(category, setSelectedCategories)
                    }
                    className="appearance-auto accent-[#006ee3] relative w-[18px] h-[18px] shrink-0 cursor-pointer"
                  />
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                    {category}
                  </span>
                </label>
              ))}
            </div>
          ) : null}
        </fieldset>
        <fieldset className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <legend className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-bold text-white text-sm tracking-[0] leading-[normal]">
            TYPE
          </legend>
          <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            {types.map((type) => (
              <label
                key={type}
                className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto] cursor-pointer"
              >
                <input
                  type="checkbox"
                  onChange={() => toggleSelection(type, setSelectedTypes)}
                  className="appearance-auto accent-[#006ee3] relative w-[18px] h-[18px] shrink-0 cursor-pointer"
                />
                <span className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                  {type}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      </aside>
      <div className="flex flex-col items-start gap-6 relative flex-1 grow min-w-0">
        <p
          className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-normal text-[#9d9d9d] text-sm tracking-[0] leading-[normal]"
          aria-live="polite"
        >
          {searchQuery ? visibleProducts.length : 13} product(s) found
        </p>
        {productRows.map((row, rowIndex) => (
          <div
            key={`product-row-${rowIndex}`}
            className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto] overflow-hidden"
          >
            {row.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ))}

        {visibleProducts.length === 0 ? (
          <p className="relative [font-family:'Tektur',Helvetica] font-normal text-[#9d9d9d] text-sm tracking-[0] leading-[normal]">
            No products found.
          </p>
        ) : null}
      </div>
    </section>
  );
};
