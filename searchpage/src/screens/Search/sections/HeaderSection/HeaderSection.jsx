import { useState } from "react";

const dropdowns = [
  { label: "IDR", value: "idr", ariaLabel: "Select currency" },
  { label: "EN", value: "en", ariaLabel: "Select language" },
];

export const HeaderSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
  };

  const handleClose = () => {
    setSearchQuery("");
  };

  return (
    <header className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
      <nav
        className="flex items-center justify-between px-20 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-[#006ee3]"
        aria-label="Utility navigation"
      >
        <a
          className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-medium text-white text-xs tracking-[0] leading-[10.6px] whitespace-nowrap"
          href="https://nitiracing.com"
        >
          Nitiracing.com
        </a>
        <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
          <a
            className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-medium text-white text-xs tracking-[0] leading-[10.6px] whitespace-nowrap"
            href="#help"
          >
            Help
          </a>
          <a
            className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-medium text-white text-xs tracking-[0] leading-[10.6px] whitespace-nowrap"
            href="#orders"
          >
            Orders
          </a>
          {dropdowns.map((dropdown) => (
            <button
              key={dropdown.value}
              className="inline-flex items-center justify-center gap-[34px] relative flex-[0_0_auto] cursor-pointer"
              type="button"
              aria-label={dropdown.ariaLabel}
              aria-haspopup="listbox"
            >
              <span className="w-fit mt-[-1.00px] font-medium text-xs leading-[10.6px] whitespace-nowrap relative [font-family:'Tektur',Helvetica] text-white tracking-[0]">
                {dropdown.label}
              </span>
              <img
                className="relative w-2 h-[5px]"
                alt=""
                aria-hidden="true"
                src="https://c.animaapp.com/71eaCrAH/img/icon-1.svg"
              />
            </button>
          ))}
        </div>
      </nav>
      <div className="flex items-center justify-between px-20 py-0 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff1a] border border-solid border-[#9c9c9c] backdrop-blur-[18.8px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(18.8px)_brightness(100%)]">
        <a href="/" aria-label="Nitiracing home">
          <img
            className="relative w-[157px] h-14 aspect-[2.81] object-cover"
            alt="Nitiracing"
            src="https://c.animaapp.com/71eaCrAH/img/image-30@2x.png"
          />
        </a>
        <form
          className="flex w-[670px] h-8 items-center relative rounded-3xl overflow-hidden border border-solid border-white"
          role="search"
          onSubmit={handleSearch}
        >
          <label className="sr-only" htmlFor="product-search">
            Search products
          </label>
          <input
            id="product-search"
            className="flex items-center gap-2.5 px-[30px] py-0 relative flex-1 self-stretch grow bg-white [font-family:'Tektur',Helvetica] font-normal text-[#141414] text-xs tracking-[0] leading-[10.6px] placeholder:text-[#9c9c9c]"
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search Product..."
          />
          <button
            className="inline-flex items-center justify-center px-8 relative self-stretch flex-[0_0_auto] bg-[#141414] cursor-pointer shrink-0"
            type="submit"
          >
            <span className="font-medium text-white text-base leading-[14.1px] relative w-fit [font-family:'Tektur',Helvetica] tracking-[0] whitespace-nowrap">
              Search
            </span>
          </button>
        </form>
        <div className="flex w-[157px] items-center justify-end gap-5 relative">
          <button
            className="relative w-[25px] h-[25px] cursor-pointer"
            type="button"
            onClick={handleClose}
            aria-label="Close search"
          >
            <img
              className="relative w-[25px] h-[25px]"
              alt=""
              aria-hidden="true"
              src="https://c.animaapp.com/71eaCrAH/img/x.svg"
            />
          </button>
        </div>
      </div>
    </header>
  );
};
