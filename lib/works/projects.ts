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
import blessings01 from "@/assets/images/works/baptism/little-blessings/01.webp";
import blessings02 from "@/assets/images/works/baptism/little-blessings/02.webp";
import blessings03 from "@/assets/images/works/baptism/little-blessings/03.webp";
import blessings04 from "@/assets/images/works/baptism/little-blessings/04.webp";
import blessings05 from "@/assets/images/works/baptism/little-blessings/05.webp";
import backstage01 from "@/assets/images/works/production/behind-the-scenes/01.webp";
import backstage02 from "@/assets/images/works/production/behind-the-scenes/02.webp";
import backstage03 from "@/assets/images/works/production/behind-the-scenes/03.webp";
import backstage04 from "@/assets/images/works/production/behind-the-scenes/04.webp";
import backstage05 from "@/assets/images/works/production/behind-the-scenes/05.webp";
import brandFilm01 from "@/assets/images/works/production/brand-film/01.webp";
import brandFilm02 from "@/assets/images/works/production/brand-film/02.webp";
import brandFilm03 from "@/assets/images/works/production/brand-film/03.webp";
import brandFilm04 from "@/assets/images/works/production/brand-film/04.webp";
import brandFilm05 from "@/assets/images/works/production/brand-film/05.webp";
import villa01 from "@/assets/images/works/real-estate/seaside-villa/01.webp";
import villa02 from "@/assets/images/works/real-estate/seaside-villa/02.webp";
import villa03 from "@/assets/images/works/real-estate/seaside-villa/03.webp";
import villa04 from "@/assets/images/works/real-estate/seaside-villa/04.webp";
import villa05 from "@/assets/images/works/real-estate/seaside-villa/05.webp";
import cabin01 from "@/assets/images/works/real-estate/timber-cabin/01.webp";
import cabin02 from "@/assets/images/works/real-estate/timber-cabin/02.webp";
import cabin03 from "@/assets/images/works/real-estate/timber-cabin/03.webp";
import cabin04 from "@/assets/images/works/real-estate/timber-cabin/04.webp";
import cabin05 from "@/assets/images/works/real-estate/timber-cabin/05.webp";
import menu01 from "@/assets/images/works/social/seasonal-menu/01.webp";
import menu02 from "@/assets/images/works/social/seasonal-menu/02.webp";
import menu03 from "@/assets/images/works/social/seasonal-menu/03.webp";
import menu04 from "@/assets/images/works/social/seasonal-menu/04.webp";
import menu05 from "@/assets/images/works/social/seasonal-menu/05.webp";
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
import seaside01 from "@/assets/images/works/wedding/seaside-wedding/01.webp";
import seaside02 from "@/assets/images/works/wedding/seaside-wedding/02.webp";
import seaside03 from "@/assets/images/works/wedding/seaside-wedding/03.webp";
import seaside04 from "@/assets/images/works/wedding/seaside-wedding/04.webp";
import seaside05 from "@/assets/images/works/wedding/seaside-wedding/05.webp";
import { SITE } from "@/lib/general/constants";

import { CATEGORY_SLUGS, type CategorySlug } from "./categories";
import type { LocalizedText, Project, ProjectImage } from "./types";

const image = (src: StaticImageData, en: string, el: string): ProjectImage => ({ src, alt: { en, el } });

const GREECE: LocalizedText = { en: "Greece", el: "Ελλάδα" };

export const PROJECTS: Project[] = [
  {
    slug: "golden-hour-vows",
    category: "wedding",
    title: { en: "Golden Hour Vows", el: "Όρκοι στο χρυσό φως" },
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
        "Bride and groom embracing in a field, backlit by the setting sun",
        "Νύφη και γαμπρός αγκαλιασμένοι σε χωράφι, κόντρα στον ήλιο που δύει",
      ),
      focus: "50% 30%",
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
    slug: "signature-cocktails",
    category: "social",
    title: { en: "Signature Cocktails", el: "Κοκτέιλ με υπογραφή" },
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
    cover: image(
      cocktails01,
      "Bartender in a black vest offering a dark red cocktail in a coupe glass",
      "Μπάρμαν με μαύρο γιλέκο σερβίρει ένα σκούρο κόκκινο κοκτέιλ σε ποτήρι κουπ",
    ),
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
    title: { en: "Seaside Villa", el: "Βίλα δίπλα στη θάλασσα" },
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
    cover: image(
      villa01,
      "Villa terrace and infinity pool lit up at night",
      "Βεράντα βίλας και πισίνα υπερχείλισης φωτισμένες τη νύχτα",
    ),
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
    slug: "little-blessings",
    category: "baptism",
    title: { en: "Little Blessings", el: "Μικρές ευλογίες" },
    summary: {
      en: "A baptism in an old stone church, told in soft window light.",
      el: "Μια βάφτιση σε παλιά πέτρινη εκκλησία, στο απαλό φως των παραθύρων.",
    },
    description: {
      en: "The candles, the font, the hands that held the little one: a baptism photographed discreetly, so the family could stay in the moment while every detail was kept.",
      el: "Τα κεριά, η κολυμπήθρα, τα χέρια που κράτησαν το μωρό: μια βάφτιση φωτογραφημένη διακριτικά, ώστε η οικογένεια να μείνει στη στιγμή και κάθε λεπτομέρεια να διατηρηθεί.",
    },
    location: GREECE,
    services: ["photography"],
    cover: image(
      blessings01,
      "Priest at the baptismal font inside a stone church, family gathered around",
      "Ο ιερέας στην κολυμπήθρα μέσα σε πέτρινη εκκλησία, με την οικογένεια γύρω",
    ),
    gallery: [
      image(
        blessings02,
        "Woman holding a candle beside the font as the priest blesses the baby",
        "Γυναίκα με κερί δίπλα στην κολυμπήθρα, την ώρα που ο ιερέας ευλογεί το μωρό",
      ),
      image(
        blessings03,
        "Woman in a headscarf holding the baby wrapped in a pink blanket",
        "Γυναίκα με μαντίλα κρατά το μωρό τυλιγμένο σε ροζ κουβέρτα",
      ),
      image(
        blessings04,
        "Priest lifting the baby above the font",
        "Ο ιερέας σηκώνει το μωρό πάνω από την κολυμπήθρα",
      ),
      image(
        blessings05,
        "Priest blessing the baby in a woman's arms",
        "Ο ιερέας ευλογεί το μωρό στην αγκαλιά μιας γυναίκας",
      ),
    ],
  },
  {
    slug: "brand-film",
    category: "production",
    title: { en: "Brand Film", el: "Εταιρική ταινία" },
    summary: {
      en: "A short brand film for a tattoo studio, from the first idea to the final grade.",
      el: "Μια σύντομη ταινία για ένα στούντιο τατουάζ, από την πρώτη ιδέα μέχρι τη χρωματική διόρθωση.",
    },
    description: {
      en: "Concept, direction, shooting and edit for a tattoo studio's short film: haze, ring lights and the craft up close, made for social media and the big screen alike.",
      el: "Ιδέα, σκηνοθεσία, γύρισμα και μοντάζ για την ταινία ενός στούντιο τατουάζ: ομίχλη, κυκλικά φώτα και η τέχνη από κοντά, φτιαγμένη τόσο για τα social media όσο και για τη μεγάλη οθόνη.",
    },
    location: GREECE,
    services: ["film"],
    cover: image(
      brandFilm01,
      "Camera operator filming a tattoo session under red and blue light",
      "Χειριστής κάμερας κινηματογραφεί μια συνεδρία τατουάζ σε κόκκινο και μπλε φως",
    ),
    gallery: [
      image(
        brandFilm02,
        "Young woman in glasses seated under red and blue studio light",
        "Νεαρή γυναίκα με γυαλιά, καθισμένη σε κόκκινο και μπλε φως στούντιο",
      ),
      image(
        brandFilm03,
        "Tattoo artist at work beneath a ring light in thick haze",
        "Τατουατζής δουλεύει κάτω από ένα κυκλικό φως μέσα σε πυκνή ομίχλη",
      ),
      image(
        brandFilm04,
        "Tattooed hand reaching toward a glowing ring light in the dark",
        "Χέρι με τατουάζ απλώνεται προς ένα φωτεινό κυκλικό φως στο σκοτάδι",
      ),
      image(
        brandFilm05,
        "Camera monitor in a dark blue studio showing the scene being filmed",
        "Οθόνη κάμερας σε σκοτεινό μπλε στούντιο δείχνει τη σκηνή που γυρίζεται",
      ),
    ],
    // Placeholder: the showreel stands in for the real film. Prefer { type: "youtube", id: "..." }.
    film: SITE.showreel.type === "video" ? { type: "video", src: SITE.showreel.src, poster: SITE.showreel.poster } : undefined,
  },
  {
    slug: "seaside-wedding",
    category: "wedding",
    title: { en: "Seaside Wedding", el: "Γάμος δίπλα στη θάλασσα" },
    summary: {
      en: "Stone streets, fishing boats and evening light by the sea.",
      el: "Πέτρινα σοκάκια, ψαρόβαρκες και βραδινό φως δίπλα στη θάλασσα.",
    },
    description: {
      en: "A wedding in a seaside village: the couple between the harbour and the old stone streets, and a sunset that framed it all.",
      el: "Ένας γάμος σε ένα παραθαλάσσιο χωριό: το ζευγάρι ανάμεσα στο λιμανάκι και τα παλιά πέτρινα σοκάκια, και ένα ηλιοβασίλεμα που τα πλαισίωσε όλα.",
    },
    location: GREECE,
    services: ["photography"],
    cover: image(
      seaside01,
      "Groom kissing the bride's forehead by the sea in a fishing village",
      "Ο γαμπρός φιλά τη νύφη στο μέτωπο, δίπλα στη θάλασσα ενός ψαροχωριού",
    ),
    gallery: [
      image(
        seaside02,
        "Silhouette of the couple framed by a stone arch at sunset",
        "Η σιλουέτα του ζευγαριού μέσα σε πέτρινη αψίδα στο ηλιοβασίλεμα",
      ),
      image(
        seaside03,
        "Groom standing at the harbour among fishing boats, the bride in the foreground",
        "Ο γαμπρός στο λιμανάκι ανάμεσα στις βάρκες, με τη νύφη σε πρώτο πλάνο",
      ),
      image(
        seaside04,
        "Bride and groom embracing against the sea",
        "Νύφη και γαμπρός αγκαλιασμένοι με φόντο τη θάλασσα",
      ),
      image(
        seaside05,
        "Close-up of the couple holding hands, lace sleeve and navy suit",
        "Κοντινό στα ενωμένα χέρια του ζευγαριού, με τη δαντέλα και το μπλε κοστούμι",
      ),
    ],
  },
  {
    slug: "seasonal-menu",
    category: "social",
    title: { en: "Seasonal Menu", el: "Μενού εποχής" },
    summary: {
      en: "Food and interiors for a restaurant's new season, styled to be shared.",
      el: "Πιάτα και χώροι για τη νέα σεζόν ενός εστιατορίου, φτιαγμένα για να μοιράζονται.",
    },
    description: {
      en: "A full content day for a restaurant launching its seasonal menu: the plates, the chef at work, the room at night and every detail in between.",
      el: "Μια ολόκληρη μέρα παραγωγής για ένα εστιατόριο που παρουσιάζει το μενού της σεζόν: τα πιάτα, ο σεφ στη δουλειά, ο χώρος το βράδυ και κάθε λεπτομέρεια ενδιάμεσα.",
    },
    location: GREECE,
    services: ["photography"],
    cover: image(
      menu01,
      "Plated dishes and a glass of white wine on a dark linen table",
      "Πιάτα και ένα ποτήρι λευκό κρασί σε τραπέζι με σκούρο λινό",
    ),
    gallery: [
      image(
        menu02,
        "Chef's hands plating a dish with fresh herbs",
        "Τα χέρια του σεφ στήνουν ένα πιάτο με φρέσκα μυρωδικά",
      ),
      image(
        menu03,
        "Diners at a candlelit table with the city lights behind",
        "Θαμώνες σε τραπέζι με κερί, με τα φώτα της πόλης στο βάθος",
      ),
      image(
        menu04,
        "Brass table lamp lighting small plated dishes on a wooden counter",
        "Ορειχάλκινο επιτραπέζιο φωτιστικό φωτίζει μικρά πιάτα σε ξύλινο πάγκο",
      ),
      image(
        menu05,
        "Grilled steak with herbs on a dark plate",
        "Ψητή μπριζόλα με μυρωδικά σε σκούρο πιάτο",
      ),
    ],
  },
  {
    slug: "timber-cabin",
    category: "real-estate",
    title: { en: "Timber Cabin", el: "Ξύλινο καταφύγιο" },
    summary: {
      en: "An A-frame retreat photographed from daylight into dusk.",
      el: "Ένα ξύλινο καταφύγιο σε σχήμα Α, από το φως της μέρας ως το σούρουπο.",
    },
    description: {
      en: "A timber A-frame in open country, presented through its lines, its materials and the view from the big triangular window, from daylight until dusk.",
      el: "Ένα ξύλινο σπίτι σε σχήμα Α στην εξοχή, μέσα από τις γραμμές του, τα υλικά του και τη θέα από το μεγάλο τριγωνικό παράθυρο, από το φως της μέρας μέχρι να πέσει το σούρουπο.",
    },
    location: GREECE,
    services: ["photography"],
    cover: image(
      cabin01,
      "A-frame timber cabin with a large triangular window in a meadow",
      "Ξύλινο σπίτι σε σχήμα Α με μεγάλο τριγωνικό παράθυρο μέσα σε λιβάδι",
    ),
    gallery: [
      image(
        cabin02,
        "Timber facade and triangular glazing against the sky",
        "Ξύλινη πρόσοψη και τριγωνικό τζάμι με φόντο τον ουρανό",
      ),
      image(
        cabin03,
        "Dark interior framed by the triangular window at dusk",
        "Σκοτεινό εσωτερικό, πλαισιωμένο από το τριγωνικό παράθυρο το σούρουπο",
      ),
      image(
        cabin04,
        "Living area with a wooden floor and a view through the window",
        "Καθιστικό με ξύλινο πάτωμα και θέα μέσα από το παράθυρο",
      ),
      image(
        cabin05,
        "Timber cabin with warm lights at twilight beside a gravel path",
        "Το ξύλινο σπίτι με ζεστά φώτα το σούρουπο, δίπλα σε ένα μονοπάτι με χαλίκι",
      ),
    ],
  },
  {
    slug: "family-celebration",
    category: "baptism",
    title: { en: "A Family Celebration", el: "Μια οικογενειακή γιορτή" },
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
      "Parents with their baby in a sunlit garden",
      "Οι γονείς με το μωρό τους σε έναν ηλιόλουστο κήπο",
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
    slug: "behind-the-scenes",
    category: "production",
    title: { en: "Behind the Scenes", el: "Πίσω από τις κάμερες" },
    summary: {
      en: "On set with the crew: lights, lenses and the people who make it happen.",
      el: "Στο πλατό με το συνεργείο: φώτα, φακοί και οι άνθρωποι που κάνουν τα πάντα να συμβαίνουν.",
    },
    description: {
      en: "A behind-the-scenes series from a commercial shoot, documenting the work that never makes the final cut: setups, rehearsals and the quiet before every take.",
      el: "Μια σειρά από τα παρασκήνια ενός διαφημιστικού γυρίσματος, με όλη τη δουλειά που δεν φτάνει ποτέ στο τελικό μοντάζ: στησίματα, πρόβες και την ησυχία πριν από κάθε λήψη.",
    },
    location: GREECE,
    services: ["photography"],
    cover: image(
      backstage01,
      "Film crew on a red-lit set, the director's chair in the foreground",
      "Συνεργείο σε πλατό με κόκκινο φωτισμό, με την καρέκλα του σκηνοθέτη σε πρώτο πλάνο",
    ),
    gallery: [
      image(
        backstage02,
        "Director in a labelled chair watching the monitors",
        "Ο σκηνοθέτης στην καρέκλα του παρακολουθεί τις οθόνες",
      ),
      image(
        backstage03,
        "Clapperboard held up in front of an actor on set",
        "Κλακέτα μπροστά από έναν ηθοποιό στο πλατό",
      ),
      image(
        backstage04,
        "Camera monitor showing an actor in pink light",
        "Οθόνη κάμερας με έναν ηθοποιό σε ροζ φως",
      ),
      image(
        backstage05,
        "Camera operator's hands on a cinema camera rig",
        "Τα χέρια του χειριστή σε κινηματογραφική κάμερα",
      ),
    ],
  },
];

export const getProjects = (category?: CategorySlug) =>
  category ? PROJECTS.filter((project) => project.category === category) : PROJECTS;

export const getProject = (category: string, slug: string) =>
  PROJECTS.find((project) => project.category === category && project.slug === slug);

export const getNextProject = (project: Project) => PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length];

export const getCategoryCover = (category: CategorySlug): ProjectImage => {
  const first = PROJECTS.find((project) => project.category === category);
  if (!first) throw new Error(`Category "${category}" has no projects`);
  return first.cover;
};

export const getCategoryCovers = () =>
  Object.fromEntries(CATEGORY_SLUGS.map((slug) => [slug, getCategoryCover(slug)])) as Record<CategorySlug, ProjectImage>;

export const getCategoryCounts = () =>
  Object.fromEntries(CATEGORY_SLUGS.map((slug) => [slug, getProjects(slug).length])) as Record<CategorySlug, number>;
