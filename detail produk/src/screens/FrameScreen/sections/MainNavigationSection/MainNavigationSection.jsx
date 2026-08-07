const breadcrumbs = [
  { label: "Motorcycle", href: "/motorcycle" },
  { label: "Apparel", href: "/motorcycle/apparel" },
  { label: "Vests", href: "/motorcycle/apparel/vests" },
  {
    label: "Tactical Team Vest",
    href: "/motorcycle/apparel/vests/tactical-team-vest",
  },
];

export const MainNavigationSection = () => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1.5 px-20 py-3.5 relative self-stretch w-full flex-[0_0_auto] bg-[#0b0b0f]"
    >
      <ol className="flex items-center gap-1.5">
        {breadcrumbs.map((breadcrumb, index) => {
          const isCurrentPage = index === breadcrumbs.length - 1;

          return (
            <li key={breadcrumb.label} className="flex items-center gap-1.5">
              {isCurrentPage ? (
                <span
                  aria-current="page"
                  className="relative w-fit mt-[-1.00px] [font-family:'Mulish',Helvetica] font-semibold text-gray-50 text-[13px] tracking-[0] leading-[normal]"
                >
                  {breadcrumb.label}
                </span>
              ) : (
                <a
                  href={breadcrumb.href}
                  className="relative w-fit mt-[-1.00px] [font-family:'Mulish',Helvetica] font-normal text-gray-400 text-[13px] tracking-[0] leading-[normal]"
                >
                  {breadcrumb.label}
                </a>
              )}
              {!isCurrentPage && (
                <span
                  aria-hidden="true"
                  className="relative w-fit mt-[-1.00px] [font-family:'Mulish',Helvetica] font-normal text-gray-400 text-[13px] tracking-[0] leading-[normal]"
                >
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
