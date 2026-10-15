/**
 * Portfolio projects. Every page under /works, the sitemap and the filters are generated from here.
 *
 * To add or update a project:
 *   1. Photos go in assets/images/works/<category>/<slug>/01.webp, 02.webp, ... (01 = cover).
 *   2. Update the entry below (title, location, alt texts; optionally summary, description, gallery
 *      and films) in both languages.
 * The order of PROJECTS is the order on /works and in the wedding and baptism lists (Nikos sets
 * it). A collection (COLLECTIONS: weddings, baptisms) always lists its projects under its own
 * cover and line. Any other category is one project, shown at /works/<category> and supplying the
 * category's cover on Home (see getProjectPath).
 */
import type { StaticImageData } from "next/image";

import alexandros01 from "@/assets/images/works/baptism/alexandros/01.webp";
import alexandros02 from "@/assets/images/works/baptism/alexandros/02.webp";
import alexandros03 from "@/assets/images/works/baptism/alexandros/03.webp";
import alexandros04 from "@/assets/images/works/baptism/alexandros/04.webp";
import alexandros05 from "@/assets/images/works/baptism/alexandros/05.webp";
import alexandros06 from "@/assets/images/works/baptism/alexandros/06.webp";
import alexandros07 from "@/assets/images/works/baptism/alexandros/07.webp";
import alexandros08 from "@/assets/images/works/baptism/alexandros/08.webp";
import alexandros09 from "@/assets/images/works/baptism/alexandros/09.webp";
import alexandros10 from "@/assets/images/works/baptism/alexandros/10.webp";
import alexandros11 from "@/assets/images/works/baptism/alexandros/11.webp";
import alexandros12 from "@/assets/images/works/baptism/alexandros/12.webp";
import alexandros13 from "@/assets/images/works/baptism/alexandros/13.webp";
import alexandros14 from "@/assets/images/works/baptism/alexandros/14.webp";
import alexandros15 from "@/assets/images/works/baptism/alexandros/15.webp";
import alexandros16 from "@/assets/images/works/baptism/alexandros/16.webp";
import alexandros17 from "@/assets/images/works/baptism/alexandros/17.webp";
import aliki01 from "@/assets/images/works/baptism/aliki/01.webp";
import aliki02 from "@/assets/images/works/baptism/aliki/02.webp";
import aliki03 from "@/assets/images/works/baptism/aliki/03.webp";
import aliki04 from "@/assets/images/works/baptism/aliki/04.webp";
import aliki05 from "@/assets/images/works/baptism/aliki/05.webp";
import aliki06 from "@/assets/images/works/baptism/aliki/06.webp";
import aliki07 from "@/assets/images/works/baptism/aliki/07.webp";
import aliki08 from "@/assets/images/works/baptism/aliki/08.webp";
import aliki09 from "@/assets/images/works/baptism/aliki/09.webp";
import aliki10 from "@/assets/images/works/baptism/aliki/10.webp";
import aliki11 from "@/assets/images/works/baptism/aliki/11.webp";
import aliki12 from "@/assets/images/works/baptism/aliki/12.webp";
import aliki13 from "@/assets/images/works/baptism/aliki/13.webp";
import aliki14 from "@/assets/images/works/baptism/aliki/14.webp";
import aliki15 from "@/assets/images/works/baptism/aliki/15.webp";
import aliki16 from "@/assets/images/works/baptism/aliki/16.webp";
import antonis01 from "@/assets/images/works/baptism/antonis/01.webp";
import antonis02 from "@/assets/images/works/baptism/antonis/02.webp";
import antonis03 from "@/assets/images/works/baptism/antonis/03.webp";
import antonis04 from "@/assets/images/works/baptism/antonis/04.webp";
import antonis05 from "@/assets/images/works/baptism/antonis/05.webp";
import antonis06 from "@/assets/images/works/baptism/antonis/06.webp";
import antonis07 from "@/assets/images/works/baptism/antonis/07.webp";
import antonis08 from "@/assets/images/works/baptism/antonis/08.webp";
import antonis09 from "@/assets/images/works/baptism/antonis/09.webp";
import antonis10 from "@/assets/images/works/baptism/antonis/10.webp";
import antonis11 from "@/assets/images/works/baptism/antonis/11.webp";
import antonis12 from "@/assets/images/works/baptism/antonis/12.webp";
import antonis13 from "@/assets/images/works/baptism/antonis/13.webp";
import antonis14 from "@/assets/images/works/baptism/antonis/14.webp";
import antonis15 from "@/assets/images/works/baptism/antonis/15.webp";
import antonis16 from "@/assets/images/works/baptism/antonis/16.webp";
import antonis17 from "@/assets/images/works/baptism/antonis/17.webp";
import antonis18 from "@/assets/images/works/baptism/antonis/18.webp";
import antonis19 from "@/assets/images/works/baptism/antonis/19.webp";
import antonis20 from "@/assets/images/works/baptism/antonis/20.webp";
import antonis21 from "@/assets/images/works/baptism/antonis/21.webp";
import athanasios01 from "@/assets/images/works/baptism/athanasios/01.webp";
import athanasios02 from "@/assets/images/works/baptism/athanasios/02.webp";
import athanasios03 from "@/assets/images/works/baptism/athanasios/03.webp";
import athanasios04 from "@/assets/images/works/baptism/athanasios/04.webp";
import athanasios05 from "@/assets/images/works/baptism/athanasios/05.webp";
import athanasios06 from "@/assets/images/works/baptism/athanasios/06.webp";
import athanasios07 from "@/assets/images/works/baptism/athanasios/07.webp";
import athanasios08 from "@/assets/images/works/baptism/athanasios/08.webp";
import athanasios09 from "@/assets/images/works/baptism/athanasios/09.webp";
import athanasios10 from "@/assets/images/works/baptism/athanasios/10.webp";
import athanasios11 from "@/assets/images/works/baptism/athanasios/11.webp";
import athanasios12 from "@/assets/images/works/baptism/athanasios/12.webp";
import athanasios13 from "@/assets/images/works/baptism/athanasios/13.webp";
import athanasios14 from "@/assets/images/works/baptism/athanasios/14.webp";
import athanasios15 from "@/assets/images/works/baptism/athanasios/15.webp";
import athanasios16 from "@/assets/images/works/baptism/athanasios/16.webp";
import athanasios17 from "@/assets/images/works/baptism/athanasios/17.webp";
import athanasios18 from "@/assets/images/works/baptism/athanasios/18.webp";
import athanasios19 from "@/assets/images/works/baptism/athanasios/19.webp";
import baptismCover from "@/assets/images/works/baptism/cover.webp";
import evangelia01 from "@/assets/images/works/baptism/evangelia/01.webp";
import evangelia02 from "@/assets/images/works/baptism/evangelia/02.webp";
import evangelia03 from "@/assets/images/works/baptism/evangelia/03.webp";
import evangelia04 from "@/assets/images/works/baptism/evangelia/04.webp";
import evangelia05 from "@/assets/images/works/baptism/evangelia/05.webp";
import evangelia06 from "@/assets/images/works/baptism/evangelia/06.webp";
import evangelia07 from "@/assets/images/works/baptism/evangelia/07.webp";
import evangelia08 from "@/assets/images/works/baptism/evangelia/08.webp";
import evangelia09 from "@/assets/images/works/baptism/evangelia/09.webp";
import evangelia10 from "@/assets/images/works/baptism/evangelia/10.webp";
import evangelia11 from "@/assets/images/works/baptism/evangelia/11.webp";
import evangelia12 from "@/assets/images/works/baptism/evangelia/12.webp";
import foteini01 from "@/assets/images/works/baptism/foteini/01.webp";
import foteini02 from "@/assets/images/works/baptism/foteini/02.webp";
import foteini03 from "@/assets/images/works/baptism/foteini/03.webp";
import foteini04 from "@/assets/images/works/baptism/foteini/04.webp";
import foteini05 from "@/assets/images/works/baptism/foteini/05.webp";
import foteini06 from "@/assets/images/works/baptism/foteini/06.webp";
import foteini07 from "@/assets/images/works/baptism/foteini/07.webp";
import foteini08 from "@/assets/images/works/baptism/foteini/08.webp";
import foteini09 from "@/assets/images/works/baptism/foteini/09.webp";
import foteini10 from "@/assets/images/works/baptism/foteini/10.webp";
import foteini11 from "@/assets/images/works/baptism/foteini/11.webp";
import foteini12 from "@/assets/images/works/baptism/foteini/12.webp";
import foteini13 from "@/assets/images/works/baptism/foteini/13.webp";
import foteini14 from "@/assets/images/works/baptism/foteini/14.webp";
import foteini15 from "@/assets/images/works/baptism/foteini/15.webp";
import giorgos01 from "@/assets/images/works/baptism/giorgos/01.webp";
import giorgos02 from "@/assets/images/works/baptism/giorgos/02.webp";
import giorgos03 from "@/assets/images/works/baptism/giorgos/03.webp";
import giorgos04 from "@/assets/images/works/baptism/giorgos/04.webp";
import giorgos05 from "@/assets/images/works/baptism/giorgos/05.webp";
import giorgos06 from "@/assets/images/works/baptism/giorgos/06.webp";
import giorgos07 from "@/assets/images/works/baptism/giorgos/07.webp";
import giorgos08 from "@/assets/images/works/baptism/giorgos/08.webp";
import giorgos09 from "@/assets/images/works/baptism/giorgos/09.webp";
import giorgos10 from "@/assets/images/works/baptism/giorgos/10.webp";
import giorgos11 from "@/assets/images/works/baptism/giorgos/11.webp";
import giorgos12 from "@/assets/images/works/baptism/giorgos/12.webp";
import giorgos13 from "@/assets/images/works/baptism/giorgos/13.webp";
import giorgos14 from "@/assets/images/works/baptism/giorgos/14.webp";
import giorgos15 from "@/assets/images/works/baptism/giorgos/15.webp";
import giorgos16 from "@/assets/images/works/baptism/giorgos/16.webp";
import giorgos17 from "@/assets/images/works/baptism/giorgos/17.webp";
import giorgos18 from "@/assets/images/works/baptism/giorgos/18.webp";
import giorgos19 from "@/assets/images/works/baptism/giorgos/19.webp";
import giorgos20 from "@/assets/images/works/baptism/giorgos/20.webp";
import michailPanagiotis01 from "@/assets/images/works/baptism/michail-panagiotis/01.webp";
import michailPanagiotis02 from "@/assets/images/works/baptism/michail-panagiotis/02.webp";
import michailPanagiotis03 from "@/assets/images/works/baptism/michail-panagiotis/03.webp";
import michailPanagiotis04 from "@/assets/images/works/baptism/michail-panagiotis/04.webp";
import michailPanagiotis05 from "@/assets/images/works/baptism/michail-panagiotis/05.webp";
import michailPanagiotis06 from "@/assets/images/works/baptism/michail-panagiotis/06.webp";
import michailPanagiotis07 from "@/assets/images/works/baptism/michail-panagiotis/07.webp";
import michailPanagiotis08 from "@/assets/images/works/baptism/michail-panagiotis/08.webp";
import michailPanagiotis09 from "@/assets/images/works/baptism/michail-panagiotis/09.webp";
import michailPanagiotis10 from "@/assets/images/works/baptism/michail-panagiotis/10.webp";
import michailPanagiotis11 from "@/assets/images/works/baptism/michail-panagiotis/11.webp";
import michailPanagiotis12 from "@/assets/images/works/baptism/michail-panagiotis/12.webp";
import michailPanagiotis13 from "@/assets/images/works/baptism/michail-panagiotis/13.webp";
import michailPanagiotis14 from "@/assets/images/works/baptism/michail-panagiotis/14.webp";
import michailPanagiotis15 from "@/assets/images/works/baptism/michail-panagiotis/15.webp";
import michailPanagiotis16 from "@/assets/images/works/baptism/michail-panagiotis/16.webp";
import petros01 from "@/assets/images/works/baptism/petros/01.webp";
import petros02 from "@/assets/images/works/baptism/petros/02.webp";
import petros03 from "@/assets/images/works/baptism/petros/03.webp";
import petros04 from "@/assets/images/works/baptism/petros/04.webp";
import petros05 from "@/assets/images/works/baptism/petros/05.webp";
import petros06 from "@/assets/images/works/baptism/petros/06.webp";
import petros07 from "@/assets/images/works/baptism/petros/07.webp";
import petros08 from "@/assets/images/works/baptism/petros/08.webp";
import petros09 from "@/assets/images/works/baptism/petros/09.webp";
import petros10 from "@/assets/images/works/baptism/petros/10.webp";
import petros11 from "@/assets/images/works/baptism/petros/11.webp";
import petros12 from "@/assets/images/works/baptism/petros/12.webp";
import petros13 from "@/assets/images/works/baptism/petros/13.webp";
import petros14 from "@/assets/images/works/baptism/petros/14.webp";
import petros15 from "@/assets/images/works/baptism/petros/15.webp";
import petrosII01 from "@/assets/images/works/baptism/petros-2/01.webp";
import petrosII02 from "@/assets/images/works/baptism/petros-2/02.webp";
import petrosII03 from "@/assets/images/works/baptism/petros-2/03.webp";
import petrosII04 from "@/assets/images/works/baptism/petros-2/04.webp";
import petrosII05 from "@/assets/images/works/baptism/petros-2/05.webp";
import petrosII06 from "@/assets/images/works/baptism/petros-2/06.webp";
import petrosII07 from "@/assets/images/works/baptism/petros-2/07.webp";
import petrosII08 from "@/assets/images/works/baptism/petros-2/08.webp";
import petrosII09 from "@/assets/images/works/baptism/petros-2/09.webp";
import petrosII10 from "@/assets/images/works/baptism/petros-2/10.webp";
import petrosII11 from "@/assets/images/works/baptism/petros-2/11.webp";
import petrosII12 from "@/assets/images/works/baptism/petros-2/12.webp";
import petrosII13 from "@/assets/images/works/baptism/petros-2/13.webp";
import rafail01 from "@/assets/images/works/baptism/rafail/01.webp";
import rafail02 from "@/assets/images/works/baptism/rafail/02.webp";
import rafail03 from "@/assets/images/works/baptism/rafail/03.webp";
import rafail04 from "@/assets/images/works/baptism/rafail/04.webp";
import rafail05 from "@/assets/images/works/baptism/rafail/05.webp";
import rafail06 from "@/assets/images/works/baptism/rafail/06.webp";
import rafail07 from "@/assets/images/works/baptism/rafail/07.webp";
import rafail08 from "@/assets/images/works/baptism/rafail/08.webp";
import rafail09 from "@/assets/images/works/baptism/rafail/09.webp";
import rafail10 from "@/assets/images/works/baptism/rafail/10.webp";
import rafail11 from "@/assets/images/works/baptism/rafail/11.webp";
import rafail12 from "@/assets/images/works/baptism/rafail/12.webp";
import simela01 from "@/assets/images/works/baptism/simela/01.webp";
import simela02 from "@/assets/images/works/baptism/simela/02.webp";
import simela03 from "@/assets/images/works/baptism/simela/03.webp";
import simela04 from "@/assets/images/works/baptism/simela/04.webp";
import simela05 from "@/assets/images/works/baptism/simela/05.webp";
import simela06 from "@/assets/images/works/baptism/simela/06.webp";
import simela07 from "@/assets/images/works/baptism/simela/07.webp";
import simela08 from "@/assets/images/works/baptism/simela/08.webp";
import simela09 from "@/assets/images/works/baptism/simela/09.webp";
import simela10 from "@/assets/images/works/baptism/simela/10.webp";
import simela11 from "@/assets/images/works/baptism/simela/11.webp";
import simela12 from "@/assets/images/works/baptism/simela/12.webp";
import simela13 from "@/assets/images/works/baptism/simela/13.webp";
import simela14 from "@/assets/images/works/baptism/simela/14.webp";
import sotiris01 from "@/assets/images/works/baptism/sotiris/01.webp";
import sotiris02 from "@/assets/images/works/baptism/sotiris/02.webp";
import sotiris03 from "@/assets/images/works/baptism/sotiris/03.webp";
import sotiris04 from "@/assets/images/works/baptism/sotiris/04.webp";
import sotiris05 from "@/assets/images/works/baptism/sotiris/05.webp";
import sotiris06 from "@/assets/images/works/baptism/sotiris/06.webp";
import sotiris07 from "@/assets/images/works/baptism/sotiris/07.webp";
import sotiris08 from "@/assets/images/works/baptism/sotiris/08.webp";
import sotiris09 from "@/assets/images/works/baptism/sotiris/09.webp";
import sotiris10 from "@/assets/images/works/baptism/sotiris/10.webp";
import sotiris11 from "@/assets/images/works/baptism/sotiris/11.webp";
import sotiris12 from "@/assets/images/works/baptism/sotiris/12.webp";
import sotiris13 from "@/assets/images/works/baptism/sotiris/13.webp";
import sotiris14 from "@/assets/images/works/baptism/sotiris/14.webp";
import sotiris15 from "@/assets/images/works/baptism/sotiris/15.webp";
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

/** Categories made of many projects (one page per wedding or baptism), with the cover and line that head them. */
const COLLECTIONS: Partial<Record<CategorySlug, CategoryShowcase>> = {
  baptism: {
    title: { en: "A New Beginning", el: "Μια νέα αρχή" },
    cover: image(
      baptismCover,
      "Baby in a woman's arms reaching up to the Gospel book held by the priest",
      "Μωρό στην αγκαλιά μιας γυναίκας απλώνει το χέρι προς το Ευαγγέλιο που κρατά ο ιερέας",
    ),
  },
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
      // Alone, so it does not pull the bride's sandals forward.
      { ...image(noraSpyros09, "The groom straightening his tie", "Ο γαμπρός φτιάχνει τη γραβάτα του"), row: "alone" },
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
      // Nikos placed the groom with the roses beside the couple's first look.
      {
        ...image(
          noraSpyros36,
          "The groom holding white roses on the church steps",
          "Ο γαμπρός κρατά λευκά τριαντάφυλλα στα σκαλιά της εκκλησίας",
        ),
        row: "with-next",
      },
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
      // Second to last on its own (asked by Nikos), not pulled up beside an earlier portrait.
      {
        ...image(
          stellaMarios36,
          "The bride and her daughter laughing on the dance floor",
          "Η νύφη και η κόρη της γελούν στην πίστα",
        ),
        row: "alone",
      },
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
    slug: "petros",
    category: "baptism",
    title: { en: "Petros", el: "Πέτρος" },
    location: GREECE,
    services: ["photography", "film"],
    cover: image(
      petros01,
      "Petros in white in his mother's arms among green leaves",
      "Ο Πέτρος στα λευκά, στην αγκαλιά της μαμάς του, ανάμεσα σε πράσινα φύλλα",
    ),
    films: [{ type: "video", src: "/videos/baptism/petros.mp4", poster: "/videos/baptism/petros-poster.webp" }],
    gallery: [
      image(petros02, "The white chapel where the baptism took place", "Το λευκό εκκλησάκι της βάφτισης"),
      image(
        petros03,
        "A suitcase decorated with Peter Pan among bougainvillea",
        "Βαλίτσα διακοσμημένη με τον Πίτερ Παν ανάμεσα σε βουκαμβίλιες",
      ),
      image(
        petros04,
        "The baby's linen shirt among bougainvillea",
        "Το λινό πουκάμισο του μωρού ανάμεσα σε βουκαμβίλιες",
      ),
      image(
        petros05,
        "The baby's suede loafers among the flowers",
        "Τα σουέτ μοκασίνια του μωρού ανάμεσα στα λουλούδια",
      ),
      image(petros06, "A straw hat with a Peter Pan figure", "Ψάθινο καπέλο με μια φιγούρα του Πίτερ Παν"),
      image(petros07, "A gold cross hanging among the leaves", "Ένας χρυσός σταυρός κρεμασμένος ανάμεσα στα φύλλα"),
      image(
        petros08,
        "Peter Pan decorations and flowers outside the chapel",
        "Διακόσμηση με τον Πίτερ Παν και λουλούδια έξω από το εκκλησάκι",
      ),
      image(petros09, "Petros held close before the ceremony", "Ο Πέτρος στην αγκαλιά πριν από το μυστήριο"),
      image(
        petros10,
        "Petros in his father's arms, both smiling",
        "Ο Πέτρος στην αγκαλιά του μπαμπά του, χαμογελαστοί και οι δύο",
      ),
      image(petros11, "Black-and-white close-up of Petros", "Ασπρόμαυρο κοντινό του Πέτρου"),
      image(
        petros12,
        "Black-and-white photo of guests reading the service",
        "Ασπρόμαυρη φωτογραφία καλεσμένων που διαβάζουν την ακολουθία",
      ),
      image(
        petros13,
        "Black-and-white photo of Petros at the font",
        "Ασπρόμαυρη φωτογραφία του Πέτρου στην κολυμπήθρα",
      ),
      image(petros14, "Petros in a straw hat and white bonnet", "Ο Πέτρος με ψάθινο καπέλο και λευκό σκουφάκι"),
      image(
        petros01,
        "Petros in white in his mother's arms among green leaves",
        "Ο Πέτρος στα λευκά, στην αγκαλιά της μαμάς του, ανάμεσα σε πράσινα φύλλα",
      ),
      image(petros15, "His parents kiss Petros on both cheeks", "Οι γονείς του φιλούν τον Πέτρο στα μάγουλα"),
    ],
  },
  {
    slug: "alexandros",
    category: "baptism",
    title: { en: "Alexandros", el: "Αλέξανδρος" },
    location: GREECE,
    services: ["photography", "film"],
    cover: image(
      alexandros01,
      "His parents kiss Alexandros by the sea",
      "Οι γονείς του φιλούν τον Αλέξανδρο δίπλα στη θάλασσα",
    ),
    films: [{ type: "video", src: "/videos/baptism/alexandros.mp4", poster: "/videos/baptism/alexandros-poster.webp" }],
    gallery: [
      image(
        alexandros02,
        "A suitcase painted with Alexandros's name and jungle animals by the sea",
        "Βαλίτσα με το όνομα του Αλέξανδρου και ζωάκια της ζούγκλας δίπλα στη θάλασσα",
      ),
      image(alexandros03, "The baptism outfit hanging by the sea", "Τα βαπτιστικά κρεμασμένα δίπλα στη θάλασσα"),
      image(alexandros04, "A gold cross hanging among green leaves", "Ένας χρυσός σταυρός ανάμεσα σε πράσινα φύλλα"),
      image(
        alexandros05,
        "A white hat and white sneakers on a tree stump",
        "Ένα λευκό καπέλο και λευκά αθλητικά πάνω σε ένα κούτσουρο",
      ),
      image(
        alexandros06,
        "Alexandros in his mother's arms by the sea",
        "Ο Αλέξανδρος στην αγκαλιά της μαμάς του δίπλα στη θάλασσα",
      ),
      image(
        alexandros07,
        "His father lifts Alexandros up against the sky",
        "Ο μπαμπάς του σηκώνει ψηλά τον Αλέξανδρο με φόντο τον ουρανό",
      ),
      image(
        alexandros01,
        "His parents kiss Alexandros by the sea",
        "Οι γονείς του φιλούν τον Αλέξανδρο δίπλα στη θάλασσα",
      ),
      image(
        alexandros08,
        "A welcome sign on an easel outside the church",
        "Πινακίδα καλωσορίσματος σε καβαλέτο έξω από την εκκλησία",
      ),
      image(alexandros09, "The decorated entrance of the white church", "Η στολισμένη είσοδος της λευκής εκκλησίας"),
      image(
        alexandros10,
        "Alexandros with family by the sea",
        "Ο Αλέξανδρος με την οικογένειά του δίπλα στη θάλασσα",
      ),
      image(
        alexandros11,
        "Alexandros with his pacifier in his father's arms in the church",
        "Ο Αλέξανδρος με την πιπίλα στην αγκαλιά του μπαμπά του στην εκκλησία",
      ),
      image(alexandros12, "Alexandros smiling in the church", "Ο Αλέξανδρος χαμογελά μέσα στην εκκλησία"),
      image(alexandros13, "Oil poured into the font", "Το λάδι χύνεται στην κολυμπήθρα"),
      image(
        alexandros14,
        "The priest lifts Alexandros at the font",
        "Ο ιερέας σηκώνει τον Αλέξανδρο στην κολυμπήθρα",
      ),
      image(
        alexandros15,
        "Black-and-white photo of Alexandros crying in the font",
        "Ασπρόμαυρη φωτογραφία του Αλέξανδρου που κλαίει στην κολυμπήθρα",
      ),
      image(
        alexandros16,
        "His mother smiles beside Alexandros in his white hat",
        "Η μαμά του χαμογελά δίπλα στον Αλέξανδρο με το λευκό καπέλο",
      ),
      image(alexandros17, "His mother kisses Alexandros's hand", "Η μαμά του φιλά το χέρι του Αλέξανδρου"),
    ],
  },
  {
    slug: "michail-panagiotis",
    category: "baptism",
    title: { en: "Michail Panagiotis", el: "Μιχαήλ Παναγιώτης" },
    location: GREECE,
    services: ["photography"],
    cover: {
      ...image(
        michailPanagiotis01,
        "Michail Panagiotis in a white hat, lit by the window",
        "Ο Μιχαήλ Παναγιώτης με λευκό καπέλο στο φως του παραθύρου",
      ),
      focus: "60% 50%",
    },
    gallery: [
      image(
        michailPanagiotis02,
        "The baby's vest and shirt hanging among leaves",
        "Το γιλέκο και το πουκάμισο του μωρού κρεμασμένα ανάμεσα σε φύλλα",
      ),
      image(
        michailPanagiotis03,
        "A gold cross hanging among oleander leaves",
        "Ένας χρυσός σταυρός ανάμεσα σε φύλλα πικροδάφνης",
      ),
      image(
        michailPanagiotis04,
        "A decorated suitcase under stone arches",
        "Στολισμένη βαλίτσα κάτω από πέτρινες καμάρες",
      ),
      image(
        michailPanagiotis05,
        "His parents kiss on the church steps",
        "Οι γονείς του φιλιούνται στα σκαλιά της εκκλησίας",
      ),
      image(
        michailPanagiotis06,
        "Black-and-white photo of his father lifting him on the church steps",
        "Ασπρόμαυρη φωτογραφία του μπαμπά του που τον σηκώνει ψηλά στα σκαλιά της εκκλησίας",
      ),
      image(
        michailPanagiotis07,
        "Black-and-white photo of the family laughing outside the church",
        "Ασπρόμαυρη φωτογραφία της οικογένειας που γελά έξω από την εκκλησία",
      ),
      image(
        michailPanagiotis08,
        "Black-and-white close-up of Michail Panagiotis",
        "Ασπρόμαυρο κοντινό του Μιχαήλ Παναγιώτη",
      ),
      image(
        michailPanagiotis09,
        "His parents smile at each other in the church",
        "Οι γονείς του χαμογελούν ο ένας στον άλλον μέσα στην εκκλησία",
      ),
      image(
        michailPanagiotis10,
        "Michail Panagiotis held in the church among the icons",
        "Ο Μιχαήλ Παναγιώτης στην αγκαλιά μέσα στην εκκλησία, ανάμεσα στις εικόνες",
      ),
      image(michailPanagiotis11, "His mother lifts him up, smiling", "Η μαμά του τον σηκώνει ψηλά χαμογελώντας"),
      image(michailPanagiotis12, "The priest holds him up at the font", "Ο ιερέας τον σηκώνει ψηλά στην κολυμπήθρα"),
      image(
        michailPanagiotis13,
        "Black-and-white photo of the baby in the font",
        "Ασπρόμαυρη φωτογραφία του μωρού στην κολυμπήθρα",
      ),
      image(
        michailPanagiotis14,
        "A lock of his hair is cut during the service",
        "Του κόβουν μια τούφα μαλλιά στο μυστήριο",
      ),
      image(
        michailPanagiotis15,
        "Black-and-white photo of the family from behind, facing the altar",
        "Ασπρόμαυρη φωτογραφία της οικογένειας από πίσω, μπροστά στο ιερό",
      ),
      image(
        michailPanagiotis16,
        "Black-and-white photo of his parents holding him",
        "Ασπρόμαυρη φωτογραφία των γονιών του που τον κρατούν",
      ),
    ],
  },
  {
    slug: "antonis",
    category: "baptism",
    title: { en: "Antonis", el: "Αντώνης" },
    location: GREECE,
    services: ["photography"],
    cover: {
      ...image(antonis01, "Antonis laughing", "Ο Αντώνης γελάει"),
      focus: "70% 50%",
    },
    gallery: [
      image(antonis02, "A decorated suitcase outside the church", "Στολισμένη βαλίτσα έξω από την εκκλησία"),
      image(
        antonis03,
        "The suitcase and jungle-animal decorations on the church steps",
        "Η βαλίτσα και διακόσμηση με ζωάκια της ζούγκλας στα σκαλιά της εκκλησίας",
      ),
      image(
        antonis04,
        "The baby's trousers with braces hanging in a tree",
        "Το παντελόνι με τις τιράντες κρεμασμένο σε ένα δέντρο",
      ),
      image(
        antonis05,
        "The baby's vest and shirt hanging in a tree",
        "Το γιλέκο και το πουκάμισο του μωρού κρεμασμένα σε ένα δέντρο",
      ),
      image(antonis06, "A straw hat among green leaves", "Ένα ψάθινο καπέλο ανάμεσα σε πράσινα φύλλα"),
      image(antonis07, "The baby's white shoes in the greenery", "Τα λευκά παπουτσάκια του μωρού στο πράσινο"),
      image(antonis08, "A cross in its gift box among the leaves", "Ένας σταυρός στο κουτί του ανάμεσα στα φύλλα"),
      image(
        antonis09,
        "A toy giraffe and lion beside the decorated table",
        "Λούτρινη καμηλοπάρδαλη και λιοντάρι δίπλα στο στολισμένο τραπέζι",
      ),
      image(antonis10, "A gold cross hanging in the light", "Ένας χρυσός σταυρός κρεμασμένος στο φως"),
      image(antonis11, "His parents kiss Antonis on both cheeks", "Οι γονείς του φιλούν τον Αντώνη στα μάγουλα"),
      image(antonis12, "A couple hugs and kisses Antonis", "Ένα ζευγάρι αγκαλιάζει και φιλά τον Αντώνη"),
      image(
        antonis13,
        "Antonis with his parents outside the church",
        "Ο Αντώνης με τους γονείς του έξω από την εκκλησία",
      ),
      image(antonis14, "Antonis walking across the churchyard", "Ο Αντώνης περπατά στην αυλή της εκκλησίας"),
      image(
        antonis15,
        "Antonis walking hand in hand with two grown-ups",
        "Ο Αντώνης περπατά κρατώντας από το χέρι δύο μεγάλους",
      ),
      image(
        antonis16,
        "Antonis in his mother's arms as the service begins",
        "Ο Αντώνης στην αγκαλιά της μαμάς του στην αρχή του μυστηρίου",
      ),
      image(
        antonis17,
        "Antonis looks at the camera from his mother's arms",
        "Ο Αντώνης κοιτά τον φακό από την αγκαλιά της μαμάς του",
      ),
      image(antonis18, "The priest holds Antonis over the font", "Ο ιερέας κρατά τον Αντώνη πάνω από την κολυμπήθρα"),
      image(antonis19, "A cross hanging against the priest's vestments", "Ένας σταυρός μπροστά στα άμφια του ιερέα"),
      image(
        antonis20,
        "A man comforts Antonis after the font",
        "Ένας άντρας παρηγορεί τον Αντώνη μετά την κολυμπήθρα",
      ),
      image(antonis21, "Antonis with his pacifier, held close", "Ο Αντώνης με την πιπίλα του στην αγκαλιά"),
    ],
  },
  {
    slug: "petros-2",
    category: "baptism",
    title: { en: "Petros II", el: "Πέτρος ΙΙ" },
    location: GREECE,
    services: ["photography", "film"],
    cover: image(petrosII01, "Petros between his parents", "Ο Πέτρος ανάμεσα στους γονείς του"),
    films: [{ type: "video", src: "/videos/baptism/petros-2.mp4", poster: "/videos/baptism/petros-2-poster.webp" }],
    gallery: [
      image(
        petrosII02,
        "Petros's name embroidered on a cloth with martyrika bracelets and pins",
        "Το όνομα του Πέτρου κεντημένο σε ύφασμα, με μαρτυρικά βραχιολάκια και καρφίτσες",
      ),
      image(
        petrosII03,
        "A gold cross in its box beside a Bluey decoration",
        "Ένας χρυσός σταυρός στο κουτί του δίπλα σε διακόσμηση Bluey",
      ),
      image(petrosII04, "The boy's white sneakers on a rock", "Τα λευκά αθλητικά του αγοριού πάνω σε έναν βράχο"),
      image(
        petrosII05,
        "The baptism outfit hanging from a tree in the sun",
        "Τα βαπτιστικά κρεμασμένα σε ένα δέντρο στον ήλιο",
      ),
      image(petrosII06, "Petros in his mother's arms", "Ο Πέτρος στην αγκαλιά της μαμάς του"),
      image(
        petrosII07,
        "Petros crouching beside the Bluey decorations",
        "Ο Πέτρος σκυμμένος δίπλα στη διακόσμηση Bluey",
      ),
      image(petrosII01, "Petros between his parents", "Ο Πέτρος ανάμεσα στους γονείς του"),
      image(petrosII08, "Petros sitting with his family", "Ο Πέτρος καθισμένος με την οικογένειά του"),
      image(petrosII09, "The priest leads the outdoor service", "Ο ιερέας στο υπαίθριο μυστήριο"),
      image(petrosII10, "Petros in tears after the font", "Ο Πέτρος κλαίει μετά την κολυμπήθρα"),
      image(
        petrosII11,
        "Petros peeking over a wooden fence beside a smiling woman",
        "Ο Πέτρος κοιτάζει πάνω από έναν ξύλινο φράχτη δίπλα σε μια χαμογελαστή κοπέλα",
      ),
      image(
        petrosII12,
        "Petros walking along a wooden fence in the evening sun",
        "Ο Πέτρος περπατά δίπλα σε έναν ξύλινο φράχτη στον απογευματινό ήλιο",
      ),
      image(
        petrosII13,
        "Petros in a white hat between two smiling women",
        "Ο Πέτρος με λευκό καπέλο ανάμεσα σε δύο χαμογελαστές κοπέλες",
      ),
    ],
  },
  {
    slug: "athanasios",
    category: "baptism",
    title: { en: "Athanasios", el: "Αθανάσιος" },
    location: GREECE,
    services: ["photography"],
    cover: {
      ...image(
        athanasios01,
        "Athanasios in the arms of a smiling man in the church",
        "Ο Αθανάσιος στην αγκαλιά ενός χαμογελαστού άντρα μέσα στην εκκλησία",
      ),
      focus: "35% 50%",
    },
    gallery: [
      image(athanasios02, "A decorated suitcase against a stone wall", "Στολισμένη βαλίτσα μπροστά σε πέτρινο τοίχο"),
      image(
        athanasios03,
        "The stone church decorated with blue balloons",
        "Η πέτρινη εκκλησία στολισμένη με μπλε μπαλόνια",
      ),
      image(
        athanasios04,
        "A wooden letter A and a teddy-bear pin on a ribbon",
        "Ξύλινο γράμμα Α και καρφίτσα αρκουδάκι σε μια κορδέλα",
      ),
      image(
        athanasios05,
        "The boy's white sneakers on a pine branch",
        "Τα λευκά αθλητικά του αγοριού πάνω σε κλαδί πεύκου",
      ),
      image(
        athanasios06,
        "The blue vest and shirt hanging in a tree",
        "Το γαλάζιο γιλέκο και το πουκάμισο κρεμασμένα σε ένα δέντρο",
      ),
      image(
        athanasios07,
        "A straw hat and white sneakers in the greenery",
        "Ψάθινο καπέλο και λευκά αθλητικά στο πράσινο",
      ),
      image(athanasios08, "A balloon arch with Athanasios's name", "Αψίδα από μπαλόνια με το όνομα του Αθανάσιου"),
      image(athanasios09, "A chalkboard sign that reads BOY", "Πινακάκι με την επιγραφή BOY"),
      image(
        athanasios10,
        "Athanasios walking with his father outside the church",
        "Ο Αθανάσιος περπατά με τον μπαμπά του έξω από την εκκλησία",
      ),
      image(athanasios11, "A gold cross hanging among pine needles", "Ένας χρυσός σταυρός ανάμεσα σε πευκοβελόνες"),
      image(
        athanasios12,
        "Athanasios with his parents at the decorated table",
        "Ο Αθανάσιος με τους γονείς του στο στολισμένο τραπέζι",
      ),
      image(
        athanasios13,
        "Two women in teal dresses outside the church",
        "Δύο κοπέλες με πράσινα φορέματα έξω από την εκκλησία",
      ),
      image(
        athanasios14,
        "Two women kiss a smiling guest on the cheeks",
        "Δύο κοπέλες φιλούν στα μάγουλα μια χαμογελαστή κυρία",
      ),
      image(
        athanasios15,
        "The family on the church steps among the decorations",
        "Η οικογένεια στα σκαλιά της εκκλησίας ανάμεσα στη διακόσμηση",
      ),
      image(athanasios16, "A woman reads from the service book", "Μια κοπέλα διαβάζει από το βιβλίο της ακολουθίας"),
      image(
        athanasios17,
        "Guests smiling in the church, one in a teddy-bear apron",
        "Καλεσμένοι χαμογελούν στην εκκλησία, μία με ποδιά με αρκουδάκι",
      ),
      image(
        athanasios18,
        "The baptism oil bottle with a teddy-bear charm",
        "Το μπουκάλι με το λάδι της βάφτισης με ένα αρκουδάκι",
      ),
      image(
        athanasios19,
        "Athanasios cries in the font as the priest holds him",
        "Ο Αθανάσιος κλαίει στην κολυμπήθρα στα χέρια του ιερέα",
      ),
    ],
  },
  {
    slug: "foteini",
    category: "baptism",
    title: { en: "Foteini", el: "Φωτεινή" },
    location: GREECE,
    services: ["photography", "film"],
    cover: image(foteini01, "Foteini laughing in her mother's arms", "Η Φωτεινή γελά στην αγκαλιά της μαμάς της"),
    films: [{ type: "video", src: "/videos/baptism/foteini.mp4", poster: "/videos/baptism/foteini-poster.webp" }],
    gallery: [
      image(
        foteini02,
        "The pink tulle dress hanging in a tree by the sea",
        "Το ροζ τούλινο φόρεμα κρεμασμένο σε ένα δέντρο δίπλα στη θάλασσα",
      ),
      image(
        foteini03,
        "Gold sandals with pink roses in the greenery",
        "Χρυσά πεδιλάκια με ροζ τριαντάφυλλα στο πράσινο",
      ),
      image(foteini04, "A gold cross against a blurred sea", "Ένας χρυσός σταυρός με φόντο τη θολή θάλασσα"),
      image(
        foteini05,
        "A pink suitcase dressed in tulle in a whitewashed lane",
        "Ροζ βαλίτσα στολισμένη με τούλι σε ένα ασβεστωμένο σοκάκι",
      ),
      image(foteini06, "Three guests smiling by the sea", "Τρεις καλεσμένοι χαμογελούν δίπλα στη θάλασσα"),
      image(
        foteini07,
        "The priest reads beside Foteini and her family in the church",
        "Ο ιερέας διαβάζει δίπλα στη Φωτεινή και την οικογένειά της στην εκκλησία",
      ),
      image(
        foteini08,
        "Foteini with her parents under the white arches",
        "Η Φωτεινή με τους γονείς της κάτω από τις λευκές καμάρες",
      ),
      image(foteini09, "Foteini rests her head on her father", "Η Φωτεινή ακουμπά το κεφάλι της στον μπαμπά της"),
      image(foteini10, "The priest bathes Foteini in the font", "Ο ιερέας βουτά τη Φωτεινή στην κολυμπήθρα"),
      image(foteini11, "A lock of Foteini's hair is cut", "Κόβουν μια τούφα από τα μαλλιά της Φωτεινής"),
      image(foteini01, "Foteini laughing in her mother's arms", "Η Φωτεινή γελά στην αγκαλιά της μαμάς της"),
      image(foteini12, "A floral hoop with Foteini's name", "Στεφάνι με λουλούδια και το όνομα της Φωτεινής"),
      image(foteini13, "The wish book with Foteini's name", "Το βιβλίο ευχών με το όνομα της Φωτεινής"),
      image(
        foteini14,
        "Foteini standing on the grass in her pink dress",
        "Η Φωτεινή όρθια στο γρασίδι με το ροζ φόρεμά της",
      ),
      image(
        foteini15,
        "Foteini reaching out as she walks on the grass",
        "Η Φωτεινή απλώνει τα χέρια καθώς περπατά στο γρασίδι",
      ),
    ],
  },
  {
    slug: "simela",
    category: "baptism",
    title: { en: "Simela", el: "Σιμέλα" },
    location: GREECE,
    services: ["photography", "film"],
    cover: image(simela01, "Simela smiling in her father's arms", "Η Σιμέλα χαμογελά στην αγκαλιά του μπαμπά της"),
    films: [{ type: "video", src: "/videos/baptism/simela.mp4", poster: "/videos/baptism/simela-poster.webp" }],
    gallery: [
      image(
        simela02,
        "The pink baptism dress hanging among the leaves",
        "Το ροζ βαπτιστικό φόρεμα κρεμασμένο ανάμεσα στα φύλλα",
      ),
      image(
        simela03,
        "Glittery pink shoes among purple petunias",
        "Ροζ γυαλιστερά παπουτσάκια ανάμεσα σε μωβ πετούνιες",
      ),
      image(simela04, "A pink suitcase with flowers and lace", "Ροζ βαλίτσα με λουλούδια και δαντέλα"),
      image(simela05, "A gold cross hanging among green leaves", "Ένας χρυσός σταυρός ανάμεσα σε πράσινα φύλλα"),
      image(simela06, "A green arch leading to the churchyard", "Πράσινη αψίδα που οδηγεί στην αυλή της εκκλησίας"),
      image(simela01, "Simela smiling in her father's arms", "Η Σιμέλα χαμογελά στην αγκαλιά του μπαμπά της"),
      image(simela07, "A couple smiling in the church", "Ένα ζευγάρι χαμογελά μέσα στην εκκλησία"),
      image(
        simela08,
        "The priest reads the service beside the family",
        "Ο ιερέας διαβάζει την ακολουθία δίπλα στην οικογένεια",
      ),
      image(
        simela09,
        "Simela in her mother's arms in the church",
        "Η Σιμέλα στην αγκαλιά της μαμάς της στην εκκλησία",
      ),
      image(
        simela10,
        "Two guests in white aprons ready for the font",
        "Δύο καλεσμένοι με λευκές ποδιές έτοιμοι για την κολυμπήθρα",
      ),
      image(
        simela11,
        "The baptism oil bottle tied with lace",
        "Το μπουκάλι με το λάδι της βάφτισης δεμένο με δαντέλα",
      ),
      image(
        simela12,
        "Simela cries as the priest lifts her from the font",
        "Η Σιμέλα κλαίει καθώς ο ιερέας τη σηκώνει από την κολυμπήθρα",
      ),
      image(
        simela13,
        "Simela walks in the churchyard, holding a woman's hands",
        "Η Σιμέλα περπατά στην αυλή της εκκλησίας κρατώντας τα χέρια μιας κυρίας",
      ),
      image(simela14, "Simela laughing with a man in sunglasses", "Η Σιμέλα γελά με έναν άντρα με γυαλιά ηλίου"),
    ],
  },
  {
    slug: "aliki",
    category: "baptism",
    title: { en: "Aliki", el: "Αλίκη" },
    location: GREECE,
    services: ["photography", "film"],
    cover: image(
      aliki01,
      "Aliki smiling in a white towel after the font",
      "Η Αλίκη χαμογελά τυλιγμένη στη λευκή πετσέτα μετά την κολυμπήθρα",
    ),
    films: [{ type: "video", src: "/videos/baptism/aliki.mp4", poster: "/videos/baptism/aliki-poster.webp" }],
    gallery: [
      image(aliki02, "White baby shoes in the greenery", "Λευκά παπουτσάκια στο πράσινο"),
      image(
        aliki03,
        "The white baptism dress hanging in a tree",
        "Το λευκό βαπτιστικό φόρεμα κρεμασμένο σε ένα δέντρο",
      ),
      image(
        aliki04,
        "Roses and a sign with Aliki's name at the church",
        "Τριαντάφυλλα και πινακίδα με το όνομα της Αλίκης στην εκκλησία",
      ),
      image(
        aliki05,
        "Aliki with two smiling women under pink balloons",
        "Η Αλίκη με δύο χαμογελαστές κοπέλες κάτω από ροζ μπαλόνια",
      ),
      image(
        aliki06,
        "A teddy bear beneath a tree of pink balloons",
        "Ένα αρκουδάκι κάτω από ένα δέντρο από ροζ μπαλόνια",
      ),
      image(aliki07, "Aliki with her pacifier", "Η Αλίκη με την πιπίλα της"),
      image(aliki08, "Aliki held close in the church", "Η Αλίκη στην αγκαλιά μέσα στην εκκλησία"),
      image(
        aliki09,
        "The priest reads as Aliki is held beside him",
        "Ο ιερέας διαβάζει ενώ κρατούν την Αλίκη δίπλα του",
      ),
      image(aliki10, "A woman in a red dress laughs with Aliki", "Μια κοπέλα με κόκκινο φόρεμα γελά με την Αλίκη"),
      image(
        aliki11,
        "The priest holds Aliki at the font among the candles",
        "Ο ιερέας κρατά την Αλίκη στην κολυμπήθρα ανάμεσα στις λαμπάδες",
      ),
      image(
        aliki01,
        "Aliki smiling in a white towel after the font",
        "Η Αλίκη χαμογελά τυλιγμένη στη λευκή πετσέτα μετά την κολυμπήθρα",
      ),
      image(aliki12, "The sweets table with pink balloons", "Το τραπέζι με τα γλυκά και ροζ μπαλόνια"),
      image(
        aliki13,
        "A balloon hoop with Aliki's name above the sweets",
        "Στεφάνι με μπαλόνια και το όνομα της Αλίκης πάνω από τα γλυκά",
      ),
      image(aliki14, "Her parents kiss Aliki", "Οι γονείς της φιλούν την Αλίκη"),
      image(
        aliki15,
        "Aliki with her parents on the church steps",
        "Η Αλίκη με τους γονείς της στα σκαλιά της εκκλησίας",
      ),
      image(
        aliki16,
        "Aliki walks on the grass holding her parents' hands",
        "Η Αλίκη περπατά στο γρασίδι κρατώντας τα χέρια των γονιών της",
      ),
    ],
  },
  {
    slug: "rafail",
    category: "baptism",
    title: { en: "Rafail", el: "Ραφαήλ" },
    location: GREECE,
    services: ["photography", "film"],
    cover: image(rafail01, "Rafail between his parents", "Ο Ραφαήλ ανάμεσα στους γονείς του"),
    films: [{ type: "video", src: "/videos/baptism/rafail.mp4", poster: "/videos/baptism/rafail-poster.webp" }],
    gallery: [
      image(
        rafail02,
        "A blue initial among the baptism decorations",
        "Ένα γαλάζιο αρχικό γράμμα ανάμεσα στη διακόσμηση της βάφτισης",
      ),
      image(rafail03, "Rafail in his mother's arms", "Ο Ραφαήλ στην αγκαλιά της μαμάς του"),
      image(rafail04, "A navy suitcase with a ribbon and charms", "Μπλε βαλίτσα με κορδέλα και στολίδια"),
      image(
        rafail05,
        "The baby's navy-and-white sneakers in the greenery",
        "Τα μπλε και λευκά αθλητικά του μωρού στο πράσινο",
      ),
      image(
        rafail06,
        "The shirt and bow tie hanging among the leaves",
        "Το πουκάμισο και το παπιγιόν κρεμασμένα ανάμεσα στα φύλλα",
      ),
      image(rafail07, "A blue hat and the sneakers with stars", "Ένα μπλε καπέλο και τα αθλητικά με τα αστεράκια"),
      image(rafail01, "Rafail between his parents", "Ο Ραφαήλ ανάμεσα στους γονείς του"),
      image(
        rafail08,
        "A woman lifts Rafail at the church door",
        "Μια κοπέλα σηκώνει ψηλά τον Ραφαήλ στην πόρτα της εκκλησίας",
      ),
      image(rafail09, "Rafail looking down in the church", "Ο Ραφαήλ κοιτάζει κάτω μέσα στην εκκλησία"),
      image(
        rafail10,
        "Little Prince favours in a basket of blue tulle",
        "Μπομπονιέρες με τον Μικρό Πρίγκιπα σε καλάθι με γαλάζιο τούλι",
      ),
      image(rafail11, "A gold cross hanging in the dark", "Ένας χρυσός σταυρός κρεμασμένος στο σκοτάδι"),
      image(rafail12, "Rafail in the font as the priest holds him", "Ο Ραφαήλ στην κολυμπήθρα στα χέρια του ιερέα"),
    ],
  },
  {
    slug: "sotiris",
    category: "baptism",
    title: { en: "Sotiris", el: "Σωτήρης" },
    location: GREECE,
    services: ["photography", "film"],
    cover: image(sotiris01, "Sotiris with his parents among the trees", "Ο Σωτήρης με τους γονείς του ανάμεσα στα δέντρα"),
    films: [{ type: "video", src: "/videos/baptism/sotiris.mp4", poster: "/videos/baptism/sotiris-poster.webp" }],
    gallery: [
      image(sotiris02, "A white hat on a cypress branch", "Ένα λευκό καπέλο πάνω σε κλαδί κυπαρισσιού"),
      image(
        sotiris03,
        "The grey vest and bow tie hanging in the greenery",
        "Το γκρι γιλέκο και το παπιγιόν κρεμασμένα στο πράσινο",
      ),
      image(
        sotiris04,
        "A silver cross hanging among the branches",
        "Ένας ασημένιος σταυρός κρεμασμένος ανάμεσα στα κλαδιά",
      ),
      image(sotiris05, "A cross in its blue box on a stone", "Ένας σταυρός στο γαλάζιο κουτί του πάνω σε μια πέτρα"),
      image(sotiris06, "Sotiris in his mother's arms", "Ο Σωτήρης στην αγκαλιά της μαμάς του"),
      image(
        sotiris07,
        "Sotiris in his father's arms beside the decorations",
        "Ο Σωτήρης στην αγκαλιά του μπαμπά του δίπλα στη διακόσμηση",
      ),
      image(sotiris08, "A smiling man holds Sotiris", "Ένας χαμογελαστός άντρας κρατά τον Σωτήρη"),
      image(
        sotiris09,
        "A wooden sign with Sotiris's name and a teddy bear",
        "Ξύλινη πινακίδα με το όνομα του Σωτήρη και ένα αρκουδάκι",
      ),
      image(sotiris10, "Sotiris with his pacifier over a shoulder", "Ο Σωτήρης με την πιπίλα του πάνω από έναν ώμο"),
      image(
        sotiris11,
        "The priest reads as Sotiris is held beside him",
        "Ο ιερέας διαβάζει ενώ κρατούν τον Σωτήρη δίπλα του",
      ),
      image(
        sotiris12,
        "The godfather's apron reads The Godfather of Sotiris",
        "Η ποδιά του νονού γράφει The Godfather of Sotiris",
      ),
      image(sotiris13, "The priest bathes Sotiris in the font", "Ο ιερέας βουτά τον Σωτήρη στην κολυμπήθρα"),
      image(sotiris14, "Sotiris with his pacifier after the font", "Ο Σωτήρης με την πιπίλα του μετά την κολυμπήθρα"),
      image(sotiris15, "The godfather kisses Sotiris in his white outfit", "Ο νονός φιλά τον Σωτήρη με τα λευκά του"),
      image(sotiris01, "Sotiris with his parents among the trees", "Ο Σωτήρης με τους γονείς του ανάμεσα στα δέντρα"),
    ],
  },
  {
    slug: "giorgos",
    category: "baptism",
    title: { en: "Giorgos", el: "Γιώργος" },
    location: GREECE,
    services: ["photography"],
    cover: {
      ...image(giorgos01, "Giorgos held close between his parents", "Ο Γιώργος στην αγκαλιά, ανάμεσα στους γονείς του"),
      focus: "62% 50%",
    },
    gallery: [
      image(giorgos02, "The whitewashed chapel with its red door", "Το ασβεστωμένο εκκλησάκι με την κόκκινη πόρτα"),
      image(
        giorgos03,
        "A vintage van turned into a coffee bar under the pines",
        "Ένα παλιό βανάκι που έγινε καφέ-μπαρ κάτω από τα πεύκα",
      ),
      image(
        giorgos04,
        "Iced cookies with letters on the sweets table",
        "Μπισκότα με γράμματα στο τραπέζι με τα γλυκά",
      ),
      image(
        giorgos05,
        "A gold sign with Giorgos's name among yellow flowers",
        "Χρυσή επιγραφή με το όνομα του Γιώργου ανάμεσα σε κίτρινα λουλούδια",
      ),
      image(giorgos06, "Cookies decorated with the letter Γ", "Μπισκότα στολισμένα με το γράμμα Γ"),
      image(
        giorgos07,
        "A wrapped favour and a small bottle in the grass",
        "Μια μπομπονιέρα και ένα μπουκαλάκι στο γρασίδι",
      ),
      image(giorgos08, "A gold cross hanging from a branch", "Ένας χρυσός σταυρός κρεμασμένος από ένα κλαδί"),
      image(giorgos09, "A mint suitcase with ribbons and lace", "Βαλίτσα σε χρώμα μέντας με κορδέλες και δαντέλα"),
      image(
        giorgos10,
        "The green vest and bow tie hanging in a tree",
        "Το πράσινο γιλέκο και το παπιγιόν κρεμασμένα σε ένα δέντρο",
      ),
      image(giorgos11, "A straw hat among the leaves", "Ένα ψάθινο καπέλο ανάμεσα στα φύλλα"),
      image(giorgos12, "Mint-and-white sneakers in the greenery", "Αθλητικά σε μέντα και λευκό στο πράσινο"),
      image(
        giorgos13,
        "Giorgos asleep with his pacifier in his mother's arms",
        "Ο Γιώργος κοιμάται με την πιπίλα στην αγκαλιά της μαμάς του",
      ),
      image(
        giorgos14,
        "His mother holds Giorgos as the service begins",
        "Η μαμά του κρατά τον Γιώργο στην αρχή του μυστηρίου",
      ),
      image(giorgos15, "Giorgos with his parents in the church", "Ο Γιώργος με τους γονείς του μέσα στην εκκλησία"),
      image(
        giorgos16,
        "Giorgos is readied for the font as his mother smiles",
        "Ο Γιώργος ετοιμάζεται για την κολυμπήθρα και η μαμά του χαμογελά",
      ),
      image(
        giorgos17,
        "The priest lifts Giorgos high after the font",
        "Ο ιερέας σηκώνει ψηλά τον Γιώργο μετά την κολυμπήθρα",
      ),
      image(giorgos18, "The priest reads by candlelight", "Ο ιερέας διαβάζει στο φως των λαμπάδων"),
      image(giorgos19, "A wooden letter Γ on the guest book", "Ένα ξύλινο γράμμα Γ πάνω στο βιβλίο ευχών"),
      image(giorgos20, "His parents kiss under the trees", "Οι γονείς του φιλιούνται κάτω από τα δέντρα"),
    ],
  },
  {
    slug: "evangelia",
    category: "baptism",
    title: { en: "Evangelia", el: "Ευαγγελία" },
    location: GREECE,
    services: ["photography", "film"],
    cover: image(
      evangelia01,
      "Evangelia with her pacifier and a white bow",
      "Η Ευαγγελία με την πιπίλα και έναν λευκό φιόγκο",
    ),
    films: [{ type: "video", src: "/videos/baptism/evangelia.mp4", poster: "/videos/baptism/evangelia-poster.webp" }],
    gallery: [
      image(
        evangelia02,
        "The white baptism dress hanging in a tree",
        "Το λευκό βαπτιστικό φόρεμα κρεμασμένο σε ένα δέντρο",
      ),
      image(
        evangelia03,
        "A cross in its gift box on a wooden table",
        "Ένας σταυρός στο κουτί του πάνω σε ξύλινο τραπέζι",
      ),
      image(
        evangelia04,
        "Sandals with pink roses beside the cross box",
        "Πεδιλάκια με ροζ τριαντάφυλλα δίπλα στο κουτί του σταυρού",
      ),
      image(
        evangelia05,
        "Evangelia on a bench beside a smiling woman",
        "Η Ευαγγελία σε ένα παγκάκι δίπλα σε μια χαμογελαστή κυρία",
      ),
      image(evangelia06, "Her parents kiss Evangelia", "Οι γονείς της φιλούν την Ευαγγελία"),
      image(
        evangelia07,
        "Evangelia on a woman's lap, both smiling",
        "Η Ευαγγελία στα γόνατα μιας κυρίας, χαμογελαστές και οι δύο",
      ),
      image(
        evangelia08,
        "Evangelia walking hand in hand outside the church",
        "Η Ευαγγελία περπατά κρατώντας ένα χέρι έξω από την εκκλησία",
      ),
      image(
        evangelia09,
        "A gold hoop with Evangelia's name on tulle",
        "Χρυσό στεφάνι με το όνομα της Ευαγγελίας πάνω σε τούλι",
      ),
      image(
        evangelia10,
        "A woman reads the service as Evangelia watches",
        "Μια κυρία διαβάζει την ακολουθία και η Ευαγγελία κοιτάζει",
      ),
      image(evangelia11, "Evangelia cries in the font", "Η Ευαγγελία κλαίει στην κολυμπήθρα"),
      image(
        evangelia01,
        "Evangelia with her pacifier and a white bow",
        "Η Ευαγγελία με την πιπίλα και έναν λευκό φιόγκο",
      ),
      image(evangelia12, "The family on the church steps", "Η οικογένεια στα σκαλιά της εκκλησίας"),
    ],
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
