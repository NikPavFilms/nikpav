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
import social07 from "@/assets/images/works/social/signature-cocktails/07.webp";
import social08 from "@/assets/images/works/social/signature-cocktails/08.webp";
import social09 from "@/assets/images/works/social/signature-cocktails/09.webp";
import social10 from "@/assets/images/works/social/signature-cocktails/10.webp";
import social11 from "@/assets/images/works/social/signature-cocktails/11.webp";
import social12 from "@/assets/images/works/social/signature-cocktails/12.webp";
import social13 from "@/assets/images/works/social/signature-cocktails/13.webp";
import social14 from "@/assets/images/works/social/signature-cocktails/14.webp";
import social15 from "@/assets/images/works/social/signature-cocktails/15.webp";
import social16 from "@/assets/images/works/social/signature-cocktails/16.webp";
import social17 from "@/assets/images/works/social/signature-cocktails/17.webp";
import social18 from "@/assets/images/works/social/signature-cocktails/18.webp";
import social19 from "@/assets/images/works/social/signature-cocktails/19.webp";
import social20 from "@/assets/images/works/social/signature-cocktails/20.webp";
import social21 from "@/assets/images/works/social/signature-cocktails/21.webp";
import social22 from "@/assets/images/works/social/signature-cocktails/22.webp";
import social23 from "@/assets/images/works/social/signature-cocktails/23.webp";
import social24 from "@/assets/images/works/social/signature-cocktails/24.webp";
import social25 from "@/assets/images/works/social/signature-cocktails/25.webp";
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
      en: "Photo and video for businesses that want to stand out on social media.",
      el: "Φωτογραφία και βίντεο για επιχειρήσεις που θέλουν να ξεχωρίσουν στα social media.",
    },
    description: {
      en: "Reels, photos and campaigns for restaurants, bars, barber shops, gyms, brands and artists. From the idea and the shoot to the final edit: content made to stop the scroll and bring people through your door.",
      el: "Reels, φωτογραφίες και καμπάνιες για εστιατόρια, μπαρ, κουρεία, γυμναστήρια, brands και καλλιτέχνες. Από την ιδέα και το γύρισμα μέχρι το τελικό μοντάζ: περιεχόμενο φτιαγμένο για να σταματά το scroll και να φέρνει πελάτες στην πόρτα σας.",
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
      image(
        social07,
        "Tattoo artist with curly hair inking a client's arm",
        "Τατουατζού με σγουρά μαλλιά κάνει τατουάζ στο χέρι ενός πελάτη",
      ),
      image(
        social08,
        "Lit sign of Athens Barber Club above the shop window",
        "Φωτεινή ταμπέλα του Athens Barber Club πάνω από τη βιτρίνα",
      ),
      image(
        social09,
        "Collage of a barber at work, Jameson bottles and the Athens Barber Club card",
        "Κολάζ με κουρέα στη δουλειά, μπουκάλια Jameson και την κάρτα του Athens Barber Club",
      ),
      image(
        social10,
        "Barber trimming a client's beard with clippers",
        "Κουρέας περιποιείται τα γένια πελάτη με μηχανή",
      ),
      image(
        social11,
        "Black and white view of a busy barber shop",
        "Ασπρόμαυρη εικόνα ενός γεμάτου κουρείου",
      ),
      image(
        social12,
        "Woman in a yoga pose on the beach at sunset",
        "Γυναίκα σε στάση yoga στην παραλία το σούρουπο",
      ),
      image(
        social13,
        "Woman stretching on the beach, the sea behind her",
        "Γυναίκα κάνει διατάσεις στην παραλία, με τη θάλασσα πίσω της",
      ),
      image(
        social14,
        "Woman in a warrior yoga pose by the sea",
        "Γυναίκα στη στάση του πολεμιστή δίπλα στη θάλασσα",
      ),
      image(
        social15,
        "Two models posing in the windows of an abandoned building",
        "Δύο μοντέλα ποζάρουν στα παράθυρα ενός εγκαταλελειμμένου κτιρίου",
      ),
      image(
        social16,
        "Model lying back on a ruined window ledge, boots in the air",
        "Μοντέλο ξαπλωμένο σε περβάζι ερειπίου, με τις μπότες ψηλά",
      ),
      image(
        social17,
        "Two models in oversized coats leaning on a weathered wall",
        "Δύο μοντέλα με φαρδιά παλτό ακουμπούν σε φθαρμένο τοίχο",
      ),
      image(
        social18,
        "Two models in coats walking across concrete ruins",
        "Δύο μοντέλα με παλτό περπατούν πάνω σε τσιμεντένια ερείπια",
      ),
      image(
        social19,
        "Jameson whiskey display on a bar counter in warm light",
        "Μπουκάλι Jameson σε προθήκη πάνω σε πάγκο μπαρ, σε ζεστό φως",
      ),
      image(
        social20,
        "Two spritz cocktails on a restaurant table",
        "Δύο κοκτέιλ spritz σε τραπέζι εστιατορίου",
      ),
      image(
        social21,
        "Plated meat roulade with sauce and microgreens",
        "Ρολό κρέατος με σάλτσα και μικροβλαστάρια στο πιάτο",
      ),
      image(
        social22,
        "Diner cutting into grilled chicken with a side salad",
        "Πελάτισσα κόβει ψητό κοτόπουλο με σαλάτα",
      ),
      image(
        social23,
        "Cream poured over a slice of carrot cake",
        "Κρέμα χύνεται πάνω σε κομμάτι κέικ καρότο",
      ),
      image(
        social24,
        "Sauce poured over a meat dish with vegetable purée",
        "Σάλτσα χύνεται πάνω σε πιάτο με κρέας και πουρέ λαχανικών",
      ),
      image(
        social25,
        "Overhead view of salads and plates at Hidden Drinks & Bites",
        "Σαλάτες και πιάτα από ψηλά στο Hidden Drinks & Bites",
      ),
    ],
    films: [
      { type: "video", src: "/videos/social/web/lobardi-promo.mp4", poster: "/videos/social/web/lobardi-promo-poster.webp", aspect: "9 / 16" },
      { type: "video", src: "/videos/social/web/kikitsa.mp4", poster: "/videos/social/web/kikitsa-poster.webp", aspect: "9 / 16" },
      { type: "video", src: "/videos/social/web/pork-ribs.mp4", poster: "/videos/social/web/pork-ribs-poster.webp", aspect: "9 / 16" },
      { type: "video", src: "/videos/social/web/reel-13.mp4", poster: "/videos/social/web/reel-13-poster.webp", aspect: "9 / 16" },
      { type: "video", src: "/videos/social/web/reel-0023.mp4", poster: "/videos/social/web/reel-0023-poster.webp", aspect: "9 / 16" },
      { type: "video", src: "/videos/social/web/reel-14.mp4", poster: "/videos/social/web/reel-14-poster.webp", aspect: "9 / 16" },
      { type: "video", src: "/videos/social/web/adrop-promo.mp4", poster: "/videos/social/web/adrop-promo-poster.webp", aspect: "9 / 16" },
      { type: "video", src: "/videos/social/web/training.mp4", poster: "/videos/social/web/training-poster.webp", aspect: "9 / 16" },
      { type: "video", src: "/videos/social/web/reel-2.mp4", poster: "/videos/social/web/reel-2-poster.webp", aspect: "9 / 16" },
      { type: "video", src: "/videos/social/web/mankey-promo.mp4", poster: "/videos/social/web/mankey-promo-poster.webp", aspect: "4 / 5" },
      { type: "video", src: "/videos/social/web/nocciollicious.mp4", poster: "/videos/social/web/nocciollicious-poster.webp", aspect: "4 / 5" },
      { type: "video", src: "/videos/social/web/alex.mp4", poster: "/videos/social/web/alex-poster.webp", aspect: "4 / 5" },
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
