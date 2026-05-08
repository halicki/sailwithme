import * as pl from "./content";
import * as en from "./content-en";
import type { Locale } from "./ui-strings";

export type SiteContent = {
  heroContent: typeof pl.heroContent;
  pricingInfo: typeof pl.pricingInfo;
  manifesto: typeof pl.manifesto;
  forWhomTraits: typeof pl.forWhomTraits;
  programDays: typeof pl.programDays;
  crewMembers: typeof pl.crewMembers;
  yachtInfo: typeof pl.yachtInfo;
  routeContent: typeof pl.routeContent;
  faqItems: typeof pl.faqItems;
};

export function getContent(locale: Locale): SiteContent {
  return locale === "en" ? en : pl;
}
