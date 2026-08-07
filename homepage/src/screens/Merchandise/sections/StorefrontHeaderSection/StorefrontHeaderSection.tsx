import { FormEvent, useState } from "react";

const topLinks = [
  { label: "Help", href: "#help" },
  { label: "Orders", href: "#orders" },
];

const storeLinks = [
  { label: "All", href: "#all" },
  { label: "Wishlist", href: "#wishlist" },
];

const categoryLinks = [
  { label: "Apparel", href: "#apparel" },
  { label: "Headware", href: "#headware" },
  { label: "Accesories", href: "#accesories" },
  { label: "New Arrivals", href: "#new-arrivals" },
];

const carouselSlides = [0, 1, 2, 3, 4, 5];

export const StorefrontHeaderSection = (): JSX.Element => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [currency, setCurrency] = useState("IDR");
  const [language, setLanguage] = useState("EN");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSearchOpen(false);
  };

  const selectPreviousSlide = () => {
    setActiveSlide(
      (currentSlide) =>
        (currentSlide - 1 + carouselSlides.length) % carouselSlides.length,
    );
  };

  const selectNextSlide = () => {
    setActiveSlide(
      (currentSlide) => (currentSlide + 1) % carouselSlides.length,
    );
  };

  return (
    <header className="flex flex-col h-[658px] items-center pt-2.5 pb-[73px] px-0 relative self-stretch w-full bg-[url(https://c.animaapp.com/UHvSMONH/img/frame-574.png)] bg-cover bg-[50%_50%]">
      <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center justify-between px-20 py-0 relative self-stretch w-full flex-[0_0_auto]">
          <a
            className="inline-flex items-center gap-16 relative flex-[0_0_auto] focus-visible:outline focus-visible:outline-1 focus-visible:outline-white"
            href="https://nitiracing.com"
          >
            <span className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-medium text-white text-xs tracking-[0] leading-[10.6px] whitespace-nowrap">
              Nitiracing.com
            </span>
          </a>
          <div className="inline-flex items-center gap-[50px] relative flex-[0_0_auto]">
            <nav
              aria-label="Utility navigation"
              className="inline-flex items-center gap-[50px]"
            >
              {topLinks.map((link) => (
                <a
                  key={link.label}
                  className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-medium text-white text-xs tracking-[0] leading-[10.6px] whitespace-nowrap focus-visible:outline focus-visible:outline-1 focus-visible:outline-white"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <button
              aria-label={`Change currency, currently ${currency}`}
              className="inline-flex items-center justify-center gap-[34px] relative flex-[0_0_auto] cursor-pointer focus-visible:outline focus-visible:outline-1 focus-visible:outline-white"
              type="button"
              onClick={() =>
                setCurrency((value) => (value === "IDR" ? "USD" : "IDR"))
              }
            >
              <span className="w-fit mt-[-1.00px] font-medium text-xs leading-[10.6px] whitespace-nowrap relative [font-family:'Tektur',Helvetica] text-white tracking-[0]">
                {currency}
              </span>
              <img
                className="relative w-2 h-[5px]"
                alt=""
                aria-hidden="true"
                src="https://c.animaapp.com/UHvSMONH/img/icon-1.svg"
              />
            </button>
            <button
              aria-label={`Change language, currently ${language}`}
              className="inline-flex items-center justify-center gap-[34px] relative flex-[0_0_auto] cursor-pointer focus-visible:outline focus-visible:outline-1 focus-visible:outline-white"
              type="button"
              onClick={() =>
                setLanguage((value) => (value === "EN" ? "ID" : "EN"))
              }
            >
              <span className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-medium text-white text-xs tracking-[0] leading-[10.6px] whitespace-nowrap">
                {language}
              </span>
              <img
                className="relative w-2 h-[5px]"
                alt=""
                aria-hidden="true"
                src="https://c.animaapp.com/UHvSMONH/img/icon-1.svg"
              />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-5 px-20 py-0 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff1a] border border-solid border-[#9c9c9c] backdrop-blur-[18.8px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(18.8px)_brightness(100%)]">
          <a
            aria-label="Niti Racing store home"
            className="relative flex-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-white"
            href="#all"
          >
            <img
              className="relative w-[148px] h-[53px] aspect-[2.81] object-cover"
              alt="Niti Racing"
              src="https://c.animaapp.com/UHvSMONH/img/image-25@2x.png"
            />
          </a>
          <nav
            aria-label="Store categories"
            className="flex items-center px-[50px] py-0 relative flex-1 grow"
          >
            <div className="flex items-center gap-[50px] relative flex-1 grow">
              <div className="inline-flex items-center gap-[50px] pl-0 pr-[50px] py-0 relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] border-r [border-right-style:solid] border-white">
                {storeLinks.map((link) => (
                  <a
                    key={link.label}
                    className="relative w-fit [font-family:'Tektur',Helvetica] font-medium text-white text-base tracking-[0] leading-[14.1px] whitespace-nowrap focus-visible:outline focus-visible:outline-1 focus-visible:outline-white"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="flex items-center justify-between relative flex-1 grow">
                {categoryLinks.map((link) => (
                  <a
                    key={link.label}
                    className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-medium text-white text-base tracking-[0] leading-[14.1px] whitespace-nowrap focus-visible:outline focus-visible:outline-1 focus-visible:outline-white"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>
          <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
            <button
              aria-expanded={isSearchOpen}
              aria-label="Open product search"
              className="relative w-[25px] h-[25px] cursor-pointer focus-visible:outline focus-visible:outline-1 focus-visible:outline-white"
              type="button"
              onClick={() => setIsSearchOpen((value) => !value)}
            >
              <img
                className="relative w-[25px] h-[25px]"
                alt=""
                aria-hidden="true"
                src="https://c.animaapp.com/UHvSMONH/img/search.svg"
              />
            </button>
            <a
              aria-label="Shopping cart"
              className="relative w-[25px] h-[25px] focus-visible:outline focus-visible:outline-1 focus-visible:outline-white"
              href="#cart"
            >
              <img
                className="relative w-[25px] h-[25px]"
                alt=""
                aria-hidden="true"
                src="https://c.animaapp.com/UHvSMONH/img/shoppingcartsimple.svg"
              />
            </a>
            <a
              aria-label="User account"
              className="relative w-[25px] h-[25px] focus-visible:outline focus-visible:outline-1 focus-visible:outline-white"
              href="#account"
            >
              <img
                className="relative w-[25px] h-[25px]"
                alt=""
                aria-hidden="true"
                src="https://c.animaapp.com/UHvSMONH/img/user.svg"
              />
            </a>
          </div>
          {isSearchOpen && (
            <form
              aria-label="Product search"
              className="absolute right-20 top-[calc(100%+8px)] z-10 flex h-10 items-center border border-solid border-white bg-black/80 px-3 backdrop-blur-[18.8px]"
              onSubmit={handleSearchSubmit}
            >
              <label className="sr-only" htmlFor="storefront-search">
                Search products
              </label>
              <input
                className="h-full w-48 [font-family:'Tektur',Helvetica] text-sm text-white placeholder:text-white/70"
                id="storefront-search"
                name="search"
                placeholder="Search products"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
              <button
                className="[font-family:'Tektur',Helvetica] text-xs text-white cursor-pointer focus-visible:outline focus-visible:outline-1 focus-visible:outline-white"
                type="submit"
              >
                Search
              </button>
            </form>
          )}
        </div>
      </div>
      <section
        aria-label="Featured merchandise"
        className="flex h-[472px] items-center justify-center gap-1 px-20 py-0 relative self-stretch w-full"
      >
        <div className="flex items-center justify-center gap-1 relative flex-1 grow">
          <button
            aria-label="Previous featured item"
            className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto] cursor-pointer focus-visible:outline focus-visible:outline-1 focus-visible:outline-white"
            type="button"
            onClick={selectPreviousSlide}
          >
            <span className="inline-flex gap-2.5 items-center relative flex-[0_0_auto]">
              <img
                className="w-9 relative h-9"
                alt=""
                aria-hidden="true"
                src="https://c.animaapp.com/UHvSMONH/img/chevron-backward-1.svg"
              />
            </span>
          </button>
          <div
            aria-label={`Featured merchandise slide ${activeSlide + 1} of ${carouselSlides.length}`}
            className="relative flex-1 grow h-[344px] rounded-2xl bg-[url(https://c.animaapp.com/UHvSMONH/img/frame-526.png)] bg-cover bg-[50%_50%]"
            role="img"
          />
          <button
            aria-label="Next featured item"
            className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto] cursor-pointer focus-visible:outline focus-visible:outline-1 focus-visible:outline-white"
            type="button"
            onClick={selectNextSlide}
          >
            <span className="inline-flex gap-2.5 items-center relative flex-[0_0_auto]">
              <span className="w-[38px] -rotate-180 relative h-9">
                <img
                  className="absolute w-[66.67%] h-[75.00%] top-[25.00%] left-[33.33%] rotate-180"
                  alt=""
                  aria-hidden="true"
                  src="https://c.animaapp.com/UHvSMONH/img/icon-2.svg"
                />
              </span>
            </span>
          </button>
        </div>
      </section>
      <div
        aria-label={`Featured merchandise slide ${activeSlide + 1} of ${carouselSlides.length}`}
        className="relative w-[50px] h-[5.45px]"
        role="tablist"
      >
        {carouselSlides.map((slide, index) => (
          <button
            key={slide}
            aria-label={`Go to featured merchandise slide ${index + 1}`}
            aria-selected={activeSlide === index}
            className={`absolute top-0 w-[5px] h-[5px] rounded-[2.72px] cursor-pointer focus-visible:outline focus-visible:outline-1 focus-visible:outline-white ${
              activeSlide === index ? "bg-[#006ee3]" : "bg-[#d9d9d9]"
            }`}
            role="tab"
            style={{ left: `${index * 9}px` }}
            type="button"
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </header>
  );
};
