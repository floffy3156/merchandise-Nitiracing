import { useState } from "react";

const accordionItems = [
  {
    title: "Key Features",
    content:
      "Lightweight padded construction, a precision-cut silhouette, and a sleek all-black racing design for a professional trackside appearance.",
  },
  {
    title: "Protection",
    content:
      "High-performance padded materials provide lightweight warmth and comfort during race events, paddock activities, and everyday team use.",
  },
  {
    title: "Construction",
    content:
      "Engineered for motorsport environments with durable materials designed to support mobility, comfort, and a dependable fit.",
  },
  {
    title: "Shipping & Returns",
    content:
      "Orders are carefully prepared for dispatch. Returns are accepted in accordance with the store return policy for eligible unused items.",
  },
];

const reviews = [
  {
    ratingAsset: "https://c.animaapp.com/phKAAwAT/img/frame-3.svg",
    title: "Great quality vest!",
    text: "Very comfortable and warm. The fit is excellent and the build quality feels premium. Perfect for paddock use.",
    author: "- Alex R., verified buyer",
  },
  {
    ratingAsset: "https://c.animaapp.com/phKAAwAT/img/frame-4.svg",
    title: "Looks great, fits true to size",
    text: "Exactly as described. The all-black design looks very professional and clean on the track.",
    author: "- Sam T., verified buyer",
  },
];

export const ProductDetailsReviewsSection = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [showReviewMessage, setShowReviewMessage] = useState(false);

  const toggleAccordion = (title) => {
    setOpenAccordion((currentItem) => (currentItem === title ? null : title));
  };

  return (
    <section
      className="flex items-start gap-[60px] pt-12 pb-20 px-20 relative self-stretch w-full flex-[0_0_auto] bg-[#0b0b0f]"
      aria-label="Product details and customer reviews"
    >
      <div className="flex flex-col w-[560px] items-start gap-8 relative bg-[#0b0b0f]">
        <div className="flex flex-col items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
          <h2 className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-bold text-gray-50 text-xl tracking-[0] leading-[normal]">
            Description
          </h2>
          <p className="relative self-stretch [font-family:'Mulish',Helvetica] font-normal text-gray-300 text-[15px] tracking-[0] leading-[24.0px]">
            Lightweight padded team vest with a sleek all-black racing design,
            built for comfort, warmth, and a professional trackside look.
            Engineered for motorsport environments, this vest features a
            precision-cut silhouette and high-performance materials designed to
            keep you warm and mobile during race events and paddock activities.
          </p>
        </div>
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#2a2a2a]">
          {accordionItems.map((item) => {
            const isOpen = openAccordion === item.title;
            const contentId = `${item.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")}-content`;

            return (
              <div
                className="relative self-stretch w-full border-b [border-bottom-style:solid] border-[#2a2a2a]"
                key={item.title}
              >
                <button
                  type="button"
                  className="flex items-center justify-between px-0 py-4 relative self-stretch w-full flex-[0_0_auto] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006ee3]"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleAccordion(item.title)}
                >
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-semibold text-gray-50 text-base tracking-[0] leading-[normal]">
                    {item.title}
                  </span>
                  <img
                    className={`relative w-4 h-4 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    alt=""
                    aria-hidden="true"
                    src="https://c.animaapp.com/phKAAwAT/img/chevron-down-3.svg"
                  />
                </button>
                {isOpen && (
                  <div
                    id={contentId}
                    className="pb-4 [font-family:'Mulish',Helvetica] font-normal text-gray-300 text-[13px] tracking-[0] leading-[19.5px]"
                  >
                    {item.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-start gap-6 relative flex-1 grow bg-[#0b0b0f]">
        <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
            <h2 className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-bold text-gray-50 text-xl tracking-[0] leading-[normal]">
              Reviews
            </h2>
            <img
              className="relative flex-[0_0_auto]"
              alt=""
              aria-hidden="true"
              src="https://c.animaapp.com/phKAAwAT/img/frame-2.svg"
            />
            <span className="relative w-fit [font-family:'Mulish',Helvetica] font-semibold text-gray-50 text-sm tracking-[0] leading-[normal]">
              4.4
            </span>
            <span className="relative w-fit [font-family:'Mulish',Helvetica] font-normal text-[#006ee3] text-[13px] tracking-[0] leading-[normal]">
              | 12 reviews
            </span>
          </div>
          <div className="relative self-stretch w-full h-px bg-[#2a2a2a]" />
        </div>
        {reviews.map((review) => (
          <article
            className="flex flex-col items-start gap-2 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#2a2a2a]"
            key={review.author}
          >
            <img
              className="relative flex-[0_0_auto]"
              alt=""
              aria-hidden="true"
              src={review.ratingAsset}
            />
            <h3 className="relative w-fit [font-family:'Mulish',Helvetica] font-bold text-gray-50 text-sm tracking-[0] leading-[normal]">
              {review.title}
            </h3>
            <p className="relative self-stretch [font-family:'Mulish',Helvetica] font-normal text-gray-300 text-[13px] tracking-[0] leading-[19.5px]">
              {review.text}
            </p>
            <p className="relative w-fit [font-family:'Mulish',Helvetica] font-normal text-gray-400 text-xs tracking-[0] leading-[normal]">
              {review.author}
            </p>
          </article>
        ))}

        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-6 py-3 relative flex-[0_0_auto] bg-[#141414] rounded border border-solid border-[#2a2a2a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006ee3]"
          aria-expanded={showReviewMessage}
          aria-controls="all-reviews-message"
          onClick={() => setShowReviewMessage((isVisible) => !isVisible)}
        >
          <span className="relative w-fit mt-[-1.00px] [font-family:'Mulish',Helvetica] font-semibold text-gray-200 text-sm tracking-[0] leading-[normal]">
            View all 12 reviews
          </span>
        </button>
        {showReviewMessage && (
          <p
            id="all-reviews-message"
            className="relative self-stretch [font-family:'Mulish',Helvetica] font-normal text-gray-300 text-[13px] tracking-[0] leading-[19.5px]"
            role="status"
          >
            All customer reviews are available through the product review
            section.
          </p>
        )}
      </div>
    </section>
  );
};
