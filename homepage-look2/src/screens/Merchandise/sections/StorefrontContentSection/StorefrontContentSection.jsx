import { useRef, useState } from "react";

const assetBase = "https://c.animaapp.com/odJl40XK/img/";

const newArrivalProducts = [
  { image: "frame-493.svg" },
  { image: "frame-493-1.svg" },
  { image: "frame-493-2.svg" },
  { image: "frame-493-3.svg" },
  { image: "frame-493-4.svg" },
];

const shopCategories = [
  { title: "Team Apparel", image: "frame-563.svg" },
  { title: "T-shirts", image: "frame-563-1.svg" },
  { title: "Jacket", image: "frame-563-2.svg" },
  { title: "Hat & Cap", image: "frame-563-3.svg" },
];

const familyPartners = [
  { alt: "Gytr", image: "gytr-1-1@2x.png", className: "w-[123px] h-[123px]" },
  {
    alt: "Pireli",
    image: "pireli-1-1@2x.png",
    className: "w-[123px] h-[124px]",
  },
  { alt: "Progp", image: "progp-1@2x.png", className: "w-[123px] h-[124px]" },
  { alt: "Image", image: "image-26@2x.png", className: "w-[123px] h-[123px]" },
  { alt: "Image", image: "image-27@2x.png", className: "w-[123px] h-[123px]" },
  { alt: "Image", image: "image-28@2x.png", className: "w-[123px] h-[123px]" },
  { alt: "Image", image: "image-29@2x.png", className: "w-[123px] h-[123px]" },
];

const ArrowControls = ({ dark = false, onPrevious, onNext }) => (
  <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
    <button
      type="button"
      aria-label="Previous products"
      onClick={onPrevious}
      className="relative w-9 h-9 transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
    >
      <img
        className="w-full h-full"
        alt=""
        aria-hidden="true"
        src={`${assetBase}chevron-backward-${dark ? "5" : "3"}.svg`}
      />
    </button>
    <button
      type="button"
      aria-label="Next products"
      onClick={onNext}
      className="relative w-9 h-9 transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
    >
      <img
        className="w-full h-full"
        alt=""
        aria-hidden="true"
        src={`${assetBase}chevron-backward-${dark ? "6" : "4"}.svg`}
      />
    </button>
  </div>
);

const ExploreButton = ({ ariaLabel }) => (
  <button
    type="button"
    aria-label={ariaLabel}
    className="inline-flex h-10 min-w-[156px] items-center justify-center rounded-full border border-white px-8 [font-family:'Tektur',Helvetica] font-normal text-white text-base tracking-[0] leading-[14.1px] whitespace-nowrap transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
  >
    Explore
  </button>
);

export const StorefrontContentSection = () => {
  const [activeProductTab, setActiveProductTab] = useState("new");
  const productListRef = useRef(null);
  const categoryListRef = useRef(null);

  const scrollProducts = (direction) => {
    productListRef.current?.scrollBy({
      left: direction * 226,
      behavior: "smooth",
    });
  };

  const scrollCategories = (direction) => {
    categoryListRef.current?.scrollBy({
      left: direction * 315,
      behavior: "smooth",
    });
  };

  return (
    <main className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
      <section
        className="flex flex-col items-start gap-2.5 pt-[70px] pb-[100px] px-20 relative self-stretch w-full flex-[0_0_auto] bg-[linear-gradient(0deg,rgba(0,0,0,0.54)_0%,rgba(0,0,0,0.54)_100%)]"
        aria-label="Featured merchandise"
      >
        <div className="flex flex-col items-center justify-center gap-[38px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div
              className="inline-flex items-center gap-5 relative self-stretch flex-[0_0_auto]"
              role="tablist"
              aria-label="Product collections"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeProductTab === "new"}
                onClick={() => setActiveProductTab("new")}
                className="items-center justify-center self-stretch inline-flex gap-2.5 relative flex-[0_0_auto] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span className="text-base text-center leading-[14.1px] relative w-fit [font-family:'Tektur',Helvetica] font-normal text-white tracking-[0] whitespace-nowrap">
                  <span className="[font-family:'Tektur',Helvetica] font-normal text-white text-base tracking-[0] leading-[14.1px]">
                    New{" "}
                  </span>
                  <span className="font-bold">Arrivals</span>
                </span>
              </button>
              <img
                className="relative w-[3px] h-7"
                alt=""
                aria-hidden="true"
                src={`${assetBase}line-4.svg`}
              />
              <button
                type="button"
                role="tab"
                aria-selected={activeProductTab === "hot"}
                onClick={() => setActiveProductTab("hot")}
                className="items-center justify-center self-stretch inline-flex gap-2.5 relative flex-[0_0_auto] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span
                  className={`relative w-fit [font-family:'Tektur',Helvetica] font-normal text-base text-center tracking-[0] leading-[14.1px] whitespace-nowrap ${
                    activeProductTab === "hot" ? "text-white" : "text-[#8e8e8e]"
                  }`}
                >
                  <span className="[font-family:'Tektur',Helvetica] font-normal text-base tracking-[0] leading-[14.1px]">
                    Hot{" "}
                  </span>
                  <span className="font-bold">Product</span>
                </span>
              </button>
            </div>
            <div className="items-center justify-center self-stretch inline-flex gap-2.5 relative flex-[0_0_auto]">
              <button
                type="button"
                className="relative w-fit [font-family:'Tektur',Helvetica] font-normal text-white text-base tracking-[0] leading-[14.1px] whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View all
              </button>
              <ArrowControls
                onPrevious={() => scrollProducts(-1)}
                onNext={() => scrollProducts(1)}
              />
            </div>
          </div>
        </div>
        <div
          ref={productListRef}
          className="flex w-[1120px] items-center gap-2.5 relative flex-[0_0_auto] overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tabpanel"
          aria-label={
            activeProductTab === "new" ? "New arrivals" : "Hot products"
          }
        >
          {newArrivalProducts.map((product, index) => (
            <article
              key={product.image}
              className="inline-flex flex-col items-center relative flex-[0_0_auto]"
            >
              <button
                type="button"
                aria-label={`View Essential T-Shirt ${index + 1}`}
                className="flex flex-col w-[216px] h-[229px] items-end gap-[204px] p-5 relative bg-cover bg-[50%_50%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ backgroundImage: `url(${assetBase}${product.image})` }}
              >
                <span className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <span className="inline-flex items-center justify-center gap-2.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-[#006ee3] rounded-[5px]">
                    <span className="mt-[-1.00px] text-xs leading-[10.6px] relative w-fit [font-family:'Tektur',Helvetica] font-normal text-white tracking-[0] whitespace-nowrap">
                      New
                    </span>
                  </span>
                </span>
              </button>
              <div className="flex flex-col w-[216px] items-start gap-2.5 relative flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-2.5 px-5 py-[31px] relative self-stretch w-full flex-[0_0_auto]">
                  <div
                    className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]"
                    aria-hidden="true"
                  >
                    <span
                      className="relative w-[29px] h-[35px] bg-cover bg-[50%_50%]"
                      style={{
                        backgroundImage: `url(${assetBase}frame-555-4@2x.png)`,
                      }}
                    />
                    <span
                      className="relative w-[29px] h-[35px] bg-cover bg-[50%_50%]"
                      style={{
                        backgroundImage: `url(${assetBase}frame-556-4@2x.png)`,
                      }}
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
          ))}
        </div>
      </section>
      <section
        className="flex flex-col h-[627px] items-center justify-end gap-[18px] px-20 py-[98px] relative self-stretch w-full bg-[url(https://c.animaapp.com/odJl40XK/img/frame-542.png)] bg-cover bg-[50%_50%]"
        aria-label="Explore all products"
      >
        <h2 className="relative self-stretch [font-family:'Tektur',Helvetica] font-semibold text-white text-base text-center tracking-[0] leading-4">
          Explore All Products
        </h2>
        <ExploreButton ariaLabel="Explore all products" />
      </section>
      <section
        className="flex flex-col items-start px-20 py-[50px] relative self-stretch w-full flex-[0_0_auto] bg-white"
        aria-labelledby="shop-by-need-title"
      >
        <div className="flex h-[72px] items-center justify-between relative self-stretch w-full">
          <div className="items-center justify-center self-stretch inline-flex gap-2.5 relative flex-[0_0_auto]">
            <h2
              id="shop-by-need-title"
              className="relative w-fit [font-family:'Tektur',Helvetica] font-normal text-[#141414] text-base text-center tracking-[0] leading-[14.1px] whitespace-nowrap"
            >
              <span className="[font-family:'Tektur',Helvetica] font-normal text-[#141414] text-base tracking-[0] leading-[14.1px]">
                Shop{" "}
              </span>
              <span className="font-bold">by Need</span>
            </h2>
          </div>
          <div className="inline-flex items-center justify-center gap-8 relative self-stretch flex-[0_0_auto]">
            <button
              type="button"
              className="relative w-fit [font-family:'Tektur',Helvetica] font-normal text-[#141414] text-base tracking-[0] leading-[14.1px] whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141414]"
            >
              View all
            </button>
            <ArrowControls
              dark={true}
              onPrevious={() => scrollCategories(-1)}
              onNext={() => scrollCategories(1)}
            />
          </div>
        </div>
        <div
          ref={categoryListRef}
          className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto] overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {shopCategories.map((category) => (
            <article
              key={category.title}
              className={`flex-col items-start inline-flex gap-2.5 relative flex-[0_0_auto] ${
                category.title === "Hat & Cap" ? "w-[530px]" : ""
              }`}
            >
              <button
                type="button"
                aria-label={`Shop ${category.title}`}
                className="relative w-[305px] h-[417px] bg-cover bg-[50%_50%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141414]"
                style={{
                  backgroundImage: `url(${assetBase}${category.image})`,
                }}
              />
              <div className="inline-flex h-[60.57px] items-center justify-center gap-2.5 p-2.5 relative">
                <h3 className="relative w-fit [font-family:'Tektur',Helvetica] font-normal text-[#141414] text-base tracking-[0] leading-[14.1px] whitespace-nowrap">
                  {category.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        className="flex flex-col h-[570px] items-center justify-end gap-[18px] px-20 py-[98px] relative self-stretch w-full bg-[url(https://c.animaapp.com/odJl40XK/img/frame-572.png)] bg-cover bg-[50%_50%]"
        aria-label="Trending products"
      >
        <p className="relative self-stretch [font-family:'Tektur',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-4">
          <strong className="font-semibold">See what&apos;s trending</strong>:
          Shop our top-rated collection.
        </p>
        <ExploreButton ariaLabel="Explore trending products" />
      </section>
      <section
        className="flex flex-col h-[658px] items-center justify-end gap-[18px] px-20 py-[98px] relative self-stretch w-full bg-[url(https://c.animaapp.com/odJl40XK/img/frame-573.png)] bg-cover bg-[50%_50%]"
        aria-label="Limited-edition merchandise"
      >
        <p className="relative self-stretch [font-family:'Tektur',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-4">
          <strong className="font-semibold">Don&apos;t Miss the Drop</strong>:
          Shop our signature limited-edition gear.
        </p>
        <ExploreButton ariaLabel="Explore limited-edition merchandise" />
      </section>
      <section
        className="flex flex-col items-start justify-center gap-2.5 px-20 py-[100px] relative self-stretch w-full flex-[0_0_auto]"
        aria-labelledby="family-partners-title"
      >
        <h2
          id="family-partners-title"
          className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-normal text-white text-base tracking-[0] leading-[14.1px] whitespace-nowrap"
        >
          <span className="[font-family:'Tektur',Helvetica] font-normal text-white text-base tracking-[0] leading-[14.1px]">
            Our{" "}
          </span>
          <span className="font-bold">Family Partner</span>
        </h2>
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          {familyPartners.map((partner) => (
            <img
              key={partner.image}
              className={`relative ${partner.className} aspect-[1] object-cover`}
              alt={partner.alt}
              src={`${assetBase}${partner.image}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
