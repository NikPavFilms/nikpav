/**
 * Portfolio projects. Every page under /works, the sitemap and the filters are generated from here.
 *
 * PLACEHOLDER CONTENT: the photos are free-licence Pexels images (one photographer per project, see
 * README) and the copy is generic. Replace each project with real work:
 *   1. Photos go in assets/images/works/<category>/<slug>/01.webp, 02.webp, ... (01 = cover).
 *   2. Update the entry below (title, summary, description, location, alt texts) in both languages.
 * The order of PROJECTS is the order on /works; the first project of each category supplies that
 * category's cover on Home and on its category page.
 */
import type { StaticImageData } from "next/image";

import babyGarden01 from "@/assets/images/works/baptism/family-celebration/01.webp";
import babyGarden02 from "@/assets/images/works/baptism/family-celebration/02.webp";
import babyGarden03 from "@/assets/images/works/baptism/family-celebration/03.webp";
import babyGarden04 from "@/assets/images/works/baptism/family-celebration/04.webp";
import babyGarden05 from "@/assets/images/works/baptism/family-celebration/05.webp";
import brandFilm01 from "@/assets/images/works/production/brand-film/01.webp";
import villa01 from "@/assets/images/works/real-estate/seaside-villa/01.webp";
import villa02 from "@/assets/images/works/real-estate/seaside-villa/02.webp";
import villa03 from "@/assets/images/works/real-estate/seaside-villa/03.webp";
import villa04 from "@/assets/images/works/real-estate/seaside-villa/04.webp";
import villa05 from "@/assets/images/works/real-estate/seaside-villa/05.webp";
import cocktails01 from "@/assets/images/works/social/signature-cocktails/01.webp";
import cocktails02 from "@/assets/images/works/social/signature-cocktails/02.webp";
import cocktails03 from "@/assets/images/works/social/signature-cocktails/03.webp";
import cocktails04 from "@/assets/images/works/social/signature-cocktails/04.webp";
import cocktails05 from "@/assets/images/works/social/signature-cocktails/05.webp";
import goldenHour01 from "@/assets/images/works/wedding/golden-hour-vows/01.webp";
import goldenHour02 from "@/assets/images/works/wedding/golden-hour-vows/02.webp";
import goldenHour03 from "@/assets/images/works/wedding/golden-hour-vows/03.webp";
import goldenHour04 from "@/assets/images/works/wedding/golden-hour-vows/04.webp";
import goldenHour05 from "@/assets/images/works/wedding/golden-hour-vows/05.webp";

import { CATEGORY_SLUGS, type CategorySlug } from "./categories";
import type { LocalizedText, Project, ProjectImage } from "./types";

const image = (src: StaticImageData, en: string, el: string): ProjectImage => ({ src, alt: { en, el } });

const GREECE: LocalizedText = { en: "Greece", el: "Ελλάδα" };

export const PROJECTS: Project[] = [
  {
    slug: "golden-hour-vows",
    category: "wedding",
    title: { en: "Your Own Story", el: "Η δική σας ιστορία" },
    summary: {
      en: "A wedding told through warm evening light, quiet glances and wide open landscapes.",
      el: "Ένας γάμος μέσα από το ζεστό φως του δειλινού, βλέμματα και ανοιχτά τοπία.",
    },
    description: {
      en: "From the first look to the last light of the day: an outdoor wedding photographed and filmed with as little interruption as possible, so the couple could simply be together.",
      el: "Από την πρώτη ματιά μέχρι το τελευταίο φως της μέρας: ένας γάμος σε εξωτερικό χώρο, φωτογραφημένος και κινηματογραφημένος διακριτικά, ώστε το ζευγάρι να ζήσει απλώς τη στιγμή.",
    },
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
    gallery: [
      image(
        goldenHour02,
        "Couple standing under a lone tree in tall golden grass",
        "Το ζευγάρι κάτω από ένα μοναχικό δέντρο, μέσα σε ψηλά ξερά χόρτα",
      ),
      image(
        goldenHour03,
        "The couple in a close embrace, foreheads touching at golden hour",
        "Το ζευγάρι αγκαλιασμένο, μέτωπο με μέτωπο, στο χρυσό φως",
      ),
      image(
        goldenHour04,
        "Bride and groom small against a mountain at dusk",
        "Νύφη και γαμπρός μικροί μπροστά σε ένα βουνό το σούρουπο",
      ),
      image(
        goldenHour05,
        "Couple walking hand in hand through a golden field",
        "Το ζευγάρι περπατά χέρι χέρι σε ένα χρυσαφένιο χωράφι",
      ),
    ],
  },
  {
    slug: "family-celebration",
    category: "baptism",
    title: { en: "A New Beginning", el: "Μια νέα αρχή" },
    summary: {
      en: "After the ceremony: family, sunlight and a garden in bloom.",
      el: "Μετά το μυστήριο: οικογένεια, ήλιος και ένας ανθισμένος κήπος.",
    },
    description: {
      en: "The hours after the ceremony, in a garden full of light: the parents, the family and the little one at the centre of it all, captured as it happened.",
      el: "Οι ώρες μετά το μυστήριο, σε έναν κήπο γεμάτο φως: οι γονείς, η οικογένεια και το μωρό στο κέντρο όλων, όπως ακριβώς συνέβη.",
    },
    location: GREECE,
    services: ["photography", "film"],
    cover: image(
      babyGarden01,
      "Baby in a woman's arms reaching up to the Gospel book held by the priest",
      "Μωρό στην αγκαλιά μιας γυναίκας απλώνει το χέρι προς το Ευαγγέλιο που κρατά ο ιερέας",
    ),
    gallery: [
      image(
        babyGarden02,
        "Hands holding tall baptism candles",
        "Χέρια που κρατούν ψηλές λαμπάδες βάφτισης",
      ),
      image(
        babyGarden03,
        "Mother lifting her baby up against green leaves",
        "Η μητέρα σηκώνει ψηλά το μωρό της μπροστά σε πράσινα φύλλα",
      ),
      image(
        babyGarden04,
        "Mother and baby in a garden full of flowers",
        "Μητέρα και μωρό σε έναν κήπο γεμάτο λουλούδια",
      ),
      image(
        babyGarden05,
        "Baby looking at the camera from a parent's arms",
        "Το μωρό κοιτάζει τον φακό από την αγκαλιά του γονιού",
      ),
    ],
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
        cocktails02,
        "Bartender twisting a lemon peel over a dark cocktail in a coupe glass",
        "Μπάρμαν στύβει φλούδα λεμονιού πάνω από ένα σκούρο κοκτέιλ σε ποτήρι κουπ",
      ),
      image(
        cocktails03,
        "Close-up of a cocktail being stirred with a bar spoon",
        "Κοντινό σε κοκτέιλ που ανακατεύεται με κουτάλι μπαρ",
      ),
      image(
        cocktails04,
        "Brass cocktail shaker and bar tools on a dark counter",
        "Ορειχάλκινο σέικερ και εργαλεία μπαρ σε σκούρο πάγκο",
      ),
      image(
        cocktails05,
        "Bartender pouring from a square bottle into a rocks glass",
        "Μπάρμαν σερβίρει από ένα τετράγωνο μπουκάλι σε χαμηλό ποτήρι",
      ),
    ],
  },
  {
    slug: "seaside-villa",
    category: "real-estate",
    title: { en: "The Value of a First Impression", el: "Η αξία της πρώτης εικόνας" },
    summary: {
      en: "A summer villa presented with natural light and a view that sells itself.",
      el: "Μια καλοκαιρινή βίλα με φυσικό φως και θέα που μιλά από μόνη της.",
    },
    description: {
      en: "Architecture and interiors for a holiday villa: wide frames that respect the lines, details that show the finish, and evening shots that sell the feeling of staying there.",
      el: "Αρχιτεκτονική και εσωτερικοί χώροι για μια βίλα διακοπών: ευρείες λήψεις που σέβονται τις γραμμές, λεπτομέρειες που δείχνουν τα υλικά και βραδινά κάδρα που μεταφέρουν την αίσθηση της διαμονής.",
    },
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
    gallery: [
      image(
        villa02,
        "Turquoise pool steps along a white villa facade",
        "Τιρκουάζ σκαλιά πισίνας κατά μήκος της λευκής πρόσοψης",
      ),
      image(
        villa03,
        "Open-plan living room opening onto the sea",
        "Ενιαίο σαλόνι που ανοίγει προς τη θάλασσα",
      ),
      image(
        villa04,
        "Outdoor seating with white planters beside the pool",
        "Καθιστικό εξωτερικού χώρου με λευκές γλάστρες δίπλα στην πισίνα",
      ),
      image(
        villa05,
        "Infinity pool and terrace overlooking the sea",
        "Πισίνα υπερχείλισης και βεράντα με θέα στη θάλασσα",
      ),
    ],
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
