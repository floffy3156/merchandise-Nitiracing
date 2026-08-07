import { useEffect, useRef, useState } from "react";

const utilityLinks = [
  { label: "Help", href: "/help" },
  { label: "Orders", href: "/orders" },
];

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "Team Shop", href: "/team-shop" },
  { label: "Rider Editions", href: "/rider-editions" },
  { label: "NitiNews", href: "/niti-news" },
];

const textClassName =
  "relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-medium text-white text-xs tracking-[0] leading-[10.6px] whitespace-nowrap";

const primaryTextClassName =
  "relative w-fit [font-family:'Tektur',Helvetica] font-medium text-white text-base tracking-[0] leading-[14.1px] whitespace-nowrap";

export const StoreUtilityBarSection = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const currencyMenuRef = useRef(null);
  const languageMenuRef = useRef(null);

  useEffect(() => {
    const handlePointerDown = (event) => {
      const target = event.target;

      if (
        !currencyMenuRef.current?.contains(target) &&
        !languageMenuRef.current?.contains(target)
      ) {
        setOpenMenu(null);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSearchSubmit = (_event) => {};

  return (
    <header className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex items-center justify-between px-20 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-[#006ee3]">
        <a
          className={`${textClassName} focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white`}
          href="https://nitiracing.com"
        >
          Nitiracing.com
        </a>
        <nav aria-label="Store utility navigation">
          <ul className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
            {utilityLinks.map((link) => (
              <li key={link.label}>
                <a
                  className={`${textClassName} block focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white`}
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li className="relative" ref={currencyMenuRef}>
              <button
                aria-expanded={openMenu === "currency"}
                aria-haspopup="menu"
                className="inline-flex items-center justify-center gap-[34px] relative flex-[0_0_auto] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white"
                onClick={() =>
                  setOpenMenu((currentMenu) =>
                    currentMenu === "currency" ? null : "currency",
                  )
                }
                type="button"
              >
                <span className={textClassName}>IDR</span>
                <img
                  className="relative w-2 h-[5px]"
                  alt=""
                  aria-hidden="true"
                  src="https://c.animaapp.com/phKAAwAT/img/icon-1.svg"
                />
              </button>
              {openMenu === "currency" && (
                <div
                  aria-label="Currency options"
                  className="absolute right-0 top-[calc(100%+8px)] z-30 min-w-[88px] overflow-hidden border border-white/30 bg-[#006ee3] shadow-lg"
                  role="menu"
                >
                  {["IDR", "USD", "EUR"].map((currency) => (
                    <button
                      className="[font-family:'Tektur',Helvetica] block w-full px-3 py-2 text-left text-xs font-medium text-white hover:bg-white/15 focus-visible:bg-white/15 focus-visible:outline-none"
                      key={currency}
                      onClick={() => setOpenMenu(null)}
                      role="menuitem"
                      type="button"
                    >
                      {currency}
                    </button>
                  ))}
                </div>
              )}
            </li>
            <li className="relative" ref={languageMenuRef}>
              <button
                aria-expanded={openMenu === "language"}
                aria-haspopup="menu"
                className="inline-flex items-center justify-center gap-[34px] relative flex-[0_0_auto] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white"
                onClick={() =>
                  setOpenMenu((currentMenu) =>
                    currentMenu === "language" ? null : "language",
                  )
                }
                type="button"
              >
                <span className={textClassName}>EN</span>
                <img
                  className="relative w-2 h-[5px]"
                  alt=""
                  aria-hidden="true"
                  src="https://c.animaapp.com/phKAAwAT/img/icon-1.svg"
                />
              </button>
              {openMenu === "language" && (
                <div
                  aria-label="Language options"
                  className="absolute right-0 top-[calc(100%+8px)] z-30 min-w-[88px] overflow-hidden border border-white/30 bg-[#006ee3] shadow-lg"
                  role="menu"
                >
                  {["EN", "ID"].map((language) => (
                    <button
                      className="[font-family:'Tektur',Helvetica] block w-full px-3 py-2 text-left text-xs font-medium text-white hover:bg-white/15 focus-visible:bg-white/15 focus-visible:outline-none"
                      key={language}
                      onClick={() => setOpenMenu(null)}
                      role="menuitem"
                      type="button"
                    >
                      {language}
                    </button>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-5 px-20 py-0 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff1a] border border-solid border-[#9c9c9c] backdrop-blur-[18.8px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(18.8px)_brightness(100%)]">
        <a
          aria-label="Niti Racing home"
          className="relative flex-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white"
          href="/"
        >
          <img
            className="relative w-[157px] h-14 aspect-[2.81] object-cover"
            alt="Niti Racing"
            src="https://c.animaapp.com/phKAAwAT/img/image-30@2x.png"
          />
        </a>
        <nav
          aria-label="Primary store navigation"
          className="flex items-center px-[50px] py-0 relative flex-1 grow"
        >
          <div className="flex items-center gap-[50px] relative flex-1 grow">
            <div className="inline-flex items-center gap-[50px] pl-0 pr-[50px] py-0 relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] border-r [border-right-style:solid] border-white">
              <a
                className={`${primaryTextClassName} focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white`}
                href="/products"
              >
                All
              </a>
              <a
                className={`${primaryTextClassName} focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white`}
                href="/wishlist"
              >
                Wishlist
              </a>
            </div>
            <ul className="flex items-center justify-between relative flex-1 grow">
              {primaryLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className={`${primaryTextClassName} block focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white`}
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
          <button
            aria-label="Open search"
            className="relative flex h-[25px] w-[25px] items-center justify-center focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white"
            onClick={() => setIsSearchOpen(true)}
            type="button"
          >
            <img
              className="relative w-[25px] h-[25px]"
              alt=""
              aria-hidden="true"
              src="https://c.animaapp.com/phKAAwAT/img/search.svg"
            />
          </button>
          <a
            aria-label="Shopping cart"
            className="relative flex h-[25px] w-[25px] items-center justify-center focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white"
            href="/cart"
          >
            <img
              className="relative w-[25px] h-[25px]"
              alt=""
              aria-hidden="true"
              src="https://c.animaapp.com/phKAAwAT/img/shoppingcartsimple.svg"
            />
          </a>
          <a
            aria-label="Account"
            className="relative flex h-[25px] w-[25px] items-center justify-center focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white"
            href="/account"
          >
            <img
              className="relative w-[25px] h-[25px]"
              alt=""
              aria-hidden="true"
              src="https://c.animaapp.com/phKAAwAT/img/user.svg"
            />
          </a>
        </div>
      </div>
      {isSearchOpen && (
        <div
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 pt-24"
          role="dialog"
          aria-label="Search store"
        >
          <form
            className="flex w-full max-w-xl gap-3 border border-white/30 bg-[#006ee3] p-5 shadow-xl"
            onSubmit={handleSearchSubmit}
          >
            <label className="sr-only" htmlFor="store-search">
              Search products
            </label>
            <input
              className="[font-family:'Tektur',Helvetica] min-w-0 flex-1 border border-white/50 bg-white px-3 py-2 text-sm text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              id="store-search"
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search products"
              type="search"
              value={searchQuery}
            />
            <button
              className="[font-family:'Tektur',Helvetica] border border-white px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-[#006ee3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              type="submit"
            >
              Search
            </button>
            <button
              aria-label="Close search"
              className="[font-family:'Tektur',Helvetica] px-2 text-sm font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={() => setIsSearchOpen(false)}
              type="button"
            >
              Close
            </button>
          </form>
        </div>
      )}
    </header>
  );
};
