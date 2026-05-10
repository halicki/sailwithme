export type Locale = "pl" | "en";

export const ui = {
  pl: {
    nav: {
      links: [
        { label: "Rejs", href: "#program" },
        { label: "Trasa", href: "#trasa" },
        { label: "Jacht", href: "#jacht" },
        { label: "Prowadzący", href: "#zaloga" },
        { label: "Dołącz", href: "#formularz" },
      ],
      openMenu: "Otwórz menu",
      closeMenu: "Zamknij menu",
    },
    hero: {
      ctaSeeRoute: "Zobacz trasę",
    },
    manifesto: {
      eyebrow: "O co chodzi",
    },
    forWhom: {
      eyebrow: "Na pokładzie",
      heading: "Czego się spodziewać",
      footerStrong: "Do 8 miejsc dla uczestników.",
      footerRest: "Po zgłoszeniu odpisujemy i dogadujemy szczegóły.",
    },
    program: {
      eyebrow: "Podróż",
      heading: "7 dni. 7 wyzwań.",
    },
    route: {
      eyebrow: "Trasa",
    },
    crew: {
      eyebrow: "Prowadzący",
      heading: "Kto płynie i prowadzi",
      onRetreatLabel: "Na rejsie",
      portraitAltSuffix: "portret",
    },
    crewCta: {
      heading: "Ty?",
      body: "Twoje miejsce w załodze czeka. Zgłoś się — odpowiemy w ciągu 48h.",
      cta: "Dołącz do załogi →",
    },
    yacht: {
      eyebrow: "Jacht",
      ctaSpec: "Zobacz przykładową specyfikację →",
    },
    pricing: {
      eyebrow: "Koszt i zakres",
      included: "W cenie",
      excluded: "Poza ceną",
    },
    form: {
      eyebrow: "Zgłoszenie",
      heading: "Dołącz do załogi",
      subheading:
        "Odpowiemy w ciągu 48h i sprawdzimy, czy ten rejs pasuje do Twoich oczekiwań.",
      priceNote:
        "Cena udziału: 5 900 zł. Kaucja zwrotna za jacht jest dodatkowo, orientacyjnie ok. 1 775 zł/os. Maksymalnie 8 miejsc dla uczestników.",
      placeholderName: "Imię",
      placeholderEmail: "Email",
      placeholderOccupation: "Kim jesteś / czym się zajmujesz?",
      placeholderMotivation:
        "Dlaczego chcesz płynąć z nami? Napisz też, czy masz doświadczenie z wodą lub żaglami.",
      submit: "Wyślij zgłoszenie",
      submitting: "Wysyłanie...",
      successHeading: "Dziękujemy!",
      successBody:
        "Twoje zgłoszenie dotarło. Odpowiemy w ciągu 48h z konkretami i kolejnym krokiem.",
      errorFallback: "Coś poszło nie tak.",
      errorEmail: "Podaj poprawny adres email.",
      privacyNote: "Bez spamu i automatycznych zapisów. Najpierw normalnie odpisujemy.",
    },
    faq: {
      eyebrow: "FAQ",
      heading: "Pytania i odpowiedzi",
    },
    footer: {
      copyright: "Oddech i Wiatr © 2026",
    },
  },
  en: {
    nav: {
      links: [
        { label: "Voyage", href: "#program" },
        { label: "Route", href: "#trasa" },
        { label: "Yacht", href: "#jacht" },
        { label: "Crew", href: "#zaloga" },
        { label: "Join", href: "#formularz" },
      ],
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      ctaSeeRoute: "See the route",
    },
    manifesto: {
      eyebrow: "What it is",
    },
    forWhom: {
      eyebrow: "On board",
      heading: "What to expect",
      footerStrong: "Up to 8 spots for participants.",
      footerRest: "Once you apply, we get back to you and figure out the details.",
    },
    program: {
      eyebrow: "Journey",
      heading: "7 days. 7 challenges.",
    },
    route: {
      eyebrow: "Route",
    },
    crew: {
      eyebrow: "Crew",
      heading: "Who's sailing with you",
      onRetreatLabel: "On the retreat",
      portraitAltSuffix: "portrait",
    },
    crewCta: {
      heading: "You?",
      body: "Your spot on the crew is waiting. Apply — we reply within 48h.",
      cta: "Join the crew →",
    },
    yacht: {
      eyebrow: "Yacht",
      ctaSpec: "Example specs →",
    },
    pricing: {
      eyebrow: "Cost & scope",
      included: "Included",
      excluded: "Not included",
    },
    form: {
      eyebrow: "Application",
      heading: "Join the crew",
      subheading:
        "We reply within 48h and check whether this voyage fits what you're looking for.",
      priceNote:
        "Price: 5 900 zł per person. The refundable yacht deposit is extra, estimated at around 1 775 zł/person. 8 spots maximum.",
      placeholderName: "Name",
      placeholderEmail: "Email",
      placeholderOccupation: "Who are you / what do you do?",
      placeholderMotivation:
        "Why do you want to sail with us? Mention any experience you have with water or sailing.",
      submit: "Send application",
      submitting: "Sending...",
      successHeading: "Thank you!",
      successBody:
        "Your application is in. We'll reply within 48h with specifics and the next step.",
      errorFallback: "Something went wrong.",
      errorEmail: "Please enter a valid email address.",
      privacyNote: "No spam, no auto-replies. We respond personally.",
    },
    faq: {
      eyebrow: "FAQ",
      heading: "Questions & answers",
    },
    footer: {
      copyright: "Breath & Wind © 2026",
    },
  },
} as const satisfies Record<Locale, unknown>;

export type UIStrings = (typeof ui)[Locale];
