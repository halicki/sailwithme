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
}

export interface RouteContent {
  heading: string;
  subheading: string;
  intro: string;
  stops: RouteStop[];
  closingTease: string;
}

// ─── Hero ────────────────────────────────────────────────────────────────────

export const heroContent = {
  preTitle: "Rejs transformacyjny · Grecja 2026",
  titleTop: "ODDECH",
  titleBottom: "WIATR",
  subtitle: "20–27 Czerwca · Zatoka Sarońska · 7 dni",
  tagline:
    "Żeglowanie. Freediving. Breathwork. 7 dni, które zmieniają wszystko.",
  ctaText: "Dołącz do załogi ↓",
  backgroundVideo: "/videos/hero-bg.mp4",
};

// ─── Manifesto ───────────────────────────────────────────────────────────────

export const manifesto = {
  heading: "To nie jest zwykły rejs.",
  body: `Nie imprezowy. Nie all-inclusive. Nie z przypadkowymi ludźmi.

7 dni na Morzu Egejskim. Żeglowanie, freediving z mistrzem Polski, breathwork o wschodzie słońca. Każdy dzień to nowe wyzwanie — każdy wieczór to refleksja.`,
  closing: "Nie szukamy pasażerów. Szukamy załogi.",
};

// ─── For Whom ────────────────────────────────────────────────────────────────

export const forWhomTraits = [
  {
    icon: "🚀",
    title: "Prowadzisz firmę, tworzysz, budujesz",
    description: "Przedsiębiorcy, twórcy, liderzy — ludzie, którzy działają.",
  },
  {
    icon: "🌊",
    title: "Szukasz doświadczeń, nie relaksu",
    description: "Chcesz czegoś więcej niż leżenie pod parasolem.",
  },
  {
    icon: "⚡",
    title: "Jesteś gotowy na wyzwania",
    description: "Freediving, nocne żeglowanie, breathwork — to nie wakacje.",
  },
  {
    icon: "🔄",
    title: "Chcesz transformacji",
    description: "Wracasz jako inna osoba niż ta, która wsiadła na jacht.",
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
    description: "Breathwork o wschodzie słońca, eksploracja wysp",
    location: "Hydra",
  },
  {
    day: 5,
    name: "Wyzwanie",
    description: "Nocne żeglowanie, cisza, rozmowy pod gwiazdami",
    location: "w morzu",
  },
  {
    day: 6,
    name: "Ekspedycja",
    description:
      "Odkrywanie ukrytych zatok, nurkowanie, gotowanie na pokładzie",
    location: "ukryte zatoki",
  },
  {
    day: 7,
    name: "Transformacja",
    description: "Podsumowanie podróży — co zabierasz ze sobą?",
    location: "Ateny",
  },
];

// ─── Crew ────────────────────────────────────────────────────────────────────

export const crewMembers: CrewMember[] = [
  {
    slug: "piotr",
    name: "Piotr Błaszczak",
    role: "Freediving",
    tagline: "Cisza pod wodą jest głośniejsza niż myślisz.",
    instagram: "wobliczuwody",
    website: "https://wobliczuwody.pl",
    brand: "W Obliczu Wody",
    heroImage: "/images/piotr-hero.jpg",
    portraitImage: "/images/piotr-portrait.jpg",
    bio: {
      intro:
        "Reprezentant Polski we freedivingu, numer 1 w rankingach CMAS i AIDA wśród mężczyzn w Polsce. Człowiek, który zamienił fascynację głębiną w sposób życia — i potrafi zabrać Cię tam ze sobą.",
      story: `Wszystko zaczęło się na Bali. Jedno zanurzenie wystarczyło, żeby Piotr zrozumiał, że pod powierzchnią wody jest coś, czego szukał całe życie — cisza, której nie da się znaleźć na lądzie.

Zanim odkrył freediving, przez ponad 10 lat żył slacklinem i highlinem. Był współtwórcą Urban Highline Festival w Lublinie — pierwszego i największego festiwalu highline'owego w przestrzeni miejskiej na świecie. Przeskakiwanie między budynkami na taśmie nauczyło go tego, co potem okazało się kluczowe pod wodą: panowania nad strachem, kontroli oddechu i zaufania do własnego ciała.

Od 2022 roku jest członkiem kadry narodowej w nurkowaniu głębokim. Trenuje i uczy w Deep Spot — najgłębszym basenie w Europie (45,5 metra czystej wody w temperaturze 32°C). Jako instruktor SSI Freediving Level 1 łączy technikę z treningiem mentalnym i hipnozą, pomagając uczniom przełamywać psychiczne bariery związane z głębokością.`,
      onRetreat:
        "Na rejsie poprowadzi lekcje freedivingu — od pierwszego świadomego wdechu po zanurzenie w ciszę greckiego morza. Każda sesja to nie tylko technika, ale praca z głową: oddech, focus, zaufanie. Nie musisz mieć doświadczenia — musisz mieć odwagę.",
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
      "Freediving to nie sport ekstremalny. To najspokojniejsza rzecz, jaką możesz zrobić — jeśli pozwolisz sobie odpuścić.",
  },
  {
    slug: "kamila",
    name: "Kamila Kowalczyk",
    role: "Breathwork",
    tagline: "Oddech to najpotężniejsze narzędzie, jakie masz.",
    instagram: "respire_kamilla_kowalczyk",
    brand: "Respire",
    heroImage: "/images/kamila-hero.jpg",
    portraitImage: "/images/kamila-portrait.jpg",
    bio: {
      intro:
        "Instruktorka breathworku i założycielka Respire — przestrzeni, w której oddech staje się narzędziem transformacji. Wierzy, że świadomy oddech zmienia nie tylko ciało, ale sposób, w jaki przeżywasz życie.",
      story: `Kamila odkryła breathwork w momencie, kiedy szukała czegoś głębszego niż medytacja. Pierwszy oddech świadomy — naprawdę świadomy — zmienił jej perspektywę. Zrozumiała, że mamy w sobie narzędzie, które jest dostępne zawsze, wszędzie, za darmo — i które większość z nas kompletnie ignoruje.

Pod marką Respire prowadzi sesje oddechowe łączące różne techniki — od spokojnych, regulujących układ nerwowy, po intensywne sesje transformacyjne, które potrafią wydobyć emocje ukryte głęboko pod powierzchnią. Jej podejście jest ciepłe, ale bezkompromisowe: oddech nie kłamie i nie pozwala Ci się schować.`,
      onRetreat:
        "Na rejsie poprowadzi poranne rytuały oddechowe o wschodzie słońca na pokładzie oraz głębokie sesje transformacyjne. Wyobraź sobie breathwork na otwartym morzu, z widokiem na greckie wyspy — to doświadczenie, które zostaje z Tobą na długo.",
    },
    credentials: [
      "Certyfikowana instruktorka breathworku",
      "Założycielka Respire",
    ],
    quote:
      "Nie musisz jechać na drugi koniec świata, żeby się zmienić. Wystarczy, że zaczniesz oddychać.",
  },
  {
    slug: "arek",
    name: "Arek Halicki",
    role: "Skipper & Organizator",
    tagline: "Najlepsze rzeczy dzieją się na morzu.",
    instagram: "arek.halicki",
    heroImage: "/images/arek-hero.jpg",
    portraitImage: "/images/arek-portrait.jpg",
    bio: {
      intro:
        "Żeglarz, programista i wizjoner tego rejsu. Człowiek, który wierzy, że morze uczy więcej niż jakikolwiek kurs rozwoju osobistego — jeśli pozwolisz mu mówić.",
      story: `Arek żegluje od lat i z każdym rejsem utwierdza się w przekonaniu, że na morzu nie da się udawać. Wiatr nie negocjuje, fala nie czeka — albo się adaptujesz, albo się uczysz. Zwykle jedno i drugie naraz.

Jako programista rozumie systemy i struktury, ale ten rejs zaprojektował z zupełnie innej perspektywy — jako doświadczenie, które ma Cię zmienić, nie rozrywkę, która ma Cię odciągnąć od codzienności. Zebrał ludzi, którzy są najlepsi w tym, co robią, i stworzył przestrzeń, w której każdy dzień jest inny, każde wyzwanie jest prawdziwe, a każdy wieczór to okazja do refleksji.`,
      onRetreat:
        "Sternik Beneteau Oceanis 52, organizator i człowiek odpowiedzialny za to, żeby wszystko działało. Na pokładzie nauczy Cię podstaw żeglowania — od stawiania żagli po czytanie wiatru.",
    },
    credentials: ["Jachtowy sternik morski", "Nauczyciel żeglowania PZŻ", "Organizator rejsu"],
    quote:
      "Na morzu nie da się udawać. Wiatr nie negocjuje, fala nie czeka.",
  },
];

// ─── Yacht ───────────────────────────────────────────────────────────────────

export const yachtInfo: YachtInfo = {
  name: "Beneteau Oceanis 52",
  headline: "16 metrów domu na morzu",
  description: "Beneteau Oceanis 52 — pięć kabin, przestronny kokpit i wszystko, czego potrzebujesz, żeby przez tydzień żyć na wodzie. To nie luksusowy hotel. To dom, który zabiera Cię tam, gdzie chcesz.",
  comforts: [
    {
      title: "5 kabin z naturalnym światłem",
      description: "Każdy ma swoją prywatną przestrzeń na sen i regenerację."
    },
    {
      title: "Kuchnia i salon",
      description: "Wspólne posiłki, poranna kawa, wieczorne rozmowy — wszystko na pokładzie."
    },
    {
      title: "Platforma kąpielowa",
      description: "Skok do morza prosto z jachtu — codziennie."
    },
    {
      title: "16 metrów stabilności",
      description: "Jacht zaprojektowany na pełne morze. Bezpieczny, stabilny, wygodny."
    }
  ],
  images: [
    { src: "/images/yacht-main.webp", alt: "Beneteau Oceanis 52 — widok z zewnątrz" },
    { src: "/images/yacht-cockpit.webp", alt: "Kokpit — przestrzeń wspólna" },
    { src: "/images/yacht-cabin.webp", alt: "Kabina z panoramicznymi oknami" }
  ],
  specUrl: "https://www.beneteau.com/oceanis/oceanis-52"
};

// ─── Route ──────────────────────────────────────────────────────────────────

export const routeContent: RouteContent = {
  heading: "Zatoka Sarońska",
  subheading: "7 dni między wyspami Grecji",
  intro: "Pięćdziesiąt mil morskich od Aten zaczyna się inny świat. Wyspa bez samochodów, starożytny teatr z doskonałą akustyką, zatoki z turkusową wodą — i cisza, jakiej nie znajdziesz na lądzie.",
  stops: [
    {
      name: "Egina",
      tagline: "Pierwsza wyspa. Pierwszy oddech na morzu.",
      hints: [
        "Świątynia Afai z widokiem na trzy wyspy",
        "Pistacjowe gaje i portowe tawerny",
        "17 mil morskich od Aten — wystarczy, żeby zapomnieć o lądzie",
      ],
    },
    {
      name: "Poros",
      tagline: "Wąska cieśnina między wyspą a lądem, gdzie czas zwalnia.",
      hints: [
        "Cytrynowy las u podnóża wzgórza",
        "Kotwicowisko w zatoce Love Bay",
        "Stąd widać Peloponez — tak blisko, że prawie go dotkniesz",
      ],
    },
    {
      name: "Hydra",
      tagline: "Wyspa bez samochodów, bez pośpiechu, bez kompromisów.",
      hints: [
        "Klify, czysta woda i skalne formacje pod powierzchnią",
        "Port, w którym czas zatrzymał się sto lat temu",
        "Uliczki z kamienia, osły zamiast taksówek",
      ],
      freeDivingNote: "Krystalicznie czysta woda i skaliste dno — idealne warunki do freedivingu z Piotrem.",
    },
    {
      name: "Epidauros",
      tagline: "Starożytny teatr, w którym szept niesie się do ostatniego rzędu.",
      hints: [
        "Akustyka, której nie da się wyjaśnić — trzeba usłyszeć",
        "Dojście od strony morza, nie z parkingu turystycznego",
        "Jedna z najlepszych kotwic w Zatoce Sarońskiej",
      ],
    },
  ],
  closingTease: "...i kilka zatok, których nie znajdziesz na żadnej mapie.",
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export const faqItems = [
  { question: "Kiedy?", answer: "20–27 czerwca 2026" },
  { question: "Gdzie?", answer: "Zatoka Sarońska, Grecja" },
  {
    question: "Ile osób?",
    answer: "8–10 uczestników + stała załoga (3 osoby)",
  },
  {
    question: "Cena?",
    answer: "Wkrótce — zgłoś się, poinformujemy o szczegółach",
  },
  {
    question: "Czy muszę umieć żeglować?",
    answer: "Nie. Nauczymy Cię wszystkiego na miejscu.",
  },
  {
    question: "Loty?",
    answer: "We własnym zakresie do Aten. Pomożemy z logistyką.",
  },
];
