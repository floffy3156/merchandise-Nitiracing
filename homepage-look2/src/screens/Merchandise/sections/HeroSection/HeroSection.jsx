const categoryCards = [
  {
    number: "01",
    title: "TEAM APPAREL",
    href: "#team-apparel",
    backgroundImage: "https://c.animaapp.com/odJl40XK/img/frame-20411@2x.png",
  },
  {
    number: "02",
    title: "RIDER EDITIONS",
    href: "#rider-editions",
    backgroundImage: "https://c.animaapp.com/odJl40XK/img/frame-20411-1@2x.png",
  },
  {
    number: "03",
    title: "HEADWEAR",
    href: "#headwear",
    backgroundImage: "https://c.animaapp.com/odJl40XK/img/frame-20411-2@2x.png",
  },
];

const tickerItems = [
  {
    label: "BUILT FOR THE PADDOCK",
    star: "https://c.animaapp.com/odJl40XK/img/star.svg",
  },
  {
    label: "MADE FOR THE TRIBE",
    star: "https://c.animaapp.com/odJl40XK/img/star-1.svg",
  },
  {
    label: "RACE WEEK. EVERY WEEK.",
    star: "https://c.animaapp.com/odJl40XK/img/star-2.svg",
  },
  { label: "BUILT FOR THE PADDOCK" },
];

export const HeroSection = () => {
  return (
    <section
      className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]"
      aria-label="Merchandise"
    >
      <img
        className="relative self-stretch w-full h-[592px] object-cover"
        alt="Wear our journey merchandise collection"
        src="https://c.animaapp.com/odJl40XK/img/frame-574.png"
      />
      <div className="flex flex-col items-start px-0 py-4 relative self-stretch w-full flex-[0_0_auto] bg-[#006ee3]">
        <img
          className="relative self-stretch w-full flex-[0_0_auto]"
          alt="Merchandise collection navigation"
          src="https://c.animaapp.com/odJl40XK/img/frame-578.png"
        />
        <nav
          className="flex items-center gap-2.5 px-20 py-1.5 relative self-stretch w-full flex-[0_0_auto]"
          aria-label="Shop merchandise categories"
        >
          {categoryCards.map((card) => (
            <a
              key={card.number}
              href={card.href}
              className="flex flex-col h-[218px] items-start justify-center relative flex-1 grow bg-black rounded-[10px] overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label={`Shop ${card.title.toLowerCase()}`}
            >
              <div
                className="flex flex-col items-start px-[26px] py-[30px] relative flex-1 self-stretch w-full grow bg-cover bg-[50%_50%]"
                style={{ backgroundImage: `url(${card.backgroundImage})` }}
              >
                <div className="inline-flex h-[60.57px] items-center justify-center gap-2.5 p-2.5 relative">
                  <span className="relative w-fit [font-family:'Tektur',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[35.3px] whitespace-nowrap">
                    {card.number}
                  </span>
                </div>
                <div className="inline-flex h-[60.57px] items-center justify-center gap-2.5 p-2.5 relative">
                  <span className="relative w-fit [font-family:'Tektur',Helvetica] font-extrabold text-white text-4xl tracking-[0] leading-[31.7px] whitespace-nowrap">
                    {card.title}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-end gap-2.5 px-[26px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative w-9 h-9"
                  alt=""
                  aria-hidden="true"
                  src="https://c.animaapp.com/odJl40XK/img/chevron-backward-4.svg"
                />
              </div>
            </a>
          ))}
        </nav>
        <div
          className="flex items-center justify-center gap-10 px-0 py-4 relative self-stretch w-full flex-[0_0_auto] bg-black border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-[#003bd4]"
          aria-label="Built for the paddock. Made for the tribe. Race week every week."
        >
          {tickerItems.map((item, index) => (
            <div key={`${item.label}-${index}`} className="contents">
              <span className="relative w-fit mt-[-1.00px] [font-family:'Outfit',Helvetica] font-extrabold text-white text-[11px] tracking-[0] leading-[normal]">
                {item.label}
              </span>
              {item.star ? (
                <img
                  className="relative w-2.5 h-2.5"
                  alt=""
                  aria-hidden="true"
                  src={item.star}
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
