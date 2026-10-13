export const NAV_ITEMS = [
  { key: "home", href: "/" },
  { key: "works", href: "/works" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
] as const;

export const isActivePath = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
