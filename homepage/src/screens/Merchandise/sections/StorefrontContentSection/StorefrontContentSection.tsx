import { useState } from "react";

const assetBaseUrl = "https://c.animaapp.com/UHvSMONH/img/";

const products = [
  { image: "frame-493.svg" },
  { image: "frame-493-1.svg" },
  { image: "frame-493-2.svg" },
  { image: "frame-493-3.svg" },
  { image: "frame-493-4.svg" },
];

const needs = [
  { name: "Team Apparel", image: "frame-563.svg" },
  { name: "T-shirts", image: "frame-563-1.svg" },
  { name: "Jacket", image: "frame-563-2.svg" },
  { name: "Hat & Cap", image: "frame-563-3.svg" },
];

const partners = [
  { alt: "Gytr", image: "gytr-1-1@2x.png", className: "w-[123px] h-[123px]" },
  {
    alt: "Pireli",
    image: "pireli-1-1@2x.png",
    className: "w-[123px] h-[124px]",
  },
  { alt: "Progp", image: "progp-1@2x.png", className: "w-[123px] h-[124px]" },
  {
    alt: "Partner logo",
    image: "image-26@2x.png",
    className: "w-[123px] h-[123px]",
  },
  {
    alt: "Partner logo",
    image: "image-27@2x.png",
    className: "w-[123px] h-[123px]",
  },
  {
    alt: "Partner logo",
    image: "image-28@2x.png",
    className: "w-[123px] h-[123px]",
  },
  {
    alt: "Partner logo",
    image: "image-29@2x.png",
    className: "w-[123px] h-[123px]",
  },
];

const benefits = [
  { icon: "shieldcheck.svg", alt: "Shield check", label: "Secure Payment" },
  { icon: "trucktrailer.svg", alt: "Truck trailer", label: "Fast Delivery" },
  {
    icon: "arrowcounterclockwise.svg",
    alt: "Arrow counter",
    label: "14 Days Return",
  },
];

interface CarouselControlsProps {
  dark?: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

const CarouselControls = ({
  dark = false,
  onPrevious,
  onNext,
}: CarouselControlsProps): JSX.Element => {
  const iconSuffix = dark ? ["1", "2"] : ["3", "4"];

  return (
    <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
      <div
        className={`relative w-fit [font-family:'Tektur',Helvetica] font-normal text-base tracking-[0] leading-[14.1px] whitespace-nowrap ${
          dark ? "text-white" : "text-[#141414]"
        }`}
      >
        View all
      </div>
      <div
        className={`inline-flex gap-2.5 items-center relative flex-[0_0_auto] ${dark ? "" : "ml-[22px]"}`}
      >
        <button
          type="button"
          aria-label="Previous products"
          onClick={onPrevious}
          className="flex w-9 h-9 items-center justify-center cursor-pointer"
        >
          <img
            className="w-9 h-9"
            alt=""
            aria-hidden="true"
            src={`${assetBaseUrl}chevron-backward-${iconSuffix[0]}.svg`}
          />
        </button>
        <button
          type="button"
          aria-label="Next products"
          onClick={onNext}
          className="flex w-9 h-9 items-center justify-center cursor-pointer"
        >
          <img
            className="w-9 h-9"
            alt=""
            aria-hidden="true"
            src={`${assetBaseUrl}chevron-backward-${iconSuffix[1]}.svg`}
          />
        </button>
      </div>
    </div>
  );
};

interface ExploreBannerProps {
  height: string;
  image: string;
  children: React.ReactNode;
}

const ExploreBanner = ({
  height,
  image,
  children,
}: ExploreBannerProps): JSX.Element => {
  return (
    <section
      className={`flex flex-col ${height} items-center justify-end gap-[18px] px-20 py-[98px] relative self-stretch w-full bg-cover bg-[50%_50%]`}
      style={{ backgroundImage: `url(${assetBaseUrl}${image})` }}
    >
      {children}
      <a
        href="#all-products"
        className="relative inline-flex w-[156px] h-10 items-center justify-center bg-[100%_100%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        style={{
          backgroundImage: `url(${assetBaseUrl}rectangle-1-2.svg)`,
        }}
      >
        <span className="[font-family:'Tektur',Helvetica] font-normal text-white text-base tracking-[0] leading-[14.1px] whitespace-nowrap">
          Explore
        </span>
      </a>
    </section>
  );
};

export const StorefrontContentSection = (): JSX.Element => {
  const [activeProductTab, setActiveProductTab] = useState<"new" | "hot">(
    "new",
  );
  const [productPage, setProductPage] = useState(0);
  const [needPage, setNeedPage] = useState(0);

  const showPreviousProducts = (): void => {
    setProductPage((currentPage) =>
      currentPage === 0 ? products.length - 1 : currentPage - 1,
    );
  };

  const showNextProducts = (): void => {
    setProductPage((currentPage) => (currentPage + 1) % products.length);
  };

  const showPreviousNeeds = (): void => {
    setNeedPage((currentPage) =>
      currentPage === 0 ? needs.length - 1 : currentPage - 1,
    );
  };

  const showNextNeeds = (): void => {
    setNeedPage((currentPage) => (currentPage + 1) % needs.length);
  };

  return (
    <main className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
      <section className="flex flex-col items-start gap-2.5 pt-[70px] pb-[100px] px-20 relative self-stretch w-full flex-[0_0_auto] bg-[linear-gradient(0deg,rgba(0,0,0,0.54)_0%,rgba(0,0,0,0.54)_100%)]">
        <div className="flex flex-col items-center justify-center gap-[38px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex justify-between self-stretch w-full items-center relative flex-[0_0_auto]">
            <div
              className="inline-flex items-center gap-5 relative self-stretch flex-[0_0_auto]"
              role="tablist"
              aria-label="Product collection"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeProductTab === "new"}
                onClick={() => setActiveProductTab("new")}
                className="inline-flex items-center justify-center gap-2.5 relative self-stretch flex-[0_0_auto] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <span className="text-center relative w-fit [font-family:'Tektur',Helvetica] font-normal text-white text-base tracking-[0] leading-[14.1px] whitespace-nowrap">
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
                aria-selected={activeProductTab === "hot"}
                onClick={() => setActiveProductTab("hot")}
                className="inline-flex items-center justify-center gap-2.5 relative self-stretch flex-[0_0_auto] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <span className="relative w-fit [font-family:'Tektur',Helvetica] font-normal text-[#8e8e8e] text-base text-center tracking-[0] leading-[14.1px] whitespace-nowrap">
                  Hot <strong className="font-bold">Product</strong>
                </span>
              </button>
            </div>
            <CarouselControls
              dark={true}
              onPrevious={showPreviousProducts}
              onNext={showNextProducts}
            />
          </div>
        </div>
        <div
          className="flex w-[1120px] items-center gap-2.5 relative flex-[0_0_auto]"
          role="tabpanel"
          aria-label={
            activeProductTab === "new" ? "New arrivals" : "Hot products"
          }
          data-page={productPage}
        >
          {products.map((product, _index) => (
            <article
              key={product.image}
              className="flex flex-col items-center relative flex-1 grow bg-[#141414]"
            >
              <div
                className="flex flex-col w-[216px] h-[229px] items-end gap-[204px] p-5 relative bg-cover bg-[50%_50%]"
                style={{
                  backgroundImage: `url(${assetBaseUrl}${product.image})`,
                }}
              >
                <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <span className="inline-flex items-center justify-center gap-2.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-[#006ee3] rounded-[5px]">
                    <span className="mt-[-1.00px] relative w-fit [font-family:'Tektur',Helvetica] font-normal text-white text-base tracking-[0] leading-[14.1px] whitespace-nowrap">
                      New
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col w-[216px] items-start gap-2.5 relative flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-2.5 px-5 py-[31px] relative self-stretch w-full flex-[0_0_auto]">
                  <div
                    className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]"
                    aria-label="Available colors"
                  >
                    <span
                      className="relative w-[29px] h-[35px] bg-cover bg-[50%_50%]"
                      style={{
                        backgroundImage: `url(${assetBaseUrl}frame-555-4@2x.png)`,
                      }}
                    />
                    <span
                      className="relative w-[29px] h-[35px] bg-cover bg-[50%_50%]"
                      style={{
                        backgroundImage: `url(${assetBaseUrl}frame-556-4@2x.png)`,
                      }}
                    />
                  </div>
                  <p className="relative self-stretch [font-family:'Tektur',Helvetica] font-normal text-[#9c9c9c] text-xs tracking-[0] leading-[10.6px]">
                    tshirt
                  </p>
                  <h3 className="relative self-stretch [font-family:'Tektur',Helvetica] font-bold text-white text-base tracking-[0] leading-[14.1px]">
                    Essential T-Shirt
                  </h3>
                  <p className="self-stretch font-normal text-base leading-[14.1px] relative [font-family:'Tektur',Helvetica] text-white tracking-[0]">
                    Rp150.000
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <ExploreBanner height="h-[627px]" image="frame-542.png">
        <h2 className="relative self-stretch [font-family:'Tektur',Helvetica] font-semibold text-white text-base text-center tracking-[0] leading-4">
          Explore All Products
        </h2>
      </ExploreBanner>
      <section
        id="all-products"
        className="flex flex-col items-start px-20 py-[50px] relative self-stretch w-full flex-[0_0_auto] bg-white"
      >
        <div className="flex h-[72px] items-center justify-between relative self-stretch w-full">
          <h2 className="inline-flex items-center justify-center gap-2.5 relative self-stretch flex-[0_0_auto] [font-family:'Tektur',Helvetica] font-normal text-[#141414] text-base text-center tracking-[0] leading-[14.1px] whitespace-nowrap">
            Shop <strong className="font-bold">by Need</strong>
          </h2>
          <CarouselControls
            onPrevious={showPreviousNeeds}
            onNext={showNextNeeds}
          />
        </div>
        <div
          className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto] overflow-hidden"
          aria-label="Shop by need"
          data-page={needPage}
        >
          {needs.map((need) => (
            <a
              key={need.name}
              href="#all-products"
              className={`inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto] ${
                need.name === "Hat & Cap" ? "w-[530px]" : ""
              } focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#141414]`}
            >
              <div
                className="relative w-[305px] h-[417px] bg-cover bg-[50%_50%]"
                style={{
                  backgroundImage: `url(${assetBaseUrl}${need.image})`,
                }}
              />
              <div className="inline-flex h-[60.57px] items-center justify-center gap-2.5 p-2.5 relative">
                <span className="relative w-fit [font-family:'Tektur',Helvetica] font-normal text-[#141414] text-base tracking-[0] leading-[14.1px] whitespace-nowrap">
                  {need.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
      <ExploreBanner height="h-[570px]" image="frame-572.png">
        <p className="relative self-stretch [font-family:'Tektur',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-4">
          <strong className="font-semibold">See what&apos;s trending</strong>:
          Shop our top-rated collection.
        </p>
      </ExploreBanner>
      <ExploreBanner height="h-[658px]" image="frame-573.png">
        <p className="relative self-stretch [font-family:'Tektur',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-4">
          <strong className="font-semibold">Don&apos;t Miss the Drop</strong>:
          Shop our signature limited-edition gear.
        </p>
      </ExploreBanner>
      <section className="flex flex-col items-start justify-center gap-2.5 px-20 py-[100px] relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-normal text-white text-base tracking-[0] leading-[14.1px] whitespace-nowrap">
          Our <strong className="font-bold">Family Partner</strong>
        </h2>
        <div className="flex justify-between self-stretch w-full items-center relative flex-[0_0_auto]">
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
          {benefits.map((benefit) => (
            <div
              key={benefit.label}
              className="inline-flex gap-2.5 items-center relative flex-[0_0_auto]"
            >
              <img
                className="relative w-8 h-8"
                alt=""
                aria-hidden="true"
                src={`${assetBaseUrl}${benefit.icon}`}
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
