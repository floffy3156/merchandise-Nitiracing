export const MainNavigationSection = () => {
  return (
    <header
      className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto] bg-transparent"
      aria-labelledby="explore-products-heading"
    >
      <nav aria-label="Breadcrumb">
        <ol className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <li>
            <span className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-normal text-[#9d9d9d] text-sm tracking-[0] leading-[normal]">
              Home
            </span>
          </li>
          <li aria-hidden="true">
            <img
              className="relative w-2.5 h-2.5"
              alt=""
              src="https://c.animaapp.com/YJMTsyCZ/img/chevron-right.svg"
            />
          </li>
          <li aria-current="page">
            <span className="relative w-fit mt-[-1.00px] [font-family:'Tektur',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
              Explore
            </span>
          </li>
        </ol>
      </nav>
      <h1
        id="explore-products-heading"
        className="relative w-fit [font-family:'Tektur',Helvetica] font-bold text-white text-[32px] tracking-[0] leading-[normal]"
      >
        Explore Products
      </h1>
    </header>
  );
};
