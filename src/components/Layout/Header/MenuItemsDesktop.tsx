import { NavLink } from "@/components/Main"; // Ensure this component handles navigation correctly
import { cn } from "@/lib/utils"; // Utility function for conditional class names
import { TFunction } from "i18next";

export default function MenuItemsDesktop({
  t,
  className,
  locale , // Default to Arabic if no locale is provided
}: {
  t: TFunction;
  className?: string;
  locale?: string;
}) {
  console.log("Current Locale:", locale);

  // Define menu items with dynamic translations
  const menuItems = [
    { label: t("home"), href: "/" },
    { label: t("products"), href: "/products" },
    { label: t("about"), href: "/about" },
    { label: t("blogs"), href: "/blogs" },
    { label: t("contact"), href: "/contact" },
    { label: t("expo"), href: "/expo" },
  ];

  return (
    <div className={cn("flex pt-[24px] pr-0 pb-0 pl-0 gap-[32px] justify-center items-center flex-col md:flex-row self-stretch shrink-0 flex-nowrap relative z-10", className)}>
      {menuItems.map((item, index) => (
        <NavLink
          key={index}
          href={`/${locale}${item.href}`} // Ensure locale is prepended to the URL
          className={cn(
            "h-[29px] shrink-0 basis-auto text-[16px] font-medium leading-[29px] relative text-end whitespace-nowrap"
          )}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}
