import { useState } from "react";

const assetBase = "https://c.animaapp.com/Hlq4xexy/img/";

const products = [
  { image: "frame-493.svg", name: "Essential T-Shirt" },
  { image: "frame-493-1.svg", name: "Essential T-Shirt" },
  { image: "frame-493-2.svg", name: "Essential T-Shirt" },
  { image: "frame-493-3.svg", name: "Essential T-Shirt" },
  { image: "frame-493-4.svg", name: "Essential T-Shirt" },
];

const categories = [
  { image: "frame-563.svg", label: "Team Apparel" },
  { image: "frame-563-1.svg", label: "T-shirts" },
  { image: "frame-563-2.svg", label: "Jacket" },
  { image: "frame-563-3.svg", label: "Hat & Cap" },
];

const partners = [
  { src: "gytr-1-1@2x.png", alt: "GYTR" },
  { src: "pireli-1-1@2x.png", alt: "Pirelli" },
  { src: "progp-1@2x.png", alt: "ProGP" },
  { src: "image-26@2x.png", alt: "Partner logo 1" },
  { src: "image-27@2x.png", alt: "Partner logo 2" },
  { src: "image-28@2x.png", alt: "Partner logo 3" },
  { src: "image-29@2x.png", alt: "Partner logo 4" },
];

const benefits = [
  { icon: "shieldcheck.svg", alt: "", label: "Secure Payment" },
  { icon: "trucktrailer.svg", alt: "", label: "Fast Delivery" },
  { icon: "arrowcounterclockwise.svg", alt: "", label: "14 Days Return" },
];

const ExploreButton = ({ ariaLabel }) => (
  <button
    type="button"
    aria-label={ariaLabel}
    className="relative h-10 w-[156px] transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
  >
    <img
      className="absolute left-1.5 top-0 h-10 w-[145px]"
      alt=""
      aria-hidden="true"
      src={`${assetBase}rectangle-1-2.svg`}
    />
    <span className="absolute left-12 top-[13px] whitespace-nowrap [font-family:'Tektur',Helvetica] text-base font-normal leading-[14.1px] tracking-[0] text-white">
      Explore
    </span>
  </button>
);

const CarouselControls = ({ dark = false, onPrevious, onNext }) => (
  <div className="inline-flex items-center gap-2.5">
    <button
      type="button"
      aria-label="Previous items"
      onClick={onPrevious}
      className="h-9 w-9 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
    >
      <img
        className="h-9 w-9"
        alt=""
        aria-hidden="true"
        src={`${assetBase}${dark ? "chevron-backward-2.svg" : "chevron-backward.svg"}`}
      />
    </button>
    <button
      type="button"
      aria-label="Next items"
      onClick={onNext}
      className="h-9 w-9 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
    >
      <img
        className="h-9 w-9"
        alt=""
        aria-hidden="true"
        src={`${assetBase}${dark ? "chevron-backward-3.svg" : "chevron-backward-1.svg"}`}
      />
    </button>
  </div>
);

export const StorefrontContentSection = () => {
  const [activeProductTab, setActiveProductTab] = useState("new");
  const [productOffset, setProductOffset] = useState(0);
  const [categoryOffset, setCategoryOffset] = useState(0);

  const moveProducts = (direction) => {
    setProductOffset(
      (current) => (current + direction + products.length) % products.length,
    );
  };

  const moveCategories = (direction) => {
    setCategoryOffset(
      (current) =>
        (current + direction + categories.length) % categories.length,
    );
  };

  const orderedProducts = products.map(
    (_, index) => products[(index + productOffset) % products.length],
  );

  const orderedCategories = categories.map(
    (_, index) => categories[(index + categoryOffset) % categories.length],
  );

  return (
    <main className="relative flex w-full flex-col items-start">
      <section
        className="relative flex w-full flex-col items-start gap-2.5 bg-[linear-gradient(0deg,rgba(0,0,0,0.54)_0%,rgba(0,0,0,0.54)_100%)] px-20 pb-[100px] pt-[70px]"
        aria-labelledby="new-arrivals-heading"
      >
        <div className="relative flex w-full flex-col items-center justify-center gap-[38px]">
          <div className="relative flex w-full items-center justify-between">
            <div className="inline-flex items-center gap-5 self-stretch">
              <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
                <button
                  id="new-arrivals-heading"
                  type="button"
                  aria-pressed={activeProductTab === "new"}
                  onClick={() => setActiveProductTab("new")}
                  className="whitespace-nowrap text-center [font-family:'Tektur',Helvetica] text-base font-normal leading-[14.1px] tracking-[0] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  New <strong className="font-bold">Arrivals</strong>
                </button>
              </div>
              <img
                className="h-7 w-[3px]"
                alt=""
                aria-hidden="true"
                src={`${assetBase}line-4.svg`}
              />
              <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
                <button
                  type="button"
                  aria-pressed={activeProductTab === "hot"}
                  onClick={() => setActiveProductTab("hot")}
                  className="whitespace-nowrap text-center [font-family:'Tektur',Helvetica] text-base font-normal leading-[14.1px] tracking-[0] text-[#8e8e8e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Hot <strong className="font-bold">Product</strong>
                </button>
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
              <button
                type="button"
                className="whitespace-nowrap [font-family:'Tektur',Helvetica] text-base font-normal leading-[14.1px] tracking-[0] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                View all
              </button>
              <CarouselControls
                onPrevious={() => moveProducts(-1)}
                onNext={() => moveProducts(1)}
              />
            </div>
          </div>
        </div>
        <div className="relative flex w-[1120px] items-center gap-2.5 overflow-hidden">
          {orderedProducts.map((product, index) => (
            <article
              key={`${product.image}-${index}`}
              className="inline-flex flex-none flex-col items-center overflow-hidden rounded-[10px]"
            >
              <div
                className="relative flex h-[229px] w-[216px] flex-col items-end gap-[204px] bg-cover bg-center p-5"
                style={{ backgroundImage: `url(${assetBase}${product.image})` }}
              >
                <div className="relative flex w-full items-center gap-2.5">
                  <span className="inline-flex items-center justify-center gap-2.5 rounded-[5px] bg-[#006ee3] px-2.5 py-[5px] [font-family:'Tektur',Helvetica] text-xs font-normal leading-[10.6px] tracking-[0] text-white">
                    New
                  </span>
                </div>
              </div>
              <div className="relative flex w-[216px] flex-col items-start gap-2.5 rounded-[10px]">
                <div className="relative flex w-full flex-col items-start gap-2.5 px-5 py-[31px]">
                  <div className="inline-flex items-start gap-2.5">
                    <div
                      className="h-[35px] w-[29px] bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${assetBase}frame-555-4@2x.png)`,
                      }}
                    />
                    <div
                      className="h-[35px] w-[29px] bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${assetBase}frame-556-4@2x.png)`,
                      }}
                    />
                  </div>
                  <p className="w-full [font-family:'Tektur',Helvetica] text-xs font-normal leading-[10.6px] tracking-[0] text-[#9c9c9c]">
                    tshirt
                  </p>
                  <h3 className="w-full [font-family:'Tektur',Helvetica] text-base font-bold leading-[14.1px] tracking-[0] text-white">
                    {product.name}
                  </h3>
                  <p className="w-full [font-family:'Tektur',Helvetica] text-base font-normal leading-[14.1px] tracking-[0] text-white">
                    Rp150.000
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        className="relative flex h-[627px] w-full flex-col items-center justify-end gap-[18px] bg-cover bg-center px-20 py-[98px]"
        style={{ backgroundImage: `url(${assetBase}frame-542.png)` }}
        aria-label="Explore all products"
      >
        <p className="w-full text-center [font-family:'Tektur',Helvetica] text-base font-semibold leading-4 tracking-[0] text-white">
          Explore All Products
        </p>
        <ExploreButton ariaLabel="Explore all products" />
      </section>
      <section
        className="relative flex w-full flex-col items-start bg-white px-20 py-[50px]"
        aria-labelledby="shop-by-need-heading"
      >
        <div className="relative flex h-[72px] w-full items-center justify-between">
          <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
            <h2
              id="shop-by-need-heading"
              className="whitespace-nowrap text-center [font-family:'Tektur',Helvetica] text-base font-normal leading-[14.1px] tracking-[0] text-[#141414]"
            >
              Shop <strong className="font-bold">by Need</strong>
            </h2>
          </div>
          <div className="inline-flex items-center justify-center gap-8 self-stretch">
            <button
              type="button"
              className="whitespace-nowrap [font-family:'Tektur',Helvetica] text-base font-normal leading-[14.1px] tracking-[0] text-[#141414] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#141414]"
            >
              View all
            </button>
            <CarouselControls
              dark
              onPrevious={() => moveCategories(-1)}
              onNext={() => moveCategories(1)}
            />
          </div>
        </div>
        <div className="relative flex w-full items-center gap-2.5 overflow-hidden">
          {orderedCategories.map((category, index) => (
            <button
              type="button"
              key={`${category.image}-${index}`}
              className="inline-flex flex-none flex-col items-start gap-2.5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#141414]"
            >
              <div
                className="h-[417px] w-[305px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${assetBase}${category.image})`,
                }}
              />
              <span className="inline-flex h-[60.57px] items-center justify-center gap-2.5 p-2.5 [font-family:'Tektur',Helvetica] text-base font-normal leading-[14.1px] tracking-[0] text-[#141414]">
                {category.label}
              </span>
            </button>
          ))}
        </div>
      </section>
      <section
        className="relative flex h-[570px] w-full flex-col items-center justify-end gap-[18px] bg-cover bg-center px-20 py-[98px]"
        style={{ backgroundImage: `url(${assetBase}frame-572.png)` }}
        aria-label="Trending collection"
      >
        <p className="w-full text-center [font-family:'Tektur',Helvetica] text-base font-normal leading-4 tracking-[0] text-white">
          <strong className="font-semibold">See what&apos;s trending</strong>:
          Shop our top-rated collection.
        </p>
        <ExploreButton ariaLabel="Explore trending collection" />
      </section>
      <section
        className="relative flex h-[658px] w-full flex-col items-center justify-end gap-[18px] bg-cover bg-center px-20 py-[98px]"
        style={{ backgroundImage: `url(${assetBase}frame-573.png)` }}
        aria-label="Limited edition collection"
      >
        <p className="w-full text-center [font-family:'Tektur',Helvetica] text-base font-normal leading-4 tracking-[0] text-white">
          <strong className="font-semibold">Don&apos;t Miss the Drop</strong>:
          Shop our signature limited-edition gear.
        </p>
        <ExploreButton ariaLabel="Explore limited edition gear" />
      </section>
      <section
        className="relative flex w-full flex-col items-start justify-center gap-2.5 px-20 py-[100px]"
        aria-labelledby="partners-heading"
      >
        <h2
          id="partners-heading"
          className="whitespace-nowrap [font-family:'Tektur',Helvetica] text-base font-normal leading-[14.1px] tracking-[0] text-white"
        >
          Our <strong className="font-bold">Family Partner</strong>
        </h2>
        <div className="relative flex w-full items-center justify-between">
          {partners.map((partner) => (
            <img
              key={partner.src}
              className="h-[123px] w-[123px] aspect-square object-cover"
              alt={partner.alt}
              src={`${assetBase}${partner.src}`}
            />
          ))}
        </div>
      </section>
      <section
        className="relative flex w-full items-center justify-center gap-[356px] px-20 py-[100px]"
        aria-label="Store benefits"
      >
        <div className="relative flex flex-1 items-center justify-center gap-[70px]">
          {benefits.map((benefit) => (
            <div
              key={benefit.label}
              className="inline-flex items-center gap-2.5"
            >
              <img
                className="h-8 w-8"
                alt={benefit.alt}
                aria-hidden="true"
                src={`${assetBase}${benefit.icon}`}
              />
              <span className="whitespace-nowrap text-center [font-family:'Mulish',Helvetica] text-base font-normal leading-4 tracking-[0] text-white">
                {benefit.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
