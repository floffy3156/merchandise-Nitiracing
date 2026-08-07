import { useEffect, useRef, useState } from "react";

const utilityLinks = [
  { label: "Help", href: "/help" },
  { label: "Orders", href: "/orders" },
];

const categoryLinks = [
  { label: "All", href: "/products" },
  { label: "Wishlist", href: "/wishlist" },
];

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "Team Shop", href: "/team-shop" },
  { label: "Rider Editions", href: "/rider-editions" },
  { label: "NitiNews", href: "/news" },
];

export const UtilityNavigationSection = () => {
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigationRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        navigationRef.current &&
        !navigationRef.current.contains(event.target)
      ) {
        setIsCurrencyOpen(false);
        setIsLanguageOpen(false);
        setIsSearchOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsCurrencyOpen(false);
        setIsLanguageOpen(false);
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleSearchSubmit = (_event) => {};

  return (
    <header
      ref={navigationRef}
      className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]"
    >
      <div className="flex items-center justify-between px-20 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-[#006ee3]">
        <a
          className="inline-flex items-center gap-16 relative flex-[0_0_auto] rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          href="https://nitiracing.com"
        >
          <span className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-medium text-white text-xs tracking-[0] leading-[10.6px] whitespace-nowrap">
            Nitiracing.com
          </span>
        </a>
        <nav
          aria-label="Utility navigation"
          className="inline-flex items-center gap-5 relative flex-[0_0_auto]"
        >
          {utilityLinks.map((link) => (
            <a
              key={link.label}
              className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-medium text-white text-xs tracking-[0] leading-[10.6px] whitespace-nowrap rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              href={link.href}
            >
              {link.label}
            </a>
          ))}

          <div className="relative">
            <button
              aria-controls="currency-menu"
              aria-expanded={isCurrencyOpen}
              className="inline-flex items-center justify-center gap-[34px] relative flex-[0_0_auto] rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              type="button"
              onClick={() => {
                setIsCurrencyOpen((isOpen) => !isOpen);
                setIsLanguageOpen(false);
              }}
            >
              <span className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-medium text-white text-xs tracking-[0] leading-[10.6px] whitespace-nowrap">
                IDR
              </span>
              <img
                className="relative w-2 h-[5px]"
                alt=""
                aria-hidden="true"
                src="https://c.animaapp.com/YJMTsyCZ/img/icon-1.svg"
              />
            </button>
            {isCurrencyOpen && (
              <div
                id="currency-menu"
                role="menu"
                className="absolute right-0 z-30 mt-2 min-w-[88px] overflow-hidden border border-white/30 bg-[#006ee3] shadow-lg"
              >
                {["IDR", "USD", "EUR"].map((currency) => (
                  <button
                    key={currency}
                    role="menuitem"
                    className="block w-full px-3 py-2 text-left [font-family:'Tektur',Helvetica] text-xs font-medium text-white hover:bg-white/15 focus-visible:bg-white/15 focus-visible:outline-none"
                    type="button"
                    onClick={() => setIsCurrencyOpen(false)}
                  >
                    {currency}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="relative">
            <button
              aria-controls="language-menu"
              aria-expanded={isLanguageOpen}
              className="inline-flex items-center justify-center gap-[34px] relative flex-[0_0_auto] rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              type="button"
              onClick={() => {
                setIsLanguageOpen((isOpen) => !isOpen);
                setIsCurrencyOpen(false);
              }}
            >
              <span className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-medium text-white text-xs tracking-[0] leading-[10.6px] whitespace-nowrap">
                EN
              </span>
              <img
                className="relative w-2 h-[5px]"
                alt=""
                aria-hidden="true"
                src="https://c.animaapp.com/YJMTsyCZ/img/icon-1.svg"
              />
            </button>
            {isLanguageOpen && (
              <div
                id="language-menu"
                role="menu"
                className="absolute right-0 z-30 mt-2 min-w-[88px] overflow-hidden border border-white/30 bg-[#006ee3] shadow-lg"
              >
                {["EN", "ID", "JP"].map((language) => (
                  <button
                    key={language}
                    role="menuitem"
                    className="block w-full px-3 py-2 text-left [font-family:'Tektur',Helvetica] text-xs font-medium text-white hover:bg-white/15 focus-visible:bg-white/15 focus-visible:outline-none"
                    type="button"
                    onClick={() => setIsLanguageOpen(false)}
                  >
                    {language}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
      <div className="flex items-center gap-5 px-20 py-0 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff1a] border border-solid border-[#9c9c9c] backdrop-blur-[18.8px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(18.8px)_brightness(100%)]">
        <a
          className="relative flex-none rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          href="/"
          aria-label="Niti Racing home"
        >
          <img
            className="relative w-[157px] h-14 aspect-[2.81] object-cover"
            alt="Niti Racing"
            src="https://c.animaapp.com/YJMTsyCZ/img/image-30@2x.png"
          />
        </a>
        <nav
          aria-label="Main navigation"
          className="flex items-center px-[50px] py-0 relative flex-1 grow"
        >
          <div className="flex items-center gap-[50px] relative flex-1 grow">
            <div className="inline-flex items-center gap-[50px] pl-0 pr-[50px] py-0 relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] border-r [border-right-style:solid] border-white">
              {categoryLinks.map((link) => (
                <a
                  key={link.label}
                  className="relative w-fit [font-family:'Tektur',Helvetica] font-medium text-white text-base tracking-[0] leading-[14.1px] whitespace-nowrap rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center justify-between relative flex-1 grow">
              {primaryLinks.map((link) => (
                <a
                  key={link.label}
                  className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-medium text-white text-base tracking-[0] leading-[14.1px] whitespace-nowrap rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
            aria-controls="site-search"
            aria-expanded={isSearchOpen}
            className="relative flex items-center justify-center w-[25px] h-[25px] rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            type="button"
            onClick={() => setIsSearchOpen((isOpen) => !isOpen)}
          >
            <img
              className="relative w-[25px] h-[25px]"
              alt=""
              aria-hidden="true"
              src="https://c.animaapp.com/YJMTsyCZ/img/search.svg"
            />
            <span className="sr-only">Search products</span>
          </button>
          <a
            className="relative flex items-center justify-center w-[25px] h-[25px] rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            href="/cart"
          >
            <img
              className="relative w-[25px] h-[25px]"
              alt=""
              aria-hidden="true"
              src="https://c.animaapp.com/YJMTsyCZ/img/shoppingcartsimple.svg"
            />
            <span className="sr-only">Shopping cart</span>
          </a>
          <a
            className="relative flex items-center justify-center w-[25px] h-[25px] rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            href="/account"
          >
            <img
              className="relative w-[25px] h-[25px]"
              alt=""
              aria-hidden="true"
              src="https://c.animaapp.com/YJMTsyCZ/img/user.svg"
            />
            <span className="sr-only">Account</span>
          </a>
        </div>
        {isSearchOpen && (
          <form
            id="site-search"
            className="absolute right-20 top-full z-30 mt-2 flex w-[300px] border border-[#9c9c9c] bg-[#111111] p-2 shadow-lg"
            role="search"
            onSubmit={handleSearchSubmit}
          >
            <label className="sr-only" htmlFor="navigation-search">
              Search products
            </label>
            <input
              id="navigation-search"
              className="min-w-0 flex-1 bg-white px-3 py-2 [font-family:'Tektur',Helvetica] text-sm text-black placeholder:text-[#686868] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#006ee3]"
              placeholder="Search products"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            <button
              className="ml-2 bg-[#006ee3] px-3 py-2 [font-family:'Tektur',Helvetica] text-xs font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              type="submit"
            >
              Search
            </button>
          </form>
        )}
      </div>
    </header>
  );
};
