import { useState } from "react";

const sizes = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"];

export const ProductPurchaseSection = () => {
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("Black Deep");
  const [cartStatus, setCartStatus] = useState("");

  const handleAddToCart = () => {
    setCartStatus(
      `Tactical Team Vest in ${selectedColor}, size ${selectedSize}, added to cart.`,
    );
  };

  const handleCheckout = () => {
    setCartStatus(
      `Proceeding to checkout with Tactical Team Vest in ${selectedColor}, size ${selectedSize}.`,
    );
  };

  return (
    <section
      className="flex items-start gap-[60px] pt-5 pb-[60px] px-20 relative self-stretch w-full flex-[0_0_auto]"
      aria-labelledby="product-title"
    >
      <img
        className="relative w-[580px] h-[520px]"
        alt="Tactical Team Vest"
        src="https://c.animaapp.com/phKAAwAT/img/frame.svg"
      />
      <form
        className="flex flex-col items-start gap-5 relative flex-1 grow"
        onSubmit={(event) => {
          event.preventDefault();
          handleAddToCart();
        }}
      >
        <header className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative w-fit mt-[-1.00px] [font-family:'Mulish',Helvetica] font-normal text-gray-400 text-[13px] tracking-[0.13px] leading-[normal]">
            John Lewis ANYDAY
          </p>
          <h1
            id="product-title"
            className="relative self-stretch [font-family:'Tektur',Helvetica] font-bold text-gray-50 text-[28px] tracking-[0] leading-[33.6px]"
          >
            Tactical Team Vest
          </h1>
          <p className="relative w-fit [font-family:'Mulish',Helvetica] font-normal text-gray-400 text-sm tracking-[0] leading-[normal]">
            All Terra Adventure | Vests
          </p>
        </header>
        <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
          <data
            value="28.00"
            className="mt-[-1.00px] [font-family:'Tektur',Helvetica] font-bold text-gray-50 text-[26px] relative w-fit tracking-[0] leading-[normal]"
          >
            £28.00
          </data>
          <del className="[font-family:'Tektur',Helvetica] font-normal text-[#bd3d44] text-lg relative w-fit tracking-[0] leading-[normal]">
            £40.00
          </del>
        </div>
        <div className="relative self-stretch w-full h-px bg-[#2a2a2a]" />
        <fieldset className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <legend className="sr-only">Color</legend>
          <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
            <span className="relative w-fit mt-[-1.00px] [font-family:'Mulish',Helvetica] font-bold text-gray-50 text-sm tracking-[0] leading-[normal]">
              Color:
            </span>
            <span className="relative w-fit mt-[-1.00px] [font-family:'Mulish',Helvetica] font-normal text-gray-200 text-sm tracking-[0] leading-[normal]">
              {selectedColor}
            </span>
          </div>
          <button
            type="button"
            className="relative flex-[0_0_auto] rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006ee3]"
            aria-label={`Selected color: ${selectedColor}`}
            onClick={() => setSelectedColor("Black Deep")}
          >
            <img
              className="relative flex-[0_0_auto]"
              alt=""
              src="https://c.animaapp.com/phKAAwAT/img/frame-1.svg"
            />
          </button>
        </fieldset>
        <fieldset className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <legend className="sr-only">Size</legend>
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
              <span className="relative w-fit mt-[-1.00px] [font-family:'Mulish',Helvetica] font-bold text-gray-50 text-sm tracking-[0] leading-[normal]">
                Size:
              </span>
              <span className="mt-[-1.00px] [font-family:'Mulish',Helvetica] font-normal text-gray-200 text-sm relative w-fit tracking-[0] leading-[normal]">
                {selectedSize}
              </span>
            </div>
            <a
              href="#size-guide"
              className="relative w-fit [font-family:'Mulish',Helvetica] font-semibold text-[#006ee3] text-[13px] tracking-[0] leading-[normal] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006ee3]"
            >
              Size guide
            </a>
          </div>
          <div className="inline-flex flex-wrap items-start gap-[8px_8px] relative flex-[0_0_auto] mr-[-11.00px]">
            {sizes.map((size) => {
              const isSelected = selectedSize === size;

              return (
                <button
                  key={size}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedSize(size)}
                  className={`inline-flex flex-col items-center justify-center px-[18px] py-2.5 relative flex-[0_0_auto] rounded border border-solid focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006ee3] ${
                    isSelected
                      ? "bg-[#006ee3]"
                      : "bg-[#141414] border-[#2a2a2a]"
                  }`}
                >
                  <span
                    className={`relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] text-sm tracking-[0] leading-[normal] ${
                      isSelected
                        ? "font-semibold text-white"
                        : "font-medium text-gray-200"
                    }`}
                  >
                    {size}
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>
        <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <button
            type="submit"
            className="flex flex-col items-center justify-center px-0 py-4 relative flex-1 grow bg-[#006ee3] rounded-[41px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006ee3]"
          >
            <span className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal]">
              Add to Cart
            </span>
          </button>
          <button
            type="button"
            onClick={handleCheckout}
            className="flex flex-col items-center justify-center px-0 py-4 relative flex-1 grow bg-[#141414] rounded-[41px] border border-solid border-[#2a2a2a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006ee3]"
          >
            <span className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-semibold text-gray-50 text-[15px] tracking-[0] leading-[normal]">
              Checkout Now
            </span>
          </button>
        </div>
        <p className="sr-only" role="status" aria-live="polite">
          {cartStatus}
        </p>
      </form>
    </section>
  );
};
