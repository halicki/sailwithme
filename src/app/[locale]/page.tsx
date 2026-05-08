import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import ForWhom from "@/components/ForWhom";
import Program from "@/components/Program";
import Route from "@/components/Route";
import Yacht from "@/components/Yacht";
import Crew from "@/components/Crew";
import Pricing from "@/components/Pricing";
import ApplicationForm from "@/components/ApplicationForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { getContent } from "@/data/get-content";
import { ui, type Locale } from "@/data/ui-strings";
import { notFound } from "next/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "pl" && locale !== "en") {
    notFound();
  }
  const typedLocale = locale as Locale;
  const content = getContent(typedLocale);
  const t = ui[typedLocale];

  return (
    <main>
      <Nav locale={typedLocale} t={t.nav} />
      <Hero locale={typedLocale} content={content.heroContent} t={t.hero} />
      <Manifesto content={content.manifesto} t={t.manifesto} />
      <ForWhom traits={content.forWhomTraits} t={t.forWhom} />
      <Program days={content.programDays} t={t.program} />
      <Route content={content.routeContent} t={t.route} />
      <Crew members={content.crewMembers} t={t.crew} ctaT={t.crewCta} />
      <Yacht info={content.yachtInfo} t={t.yacht} />
      <Pricing info={content.pricingInfo} t={t.pricing} />
      <ApplicationForm locale={typedLocale} t={t.form} />
      <FAQ items={content.faqItems} t={t.faq} />
      <Footer t={t.footer} />
    </main>
  );
}
