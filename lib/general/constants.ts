/**
 * Business details used across the site (header, footer, contact page, JSON-LD).
 *
 * `email` and `phone` are optional: the contact form and the email/phone links only
 * render once they are filled in. Until then, Contact leads with Instagram.
 */

type Showreel =
  | { type: "video"; src: string; poster: string }
  | { type: "youtube"; id: string };

interface SiteConfig {
  name: string;
  shortName: string;
  instagram: { handle: string; url: string };
  youtubeUrl?: string;
  /** Inquiry address, e.g. "hello@nikpav.gr". */
  email?: string;
  /** Display format, e.g. "+30 690 000 0000". */
  phone?: string;
  countryCode: string;
  showreel: Showreel;
}

export const SITE: SiteConfig = {
  name: "Nikos Pavlakos",
  shortName: "Nikos",
  instagram: {
    handle: "nikpav._",
    url: "https://www.instagram.com/nikpav._/",
  },
  countryCode: "GR",
  showreel: {
    type: "video",
    src: "/images/videos/showreel.mp4",
    poster: "/images/site/showreel-poster.webp",
  },
};

export const telHref = (phone: string) => `tel:${phone.replace(/[^+\d]/g, "")}`;
