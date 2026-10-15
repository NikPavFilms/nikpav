/**
 * Portfolio projects. Every page under /works, the sitemap and the filters are generated from here.
 *
 * To add or update a project:
 *   1. Photos go in assets/images/works/<category>/<slug>/01.webp, 02.webp, ... (01 = cover).
 *   2. Update the entry below (title, location, alt texts; optionally summary, description, gallery
 *      and films) in both languages.
 * The order of PROJECTS is the order on /works; the first project of each category supplies that
 * category's cover on Home and on its category page.
 */
import type { StaticImageData } from "next/image";

import babyGarden01 from "@/assets/images/works/baptism/family-celebration/01.webp";
import brandFilm01 from "@/assets/images/works/production/brand-film/01.webp";
import villa01 from "@/assets/images/works/real-estate/seaside-villa/01.webp";
import cocktails01 from "@/assets/images/works/social/signature-cocktails/01.webp";
import jewellery06 from "@/assets/images/works/social/signature-cocktails/06.webp";
import goldenHour01 from "@/assets/images/works/wedding/golden-hour-vows/01.webp";

import { CATEGORY_SLUGS, type CategorySlug } from "./categories";
import type { LocalizedText, Project, ProjectImage } from "./types";

const image = (src: StaticImageData, en: string, el: string): ProjectImage => ({ src, alt: { en, el } });

const GREECE: LocalizedText = { en: "Greece", el: "Ελλάδα" };

export const PROJECTS: Project[] = [
  {
    slug: "golden-hour-vows",
    category: "wedding",
    title: { en: "Your Own Story", el: "Η δική σας ιστορία" },
    location: GREECE,
    services: ["photography", "film"],
    cover: {
      ...image(
        goldenHour01,
        "Bride and groom embracing on a hilltop against a sunset sky",
        "Νύφη και γαμπρός αγκαλιασμένοι σε λόφο, με φόντο τον ουρανό στο ηλιοβασίλεμα",
      ),
      focus: "50% 55%",
    },
    gallery: [],
  },
  {
    slug: "family-celebration",
    category: "baptism",
    title: { en: "A New Beginning", el: "Μια νέα αρχή" },
    location: GREECE,
    services: ["photography", "film"],
    cover: image(
      babyGarden01,
      "Baby in a woman's arms reaching up to the Gospel book held by the priest",
      "Μωρό στην αγκαλιά μιας γυναίκας απλώνει το χέρι προς το Ευαγγέλιο που κρατά ο ιερέας",
    ),
    gallery: [],
  },
  {
    slug: "signature-cocktails",
    category: "social",
    title: { en: "Content That Stands Out", el: "Content που ξεχωρίζει" },
    summary: {
      en: "A cocktail bar campaign shot after dark: craft, detail and warm light.",
      el: "Καμπάνια για ένα μπαρ κοκτέιλ, γυρισμένη μετά το σούρουπο: τεχνική, λεπτομέρεια και ζεστό φως.",
    },
    description: {
      en: "Content for a bar's new cocktail menu: the craft behind the counter, the garnish details and the atmosphere guests come back for, delivered as photos and short videos for social media.",
      el: "Περιεχόμενο για το νέο μενού κοκτέιλ ενός μπαρ: η τέχνη πίσω από τον πάγκο, οι λεπτομέρειες στο γαρνίρισμα και η ατμόσφαιρα που κάνει τους πελάτες να επιστρέφουν, σε φωτογραφίες και σύντομα βίντεο για τα social media.",
    },
    location: GREECE,
    services: ["photography", "film"],
    cover: {
      ...image(
        cocktails01,
        "Berry sauce poured over a stack of pancakes topped with edible flowers",
        "Σάλτσα μούρων χύνεται πάνω σε στοίβα από τηγανίτες με βρώσιμα λουλούδια",
      ),
      focus: "50% 65%",
    },
    gallery: [
      image(
        jewellery06,
        "Close-up of tattooed hands wearing beaded bracelets",
        "Κοντινό σε χέρια με τατουάζ που φορούν βραχιόλια με χάντρες",
      ),
    ],
  },
  {
    slug: "seaside-villa",
    category: "real-estate",
    title: { en: "The Value of a First Impression", el: "Η αξία της πρώτης εικόνας" },
    location: GREECE,
    services: ["photography", "film"],
    cover: {
      ...image(
        villa01,
        "Glass balconies of a seaside building, with the sea and mountains behind",
        "Γυάλινα μπαλκόνια παραθαλάσσιου κτιρίου, με φόντο τη θάλασσα και τα βουνά",
      ),
      // Portrait photo: keep the balconies and the sea, crop the empty sky.
      focus: "50% 55%",
    },
    gallery: [],
  },
  {
    slug: "brand-film",
    category: "production",
    title: { en: "From Idea to Image", el: "Από την ιδέα στην εικόνα" },
    description: {
      en: "Productions for brands and artists: campaigns, music videos, dance films, event films, reviews and interviews.",
      el: "Παραγωγές για brands και καλλιτέχνες: καμπάνιες, music videos, χορευτικά βίντεο, βίντεο εκδηλώσεων, reviews και συνεντεύξεις.",
    },
    location: GREECE,
    services: ["film"],
    // Cover: a still from the Nakas Lab shoot.
    cover: {
      ...image(
        brandFilm01,
        "Electric guitars and amplifiers set up in a studio in front of a leather sofa",
        "Ηλεκτρικές κιθάρες και ενισχυτές στημένοι σε στούντιο, μπροστά από δερμάτινο καναπέ",
      ),
      // The guitars sit in the lower half: crop the wall above them, not the instruments.
      focus: "50% 80%",
    },
    gallery: [],
    films: [
      { type: "youtube", id: "Vo2Mm-ZqMJ8", title: "Prince Oliver | Summer Campaign 2023" },
      { type: "youtube", id: "n0Xx019zThA", title: "Yamaha NS-5000 στο Nakas Lab | Review & συνέντευξη" },
      {
        type: "video",
        src: "/videos/production/clip-aid.mp4",
        poster: "/videos/production/clip-aid-poster.webp",
        title: "AID | Ίδρυμα Ευγενίδου",
      },
      { type: "youtube", id: "ByNOr_CeInc", title: "Χριστόδουλος Παπαδάκης | Απαγορευμένες Σκέψεις (Official Music Video)" },
      { type: "youtube", id: "UwF9NXTJpNc", title: "DUALFO | Click & Clack (Prod. Orfanidis)" },
      {
        type: "video",
        src: "/videos/production/xrysa.mp4",
        poster: "/videos/production/xrysa-poster.webp",
        title: "Flor de Mayo Project",
      },
      { type: "youtube", id: "sdU4aWfn4RU", title: "Rap Lab x Ryū Records | Lab Raps S2 EP1 (Feat. A-Drop, KYNO, ΚΞ)" },
    ],
  },
];

export const getProjects = (category?: CategorySlug) =>
  category ? PROJECTS.filter((project) => project.category === category) : PROJECTS;

export const getProject = (category: string, slug: string) =>
  PROJECTS.find((project) => project.category === category && project.slug === slug);

export const getNextProject = (project: Project) => PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length];

// The first project of a category leads it: its cover and title stand for the category.
export const getCategoryLead = (category: CategorySlug): Project => {
  const first = PROJECTS.find((project) => project.category === category);
  if (!first) throw new Error(`Category "${category}" has no projects`);
  return first;
};

export const getCategoryCover = (category: CategorySlug): ProjectImage => getCategoryLead(category).cover;

export const getCategoryLeads = () =>
  Object.fromEntries(CATEGORY_SLUGS.map((slug) => [slug, getCategoryLead(slug)])) as Record<CategorySlug, Project>;

export const getCategoryCounts = () =>
  Object.fromEntries(CATEGORY_SLUGS.map((slug) => [slug, getProjects(slug).length])) as Record<CategorySlug, number>;
