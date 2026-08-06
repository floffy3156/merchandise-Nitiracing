import { useState } from "react";

const utilityLinks = ["Help", "Orders"];
const navigationLinks = ["Home", "Team Shop", "Rider Editions", "NitiNews"];
const slides = [0, 1, 2, 3, 4, 5];

export const StoreHeaderSection = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const showPreviousSlide = () => {
    setActiveSlide((currentSlide) =>
      currentSlide === 0 ? slides.length - 1 : currentSlide - 1,
    );
  };

  const showNextSlide = () => {
    setActiveSlide((currentSlide) =>
      currentSlide === slides.length - 1 ? 0 : currentSlide + 1,
    );
  };

  return (
    <header className="flex h-[658px] w-full flex-col items-center self-stretch bg-black">
      <div className="relative flex w-full flex-[0_0_auto] flex-col items-start self-stretch">
        <div className="relative flex w-full flex-[0_0_auto] items-center justify-between bg-[#006ee3] px-20 py-2.5">
          <a
            className="relative mt-[-1px] whitespace-nowrap [font-family:'Tektur',Helvetica] text-xs font-medium leading-[10.6px] tracking-[0] text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
            href="https://nitiracing.com"
          >
            Nitiracing.com
          </a>
          <nav
            aria-label="Utility navigation"
            className="inline-flex items-center gap-5"
          >
            {utilityLinks.map((link) => (
              <a
                key={link}
                className="relative mt-[-1px] whitespace-nowrap [font-family:'Tektur',Helvetica] text-xs font-medium leading-[10.6px] tracking-[0] text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
                href={`#${link.toLowerCase()}`}
              >
                {link}
              </a>
            ))}

            <div className="relative">
              <button
                aria-expanded={currencyOpen}
                aria-haspopup="listbox"
                aria-label="Select currency"
                className="inline-flex items-center justify-center gap-[34px] text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
                type="button"
                onClick={() => {
                  setCurrencyOpen((isOpen) => !isOpen);
                  setLanguageOpen(false);
                }}
              >
                <span className="w-[21px] [font-family:'Tektur',Helvetica] text-xs font-medium leading-[10.6px] tracking-[0] text-white">
                  IDR
                </span>
                <img
                  className="h-[5px] w-2"
                  alt=""
                  aria-hidden="true"
                  src="https://c.animaapp.com/pcxrjcyN/img/icon-1.svg"
                />
              </button>
              {currencyOpen && (
                <div
                  role="listbox"
                  aria-label="Currency options"
                  className="absolute right-0 top-6 z-20 min-w-[70px] bg-[#006ee3] py-1 text-white shadow-lg"
                >
                  <button
                    role="option"
                    aria-selected="true"
                    className="block w-full px-3 py-1 text-left [font-family:'Tektur',Helvetica] text-xs hover:bg-white/20 focus:bg-white/20 focus:outline-none"
                    type="button"
                    onClick={() => setCurrencyOpen(false)}
                  >
                    IDR
                  </button>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                aria-expanded={languageOpen}
                aria-haspopup="listbox"
                aria-label="Select language"
                className="inline-flex items-center justify-center gap-[34px] text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
                type="button"
                onClick={() => {
                  setLanguageOpen((isOpen) => !isOpen);
                  setCurrencyOpen(false);
                }}
              >
                <span className="relative mt-[-1px] whitespace-nowrap [font-family:'Tektur',Helvetica] text-xs font-medium leading-[10.6px] tracking-[0] text-white">
                  EN
                </span>
                <img
                  className="h-[5px] w-2"
                  alt=""
                  aria-hidden="true"
                  src="https://c.animaapp.com/pcxrjcyN/img/icon-1.svg"
                />
              </button>
              {languageOpen && (
                <div
                  role="listbox"
                  aria-label="Language options"
                  className="absolute right-0 top-6 z-20 min-w-[70px] bg-[#006ee3] py-1 text-white shadow-lg"
                >
                  <button
                    role="option"
                    aria-selected="true"
                    className="block w-full px-3 py-1 text-left [font-family:'Tektur',Helvetica] text-xs hover:bg-white/20 focus:bg-white/20 focus:outline-none"
                    type="button"
                    onClick={() => setLanguageOpen(false)}
                  >
                    EN
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
        <div className="relative flex w-full flex-[0_0_auto] items-center gap-5 self-stretch border border-solid border-[#9c9c9c] bg-[#ffffff1a] px-20 py-0 backdrop-blur-[18.8px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(18.8px)_brightness(100%)]">
          <a href="#home" aria-label="Niti Racing store home">
            <img
              className="relative h-14 w-[157px] aspect-[2.81] object-cover"
              alt="Niti Racing"
              src="https://c.animaapp.com/pcxrjcyN/img/image-30@2x.png"
            />
          </a>
          <nav
            aria-label="Store navigation"
            className="relative flex flex-1 grow items-center px-[50px] py-0"
          >
            <div className="relative flex flex-1 grow items-center gap-[50px]">
              <div className="relative ml-[-1px] mt-[-1px] mb-[-1px] inline-flex flex-[0_0_auto] items-center gap-[50px] border-r border-solid border-white py-0 pl-0 pr-[50px]">
                <a
                  className="whitespace-nowrap [font-family:'Tektur',Helvetica] text-base font-medium leading-[14.1px] tracking-[0] text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
                  href="#all"
                >
                  All
                </a>
                <a
                  className="whitespace-nowrap [font-family:'Tektur',Helvetica] text-base font-medium leading-[14.1px] tracking-[0] text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
                  href="#wishlist"
                >
                  Wishlist
                </a>
              </div>
              <div className="relative flex flex-1 grow items-center justify-between">
                {navigationLinks.map((link) => (
                  <a
                    key={link}
                    className="relative mt-[-1px] whitespace-nowrap [font-family:'Tektur',Helvetica] text-base font-medium leading-[14.1px] tracking-[0] text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </nav>
          <div className="inline-flex flex-[0_0_auto] items-center gap-5">
            <button
              aria-label="Search products"
              className="flex h-[25px] w-[25px] items-center justify-center focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
              type="button"
            >
              <img
                className="h-[25px] w-[25px]"
                alt=""
                aria-hidden="true"
                src="https://c.animaapp.com/pcxrjcyN/img/search.svg"
              />
            </button>
            <a
              aria-label="View shopping cart"
              className="flex h-[25px] w-[25px] items-center justify-center focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
              href="#cart"
            >
              <img
                className="h-[25px] w-[25px]"
                alt=""
                aria-hidden="true"
                src="https://c.animaapp.com/pcxrjcyN/img/shoppingcartsimple.svg"
              />
            </a>
            <a
              aria-label="View account"
              className="flex h-[25px] w-[25px] items-center justify-center focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
              href="#account"
            >
              <img
                className="h-[25px] w-[25px]"
                alt=""
                aria-hidden="true"
                src="https://c.animaapp.com/pcxrjcyN/img/user.svg"
              />
            </a>
          </div>
        </div>
      </div>
      <section
        aria-label="Featured merchandise"
        className="relative flex h-[472px] w-full items-center justify-center gap-1 self-stretch px-20 py-0"
      >
        <div className="relative flex flex-1 grow items-center justify-center gap-1">
          <button
            aria-label="Previous featured item"
            className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-2.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
            type="button"
            onClick={showPreviousSlide}
          >
            <span className="inline-flex items-center gap-2.5">
              <img
                className="relative h-9 w-9"
                alt=""
                aria-hidden="true"
                src="https://c.animaapp.com/pcxrjcyN/img/chevron-backward-1.svg"
              />
            </span>
          </button>
          <div
            className="relative h-[344px] flex-1 grow rounded-2xl bg-[url(https://c.animaapp.com/pcxrjcyN/img/frame-526.png)] bg-cover bg-[50%_50%]"
            role="img"
            aria-label={`Featured merchandise slide ${activeSlide + 1} of ${slides.length}`}
          />
          <button
            aria-label="Next featured item"
            className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-2.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
            type="button"
            onClick={showNextSlide}
          >
            <span className="inline-flex items-center gap-2.5">
              <span className="relative h-9 w-[38px] -rotate-180">
                <img
                  className="absolute left-[33.33%] top-[25%] h-[75%] w-[66.67%] rotate-180"
                  alt=""
                  aria-hidden="true"
                  src="https://c.animaapp.com/pcxrjcyN/img/icon-2.svg"
                />
              </span>
            </span>
          </button>
        </div>
      </section>
      <div
        className="relative h-[5.45px] w-[50px]"
        role="tablist"
        aria-label="Featured merchandise slides"
      >
        {slides.map((slide, index) => (
          <button
            key={slide}
            role="tab"
            aria-label={`Show slide ${index + 1}`}
            aria-selected={activeSlide === index}
            className={`absolute top-0 h-[5px] w-[5px] rounded-[2.72px] focus:outline-none focus-visible:ring-1 focus-visible:ring-white ${
              activeSlide === index ? "bg-[#006ee3]" : "bg-[#d9d9d9]"
            }`}
            style={{ left: `${index * 9}px` }}
            type="button"
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </header>
  );
};
