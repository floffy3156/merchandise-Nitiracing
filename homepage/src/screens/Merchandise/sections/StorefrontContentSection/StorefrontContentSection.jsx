import { useState } from "react";

const assetBaseUrl = "https://c.animaapp.com/pcxrjcyN/img/";

const newArrivalProducts = [
  { image: "frame-493.svg", name: "Essential T-Shirt", price: "Rp150.000" },
  { image: "frame-493-1.svg", name: "Essential T-Shirt", price: "Rp150.000" },
  { image: "frame-493-2.svg", name: "Essential T-Shirt", price: "Rp150.000" },
  { image: "frame-493-3.svg", name: "Essential T-Shirt", price: "Rp150.000" },
  { image: "frame-493-4.svg", name: "Essential T-Shirt", price: "Rp150.000" },
];

const hotProducts = [
  { image: "frame-493-4.svg", name: "Essential T-Shirt", price: "Rp150.000" },
  { image: "frame-493-3.svg", name: "Essential T-Shirt", price: "Rp150.000" },
  { image: "frame-493-2.svg", name: "Essential T-Shirt", price: "Rp150.000" },
  { image: "frame-493-1.svg", name: "Essential T-Shirt", price: "Rp150.000" },
  { image: "frame-493.svg", name: "Essential T-Shirt", price: "Rp150.000" },
];

const needs = [
  { image: "frame-563.svg", label: "Team Apparel" },
  { image: "frame-563-1.svg", label: "T-shirts" },
  { image: "frame-563-2.svg", label: "Jacket" },
  { image: "frame-563-3.svg", label: "Hat & Cap" },
];

const partners = [
  { image: "gytr-1-1@2x.png", alt: "Gytr", className: "w-[123px] h-[123px]" },
  {
    image: "pireli-1-1@2x.png",
    alt: "Pireli",
    className: "w-[123px] h-[124px]",
  },
  { image: "progp-1@2x.png", alt: "Progp", className: "w-[123px] h-[124px]" },
  {
    image: "image-26@2x.png",
    alt: "Partner logo",
    className: "w-[123px] h-[123px]",
  },
  {
    image: "image-27@2x.png",
    alt: "Partner logo",
    className: "w-[123px] h-[123px]",
  },
  {
    image: "image-28@2x.png",
    alt: "Partner logo",
    className: "w-[123px] h-[123px]",
  },
  {
    image: "image-29@2x.png",
    alt: "Partner logo",
    className: "w-[123px] h-[123px]",
  },
];

const serviceBenefits = [
  { image: "shieldcheck.svg", alt: "Shield check", label: "Secure Payment" },
  { image: "trucktrailer.svg", alt: "Truck trailer", label: "Fast Delivery" },
  {
    image: "arrowcounterclockwise.svg",
    alt: "Arrow counter",
    label: "14 Days Return",
  },
];

const ExploreButton = ({ onClick, label = "Explore" }) => (
  <button
    type="button"
    onClick={onClick}
    className="relative w-[156px] h-10 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    aria-label={label}
  >
    <img
      className="absolute top-0 left-1.5 w-[145px] h-10 pointer-events-none"
      alt=""
      aria-hidden="true"
      src={`${assetBaseUrl}rectangle-1-2.svg`}
    />
    <span className="inline-flex items-center justify-center gap-2.5 absolute top-[13px] left-12 [font-family:'Tektur',Helvetica] font-normal text-white text-base tracking-[0] leading-[14.1px] whitespace-nowrap">
      {label}
    </span>
  </button>
);

const CarouselControls = ({ onPrevious, onNext, dark = false }) => (
  <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
    <button
      type="button"
      onClick={onPrevious}
      className="w-9 h-9 cursor-pointer rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
      aria-label="Previous items"
    >
      <img
        className="w-9 h-9"
        alt=""
        aria-hidden="true"
        src={`${assetBaseUrl}${dark ? "chevron-backward-3.svg" : "chevron-backward-1.svg"}`}
      />
    </button>
    <button
      type="button"
      onClick={onNext}
      className="w-9 h-9 cursor-pointer rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
      aria-label="Next items"
    >
      <img
        className="w-9 h-9"
        alt=""
        aria-hidden="true"
        src={`${assetBaseUrl}${dark ? "chevron-backward-4.svg" : "chevron-backward-2.svg"}`}
      />
    </button>
  </div>
);

export const StorefrontContentSection = () => {
  const [activeCollection, setActiveCollection] = useState("new");
  const [productOffset, setProductOffset] = useState(0);
  const [needOffset, setNeedOffset] = useState(0);

  const activeProducts =
    activeCollection === "new" ? newArrivalProducts : hotProducts;
  const displayedProducts = activeProducts.map(
    (_, index) =>
      activeProducts[(index + productOffset) % activeProducts.length],
  );
  const displayedNeeds = needs.map(
    (_, index) => needs[(index + needOffset) % needs.length],
  );

  const rotateProducts = (direction) => {
    setProductOffset(
      (currentOffset) =>
        (currentOffset + direction + activeProducts.length) %
        activeProducts.length,
    );
  };

  const rotateNeeds = (direction) => {
    setNeedOffset(
      (currentOffset) =>
        (currentOffset + direction + needs.length) % needs.length,
    );
  };

  const selectCollection = (collection) => {
    setActiveCollection(collection);
    setProductOffset(0);
  };

  return (
    <main className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
      <section
        className="flex flex-col items-start gap-2.5 pt-[70px] pb-[100px] px-20 relative self-stretch w-full flex-[0_0_auto] bg-[linear-gradient(0deg,rgba(0,0,0,0.54)_0%,rgba(0,0,0,0.54)_100%)]"
        aria-labelledby="new-arrivals-heading"
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
                aria-selected={activeCollection === "new"}
                aria-controls="products-panel"
                onClick={() => selectCollection("new")}
                className="inline-flex items-center justify-center gap-2.5 relative self-stretch flex-[0_0_auto] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <span
                  id="new-arrivals-heading"
                  className="text-base text-center leading-[14.1px] relative w-fit [font-family:'Tektur',Helvetica] font-normal text-white tracking-[0] whitespace-nowrap"
                >
                  New <strong className="font-bold">Arrivals</strong>
                </span>
              </button>
              <img
                className="relative w-[3px] h-7"
                alt=""
                aria-hidden="true"
                src={`${assetBaseUrl}line-4.svg`}
              />
              <button
                type="button"
                role="tab"
                aria-selected={activeCollection === "hot"}
                aria-controls="products-panel"
                onClick={() => selectCollection("hot")}
                className="inline-flex items-center justify-center gap-2.5 relative self-stretch flex-[0_0_auto] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <span className="relative w-fit [font-family:'Tektur',Helvetica] font-normal text-[#8e8e8e] text-base text-center tracking-[0] leading-[14.1px] whitespace-nowrap">
                  Hot <strong className="font-bold">Product</strong>
                </span>
              </button>
            </div>
            <div className="inline-flex items-center justify-center gap-2.5 relative self-stretch flex-[0_0_auto]">
              <button
                type="button"
                className="relative w-fit [font-family:'Tektur',Helvetica] font-normal text-white text-base tracking-[0] leading-[14.1px] whitespace-nowrap cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                View all
              </button>
              <CarouselControls
                onPrevious={() => rotateProducts(-1)}
                onNext={() => rotateProducts(1)}
              />
            </div>
          </div>
        </div>
        <div
          id="products-panel"
          role="tabpanel"
          className="flex w-[1120px] items-center gap-2.5 relative flex-[0_0_auto]"
        >
          {displayedProducts.map((product, index) => (
            <article
              key={`${product.image}-${index}`}
              className="inline-flex flex-col items-center relative flex-[0_0_auto] rounded-[10px] overflow-hidden"
            >
              <div
                className="flex flex-col w-[216px] h-[229px] items-end gap-[204px] p-5 relative bg-cover bg-[50%_50%]"
                style={{
                  backgroundImage: `url(${assetBaseUrl}${product.image})`,
                }}
              >
                <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <span className="inline-flex items-center justify-center gap-2.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-[#006ee3] rounded-[5px]">
                    <span className="mt-[-1px] text-xs leading-[10.6px] relative w-fit [font-family:'Tektur',Helvetica] font-normal text-white tracking-[0] whitespace-nowrap">
                      New
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col w-[216px] items-start gap-2.5 relative flex-[0_0_auto] rounded-[10px]">
                <div className="flex flex-col items-start gap-2.5 px-5 py-[31px] relative self-stretch w-full flex-[0_0_auto]">
                  <div
                    className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]"
                    aria-hidden="true"
                  >
                    <div className="relative w-[29px] h-[35px] bg-[url(https://c.animaapp.com/pcxrjcyN/img/frame-555-4@2x.png)] bg-cover bg-[50%_50%]" />
                    <div className="relative w-[29px] h-[35px] bg-[url(https://c.animaapp.com/pcxrjcyN/img/frame-556-4@2x.png)] bg-cover bg-[50%_50%]" />
                  </div>
                  <p className="relative self-stretch [font-family:'Tektur',Helvetica] font-normal text-[#9c9c9c] text-xs tracking-[0] leading-[10.6px]">
                    tshirt
                  </p>
                  <h3 className="relative self-stretch [font-family:'Tektur',Helvetica] font-bold text-white text-base tracking-[0] leading-[14.1px]">
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
      <section
        className="flex flex-col h-[627px] items-center justify-end gap-[18px] px-20 py-[98px] relative self-stretch w-full bg-[url(https://c.animaapp.com/pcxrjcyN/img/frame-542.png)] bg-cover bg-[50%_50%]"
        aria-label="Explore all products"
      >
        <p className="relative self-stretch [font-family:'Tektur',Helvetica] font-semibold text-white text-base text-center tracking-[0] leading-4">
          Explore All Products
        </p>
        <ExploreButton
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </section>
      <section
        className="flex flex-col items-start px-20 py-[50px] relative self-stretch w-full flex-[0_0_auto] bg-white"
        aria-labelledby="shop-by-need-heading"
      >
        <div className="flex h-[72px] items-center justify-between relative self-stretch w-full">
          <h2
            id="shop-by-need-heading"
            className="inline-flex items-center justify-center gap-2.5 relative self-stretch flex-[0_0_auto] [font-family:'Tektur',Helvetica] font-normal text-[#141414] text-base text-center tracking-[0] leading-[14.1px] whitespace-nowrap"
          >
            Shop <strong className="font-bold">by Need</strong>
          </h2>
          <div className="inline-flex items-center justify-center gap-8 relative self-stretch flex-[0_0_auto]">
            <button
              type="button"
              className="relative w-fit [font-family:'Tektur',Helvetica] font-normal text-[#141414] text-base tracking-[0] leading-[14.1px] whitespace-nowrap cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#141414]"
              onClick={() => setNeedOffset(0)}
            >
              View all
            </button>
            <CarouselControls
              dark
              onPrevious={() => rotateNeeds(-1)}
              onNext={() => rotateNeeds(1)}
            />
          </div>
        </div>
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto] overflow-hidden">
          {displayedNeeds.map((need, index) => (
            <article
              key={`${need.image}-${index}`}
              className={
                index === displayedNeeds.length - 1
                  ? "flex flex-col w-[530px] items-start gap-2.5 relative"
                  : "inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]"
              }
            >
              <div
                className="relative w-[305px] h-[417px] bg-cover bg-[50%_50%]"
                style={{ backgroundImage: `url(${assetBaseUrl}${need.image})` }}
              />
              <div className="inline-flex h-[60.57px] items-center justify-center gap-2.5 p-2.5 relative">
                <h3 className="relative w-fit [font-family:'Tektur',Helvetica] font-normal text-[#141414] text-base tracking-[0] leading-[14.1px] whitespace-nowrap">
                  {need.label}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        className="flex flex-col h-[570px] items-center justify-end gap-[18px] px-20 py-[98px] relative self-stretch w-full bg-[url(https://c.animaapp.com/pcxrjcyN/img/frame-572.png)] bg-cover bg-[50%_50%]"
        aria-label="Trending collection"
      >
        <p className="relative self-stretch [font-family:'Tektur',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-4">
          <strong className="font-semibold">See what&apos;s trending</strong>:
          Shop our top-rated collection.
        </p>
        <ExploreButton
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </section>
      <section
        className="flex flex-col h-[658px] items-center justify-end gap-[18px] px-20 py-[98px] relative self-stretch w-full bg-[url(https://c.animaapp.com/pcxrjcyN/img/frame-573.png)] bg-cover bg-[50%_50%]"
        aria-label="Limited edition collection"
      >
        <p className="relative self-stretch [font-family:'Tektur',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-4">
          <strong className="font-semibold">Don&apos;t Miss the Drop</strong>:
          Shop our signature limited-edition gear.
        </p>
        <ExploreButton
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </section>
      <section
        className="flex flex-col items-start justify-center gap-2.5 px-20 py-[100px] relative self-stretch w-full flex-[0_0_auto]"
        aria-labelledby="partners-heading"
      >
        <h2
          id="partners-heading"
          className="relative w-fit mt-[-1px] [font-family:'Tektur',Helvetica] font-normal text-white text-base tracking-[0] leading-[14.1px] whitespace-nowrap"
        >
          Our <strong className="font-bold">Family Partner</strong>
        </h2>
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          {partners.map((partner) => (
            <img
              key={partner.image}
              className={`relative ${partner.className} aspect-[1] object-cover`}
              alt={partner.alt}
              src={`${assetBaseUrl}${partner.image}`}
            />
          ))}
        </div>
      </section>
      <section
        className="flex items-center justify-center gap-[356px] px-20 py-[100px] relative self-stretch w-full flex-[0_0_auto]"
        aria-label="Shopping benefits"
      >
        <div className="flex items-center justify-center gap-[70px] relative flex-1 grow">
          {serviceBenefits.map((benefit) => (
            <div
              key={benefit.label}
              className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]"
            >
              <img
                className="relative w-8 h-8"
                alt=""
                aria-hidden="true"
                src={`${assetBaseUrl}${benefit.image}`}
              />
              <span className="relative w-fit [font-family:'Mulish',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-4 whitespace-nowrap">
                {benefit.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
