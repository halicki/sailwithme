// ─── Types ───────────────────────────────────────────────────────────────────

export interface CrewMember {
  slug: string;
  name: string;
  role: string;
  tagline: string;
  instagram: string;
  website?: string;
  brand?: string;
  heroImage: string;
  portraitImage: string;
  galleryImages?: string[];
  bio: {
    intro: string;
    story: string;
    onRetreat: string;
  };
  credentials?: string[];
  achievements?: { label: string; value: string }[];
  quote?: string;
}

export interface YachtComfort {
  title: string;
  description: string;
}

export interface YachtImage {
  src: string;
  alt: string;
}

export interface YachtInfo {
  name: string;
  headline: string;
  description: string;
  comforts: YachtComfort[];
  images: YachtImage[];
  specUrl: string;
}

export interface RouteStop {
  name: string;
  tagline: string;
  hints: string[];
  freeDivingNote?: string;
  image: YachtImage & {
    credit: string;
    sourceUrl: string;
  };
}

export interface RouteContent {
  heading: string;
  subheading: string;
  intro: string;
  stops: RouteStop[];
  closingTease: string;
}

export interface PricingInfo {
  headline: string;
  description: string;
  priceRange: string;
  priceNote: string;
  included: string[];
  notIncluded: string[];
}

// ─── Hero ────────────────────────────────────────────────────────────────────

export const heroContent = {
  preTitle: "Żagle, freediving, oddech · Grecja 2026",
  titleTop: "ODDECH",
  titleConnector: "i",
  titleBottom: "WIATR",
  subtitle: "20–27 Czerwca · Zatoka Sarońska · 7 dni",
  tagline:
    "Tydzień na jachcie: żeglowanie, freediving, świadomy oddech i greckie wyspy.",
  ctaText: "Dołącz do załogi ↓",
  backgroundVideo: "/videos/hero-bg.mp4",
};

export const pricingInfo: PricingInfo = {
  headline: "Wiesz, na co się piszesz.",
  description:
    "To nie jest luksusowy all-inclusive ani survival. To dobrze zorganizowany tydzień na jachcie: prosto, konkretnie, z miejscem na morze, ludzi i oddech.",
  priceRange: "5 900 zł",
  priceNote:
    "Cena udziału za osobę. Lot do Aten, ubezpieczenie i wydatki własne są po Twojej stronie.",
  included: [
    "miejsce na jachcie",
    "opieka skippera",
    "zajęcia freedivingowe",
    "sesje oddechowe",
    "opłaty portowe, paliwo i podstawowy prowiant",
  ],
  notIncluded: [
    "lot do Aten",
    "część posiłków na lądzie",
    "ubezpieczenie podróżne",
    "wydatki własne",
  ],
};

// ─── Manifesto ───────────────────────────────────────────────────────────────

export const manifesto = {
  heading: "To jest rejs dla ludzi, którzy chcą doświadczyć więcej.",
  body: `Nie imprezowy. Nie hotelowy. Nie z przypadkowymi ludźmi z ogłoszenia.

7 dni na Morzu Egejskim. Żeglowanie, freediving z mistrzem Polski, świadomy oddech, greckie porty i życie na pokładzie. Wysiłek na wodzie, spokój na pokładzie i ludzie, z którymi chcesz rozmawiać.`,
  closing: "Nie szukamy pasażerów. Szukamy ludzi do załogi.",
};

// ─── For Whom ────────────────────────────────────────────────────────────────

export const forWhomTraits = [
  {
    title: "Żeglowanie",
    description:
      "Staniesz się aktywnym członkiem załogi jachtu. Będziesz na pokładzie podczas manewrów i żeglugi. Nie musisz mieć doświadczenia, ale warto chcieć się włączyć.",
  },
  {
    title: "Życie na jachcie",
    description:
      "Śpisz na koi, gotujesz w mesie, po kąpieli w morzu prysznic na rufie jachtu. Prosty komfort, który po dwóch dniach staje się naturalny.",
  },
  {
    title: "Freediving i oddech",
    description:
      "Zajęcia są prowadzone od podstaw. Zakres zależy od pogody, warunków i tego, jak czuje się grupa.",
  },
  {
    title: "Tempo tygodnia",
    description:
      "Pływamy między wyspami, schodzimy na ląd, gotujemy, odpoczywamy. Plan jest konkretny, ale morze ma pierwszeństwo.",
  },
];

// ─── Program ─────────────────────────────────────────────────────────────────

export const programDays = [
  {
    day: 1,
    name: "Spotkanie",
    description: "Poznanie załogi, pierwszy oddech na pokładzie, odpłynięcie",
    location: "Ateny / Marina",
  },
  {
    day: 2,
    name: "Żeglowanie",
    description: "Nauka prowadzenia jachtu — wiatr jako nauczyciel",
    location: "Egina",
  },
  {
    day: 3,
    name: "Głębia",
    description: "Pierwsze zanurzenie — freediving z Piotrem Błaszczakiem",
    location: "Poros",
  },
  {
    day: 4,
    name: "Oddech",
    description: "Poranny oddech o wschodzie słońca, eksploracja wysp",
    location: "Hydra",
  },
  {
    day: 5,
    name: "Noc",
    description:
      "Jeśli pogoda i załoga będą chciały — nocne żeglowanie pod gwiazdami",
    location: "w trasie",
  },
  {
    day: 6,
    name: "Zatoki",
    description: "Kotwicowiska, pływanie, freediving i gotowanie na pokładzie",
    location: "zatoki po drodze",
  },
  {
    day: 7,
    name: "Powrót",
    description: "Zamknięcie rejsu, poranna kawa, ostatnie mile do mariny",
    location: "Ateny",
  },
];

// ─── Crew ────────────────────────────────────────────────────────────────────

export const crewMembers: CrewMember[] = [
  {
    slug: "piotr",
    name: "Piotr Błaszczak",
    role: "Freediving & Oddech",
    tagline:
      "Freediving to nie tylko sport. To najspokojniejsza podróż w głąb siebie, jaką możesz odbyć.",
    instagram: "wobliczuwody",
    website: "https://wobliczuwody.pl",
    brand: "W Obliczu Wody",
    heroImage: "/images/piotr-hero.jpg",
    portraitImage: "/images/piotr-portrait.jpg",
    bio: {
      intro:
        "Wielokrotny mistrz Polski w wodach słodkich. Na rejsie pokaże freediving spokojnie, technicznie i bez napinki.",
      story: `Wszystko zaczęło się na basenie Y-40 we Włoszech. Jedno zanurzenie wystarczyło, żeby Piotr zrozumiał, że pod powierzchnią wody jest coś, czego szukał całe życie — cisza, której nie da się znaleźć na lądzie.

Zanim odkrył freediving, przez ponad 10 lat żył slacklinem i highlinem. Był współtwórcą Urban Highline Festival w Lublinie — pierwszego i największego festiwalu highline'owego w przestrzeni miejskiej na świecie. Przeskakiwanie między budynkami na taśmie nauczyło go tego, co potem okazało się kluczowe pod wodą: panowania nad strachem, kontroli oddechu i zaufania do własnego ciała.

Od 2022 roku jest członkiem kadry narodowej w nurkowaniu głębokościowym. Trenuje i uczy w Deep Spot — najgłębszym basenie w Europie (45,5 metra czystej wody w temperaturze 32°C). Jako instruktor SSI Advanced Freedivier łączy technikę z treningiem mentalnym i hipnozą, pomagając uczniom przełamywać psychiczne bariery związane z głębokością.`,
      onRetreat:
        "Na rejsie poprowadzi lekcje freedivingu i sesje oddechowe — od pierwszego świadomego wdechu po bezpieczne zanurzenia w greckim morzu. Nie musisz mieć doświadczenia.",
    },
    credentials: [
      "Reprezentant Polski — kadra narodowa od 2022",
      "SSI Freediving Instructor Level 1",
      "#1 w Polsce — CMAS + AIDA 2024",
      "Instruktor w Deep Spot (45,5m)",
      "Współtwórca Urban Highline Festival",
    ],
    achievements: [
      { label: "CNF", value: "73 m" },
      { label: "CWTB", value: "91 m" },
      { label: "FIM", value: "90 m" },
      { label: "CWT", value: "85 m" },
      { label: "DNF", value: "113 m" },
      { label: "STA", value: "4:03" },
    ],
    quote:
      "Freediving nie musi być ekstremalny. Najpierw jest spokój, technika i zaufanie do ciała.",
  },
  {
    slug: "arek",
    name: "Arek Halicki",
    role: "Skipper & Organizator",
    tagline: "Żeglarstwo to sztuka ciągłej adaptacji.",
    instagram: "arek.halicki",
    heroImage: "/images/arek-hero.jpg",
    portraitImage: "/images/arek-portrait.jpg",
    bio: {
      intro:
        "Żeglarz, programista i organizator rejsu. Pilnuje tego, żeby było bezpiecznie, konkretnie i po ludzku.",
      story: `Arek żegluje od lat i z każdym rejsem utwierdza się w przekonaniu, że na morzu szybko widać, co działa. Wiatr nie negocjuje, fala nie czeka — więc trzeba być uważnym, elastycznym i obecnym.

Jako programista lubi dobrze zaprojektowane systemy, ale ten rejs jest prostszy: dobry jacht, dobra trasa, dobra ekipa i prowadzący, którzy wiedzą, co robią.`,
      onRetreat:
        "Sternik Beneteau Oceanis 51.1, organizator i człowiek odpowiedzialny za to, żeby wszystko działało. Na pokładzie nauczy Cię podstaw żeglowania — od stawiania żagli po czytanie wiatru.",
    },
    credentials: [
      "Jachtowy sternik morski",
      "Nauczyciel żeglowania PZŻ",
      "Organizator rejsu",
    ],
    quote: "Żeglarstwo to sztuka ciągłej adaptacji do zmieniających się warunków. Praktyka uważności, bycia tu i teraz.",
  },
];

// ─── Yacht ───────────────────────────────────────────────────────────────────

export const yachtInfo: YachtInfo = {
  name: "Beneteau Oceanis 51.1",
  headline: "16 metrów domu na morzu",
  description:
    "Beneteau Oceanis 51.1 — pięć kabin, przestronny kokpit i wszystko, czego potrzebujesz, żeby przez tydzień żyć na wodzie. To nie luksusowy hotel. To dom, który zabiera Cię tam, gdzie chcesz.",
  comforts: [
    {
      title: "5 kabin z naturalnym światłem",
      description: "Każdy ma swoją prywatną przestrzeń na sen i regenerację.",
    },
    {
      title: "Kuchnia i salon",
      description:
        "Wspólne posiłki, poranna kawa, wieczorne rozmowy — wszystko na pokładzie.",
    },
    {
      title: "Platforma kąpielowa",
      description: "Skok do morza prosto z jachtu — codziennie.",
    },
    {
      title: "16 metrów stabilności",
      description:
        "Jacht zaprojektowany na pełne morze. Bezpieczny, stabilny, wygodny.",
    },
  ],
  images: [
    {
      src: "/images/yacht-main.webp",
      alt: "Beneteau Oceanis 51.1 — widok z zewnątrz",
    },
    { src: "/images/yacht-cockpit.webp", alt: "Kokpit — przestrzeń wspólna" },
    { src: "/images/yacht-cabin.webp", alt: "Kabina z panoramicznymi oknami" },
    { src: "/images/yacht-deck.webp", alt: "Pokład jachtu w trakcie rejsu" },
    { src: "/images/yacht-interior.webp", alt: "Wnętrze jachtu" },
  ],
  specUrl: "https://www.beneteau.com/en/oceanis/oceanis-51-1",
};

// ─── Route ──────────────────────────────────────────────────────────────────

export const routeContent: RouteContent = {
  heading: "Zatoka Sarońska",
  subheading: "7 dni między wyspami i portami Grecji",
  intro:
    "Z Aten można szybko wypłynąć między wyspy, porty i spokojniejsze kotwicowiska Zatoki Sarońskiej. To dobra trasa na pierwszy taki rejs: ciekawa, różnorodna i bez potrzeby gonienia kilometrów.",
  stops: [
    {
      name: "Egina",
      tagline: "Pierwsza wyspa. Pierwszy oddech na morzu.",
      image: {
        src: "/images/route/aegina-aphaia.jpg",
        alt: "Świątynia Afai na wyspie Egina",
        credit: "Paweł 'pbm' Szubert, CC BY-SA 3.0, Wikimedia Commons",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:Aegina_-_Temple_of_Aphaia_03.jpg",
      },
      hints: [
        "Świątynia Afai z widokiem na trzy wyspy",
        "Pistacjowe gaje i portowe tawerny",
        "17 mil morskich od Aten — wystarczy, żeby zapomnieć o lądzie",
      ],
    },
    {
      name: "Poros",
      tagline: "Wąska cieśnina między wyspą a lądem, gdzie czas zwalnia.",
      image: {
        src: "/images/route/poros-aerial.jpg",
        alt: "Poros widziany z góry",
        credit: "Agnee, CC BY 2.0, Wikimedia Commons",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:Poros_aerial_viw.jpg",
      },
      hints: [
        "Cytrynowy las u podnóża wzgórza",
        "Kotwicowisko w zatoce Love Bay",
        "Stąd widać Peloponez — tak blisko, że prawie go dotkniesz",
      ],
    },
    {
      name: "Hydra",
      tagline: "Wyspa bez samochodów, bez pośpiechu, bez kompromisów.",
      image: {
        src: "/images/route/hydra-port-town.jpg",
        alt: "Port Hydry z łodziami i miastem w tle",
        credit: "KlipschFan, CC BY-SA 2.0, Wikimedia Commons",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:Port_of_Hydra,_Greece_(156016592).jpg",
      },
      hints: [
        "Klify, czysta woda i skalne formacje pod powierzchnią",
        "Port, w którym czas zatrzymał się sto lat temu",
        "Uliczki z kamienia, osły zamiast taksówek",
      ],
      freeDivingNote:
        "Krystalicznie czysta woda i skaliste dno — idealne warunki do freedivingu z Piotrem.",
    },
    {
      name: "Epidauros",
      tagline: "Starożytny teatr i spokojniejszy port po stronie Peloponezu.",
      image: {
        src: "/images/route/epidaurus-theatre-wide.jpg",
        alt: "Starożytny teatr w Epidauros",
        credit: "Aristoboylos, CC BY-SA 4.0, Wikimedia Commons",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:Ancient_Theater_of_Asclepius_Epidaurus_reception_angle_1.jpg",
      },
      hints: [
        "Dobry przystanek po drodze z Hydry lub Poros",
        "Teatr jest blisko najciekawszych miejsc archeologicznych regionu",
        "Decyzja zależy od pogody, czasu i tego, jak układa się rejs",
      ],
    },
  ],
  closingTease:
    "Dokładna trasa zależy od pogody i warunków na morzu, więc zostawiamy sobie miejsce na dobre decyzje po drodze.",
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export const faqItems = [
  { question: "Kiedy?", answer: "20–27 czerwca 2026" },
  { question: "Gdzie?", answer: "Zatoka Sarońska, Grecja" },
  {
    question: "Ile osób?",
    answer: "Maksymalnie 10 osób łącznie: 2 prowadzących i do 8 uczestników.",
  },
  {
    question: "Cena?",
    answer:
      "Cena udziału to 5 900 zł za osobę. Lot do Aten, ubezpieczenie i wydatki własne są po Twojej stronie.",
  },
  {
    question: "Co jest w cenie?",
    answer:
      "Miejsce na jachcie, skipper, freediving, sesje oddechowe, paliwo, porty i podstawowy prowiant.",
  },
  {
    question: "Czego nie ma w cenie?",
    answer:
      "Lotów do Aten, ubezpieczenia, części posiłków na lądzie i wydatków własnych.",
  },
  {
    question: "Czy muszę umieć żeglować?",
    answer: "Nie. Nauczymy Cię wszystkiego na miejscu.",
  },
  {
    question: "Czy muszę umieć dobrze pływać?",
    answer:
      "Musisz czuć się w wodzie na tyle swobodnie, żeby bezpiecznie wejść do morza. Freediving prowadzimy od podstaw i bez presji.",
  },
  {
    question: "Czy to będzie bardzo intensywne?",
    answer:
      "To aktywny tydzień, ale nie obóz przetrwania. Tempo dopasowujemy do pogody, morza i załogi.",
  },
  {
    question: "Choroba morska?",
    answer:
      "Może się zdarzyć. Płyniemy po Zatoce Sarońskiej, zwykle spokojniejszej niż otwarte morze, ale warto zabrać sprawdzone środki.",
  },
  {
    question: "Jak wygląda selekcja?",
    answer:
      "Po zgłoszeniu odpisujemy w ciągu 48h i sprawdzamy, czy klimat rejsu pasuje do Twoich oczekiwań.",
  },
  {
    question: "Loty?",
    answer: "We własnym zakresie do Aten. Pomożemy z logistyką.",
  },
];
