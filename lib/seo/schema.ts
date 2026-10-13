import type { Locale } from "next-intl";

import { SITE } from "@/lib/general/constants";
import { SITE_URL } from "@/lib/general/site-url";

const PERSON_ID = `${SITE_URL}/#person`;
const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const sameAs = [SITE.instagram.url, SITE.youtubeUrl].filter(Boolean);

interface SiteGraphOptions {
  locale: Locale;
  localName: string;
  jobTitle: string;
  description: string;
  services: string[];
}

/** Home page: who Nikos is, what the business offers, and the site itself. */
export const siteGraph = ({ locale, localName, jobTitle, description, services }: SiteGraphOptions) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: `${SITE_URL}/${locale}`,
      name: SITE.name,
      alternateName: localName,
      inLanguage: locale,
      publisher: { "@id": BUSINESS_ID },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: SITE.name,
      alternateName: localName,
      jobTitle,
      url: `${SITE_URL}/${locale}/about`,
      sameAs,
      worksFor: { "@id": BUSINESS_ID },
    },
    {
      "@type": "ProfessionalService",
      "@id": BUSINESS_ID,
      name: SITE.name,
      alternateName: localName,
      description,
      url: `${SITE_URL}/${locale}`,
      logo: `${SITE_URL}/images/logo.png`,
      image: `${SITE_URL}/og.jpg`,
      founder: { "@id": PERSON_ID },
      areaServed: { "@type": "Country", name: "Greece" },
      address: { "@type": "PostalAddress", addressCountry: SITE.countryCode },
      sameAs,
      ...(SITE.email && { email: SITE.email }),
      ...(SITE.phone && { telephone: SITE.phone }),
      knowsAbout: services,
    },
  ],
});

interface Crumb {
  name: string;
  path: string;
}

export const breadcrumbSchema = (locale: Locale, crumbs: Crumb[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: `${SITE_URL}/${locale}${crumb.path}`,
  })),
});

interface CreativeWorkOptions {
  locale: Locale;
  path: string;
  name: string;
  description: string;
  genre: string;
  images: string[];
}

export const creativeWorkSchema = ({ locale, path, name, description, genre, images }: CreativeWorkOptions) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name,
  description,
  genre,
  inLanguage: locale,
  url: `${SITE_URL}/${locale}${path}`,
  image: images.map((src) => `${SITE_URL}${src}`),
  creator: { "@id": PERSON_ID },
  publisher: { "@id": BUSINESS_ID },
});
