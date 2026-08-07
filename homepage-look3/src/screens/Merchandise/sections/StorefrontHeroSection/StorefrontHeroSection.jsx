const categoryCards = [
  {
    number: "01",
    title: "TEAMWEAR",
    backgroundImage: "url(https://c.animaapp.com/Hlq4xexy/img/card-bg@2x.png)",
  },
  {
    number: "02",
    title: "RIDER EDITIONS",
    backgroundImage:
      "url(https://c.animaapp.com/Hlq4xexy/img/card-bg-1@2x.png)",
  },
  {
    number: "03",
    title: "HEADWEAR",
    backgroundImage:
      "url(https://c.animaapp.com/Hlq4xexy/img/card-bg-2@2x.png)",
  },
];

export const StorefrontHeroSection = () => {
  return (
    <section
      className="relative flex w-full flex-col items-start self-stretch"
      aria-label="Storefront merchandise"
    >
      <img
        className="relative h-[592px] w-full self-stretch object-cover"
        alt="Frame"
        src="https://c.animaapp.com/Hlq4xexy/img/frame-574.png"
      />
      <div
        className="relative flex w-[1280px] max-w-full items-start gap-0.5 bg-black"
        aria-label="Merchandise categories"
      >
        {categoryCards.map((card) => (
          <article
            key={card.number}
            className="relative h-[260px] flex-1 grow overflow-hidden bg-cover bg-[50%_50%]"
            style={{ backgroundImage: card.backgroundImage }}
          >
            <div className="absolute left-6 top-6 flex w-full flex-col items-start gap-1">
              <p className="relative mt-[-1px] self-stretch [font-family:'Outfit',Helvetica] text-base font-bold leading-[normal] tracking-[0] text-[#003bd4]">
                {card.number}
              </p>
              <h2 className="relative self-stretch [font-family:'Outfit',Helvetica] text-2xl font-black leading-[normal] tracking-[0] text-white">
                {card.title}
              </h2>
            </div>
            <img
              className="absolute bottom-0 left-6 h-6 w-6"
              alt=""
              aria-hidden="true"
              src="https://c.animaapp.com/Hlq4xexy/img/card-action-trigger-2.svg"
            />
          </article>
        ))}
      </div>
      <img
        className="relative w-full flex-[0_0_auto] self-stretch"
        alt="Frame"
        src="https://c.animaapp.com/Hlq4xexy/img/frame-578.png"
        loading="lazy"
      />
    </section>
  );
};
