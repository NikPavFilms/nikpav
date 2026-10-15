/**
 * Portfolio projects. Every page under /works, the sitemap and the filters are generated from here.
 *
 * To add or update a project:
 *   1. Photos go in assets/images/works/<category>/<slug>/01.webp, 02.webp, ... (01 = cover).
 *   2. Update the entry below (title, location, alt texts; optionally summary, description, gallery
 *      and films) in both languages.
 * The order of PROJECTS is the order on /works (newest wedding first). A collection (COLLECTIONS:
 * weddings) always lists its projects under its own cover and line. Any other category is one
 * project, shown at /works/<category> and supplying the category's cover on Home (see getProjectPath).
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
import weddingCover from "@/assets/images/works/wedding/cover.webp";
import nikosEvi01 from "@/assets/images/works/wedding/nikos-evi/01.webp";
import nikosEvi02 from "@/assets/images/works/wedding/nikos-evi/02.webp";
import nikosEvi03 from "@/assets/images/works/wedding/nikos-evi/03.webp";
import nikosEvi04 from "@/assets/images/works/wedding/nikos-evi/04.webp";
import nikosEvi05 from "@/assets/images/works/wedding/nikos-evi/05.webp";
import nikosEvi06 from "@/assets/images/works/wedding/nikos-evi/06.webp";
import nikosEvi07 from "@/assets/images/works/wedding/nikos-evi/07.webp";
import nikosEvi08 from "@/assets/images/works/wedding/nikos-evi/08.webp";
import nikosEvi09 from "@/assets/images/works/wedding/nikos-evi/09.webp";
import nikosEvi10 from "@/assets/images/works/wedding/nikos-evi/10.webp";
import nikosEvi11 from "@/assets/images/works/wedding/nikos-evi/11.webp";
import nikosEvi12 from "@/assets/images/works/wedding/nikos-evi/12.webp";
import nikosEvi13 from "@/assets/images/works/wedding/nikos-evi/13.webp";
import nikosEvi14 from "@/assets/images/works/wedding/nikos-evi/14.webp";
import nikosEvi15 from "@/assets/images/works/wedding/nikos-evi/15.webp";
import nikosEvi16 from "@/assets/images/works/wedding/nikos-evi/16.webp";
import nikosEvi17 from "@/assets/images/works/wedding/nikos-evi/17.webp";
import nikosEvi18 from "@/assets/images/works/wedding/nikos-evi/18.webp";
import nikosEvi19 from "@/assets/images/works/wedding/nikos-evi/19.webp";
import panagiotisElpida01 from "@/assets/images/works/wedding/panagiotis-elpida/01.webp";
import panagiotisElpida02 from "@/assets/images/works/wedding/panagiotis-elpida/02.webp";
import panagiotisElpida03 from "@/assets/images/works/wedding/panagiotis-elpida/03.webp";
import panagiotisElpida04 from "@/assets/images/works/wedding/panagiotis-elpida/04.webp";
import panagiotisElpida05 from "@/assets/images/works/wedding/panagiotis-elpida/05.webp";
import panagiotisElpida06 from "@/assets/images/works/wedding/panagiotis-elpida/06.webp";
import panagiotisElpida07 from "@/assets/images/works/wedding/panagiotis-elpida/07.webp";
import panagiotisElpida08 from "@/assets/images/works/wedding/panagiotis-elpida/08.webp";
import panagiotisElpida09 from "@/assets/images/works/wedding/panagiotis-elpida/09.webp";
import panagiotisElpida10 from "@/assets/images/works/wedding/panagiotis-elpida/10.webp";
import panagiotisElpida11 from "@/assets/images/works/wedding/panagiotis-elpida/11.webp";
import panagiotisElpida12 from "@/assets/images/works/wedding/panagiotis-elpida/12.webp";
import panagiotisElpida13 from "@/assets/images/works/wedding/panagiotis-elpida/13.webp";
import panagiotisElpida14 from "@/assets/images/works/wedding/panagiotis-elpida/14.webp";
import panagiotisElpida15 from "@/assets/images/works/wedding/panagiotis-elpida/15.webp";
import panagiotisElpida16 from "@/assets/images/works/wedding/panagiotis-elpida/16.webp";
import panagiotisElpida17 from "@/assets/images/works/wedding/panagiotis-elpida/17.webp";
import panagiotisElpida18 from "@/assets/images/works/wedding/panagiotis-elpida/18.webp";
import panagiotisElpida19 from "@/assets/images/works/wedding/panagiotis-elpida/19.webp";
import panagiotisElpida20 from "@/assets/images/works/wedding/panagiotis-elpida/20.webp";
import panagiotisElpida21 from "@/assets/images/works/wedding/panagiotis-elpida/21.webp";
import panagiotisElpida22 from "@/assets/images/works/wedding/panagiotis-elpida/22.webp";

import { CATEGORY_SLUGS, type CategorySlug } from "./categories";
import type { CategoryShowcase, LocalizedText, Project, ProjectImage, WorkCard } from "./types";

const image = (src: StaticImageData, en: string, el: string): ProjectImage => ({ src, alt: { en, el } });

const GREECE: LocalizedText = { en: "Greece", el: "Ελλάδα" };

// The cover only fills the card here (the film opens the page), so it also takes its place in the gallery.
const nikosEviCover = image(
  nikosEvi01,
  "The bride raising her bouquet as the groom leads her up the rocks",
  "Η νύφη σηκώνει ψηλά την ανθοδέσμη καθώς ο γαμπρός την οδηγεί στα βράχια",
);

/** Categories made of many projects (one page per wedding), with the cover and line that head them. */
const COLLECTIONS: Partial<Record<CategorySlug, CategoryShowcase>> = {
  wedding: {
    title: { en: "Your Own Story", el: "Η δική σας ιστορία" },
    cover: {
      ...image(
        weddingCover,
        "Bride and groom embracing on a hilltop against a sunset sky",
        "Νύφη και γαμπρός αγκαλιασμένοι σε λόφο, με φόντο τον ουρανό στο ηλιοβασίλεμα",
      ),
      focus: "50% 55%",
    },
  },
};

export const PROJECTS: Project[] = [
  {
    slug: "nikos-evi",
    category: "wedding",
    title: { en: "Nikos & Evi", el: "Νίκος & Εύη" },
    location: { en: "Kea", el: "Κέα" },
    services: ["photography", "film"],
    // The film opens the page; the cover fills the card in the wedding list.
    cover: nikosEviCover,
    films: [{ type: "video", src: "/videos/wedding/nikos-evi.mp4", poster: "/videos/wedding/nikos-evi-poster.webp" }],
    gallery: [
      image(
        nikosEvi02,
        "The groom's brown shoes and a bottle of cologne on a sunlit stone ledge",
        "Τα καφέ παπούτσια του γαμπρού και ένα άρωμα σε ηλιόλουστο πέτρινο πεζούλι",
      ),
      image(
        nikosEvi03,
        "The groom's teal jacket hanging from an olive tree",
        "Το πετρόλ σακάκι του γαμπρού κρεμασμένο σε μια ελιά",
      ),
      image(
        nikosEvi04,
        "Close-up of the groom being shaved with a straight razor",
        "Κοντινό στο ξύρισμα του γαμπρού με ξυράφι",
      ),
      image(
        nikosEvi05,
        "The groom fastening his cuffs by the sea",
        "Ο γαμπρός κουμπώνει τα μανίκια του δίπλα στη θάλασσα",
      ),
      image(
        nikosEvi06,
        "The groom in sunglasses checking his watch outside a whitewashed chapel",
        "Ο γαμπρός με γυαλιά ηλίου κοιτά το ρολόι του έξω από ένα ασβεστωμένο εκκλησάκι",
      ),
      image(
        nikosEvi07,
        "The groom in his teal suit leaning on a stone wall",
        "Ο γαμπρός με το πετρόλ κοστούμι ακουμπά σε πέτρινο τοίχο",
      ),
      image(
        nikosEvi08,
        "The bride's white sandals, ring, pearl necklace and perfume",
        "Τα λευκά πέδιλα, το δαχτυλίδι, το μαργαριταρένιο κολιέ και το άρωμα της νύφης",
      ),
      image(
        nikosEvi09,
        "The bride and her friends raising a toast under BRIDE balloons",
        "Η νύφη και οι φίλες της τσουγκρίζουν τα ποτήρια κάτω από μπαλόνια που γράφουν BRIDE",
      ),
      image(
        nikosEvi10,
        "A bridesmaid in green helps the bride into her dress",
        "Παράνυφη με πράσινο φόρεμα βοηθά τη νύφη με το νυφικό",
      ),
      image(
        nikosEvi11,
        "The bride's dress being fastened at the back",
        "Κουμπώνουν το νυφικό της νύφης στην πλάτη",
      ),
      image(
        nikosEvi12,
        "The bridal bouquet resting on a stone wall",
        "Η νυφική ανθοδέσμη ακουμπισμένη σε πέτρινο πεζούλι",
      ),
      image(
        nikosEvi13,
        "The bride walking down stone steps in the sun",
        "Η νύφη κατεβαίνει πέτρινα σκαλιά στον ήλιο",
      ),
      image(
        nikosEvi14,
        "The bride holding her bouquet of roses and eucalyptus",
        "Η νύφη κρατά την ανθοδέσμη της με τριαντάφυλλα και ευκάλυπτο",
      ),
      image(
        nikosEvi15,
        "The priest leads the couple around the table under a blue pergola as guests look on",
        "Ο ιερέας οδηγεί το ζευγάρι στον χορό του Ησαΐα κάτω από μπλε πέργκολα, μπροστά στους καλεσμένους",
      ),
      image(
        nikosEvi16,
        "Hands reaching over the couple to exchange the rings",
        "Χέρια πάνω από το ζευγάρι αλλάζουν τις βέρες",
      ),
      image(nikosEvi17, "The couple forehead to forehead at dusk", "Το ζευγάρι μέτωπο με μέτωπο το σούρουπο"),
      nikosEviCover,
      image(
        nikosEvi18,
        "The couple embracing on a hillside at dusk",
        "Το ζευγάρι αγκαλιάζεται σε μια πλαγιά το σούρουπο",
      ),
      image(
        nikosEvi19,
        "Black-and-white photo of the couple's first dance",
        "Ασπρόμαυρη φωτογραφία από τον πρώτο χορό του ζευγαριού",
      ),
    ],
  },
  {
    slug: "panagiotis-elpida",
    category: "wedding",
    title: { en: "Panagiotis & Elpida", el: "Παναγιώτης & Ελπίδα" },
    location: GREECE,
    services: ["photography"],
    cover: image(
      panagiotisElpida01,
      "The couple on the shore at sunset, the groom's jacket over his shoulder",
      "Το ζευγάρι στην ακτή στο ηλιοβασίλεμα, με το σακάκι του γαμπρού στον ώμο",
    ),
    gallery: [
      image(
        panagiotisElpida02,
        "Black-and-white photo of the wedding rings in their box",
        "Ασπρόμαυρη φωτογραφία με τις βέρες στο κουτί τους",
      ),
      image(
        panagiotisElpida03,
        "The bride's shoes and perfume resting on lace",
        "Τα παπούτσια και το άρωμα της νύφης πάνω σε δαντέλα",
      ),
      image(
        panagiotisElpida04,
        "The groom's navy jacket hanging on a wooden rack",
        "Το μπλε σακάκι του γαμπρού κρεμασμένο σε ξύλινη ραφιέρα",
      ),
      image(panagiotisElpida05, "The groom smiling in his navy suit", "Ο γαμπρός χαμογελά με το μπλε κοστούμι του"),
      image(
        panagiotisElpida06,
        "Black-and-white photo of the groom fastening his watch",
        "Ασπρόμαυρη φωτογραφία του γαμπρού καθώς φορά το ρολόι του",
      ),
      image(
        panagiotisElpida07,
        "The bride in a white robe holding a glass of champagne",
        "Η νύφη με λευκή ρόμπα κρατά ένα ποτήρι σαμπάνια",
      ),
      image(
        panagiotisElpida08,
        "The bride beside her wedding dress",
        "Η νύφη δίπλα στο νυφικό της",
      ),
      image(
        panagiotisElpida09,
        "Black-and-white portrait of the bride in her veil",
        "Ασπρόμαυρο πορτρέτο της νύφης με το πέπλο",
      ),
      image(
        panagiotisElpida10,
        "Black-and-white portrait of the bride as her dress is fastened",
        "Ασπρόμαυρο πορτρέτο της νύφης την ώρα που της κουμπώνουν το νυφικό",
      ),
      image(
        panagiotisElpida11,
        "Black-and-white close-up of the bride holding the baby",
        "Ασπρόμαυρο κοντινό της νύφης με το μωρό στην αγκαλιά",
      ),
      image(
        panagiotisElpida12,
        "The bride and groom walk into the church hand in hand",
        "Η νύφη και ο γαμπρός μπαίνουν χέρι χέρι στην εκκλησία",
      ),
      image(
        panagiotisElpida13,
        "Black-and-white photo of the couple smiling during the ceremony",
        "Ασπρόμαυρη φωτογραφία του ζευγαριού που χαμογελά στο μυστήριο",
      ),
      image(
        panagiotisElpida14,
        "A guest in a blue dress smiles as a man holds the baby beside the priest",
        "Καλεσμένη με γαλάζιο φόρεμα χαμογελά, ενώ ένας άντρας κρατά το μωρό δίπλα στον ιερέα",
      ),
      image(
        panagiotisElpida15,
        "The baby lifted at the baptism beneath the church's painted dome",
        "Το μωρό σηκώνεται ψηλά στη βάφτιση, κάτω από τον ζωγραφισμένο τρούλο",
      ),
      image(
        panagiotisElpida16,
        "Black-and-white photo of the baby reaching for the Gospel book",
        "Ασπρόμαυρη φωτογραφία του μωρού που απλώνει το χέρι στο Ευαγγέλιο",
      ),
      image(
        panagiotisElpida17,
        "Black-and-white photo of the groom lifting the bride on the dance floor",
        "Ασπρόμαυρη φωτογραφία του γαμπρού που σηκώνει τη νύφη στην πίστα",
      ),
      image(
        panagiotisElpida18,
        "The couple holding hands by the sea under a blue sky",
        "Το ζευγάρι πιασμένο από τα χέρια δίπλα στη θάλασσα, κάτω από γαλάζιο ουρανό",
      ),
      image(
        panagiotisElpida19,
        "The bride laughing in the groom's arms by the sea",
        "Η νύφη γελά στην αγκαλιά του γαμπρού δίπλα στη θάλασσα",
      ),
      image(
        panagiotisElpida20,
        "The couple face to face beneath the bride's veil",
        "Το ζευγάρι πρόσωπο με πρόσωπο κάτω από το πέπλο της νύφης",
      ),
      image(
        panagiotisElpida21,
        "Black-and-white photo of the couple kissing at dusk",
        "Ασπρόμαυρη φωτογραφία του ζευγαριού που φιλιέται το σούρουπο",
      ),
      image(
        panagiotisElpida22,
        "The groom lifts the bride, mirrored in still water",
        "Ο γαμπρός σηκώνει τη νύφη και η εικόνα τους καθρεφτίζεται στο ήρεμο νερό",
      ),
    ],
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

/**
 * The category's only project, if it has just one and is no collection: then /works/<category> is
 * that project's page.
 */
export const getSoleProject = (category: CategorySlug) => {
  const projects = getProjects(category);
  return !isCollection(category) && projects.length === 1 ? projects[0] : undefined;
};

export const isCollection = (category: CategorySlug) => category in COLLECTIONS;

/** Where a project lives, without the locale prefix. */
export const getProjectPath = (project: Project) =>
  getSoleProject(project.category) ? `/works/${project.category}` : `/works/${project.category}/${project.slug}`;

export const getNextProject = (project: Project) => PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length];

// A category's face on Home and atop its page: a collection's own cover and line, otherwise its
// first project's.
export const getCategoryShowcase = (category: CategorySlug): CategoryShowcase => {
  const showcase = COLLECTIONS[category] ?? PROJECTS.find((project) => project.category === category);
  if (!showcase) throw new Error(`Category "${category}" has no projects`);
  return showcase;
};

export const getCategoryShowcases = () =>
  Object.fromEntries(CATEGORY_SLUGS.map((slug) => [slug, getCategoryShowcase(slug)])) as Record<
    CategorySlug,
    CategoryShowcase
  >;

const projectCard = (project: Project): WorkCard => ({
  key: `${project.category}/${project.slug}`,
  href: getProjectPath(project),
  category: project.category,
  title: project.title,
  cover: project.cover,
  hasFilms: Boolean(project.films?.length),
});

/**
 * The cards on /works: a category's projects, or on "All" one card per category, so its photos
 * stay put as weddings are added: a collection shows its own cover and opens its list.
 */
export const getWorkCards = (category?: CategorySlug): WorkCard[] => {
  if (category) return getProjects(category).map(projectCard);

  return PROJECTS.flatMap((project) => {
    const collection = COLLECTIONS[project.category];
    if (!collection) return [projectCard(project)];
    // A collection takes the place of its first project only.
    if (getProjects(project.category)[0] !== project) return [];

    return [
      {
        ...collection,
        key: project.category,
        href: `/works/${project.category}`,
        category: project.category,
        hasFilms: getProjects(project.category).some((entry) => Boolean(entry.films?.length)),
      },
    ];
  });
};

export const getCategoryCounts = () =>
  Object.fromEntries(CATEGORY_SLUGS.map((slug) => [slug, getProjects(slug).length])) as Record<CategorySlug, number>;
