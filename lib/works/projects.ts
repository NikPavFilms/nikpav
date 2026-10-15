/**
 * Portfolio projects. Every page under /works, the sitemap and the filters are generated from here.
 *
 * To add or update a project:
 *   1. Photos go in assets/images/works/<category>/<slug>/01.webp, 02.webp, ... (01 = cover).
 *   2. Update the entry below (title, location, alt texts; optionally summary, description, gallery
 *      and films) in both languages.
 * The order of PROJECTS is the order on /works and in the wedding list (Nikos sets it). A
 * collection (COLLECTIONS: weddings) always lists its projects under its own cover and line. Any
 * other category is one project, shown at /works/<category> and supplying the category's cover on
 * Home (see getProjectPath).
 */
import type { StaticImageData } from "next/image";

import babyGarden01 from "@/assets/images/works/baptism/family-celebration/01.webp";
import brandFilm01 from "@/assets/images/works/production/brand-film/01.webp";
import villa01 from "@/assets/images/works/real-estate/seaside-villa/01.webp";
import villa02 from "@/assets/images/works/real-estate/seaside-villa/02.webp";
import villa03 from "@/assets/images/works/real-estate/seaside-villa/03.webp";
import villa04 from "@/assets/images/works/real-estate/seaside-villa/04.webp";
import villa05 from "@/assets/images/works/real-estate/seaside-villa/05.webp";
import villa06 from "@/assets/images/works/real-estate/seaside-villa/06.webp";
import villa07 from "@/assets/images/works/real-estate/seaside-villa/07.webp";
import villa08 from "@/assets/images/works/real-estate/seaside-villa/08.webp";
import villa09 from "@/assets/images/works/real-estate/seaside-villa/09.webp";
import villa10 from "@/assets/images/works/real-estate/seaside-villa/10.webp";
import villa11 from "@/assets/images/works/real-estate/seaside-villa/11.webp";
import villa12 from "@/assets/images/works/real-estate/seaside-villa/12.webp";
import villa13 from "@/assets/images/works/real-estate/seaside-villa/13.webp";
import villa14 from "@/assets/images/works/real-estate/seaside-villa/14.webp";
import villa15 from "@/assets/images/works/real-estate/seaside-villa/15.webp";
import villa16 from "@/assets/images/works/real-estate/seaside-villa/16.webp";
import villa17 from "@/assets/images/works/real-estate/seaside-villa/17.webp";
import villa18 from "@/assets/images/works/real-estate/seaside-villa/18.webp";
import villa19 from "@/assets/images/works/real-estate/seaside-villa/19.webp";
import villa20 from "@/assets/images/works/real-estate/seaside-villa/20.webp";
import villa21 from "@/assets/images/works/real-estate/seaside-villa/21.webp";
import villa22 from "@/assets/images/works/real-estate/seaside-villa/22.webp";
import villa23 from "@/assets/images/works/real-estate/seaside-villa/23.webp";
import villa24 from "@/assets/images/works/real-estate/seaside-villa/24.webp";
import villa25 from "@/assets/images/works/real-estate/seaside-villa/25.webp";
import villa26 from "@/assets/images/works/real-estate/seaside-villa/26.webp";
import villa27 from "@/assets/images/works/real-estate/seaside-villa/27.webp";
import villa28 from "@/assets/images/works/real-estate/seaside-villa/28.webp";
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
import domnaGiannis01 from "@/assets/images/works/wedding/domna-giannis/01.webp";
import domnaGiannis02 from "@/assets/images/works/wedding/domna-giannis/02.webp";
import domnaGiannis03 from "@/assets/images/works/wedding/domna-giannis/03.webp";
import domnaGiannis04 from "@/assets/images/works/wedding/domna-giannis/04.webp";
import domnaGiannis05 from "@/assets/images/works/wedding/domna-giannis/05.webp";
import domnaGiannis06 from "@/assets/images/works/wedding/domna-giannis/06.webp";
import domnaGiannis07 from "@/assets/images/works/wedding/domna-giannis/07.webp";
import domnaGiannis08 from "@/assets/images/works/wedding/domna-giannis/08.webp";
import domnaGiannis09 from "@/assets/images/works/wedding/domna-giannis/09.webp";
import domnaGiannis10 from "@/assets/images/works/wedding/domna-giannis/10.webp";
import domnaGiannis11 from "@/assets/images/works/wedding/domna-giannis/11.webp";
import domnaGiannis12 from "@/assets/images/works/wedding/domna-giannis/12.webp";
import domnaGiannis13 from "@/assets/images/works/wedding/domna-giannis/13.webp";
import domnaGiannis14 from "@/assets/images/works/wedding/domna-giannis/14.webp";
import domnaGiannis15 from "@/assets/images/works/wedding/domna-giannis/15.webp";
import domnaGiannis16 from "@/assets/images/works/wedding/domna-giannis/16.webp";
import domnaGiannis17 from "@/assets/images/works/wedding/domna-giannis/17.webp";
import domnaGiannis18 from "@/assets/images/works/wedding/domna-giannis/18.webp";
import domnaGiannis19 from "@/assets/images/works/wedding/domna-giannis/19.webp";
import domnaGiannis20 from "@/assets/images/works/wedding/domna-giannis/20.webp";
import domnaGiannis21 from "@/assets/images/works/wedding/domna-giannis/21.webp";
import domnaGiannis22 from "@/assets/images/works/wedding/domna-giannis/22.webp";
import domnaGiannis23 from "@/assets/images/works/wedding/domna-giannis/23.webp";
import domnaGiannis24 from "@/assets/images/works/wedding/domna-giannis/24.webp";
import domnaGiannis25 from "@/assets/images/works/wedding/domna-giannis/25.webp";
import domnaGiannis26 from "@/assets/images/works/wedding/domna-giannis/26.webp";
import domnaGiannis27 from "@/assets/images/works/wedding/domna-giannis/27.webp";
import domnaGiannis28 from "@/assets/images/works/wedding/domna-giannis/28.webp";
import domnaGiannis29 from "@/assets/images/works/wedding/domna-giannis/29.webp";
import domnaGiannis30 from "@/assets/images/works/wedding/domna-giannis/30.webp";
import eleftheriaDimitris01 from "@/assets/images/works/wedding/eleftheria-dimitris/01.webp";
import eleftheriaDimitris02 from "@/assets/images/works/wedding/eleftheria-dimitris/02.webp";
import eleftheriaDimitris03 from "@/assets/images/works/wedding/eleftheria-dimitris/03.webp";
import eleftheriaDimitris04 from "@/assets/images/works/wedding/eleftheria-dimitris/04.webp";
import eleftheriaDimitris05 from "@/assets/images/works/wedding/eleftheria-dimitris/05.webp";
import eleftheriaDimitris06 from "@/assets/images/works/wedding/eleftheria-dimitris/06.webp";
import eleftheriaDimitris07 from "@/assets/images/works/wedding/eleftheria-dimitris/07.webp";
import eleftheriaDimitris08 from "@/assets/images/works/wedding/eleftheria-dimitris/08.webp";
import eleftheriaDimitris09 from "@/assets/images/works/wedding/eleftheria-dimitris/09.webp";
import eleftheriaDimitris10 from "@/assets/images/works/wedding/eleftheria-dimitris/10.webp";
import eleftheriaDimitris11 from "@/assets/images/works/wedding/eleftheria-dimitris/11.webp";
import eleftheriaDimitris12 from "@/assets/images/works/wedding/eleftheria-dimitris/12.webp";
import elenaAlexandros01 from "@/assets/images/works/wedding/elena-alexandros/01.webp";
import elenaAlexandros02 from "@/assets/images/works/wedding/elena-alexandros/02.webp";
import elenaAlexandros03 from "@/assets/images/works/wedding/elena-alexandros/03.webp";
import elenaAlexandros04 from "@/assets/images/works/wedding/elena-alexandros/04.webp";
import elenaAlexandros05 from "@/assets/images/works/wedding/elena-alexandros/05.webp";
import elenaAlexandros06 from "@/assets/images/works/wedding/elena-alexandros/06.webp";
import elenaAlexandros07 from "@/assets/images/works/wedding/elena-alexandros/07.webp";
import elenaAlexandros08 from "@/assets/images/works/wedding/elena-alexandros/08.webp";
import elenaAlexandros09 from "@/assets/images/works/wedding/elena-alexandros/09.webp";
import elenaAlexandros10 from "@/assets/images/works/wedding/elena-alexandros/10.webp";
import elenaAlexandros11 from "@/assets/images/works/wedding/elena-alexandros/11.webp";
import elenaAlexandros12 from "@/assets/images/works/wedding/elena-alexandros/12.webp";
import elenaAlexandros13 from "@/assets/images/works/wedding/elena-alexandros/13.webp";
import elenaAlexandros14 from "@/assets/images/works/wedding/elena-alexandros/14.webp";
import elenaAlexandros15 from "@/assets/images/works/wedding/elena-alexandros/15.webp";
import elenaAlexandros16 from "@/assets/images/works/wedding/elena-alexandros/16.webp";
import elenaAlexandros17 from "@/assets/images/works/wedding/elena-alexandros/17.webp";
import elenaAlexandros18 from "@/assets/images/works/wedding/elena-alexandros/18.webp";
import elenaAlexandros19 from "@/assets/images/works/wedding/elena-alexandros/19.webp";
import gavrielaChristos01 from "@/assets/images/works/wedding/gavriela-christos/01.webp";
import gavrielaChristos02 from "@/assets/images/works/wedding/gavriela-christos/02.webp";
import gavrielaChristos03 from "@/assets/images/works/wedding/gavriela-christos/03.webp";
import gavrielaChristos04 from "@/assets/images/works/wedding/gavriela-christos/04.webp";
import gavrielaChristos05 from "@/assets/images/works/wedding/gavriela-christos/05.webp";
import gavrielaChristos06 from "@/assets/images/works/wedding/gavriela-christos/06.webp";
import gavrielaChristos07 from "@/assets/images/works/wedding/gavriela-christos/07.webp";
import gavrielaChristos08 from "@/assets/images/works/wedding/gavriela-christos/08.webp";
import gavrielaChristos09 from "@/assets/images/works/wedding/gavriela-christos/09.webp";
import gavrielaChristos10 from "@/assets/images/works/wedding/gavriela-christos/10.webp";
import gavrielaChristos11 from "@/assets/images/works/wedding/gavriela-christos/11.webp";
import gavrielaChristos12 from "@/assets/images/works/wedding/gavriela-christos/12.webp";
import gavrielaChristos13 from "@/assets/images/works/wedding/gavriela-christos/13.webp";
import gavrielaChristos14 from "@/assets/images/works/wedding/gavriela-christos/14.webp";
import gavrielaChristos15 from "@/assets/images/works/wedding/gavriela-christos/15.webp";
import gavrielaChristos16 from "@/assets/images/works/wedding/gavriela-christos/16.webp";
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
import noraSpyros01 from "@/assets/images/works/wedding/nora-spyros/01.webp";
import noraSpyros02 from "@/assets/images/works/wedding/nora-spyros/02.webp";
import noraSpyros03 from "@/assets/images/works/wedding/nora-spyros/03.webp";
import noraSpyros04 from "@/assets/images/works/wedding/nora-spyros/04.webp";
import noraSpyros05 from "@/assets/images/works/wedding/nora-spyros/05.webp";
import noraSpyros06 from "@/assets/images/works/wedding/nora-spyros/06.webp";
import noraSpyros07 from "@/assets/images/works/wedding/nora-spyros/07.webp";
import noraSpyros08 from "@/assets/images/works/wedding/nora-spyros/08.webp";
import noraSpyros09 from "@/assets/images/works/wedding/nora-spyros/09.webp";
import noraSpyros10 from "@/assets/images/works/wedding/nora-spyros/10.webp";
import noraSpyros11 from "@/assets/images/works/wedding/nora-spyros/11.webp";
import noraSpyros12 from "@/assets/images/works/wedding/nora-spyros/12.webp";
import noraSpyros13 from "@/assets/images/works/wedding/nora-spyros/13.webp";
import noraSpyros14 from "@/assets/images/works/wedding/nora-spyros/14.webp";
import noraSpyros15 from "@/assets/images/works/wedding/nora-spyros/15.webp";
import noraSpyros16 from "@/assets/images/works/wedding/nora-spyros/16.webp";
import noraSpyros17 from "@/assets/images/works/wedding/nora-spyros/17.webp";
import noraSpyros18 from "@/assets/images/works/wedding/nora-spyros/18.webp";
import noraSpyros19 from "@/assets/images/works/wedding/nora-spyros/19.webp";
import noraSpyros20 from "@/assets/images/works/wedding/nora-spyros/20.webp";
import noraSpyros21 from "@/assets/images/works/wedding/nora-spyros/21.webp";
import noraSpyros22 from "@/assets/images/works/wedding/nora-spyros/22.webp";
import noraSpyros23 from "@/assets/images/works/wedding/nora-spyros/23.webp";
import noraSpyros24 from "@/assets/images/works/wedding/nora-spyros/24.webp";
import noraSpyros25 from "@/assets/images/works/wedding/nora-spyros/25.webp";
import noraSpyros26 from "@/assets/images/works/wedding/nora-spyros/26.webp";
import noraSpyros27 from "@/assets/images/works/wedding/nora-spyros/27.webp";
import noraSpyros28 from "@/assets/images/works/wedding/nora-spyros/28.webp";
import noraSpyros29 from "@/assets/images/works/wedding/nora-spyros/29.webp";
import noraSpyros30 from "@/assets/images/works/wedding/nora-spyros/30.webp";
import noraSpyros31 from "@/assets/images/works/wedding/nora-spyros/31.webp";
import noraSpyros32 from "@/assets/images/works/wedding/nora-spyros/32.webp";
import noraSpyros33 from "@/assets/images/works/wedding/nora-spyros/33.webp";
import noraSpyros34 from "@/assets/images/works/wedding/nora-spyros/34.webp";
import noraSpyros35 from "@/assets/images/works/wedding/nora-spyros/35.webp";
import noraSpyros36 from "@/assets/images/works/wedding/nora-spyros/36.webp";
import noraSpyros37 from "@/assets/images/works/wedding/nora-spyros/37.webp";
import noraSpyros38 from "@/assets/images/works/wedding/nora-spyros/38.webp";
import noraSpyros39 from "@/assets/images/works/wedding/nora-spyros/39.webp";
import noraSpyros40 from "@/assets/images/works/wedding/nora-spyros/40.webp";
import noraSpyros41 from "@/assets/images/works/wedding/nora-spyros/41.webp";
import noraSpyros42 from "@/assets/images/works/wedding/nora-spyros/42.webp";
import noraSpyros43 from "@/assets/images/works/wedding/nora-spyros/43.webp";
import noraSpyros44 from "@/assets/images/works/wedding/nora-spyros/44.webp";
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
import stellaMarios01 from "@/assets/images/works/wedding/stella-marios/01.webp";
import stellaMarios02 from "@/assets/images/works/wedding/stella-marios/02.webp";
import stellaMarios03 from "@/assets/images/works/wedding/stella-marios/03.webp";
import stellaMarios04 from "@/assets/images/works/wedding/stella-marios/04.webp";
import stellaMarios05 from "@/assets/images/works/wedding/stella-marios/05.webp";
import stellaMarios06 from "@/assets/images/works/wedding/stella-marios/06.webp";
import stellaMarios07 from "@/assets/images/works/wedding/stella-marios/07.webp";
import stellaMarios08 from "@/assets/images/works/wedding/stella-marios/08.webp";
import stellaMarios09 from "@/assets/images/works/wedding/stella-marios/09.webp";
import stellaMarios10 from "@/assets/images/works/wedding/stella-marios/10.webp";
import stellaMarios11 from "@/assets/images/works/wedding/stella-marios/11.webp";
import stellaMarios12 from "@/assets/images/works/wedding/stella-marios/12.webp";
import stellaMarios13 from "@/assets/images/works/wedding/stella-marios/13.webp";
import stellaMarios14 from "@/assets/images/works/wedding/stella-marios/14.webp";
import stellaMarios15 from "@/assets/images/works/wedding/stella-marios/15.webp";
import stellaMarios16 from "@/assets/images/works/wedding/stella-marios/16.webp";
import stellaMarios17 from "@/assets/images/works/wedding/stella-marios/17.webp";
import stellaMarios18 from "@/assets/images/works/wedding/stella-marios/18.webp";
import stellaMarios19 from "@/assets/images/works/wedding/stella-marios/19.webp";
import stellaMarios20 from "@/assets/images/works/wedding/stella-marios/20.webp";
import stellaMarios21 from "@/assets/images/works/wedding/stella-marios/21.webp";
import stellaMarios22 from "@/assets/images/works/wedding/stella-marios/22.webp";
import stellaMarios23 from "@/assets/images/works/wedding/stella-marios/23.webp";
import stellaMarios24 from "@/assets/images/works/wedding/stella-marios/24.webp";
import stellaMarios25 from "@/assets/images/works/wedding/stella-marios/25.webp";
import stellaMarios26 from "@/assets/images/works/wedding/stella-marios/26.webp";
import stellaMarios27 from "@/assets/images/works/wedding/stella-marios/27.webp";
import stellaMarios28 from "@/assets/images/works/wedding/stella-marios/28.webp";
import stellaMarios29 from "@/assets/images/works/wedding/stella-marios/29.webp";
import stellaMarios30 from "@/assets/images/works/wedding/stella-marios/30.webp";
import stellaMarios31 from "@/assets/images/works/wedding/stella-marios/31.webp";
import stellaMarios32 from "@/assets/images/works/wedding/stella-marios/32.webp";
import stellaMarios33 from "@/assets/images/works/wedding/stella-marios/33.webp";
import stellaMarios34 from "@/assets/images/works/wedding/stella-marios/34.webp";
import stellaMarios35 from "@/assets/images/works/wedding/stella-marios/35.webp";
import stellaMarios36 from "@/assets/images/works/wedding/stella-marios/36.webp";
import stellaMarios37 from "@/assets/images/works/wedding/stella-marios/37.webp";

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
    slug: "nora-spyros",
    category: "wedding",
    title: { en: "Nora & Spyros", el: "Νόρα & Σπύρος" },
    location: GREECE,
    services: ["photography"],
    cover: {
      ...image(
        noraSpyros01,
        "The couple on a shore under a dramatic cloudy sky, the groom's jacket over his shoulder",
        "Το ζευγάρι σε μια ακτή κάτω από δραματικό συννεφιασμένο ουρανό, με το σακάκι του γαμπρού στον ώμο",
      ),
      // The couple stands left of centre; keep them in the narrow portrait crop on phones.
      focus: "22% 50%",
    },
    gallery: [
      image(noraSpyros02, "A bottle of cologne among green leaves", "Ένα μπουκάλι άρωμα ανάμεσα σε πράσινα φύλλα"),
      image(
        noraSpyros03,
        "The wedding rings in their box, set in a wooden lattice",
        "Οι βέρες στο κουτί τους, ανάμεσα σε ένα ξύλινο καφασωτό",
      ),
      image(noraSpyros04, "The groom's black shoes", "Τα μαύρα παπούτσια του γαμπρού"),
      image(noraSpyros05, "A green-faced watch resting on a log", "Ένα ρολόι με πράσινο καντράν πάνω σε ένα κούτσουρο"),
      image(
        noraSpyros06,
        "Black-and-white close-up of the groom's jacket and pin",
        "Ασπρόμαυρο κοντινό στο σακάκι και την καρφίτσα του γαμπρού",
      ),
      image(
        noraSpyros07,
        "The groom leaning on a balcony rail above the city",
        "Ο γαμπρός ακουμπά στο κάγκελο ενός μπαλκονιού πάνω από την πόλη",
      ),
      image(noraSpyros08, "The groom buttoning his jacket on a terrace", "Ο γαμπρός κουμπώνει το σακάκι του σε μια ταράτσα"),
      image(noraSpyros09, "The groom straightening his tie", "Ο γαμπρός φτιάχνει τη γραβάτα του"),
      image(
        noraSpyros10,
        "The bride's makeup being done under silver BRIDE balloons",
        "Μακιγιάζ για τη νύφη κάτω από ασημένια μπαλόνια BRIDE",
      ),
      image(
        noraSpyros11,
        "Heart-shaped cookies with the couple's initials",
        "Μπισκότα σε σχήμα καρδιάς με τα αρχικά του ζευγαριού",
      ),
      image(
        noraSpyros12,
        "Two friends in satin robes arranging the veil over the wedding dress",
        "Δύο φίλες με σατέν ρόμπες φτιάχνουν το πέπλο πάνω στο νυφικό",
      ),
      image(noraSpyros13, "The bride's sparkling sandals", "Τα αστραφτερά πέδιλα της νύφης"),
      image(
        noraSpyros14,
        "A high heel and the tiara in soft light",
        "Ένα ψηλοτάκουνο παπούτσι και η τιάρα σε απαλό φως",
      ),
      image(noraSpyros15, "The wedding dress and veil on a mannequin", "Το νυφικό και το πέπλο σε μια κούκλα"),
      image(noraSpyros16, "Earrings and a necklace in their boxes", "Σκουλαρίκια και κολιέ στα κουτιά τους"),
      image(noraSpyros17, "The bride in her tiara during makeup", "Η νύφη με την τιάρα την ώρα του μακιγιάζ"),
      image(noraSpyros18, "The bride putting on lipstick", "Η νύφη βάφει τα χείλη της"),
      image(
        noraSpyros19,
        "The bride and her friends in satin robes raising a toast",
        "Η νύφη και οι φίλες της με σατέν ρόμπες τσουγκρίζουν τα ποτήρια",
      ),
      image(
        noraSpyros20,
        "The bride relaxing on a white sofa beside her dress",
        "Η νύφη χαλαρώνει σε έναν λευκό καναπέ δίπλα στο νυφικό της",
      ),
      image(noraSpyros21, "Two bridesmaids lacing up the bride's dress", "Δύο παράνυφες δένουν το νυφικό της νύφης"),
      image(
        noraSpyros22,
        "The bridesmaids kiss the bride on both cheeks",
        "Οι παράνυφες φιλούν τη νύφη στα μάγουλα",
      ),
      image(noraSpyros23, "The bride in her veil and tiara", "Η νύφη με το πέπλο και την τιάρα"),
      image(
        noraSpyros24,
        "The bride looking over her shoulder through the veil",
        "Η νύφη κοιτάζει πάνω από τον ώμο της μέσα από το πέπλο",
      ),
      image(noraSpyros25, "The bride smiling from the car", "Η νύφη χαμογελά μέσα από το αυτοκίνητο"),
      image(
        noraSpyros26,
        "The couple meet, the groom holding the bride's face",
        "Το ζευγάρι συναντιέται και ο γαμπρός κρατά το πρόσωπο της νύφης",
      ),
      image(
        noraSpyros27,
        "A bridesmaid holds the wedding crowns over the couple",
        "Μια παράνυφη κρατά τα στέφανα πάνω από το ζευγάρι",
      ),
      image(
        noraSpyros28,
        "The couple hand in hand in a church full of icons",
        "Το ζευγάρι χέρι χέρι σε μια εκκλησία γεμάτη εικόνες",
      ),
      image(
        noraSpyros29,
        "Black-and-white photo of the couple before the priest",
        "Ασπρόμαυρη φωτογραφία του ζευγαριού μπροστά στον ιερέα",
      ),
      image(noraSpyros30, "The couple kissing in the church doorway", "Το ζευγάρι φιλιέται στην πόρτα της εκκλησίας"),
      image(
        noraSpyros31,
        "Black-and-white photo of the first dance in a cloud of smoke",
        "Ασπρόμαυρη φωτογραφία του πρώτου χορού μέσα σε σύννεφο καπνού",
      ),
      image(
        noraSpyros32,
        "The groom lifting the bride above the smoke on the dance floor",
        "Ο γαμπρός σηκώνει τη νύφη πάνω από τον καπνό στην πίστα",
      ),
      image(
        noraSpyros33,
        "The groom spinning the bride during their first dance",
        "Ο γαμπρός στριφογυρίζει τη νύφη στον πρώτο τους χορό",
      ),
      image(noraSpyros34, "The couple dancing in blue light and smoke", "Το ζευγάρι χορεύει σε μπλε φως και καπνό"),
      image(
        noraSpyros35,
        "The couple in silhouette against a blue spotlight",
        "Το ζευγάρι σε σιλουέτα μπροστά σε έναν μπλε προβολέα",
      ),
      image(
        noraSpyros36,
        "The groom holding white roses on the church steps",
        "Ο γαμπρός κρατά λευκά τριαντάφυλλα στα σκαλιά της εκκλησίας",
      ),
      image(
        noraSpyros37,
        "The groom lifting the bride for a kiss against a sunset sky",
        "Ο γαμπρός σηκώνει τη νύφη για ένα φιλί με φόντο τον ουρανό του ηλιοβασιλέματος",
      ),
      image(
        noraSpyros38,
        "The couple embracing in silhouette at sunset",
        "Το ζευγάρι αγκαλιάζεται σε σιλουέτα στο ηλιοβασίλεμα",
      ),
      image(
        noraSpyros39,
        "The couple's hands reaching for each other against a blue sky",
        "Τα χέρια του ζευγαριού ενώνονται με φόντο τον γαλάζιο ουρανό",
      ),
      image(
        noraSpyros40,
        "Black-and-white photo of the groom kneeling before the bride on the shore",
        "Ασπρόμαυρη φωτογραφία του γαμπρού που γονατίζει μπροστά στη νύφη στην ακτή",
      ),
      image(noraSpyros41, "The couple embracing on a wide shore", "Το ζευγάρι αγκαλιασμένο σε μια μεγάλη ακτή"),
      image(
        noraSpyros42,
        "The couple hand in hand by the water, hills behind them",
        "Το ζευγάρι χέρι χέρι δίπλα στο νερό, με τους λόφους πίσω τους",
      ),
      image(noraSpyros43, "The bride sitting in her dress at dusk", "Η νύφη κάθεται με το νυφικό της το σούρουπο"),
      image(
        noraSpyros44,
        "Black-and-white photo of the couple sitting together, the groom pointing ahead",
        "Ασπρόμαυρη φωτογραφία του ζευγαριού που κάθεται μαζί, με τον γαμπρό να δείχνει μπροστά",
      ),
    ],
  },
  {
    slug: "stella-marios",
    category: "wedding",
    title: { en: "Stella & Marios", el: "Στέλλα & Μάριος" },
    location: GREECE,
    services: ["photography"],
    cover: {
      ...image(
        stellaMarios01,
        "The couple cheek to cheek in front of glowing LOVE letters",
        "Το ζευγάρι μάγουλο με μάγουλο μπροστά στα φωτεινά γράμματα LOVE",
      ),
      // Keep both faces in the narrow portrait crop on phones.
      focus: "40% 50%",
    },
    gallery: [
      image(
        stellaMarios02,
        "A gold cross in its box, propped against a tree",
        "Ένας χρυσός σταυρός στο κουτί του, ακουμπισμένος σε ένα δέντρο",
      ),
      image(stellaMarios03, "The bride's white sandals on the grass", "Τα λευκά πέδιλα της νύφης στο γρασίδι"),
      image(stellaMarios04, "The groom's watch in its box", "Το ρολόι του γαμπρού στο κουτί του"),
      image(
        stellaMarios05,
        "The groom's white jacket hanging from a tree",
        "Το λευκό σακάκι του γαμπρού κρεμασμένο σε ένα δέντρο",
      ),
      image(
        stellaMarios06,
        "The bride's sandals, invitation, perfume and a BRIDE fan laid out on the grass",
        "Τα πέδιλα, το προσκλητήριο, το άρωμα και μια βεντάλια BRIDE της νύφης απλωμένα στο γρασίδι",
      ),
      image(stellaMarios07, "The wedding rings on the grass", "Οι βέρες πάνω στο γρασίδι"),
      image(
        stellaMarios08,
        "The groom relaxing in the pool with a beer",
        "Ο γαμπρός χαλαρώνει στην πισίνα με μια μπίρα",
      ),
      image(
        stellaMarios09,
        "The baby's baptism outfit hanging from a branch",
        "Τα βαπτιστικά ρούχα κρεμασμένα σε ένα κλαδί",
      ),
      image(
        stellaMarios10,
        "The baby's white shoes by a tree trunk",
        "Τα λευκά παπουτσάκια του μωρού δίπλα σε έναν κορμό",
      ),
      image(stellaMarios11, "The wedding dress hanging in a doorway", "Το νυφικό κρεμασμένο σε μια πόρτα"),
      image(
        stellaMarios12,
        "Black-and-white photo of the bride smiling as her hair is styled",
        "Ασπρόμαυρη φωτογραφία της νύφης που χαμογελά ενώ της φτιάχνουν τα μαλλιά",
      ),
      image(stellaMarios13, "The bride smiling during her makeup", "Η νύφη χαμογελά την ώρα του μακιγιάζ"),
      image(stellaMarios14, "A friend kisses the groom on the cheek", "Ένας φίλος φιλά τον γαμπρό στο μάγουλο"),
      image(
        stellaMarios15,
        "Black-and-white photo of the groom and a friend forehead to forehead",
        "Ασπρόμαυρη φωτογραφία του γαμπρού με έναν φίλο του, μέτωπο με μέτωπο",
      ),
      image(
        stellaMarios16,
        "The groom in sunglasses putting on his jacket",
        "Ο γαμπρός με γυαλιά ηλίου φορά το σακάκι του",
      ),
      image(stellaMarios17, "Friends help the bride into her dress", "Φίλες βοηθούν τη νύφη να φορέσει το νυφικό"),
      image(
        stellaMarios18,
        "The groom seated in a white jacket, holding the bouquet",
        "Ο γαμπρός κάθεται με λευκό σακάκι και κρατά την ανθοδέσμη",
      ),
      image(stellaMarios19, "The bride on a white sofa with her dog", "Η νύφη σε έναν λευκό καναπέ με τον σκύλο της"),
      image(stellaMarios20, "The bride smiling in her dress", "Η νύφη χαμογελά με το νυφικό της"),
      image(
        stellaMarios21,
        "The groom holding a little boy and the bouquet",
        "Ο γαμπρός κρατά ένα αγοράκι και την ανθοδέσμη",
      ),
      image(
        stellaMarios22,
        "The couple walking hand in hand down the aisle between their guests",
        "Το ζευγάρι περπατά χέρι χέρι στον διάδρομο ανάμεσα στους καλεσμένους",
      ),
      image(stellaMarios23, "The couple side by side at the ceremony", "Το ζευγάρι δίπλα δίπλα στο μυστήριο"),
      image(stellaMarios24, "The Gospel book tied with white flowers", "Το Ευαγγέλιο δεμένο με λευκά λουλούδια"),
      image(
        stellaMarios25,
        "The bride's hands holding a bouquet of calla lilies",
        "Τα χέρια της νύφης κρατούν μια ανθοδέσμη από κάλλες",
      ),
      image(
        stellaMarios26,
        "The couple smiling under the wedding crowns",
        "Το ζευγάρι χαμογελά κάτω από τα στέφανα",
      ),
      image(
        stellaMarios27,
        "Black-and-white photo of the couple smiling at the ceremony",
        "Ασπρόμαυρη φωτογραφία του ζευγαριού που χαμογελά στο μυστήριο",
      ),
      image(
        stellaMarios28,
        "Black-and-white photo of the little girl in the font",
        "Ασπρόμαυρη φωτογραφία του κοριτσιού στην κολυμπήθρα",
      ),
      image(
        stellaMarios29,
        "Black-and-white photo of the little girl peeking over the font as water splashes",
        "Ασπρόμαυρη φωτογραφία του κοριτσιού που κοιτάζει πάνω από την κολυμπήθρα μέσα στις σταγόνες",
      ),
      image(
        stellaMarios30,
        "Black-and-white photo of the little girl smiling over a shoulder",
        "Ασπρόμαυρη φωτογραφία του κοριτσιού που χαμογελά πάνω από έναν ώμο",
      ),
      image(
        stellaMarios31,
        "Black-and-white photo of the couple laughing face to face",
        "Ασπρόμαυρη φωτογραφία του ζευγαριού που γελά πρόσωπο με πρόσωπο",
      ),
      image(
        stellaMarios32,
        "The couple about to kiss in warm evening light",
        "Το ζευγάρι λίγο πριν το φιλί στο ζεστό βραδινό φως",
      ),
      image(
        stellaMarios33,
        "The groom kneels before the bride inside glowing LOVE letters",
        "Ο γαμπρός γονατίζει μπροστά στη νύφη μέσα στα φωτεινά γράμματα LOVE",
      ),
      image(
        stellaMarios34,
        "Black-and-white photo of the groom dipping the bride beside the LOVE letters",
        "Ασπρόμαυρη φωτογραφία του γαμπρού που γέρνει τη νύφη δίπλα στα γράμματα LOVE",
      ),
      image(
        stellaMarios35,
        "Black-and-white photo of the couple walking, the groom carrying their daughter",
        "Ασπρόμαυρη φωτογραφία του ζευγαριού που περπατά, με τον γαμπρό να κρατά την κόρη τους",
      ),
      image(
        stellaMarios36,
        "The bride and her daughter laughing on the dance floor",
        "Η νύφη και η κόρη της γελούν στην πίστα",
      ),
      image(stellaMarios37, "The groom dancing in blue light and smoke", "Ο γαμπρός χορεύει μέσα σε μπλε φως και καπνό"),
    ],
  },
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
    slug: "domna-giannis",
    category: "wedding",
    title: { en: "Domna & Giannis", el: "Δόμνα & Γιάννης" },
    location: GREECE,
    services: ["photography"],
    cover: {
      ...image(
        domnaGiannis01,
        "The couple kissing among warm string lights at night",
        "Το ζευγάρι φιλιέται ανάμεσα σε ζεστά φωτάκια τη νύχτα",
      ),
      // The kiss sits left of centre; keep it in the narrow portrait crop on phones.
      focus: "40% 50%",
    },
    gallery: [
      image(
        domnaGiannis02,
        "A white baptism outfit hanging from an olive tree",
        "Λευκό βαπτιστικό ρούχο κρεμασμένο σε μια ελιά",
      ),
      image(
        domnaGiannis03,
        "A white candle tied with rope and lilac flowers",
        "Λευκή λαμπάδα δεμένη με σχοινί και λιλά λουλούδια",
      ),
      image(
        domnaGiannis04,
        "Wildflowers and pampas grass decorating the wedding car",
        "Αγριολούλουδα και πάμπας διακοσμούν το νυφικό αυτοκίνητο",
      ),
      image(
        domnaGiannis05,
        "The groom in a beige suit holding the bouquet",
        "Ο γαμπρός με μπεζ κοστούμι κρατά την ανθοδέσμη",
      ),
      image(
        domnaGiannis06,
        "The groom smiling at his little daughter in his arms",
        "Ο γαμπρός χαμογελά στη μικρή του κόρη που κρατά αγκαλιά",
      ),
      image(
        domnaGiannis07,
        "The little girl beside a basket of flowers",
        "Το κοριτσάκι δίπλα σε ένα καλάθι με λουλούδια",
      ),
      image(
        domnaGiannis08,
        "A gold cross hanging on the bark of a tree",
        "Ένας χρυσός σταυρός κρεμασμένος στον κορμό ενός δέντρου",
      ),
      image(domnaGiannis09, "The wedding rings on pink fabric", "Οι βέρες πάνω σε ροζ ύφασμα"),
      image(
        domnaGiannis10,
        "The bride walks in through a stone gateway on her father's arm",
        "Η νύφη μπαίνει από μια πέτρινη πύλη αγκαζέ με τον πατέρα της",
      ),
      image(
        domnaGiannis11,
        "Black-and-white photo of the bride and her father arriving",
        "Ασπρόμαυρη φωτογραφία της νύφης με τον πατέρα της καθώς φτάνουν",
      ),
      image(
        domnaGiannis12,
        "Hands exchanging the rings during the ceremony",
        "Χέρια αλλάζουν τις βέρες στο μυστήριο",
      ),
      image(
        domnaGiannis13,
        "The groom smiling beside the bride at the ceremony",
        "Ο γαμπρός χαμογελά δίπλα στη νύφη στο μυστήριο",
      ),
      image(
        domnaGiannis14,
        "Close-up of the couple's hands and the bouquet",
        "Κοντινό στα χέρια του ζευγαριού και στην ανθοδέσμη",
      ),
      image(
        domnaGiannis15,
        "Black-and-white photo of the little girl in a guest's arms",
        "Ασπρόμαυρη φωτογραφία του κοριτσιού στην αγκαλιά ενός καλεσμένου",
      ),
      image(
        domnaGiannis16,
        "The little girl looking at the camera from a guest's arms",
        "Το κοριτσάκι κοιτά τον φακό από την αγκαλιά ενός καλεσμένου",
      ),
      image(
        domnaGiannis17,
        "The priest lifts the little girl at her baptism as the bride looks on",
        "Ο ιερέας σηκώνει το κοριτσάκι στη βάφτισή του και η νύφη κοιτάζει",
      ),
      image(
        domnaGiannis18,
        "The baptism table with a glass of wine and the book",
        "Το τραπέζι της βάφτισης με ένα ποτήρι κρασί και το βιβλίο",
      ),
      image(
        domnaGiannis19,
        "Black-and-white photo of the couple embracing",
        "Ασπρόμαυρη φωτογραφία του ζευγαριού αγκαλιασμένου",
      ),
      image(
        domnaGiannis20,
        "The couple's first dance under a pergola strung with lights",
        "Ο πρώτος χορός του ζευγαριού κάτω από πέργκολα με φωτάκια",
      ),
      image(
        domnaGiannis21,
        "Black-and-white photo of the bride hugging a guest",
        "Ασπρόμαυρη φωτογραφία της νύφης που αγκαλιάζει έναν καλεσμένο",
      ),
      image(
        domnaGiannis22,
        "Black-and-white photo of the couple holding each other on the dance floor",
        "Ασπρόμαυρη φωτογραφία του ζευγαριού αγκαλιασμένου στην πίστα",
      ),
      image(
        domnaGiannis23,
        "The couple laughing as they dance in violet light",
        "Το ζευγάρι γελά καθώς χορεύει σε μωβ φως",
      ),
      image(
        domnaGiannis24,
        "Black-and-white photo of the couple, the groom pointing into the distance",
        "Ασπρόμαυρη φωτογραφία του ζευγαριού, με τον γαμπρό να δείχνει μακριά",
      ),
      image(
        domnaGiannis25,
        "The couple hugging and smiling in the sunset light",
        "Το ζευγάρι αγκαλιάζεται χαμογελαστό στο φως του ηλιοβασιλέματος",
      ),
      image(
        domnaGiannis26,
        "Black-and-white photo of the couple cheek to cheek",
        "Ασπρόμαυρη φωτογραφία του ζευγαριού μάγουλο με μάγουλο",
      ),
      image(
        domnaGiannis27,
        "The couple embracing among the trees at golden hour",
        "Το ζευγάρι αγκαλιάζεται ανάμεσα στα δέντρα στη χρυσή ώρα",
      ),
      image(
        domnaGiannis28,
        "The father lifting his laughing daughter against a blue sky",
        "Ο μπαμπάς σηκώνει ψηλά την κόρη του που γελά, με φόντο τον γαλάζιο ουρανό",
      ),
      image(
        domnaGiannis29,
        "Black-and-white photo of the groom dipping the bride",
        "Ασπρόμαυρη φωτογραφία του γαμπρού που γέρνει τη νύφη προς τα πίσω",
      ),
      image(
        domnaGiannis30,
        "Mother and daughter face to face in the sunset light",
        "Μητέρα και κόρη πρόσωπο με πρόσωπο στο φως του ηλιοβασιλέματος",
      ),
    ],
  },
  {
    slug: "elena-alexandros",
    category: "wedding",
    title: { en: "Elena & Alexandros", el: "Έλενα & Αλέξανδρος" },
    location: GREECE,
    services: ["photography"],
    cover: image(
      elenaAlexandros01,
      "The couple and their baby smiling at the camera in the church",
      "Το ζευγάρι και το μωρό τους χαμογελούν στον φακό μέσα στην εκκλησία",
    ),
    gallery: [
      image(
        elenaAlexandros02,
        "The baptism tray with the oil, the Gospel book and white ribbons",
        "Ο δίσκος της βάφτισης με το λάδι, το Ευαγγέλιο και λευκές κορδέλες",
      ),
      image(
        elenaAlexandros03,
        "A small straw hat resting on a bush",
        "Ένα μικρό ψάθινο καπέλο πάνω σε θάμνο",
      ),
      image(
        elenaAlexandros04,
        "The baby's white shoes on the grass",
        "Τα λευκά παπουτσάκια του μωρού στο γρασίδι",
      ),
      image(
        elenaAlexandros05,
        "The couple's hands showing their wedding rings",
        "Τα χέρια του ζευγαριού με τις βέρες",
      ),
      image(
        elenaAlexandros06,
        "A gold cross on a chain against green leaves",
        "Χρυσός σταυρός σε αλυσίδα με φόντο το πράσινο",
      ),
      image(
        elenaAlexandros07,
        "The baby's hat and shoes together on the grass",
        "Το καπέλο και τα παπουτσάκια του μωρού μαζί στο γρασίδι",
      ),
      image(
        elenaAlexandros08,
        "The groom in a pink suit waiting with the bouquet by a wooden door",
        "Ο γαμπρός με ροζ κοστούμι περιμένει με την ανθοδέσμη δίπλα σε μια ξύλινη πόρτα",
      ),
      image(
        elenaAlexandros09,
        "The groom smiling at the end of the aisle in a garden",
        "Ο γαμπρός χαμογελά στην άκρη του διαδρόμου σε έναν κήπο",
      ),
      image(
        elenaAlexandros10,
        "The bride smiling from the car window",
        "Η νύφη χαμογελά από το παράθυρο του αυτοκινήτου",
      ),
      image(
        elenaAlexandros11,
        "The bride arriving on the arms of two men",
        "Η νύφη φτάνει αγκαζέ με δύο άντρες",
      ),
      image(
        elenaAlexandros12,
        "The groom in a pink suit and the bride in her veil at the ceremony",
        "Ο γαμπρός με ροζ κοστούμι και η νύφη με το πέπλο στο μυστήριο",
      ),
      image(
        elenaAlexandros13,
        "The bride drinks from the common cup held by the priest",
        "Η νύφη πίνει από το κοινό ποτήριο που κρατά ο ιερέας",
      ),
      image(
        elenaAlexandros14,
        "The priest holds the crying baby at the baptism",
        "Ο ιερέας κρατά το μωρό που κλαίει στη βάφτιση",
      ),
      image(
        elenaAlexandros15,
        "A woman holds the baby beside the bride while the groom holds the candle",
        "Μια γυναίκα κρατά το μωρό δίπλα στη νύφη και ο γαμπρός κρατά τη λαμπάδα",
      ),
      image(
        elenaAlexandros16,
        "The couple laughing with their baby in the church",
        "Το ζευγάρι γελά με το μωρό του στην εκκλησία",
      ),
      image(
        elenaAlexandros17,
        "A woman holding the baby in his baptism clothes",
        "Μια γυναίκα κρατά το μωρό με τα βαπτιστικά του",
      ),
      image(
        elenaAlexandros18,
        "The couple embracing under white wisteria",
        "Το ζευγάρι αγκαλιασμένο κάτω από λευκή γλυσίνα",
      ),
      image(
        elenaAlexandros19,
        "The couple looking at each other under the flowers",
        "Το ζευγάρι κοιτάζεται κάτω από τα λουλούδια",
      ),
    ],
  },
  {
    slug: "eleftheria-dimitris",
    category: "wedding",
    title: { en: "Eleftheria & Dimitris", el: "Ελευθερία & Δημήτρης" },
    location: GREECE,
    services: ["photography"],
    cover: {
      ...image(
        eleftheriaDimitris01,
        "The bride and groom smiling at each other in the church",
        "Η νύφη και ο γαμπρός χαμογελούν ο ένας στον άλλον μέσα στην εκκλησία",
      ),
      // Both faces fit the narrow portrait crop on phones only from just left of centre.
      focus: "45% 50%",
    },
    gallery: [
      image(
        eleftheriaDimitris02,
        "A white flower arrangement on a gold stand",
        "Λευκή σύνθεση λουλουδιών σε χρυσή βάση",
      ),
      image(
        eleftheriaDimitris03,
        "The groom in sunglasses holding the bouquet",
        "Ο γαμπρός με γυαλιά ηλίου κρατά την ανθοδέσμη",
      ),
      image(
        eleftheriaDimitris04,
        "The groom checking his watch outside the church",
        "Ο γαμπρός κοιτά το ρολόι του έξω από την εκκλησία",
      ),
      image(
        eleftheriaDimitris05,
        "The bride by the car, looking away",
        "Η νύφη δίπλα στο αυτοκίνητο κοιτάζει στο πλάι",
      ),
      image(eleftheriaDimitris06, "The bride on her father's arm", "Η νύφη αγκαζέ με τον πατέρα της"),
      image(
        eleftheriaDimitris07,
        "The couple at the church door, seen from inside",
        "Το ζευγάρι στην πόρτα της εκκλησίας, όπως φαίνεται από μέσα",
      ),
      image(
        eleftheriaDimitris08,
        "The couple at the ceremony among candles and flowers",
        "Το ζευγάρι στο μυστήριο ανάμεσα σε κεριά και λουλούδια",
      ),
      image(
        eleftheriaDimitris09,
        "The couple holding hands at the ceremony",
        "Το ζευγάρι πιασμένο χέρι χέρι στο μυστήριο",
      ),
      image(
        eleftheriaDimitris10,
        "The couple wearing the wedding crowns, the best man beside them",
        "Το ζευγάρι με τα στέφανα και ο κουμπάρος δίπλα τους",
      ),
      image(eleftheriaDimitris11, "The priest blesses the couple", "Ο ιερέας ευλογεί το ζευγάρι"),
      image(
        eleftheriaDimitris12,
        "The couple in front of the church's painted apse",
        "Το ζευγάρι μπροστά στην αγιογραφία της κόγχης",
      ),
    ],
  },
  {
    slug: "gavriela-christos",
    category: "wedding",
    title: { en: "Gavriela & Christos", el: "Γαβριέλα & Χρήστος" },
    location: GREECE,
    services: ["photography"],
    cover: {
      ...image(
        gavrielaChristos01,
        "The couple smiling outside the town hall, the bride holding roses",
        "Το ζευγάρι χαμογελά έξω από το δημαρχείο και η νύφη κρατά τριαντάφυλλα",
      ),
      // A portrait cover: wide screens show a band of it, kept high so both faces clear the title.
      focus: "50% 15%",
    },
    gallery: [
      image(
        gavrielaChristos02,
        "The bride greeting guests with her bouquet",
        "Η νύφη χαιρετά τους καλεσμένους με την ανθοδέσμη",
      ),
      image(gavrielaChristos03, "A witness signing the register", "Μια μάρτυρας υπογράφει το βιβλίο"),
      image(gavrielaChristos04, "A smiling witness signing the register", "Ένας χαμογελαστός μάρτυρας υπογράφει το βιβλίο"),
      image(gavrielaChristos05, "The groom signing the register", "Ο γαμπρός υπογράφει το βιβλίο"),
      image(gavrielaChristos06, "The bride signing the register", "Η νύφη υπογράφει το βιβλίο"),
      image(gavrielaChristos07, "The couple exchanging rings", "Το ζευγάρι ανταλλάσσει τις βέρες"),
      image(
        gavrielaChristos08,
        "Guests throw rice as the couple walks down the steps",
        "Οι καλεσμένοι ρίχνουν ρύζι καθώς το ζευγάρι κατεβαίνει τα σκαλιά",
      ),
      image(gavrielaChristos09, "The bride seen through a round frame", "Η νύφη μέσα από ένα στρογγυλό κάδρο"),
      image(
        gavrielaChristos10,
        "Black-and-white photo of the couple kissing",
        "Ασπρόμαυρη φωτογραφία του ζευγαριού που φιλιέται",
      ),
      image(
        gavrielaChristos11,
        "Black-and-white photo of the couple embracing, forehead to forehead",
        "Ασπρόμαυρη φωτογραφία του ζευγαριού αγκαλιασμένου, μέτωπο με μέτωπο",
      ),
      image(
        gavrielaChristos12,
        "The couple kissing behind the bouquet of roses",
        "Το ζευγάρι φιλιέται πίσω από την ανθοδέσμη με τα τριαντάφυλλα",
      ),
      image(gavrielaChristos13, "The couple looking at each other by the water", "Το ζευγάρι κοιτάζεται δίπλα στο νερό"),
      image(
        gavrielaChristos14,
        "Black-and-white close-up of their hands and wedding rings",
        "Ασπρόμαυρο κοντινό στα χέρια τους με τις βέρες",
      ),
      image(
        gavrielaChristos15,
        "The couple laughing face to face under a pine tree",
        "Το ζευγάρι γελά πρόσωπο με πρόσωπο κάτω από ένα πεύκο",
      ),
      image(
        gavrielaChristos16,
        "The couple stretching their arms out from the open doors of the wedding car",
        "Το ζευγάρι απλώνει τα χέρια από τις ανοιχτές πόρτες του γαμήλιου αυτοκινήτου",
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
    // Compact rows (asked for smaller photos).
    compactGallery: true,
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
      { type: "video", src: "/videos/social/web/biggie-promo.mp4", poster: "/videos/social/web/biggie-promo-poster.webp", aspect: "9 / 16" },
      { type: "video", src: "/videos/social/web/discoteca.mp4", poster: "/videos/social/web/discoteca-poster.webp", aspect: "9 / 16" },
      { type: "video", src: "/videos/social/web/vinegret.mp4", poster: "/videos/social/web/vinegret-poster.webp", aspect: "9 / 16" },
      { type: "video", src: "/videos/social/web/to-mystiko.mp4", poster: "/videos/social/web/to-mystiko-poster.webp", aspect: "9 / 16" },
      { type: "video", src: "/videos/social/web/reel-s05.mp4", poster: "/videos/social/web/reel-s05-poster.webp", aspect: "9 / 16" },
      { type: "video", src: "/videos/social/web/reel-s4.mp4", poster: "/videos/social/web/reel-s4-poster.webp", aspect: "9 / 16" },
      { type: "video", src: "/videos/social/web/delfinia.mp4", poster: "/videos/social/web/delfinia-poster.webp", aspect: "9 / 16" },
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
    // One shoot after another, newest first, in compact rows (asked for smaller photos); the
    // venue film sits halfway down.
    compactGallery: true,
    films: [
      {
        type: "video",
        src: "/videos/real-estate/athali.mp4",
        poster: "/videos/real-estate/athali-poster.webp",
        title: "Athali Events & Weddings",
        afterPhoto: 13,
      },
    ],
    gallery: [
      image(
        villa02,
        "A bright living room with a white sofa and sheer curtains",
        "Φωτεινό σαλόνι με λευκό καναπέ και διάφανες κουρτίνες",
      ),
      image(
        villa03,
        "A balcony with sculptural white seats and stone wall art",
        "Μπαλκόνι με γλυπτά λευκά καθίσματα και πέτρινη διακόσμηση στον τοίχο",
      ),
      image(villa04, "A silver monkey statue on a windowsill", "Ένα ασημένιο αγαλματάκι μαϊμούς σε ένα περβάζι"),
      image(villa05, "A television on a black media unit", "Μια τηλεόραση σε μαύρο έπιπλο"),
      image(villa06, "A potted plant on a sunny balcony ledge", "Ένα φυτό σε γλάστρα σε ηλιόλουστο περβάζι μπαλκονιού"),
      image(
        villa07,
        "The sea seen from a balcony through pine and palm trees",
        "Η θάλασσα από ένα μπαλκόνι μέσα από πεύκα και φοίνικες",
      ),
      image(villa08, "A round textured wall decoration", "Μια στρογγυλή ανάγλυφη διακόσμηση τοίχου"),
      image(villa09, "A white stone-like planter on a terrace", "Μια λευκή γλάστρα σαν πέτρα σε μια βεράντα"),
      image(
        villa10,
        "A covered balcony with wicker chairs overlooking the town and the sea",
        "Σκεπαστό μπαλκόνι με ψάθινες καρέκλες και θέα στην πόλη και τη θάλασσα",
      ),
      image(
        villa11,
        "A white orchid with the sea view blurred behind it",
        "Μια λευκή ορχιδέα με τη θέα στη θάλασσα θολή πίσω της",
      ),
      image(
        villa12,
        "Panoramic view over rooftops to the sea and the islands",
        "Πανοραμική θέα πάνω από τις στέγες προς τη θάλασσα και τα νησιά",
      ),
      image(
        villa13,
        "Folded white towels and toiletries on a bed",
        "Διπλωμένες λευκές πετσέτες και καλλυντικά πάνω σε ένα κρεβάτι",
      ),
      image(
        villa14,
        "A balcony chair facing the bay through the pine trees",
        "Μια καρέκλα στο μπαλκόνι με θέα στον κόλπο μέσα από τα πεύκα",
      ),
      image(villa15, "A tree seen through tall balcony doors", "Ένα δέντρο μέσα από ψηλές μπαλκονόπορτες"),
      image(villa16, "A framed blue print beside a plant", "Ένα κάδρο σε μπλε τόνους δίπλα σε ένα φυτό"),
      image(
        villa17,
        "A small potted plant on a terrace table",
        "Ένα μικρό φυτό σε γλάστρα πάνω σε τραπέζι στη βεράντα",
      ),
      image(
        villa18,
        "A pool table on a covered terrace with a green wall",
        "Ένα τραπέζι μπιλιάρδου σε σκεπαστή βεράντα με πράσινο τοίχο",
      ),
      image(villa19, "A carved WELCOME sign on a bed", "Μια σκαλιστή επιγραφή WELCOME πάνω σε ένα κρεβάτι"),
      image(
        villa20,
        "A warm bedside lamp against a wooden wall",
        "Ένα φωτιστικό κομοδίνου με ζεστό φως σε ξύλινο τοίχο",
      ),
      image(villa21, "Hotel beds with rolled towels", "Κρεβάτια ξενοδοχείου με τυλιγμένες πετσέτες"),
      image(
        villa22,
        "A sunny balcony with a table and chairs among city buildings",
        "Ηλιόλουστο μπαλκόνι με τραπέζι και καρέκλες ανάμεσα σε κτίρια της πόλης",
      ),
      image(villa23, "A wide view over the city from a balcony", "Ευρεία θέα στην πόλη από ένα μπαλκόνι"),
      image(villa24, "A double bed under a framed painting", "Ένα διπλό κρεβάτι κάτω από έναν πίνακα"),
      image(villa25, "An anchor-shaped wall clock", "Ένα ρολόι τοίχου σε σχήμα άγκυρας"),
      image(villa26, "Curtains framing the doors to a balcony", "Κουρτίνες γύρω από την πόρτα προς ένα μπαλκόνι"),
      image(
        villa27,
        "A bed with grey blankets under a sea painting",
        "Ένα κρεβάτι με γκρι κουβέρτες κάτω από έναν πίνακα με θάλασσα",
      ),
      image(villa28, "The sea seen through a balcony railing", "Η θάλασσα μέσα από τα κάγκελα ενός μπαλκονιού"),
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
