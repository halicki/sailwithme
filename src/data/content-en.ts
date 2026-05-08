// English content. Same shape as `content.ts`. Types are imported from there.
import type {
  CrewMember,
  PricingInfo,
  RouteContent,
  YachtInfo,
} from "./content";

export const heroContent = {
  preTitle: "Sailing, freediving, breath · Greece 2026",
  titleTop: "BREATH",
  titleConnector: "&",
  titleBottom: "WIND",
  subtitle: "20–27 June · Saronic Gulf · 7 days",
  tagline:
    "A week on a yacht: sailing, freediving, conscious breath, and Greek islands.",
  ctaText: "Join the crew ↓",
  backgroundVideo: "/videos/hero-bg.mp4",
};

export const pricingInfo: PricingInfo = {
  headline: "You know what you're signing up for.",
  description:
    "This isn't a luxury all-inclusive or a survival camp. It's a well-run week on a yacht: simple, focused, with room for the sea, the people, and the breath.",
  priceRange: "5 900 zł",
  priceNote:
    "Price per person. Flight to Athens, insurance, and personal expenses are on you.",
  included: [
    "spot on the yacht",
    "skipper",
    "freediving sessions",
    "breathwork sessions",
    "harbour fees, fuel and basic provisions",
  ],
  notIncluded: [
    "flight to Athens",
    "some meals on land",
    "travel insurance",
    "personal expenses",
  ],
};

export const manifesto = {
  heading: "This is a voyage for people who want to experience more.",
  body: `Not a party trip. Not a hotel. Not strangers from a classified ad.

7 days on the Aegean. Sailing, freediving with a Polish national champion, conscious breath, Greek harbours, and life on board. Effort on the water, calm on deck, and people you actually want to talk to.`,
  closing: "We're not looking for passengers. We're looking for crew.",
};

export const forWhomTraits = [
  {
    title: "Sailing",
    description:
      "You'll be an active member of the crew. You'll be on deck during manoeuvres and underway. No experience needed — just the willingness to get involved.",
  },
  {
    title: "Life on the yacht",
    description:
      "You sleep in a bunk, cook in the galley, shower on the stern after a swim. Simple comfort that feels natural after two days.",
  },
  {
    title: "Freediving and breath",
    description:
      "Sessions are run from the basics. Scope depends on the weather, the conditions, and how the group is feeling.",
  },
  {
    title: "The week's pace",
    description:
      "We sail between islands, step ashore, cook, rest. The plan is concrete, but the sea has the final say.",
  },
];

export const programDays = [
  {
    day: 1,
    name: "Meeting",
    description: "Meeting the crew, first breath on board, casting off",
    location: "Athens / Marina",
  },
  {
    day: 2,
    name: "Sailing",
    description: "Learning to handle the yacht — wind as the teacher",
    location: "Aegina",
  },
  {
    day: 3,
    name: "Depth",
    description: "First descent — freediving with Piotr Błaszczak",
    location: "Poros",
  },
  {
    day: 4,
    name: "Breath",
    description: "Morning breath at sunrise, exploring the islands",
    location: "Hydra",
  },
  {
    day: 5,
    name: "Night",
    description: "If the weather and the crew want it — night sailing under the stars",
    location: "underway",
  },
  {
    day: 6,
    name: "Bays",
    description: "Anchorages, swimming, freediving and cooking on board",
    location: "bays along the way",
  },
  {
    day: 7,
    name: "Return",
    description: "Closing the voyage, morning coffee, last miles to the marina",
    location: "Athens",
  },
];

export const crewMembers: CrewMember[] = [
  {
    slug: "piotr",
    name: "Piotr Błaszczak",
    role: "Freediving & Breath",
    tagline:
      "Freediving isn't just a sport. It's the calmest journey into yourself you can take.",
    instagram: "wobliczuwody",
    website: "https://wobliczuwody.pl",
    brand: "W Obliczu Wody",
    heroImage: "/images/piotr-hero.jpg",
    portraitImage: "/images/piotr-portrait.jpg",
    bio: {
      intro:
        "Multiple Polish champion in freshwater freediving. On the voyage he'll show freediving calmly, technically, and without pressure.",
      story: `It all started at the Y-40 pool in Italy. One descent was enough for Piotr to understand that beneath the surface there was something he'd been looking for his whole life — the kind of silence you can't find on land.

Before he discovered freediving, he spent over 10 years in slacklining and highlining. He co-founded the Urban Highline Festival in Lublin — the first and largest highline festival in urban space in the world. Crossing between buildings on a webbing taught him what later turned out to be crucial underwater: managing fear, controlling the breath, and trusting the body.

Since 2022 he's been a member of the Polish national team in depth diving. He trains and teaches at Deep Spot — the deepest pool in Europe (45.5 metres of clear water at 32°C). As an SSI Advanced Freediver instructor he combines technique with mental training and hypnosis, helping students break through psychological barriers around depth.`,
      onRetreat:
        "On the voyage he'll lead freediving sessions and breathwork — from the first conscious inhale to safe descents in the Greek sea. No experience needed.",
    },
    credentials: [
      "Polish national team member since 2022",
      "SSI Freediving Instructor Level 1",
      "#1 in Poland — CMAS + AIDA 2024",
      "Instructor at Deep Spot (45.5 m)",
      "Co-founder of Urban Highline Festival",
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
      "Freediving doesn't have to be extreme. First comes calm, technique, and trust in the body.",
  },
  {
    slug: "arek",
    name: "Arek Halicki",
    role: "Skipper & Organiser",
    tagline: "Sailing is the art of constant adaptation.",
    instagram: "arek.halicki",
    heroImage: "/images/arek-hero.jpg",
    portraitImage: "/images/arek-portrait.jpg",
    bio: {
      intro:
        "Sailor, software engineer and the organiser of the voyage. He keeps things safe, focused, and human.",
      story: `Arek has been sailing for years and every voyage reinforces what he already knows: at sea, you see fast what works. The wind doesn't negotiate, the waves don't wait — so you have to be attentive, flexible, and present.

As a software engineer he likes well-designed systems, but this voyage is simpler: a good yacht, a good route, a good crew, and instructors who know what they're doing.`,
      onRetreat:
        "Skipper of the Beneteau Oceanis 51.1, organiser, and the person responsible for everything working. On board he'll teach you the basics of sailing — from setting the sails to reading the wind.",
    },
    credentials: [
      "Yachtmaster Offshore",
      "PYA sailing instructor",
      "Voyage organiser",
    ],
    quote:
      "Sailing is the art of constant adaptation to changing conditions. A practice of presence, of being here and now.",
  },
];

export const yachtInfo: YachtInfo = {
  name: "Beneteau Oceanis 51.1",
  headline: "16 metres of home at sea",
  description:
    "Beneteau Oceanis 51.1 — five cabins, a spacious cockpit and everything you need to live on the water for a week. This isn't a luxury hotel. It's a home that takes you where you want to go.",
  comforts: [
    {
      title: "5 cabins with natural light",
      description: "Everyone has their own private space to sleep and recover.",
    },
    {
      title: "Galley and saloon",
      description:
        "Shared meals, morning coffee, evening conversations — all on board.",
    },
    {
      title: "Bathing platform",
      description: "Jump straight into the sea from the yacht — every day.",
    },
    {
      title: "16 metres of stability",
      description:
        "A yacht designed for open sea. Safe, stable, comfortable.",
    },
  ],
  images: [
    {
      src: "/images/yacht-main.webp",
      alt: "Beneteau Oceanis 51.1 — exterior view",
    },
    { src: "/images/yacht-cockpit.webp", alt: "Cockpit — shared space" },
    { src: "/images/yacht-cabin.webp", alt: "Cabin with panoramic windows" },
    { src: "/images/yacht-deck.webp", alt: "Yacht deck underway" },
    { src: "/images/yacht-interior.webp", alt: "Yacht interior" },
  ],
  specUrl: "https://www.beneteau.com/en/oceanis/oceanis-51-1",
};

export const routeContent: RouteContent = {
  heading: "Saronic Gulf",
  subheading: "7 days between Greek islands and harbours",
  intro:
    "From Athens you can quickly head out among the islands, ports and quieter anchorages of the Saronic Gulf. It's a great route for a first voyage like this: varied, interesting, and without chasing miles.",
  stops: [
    {
      name: "Aegina",
      tagline: "First island. First breath at sea.",
      image: {
        src: "/images/route/aegina-aphaia.jpg",
        alt: "Temple of Aphaia on Aegina",
        credit: "Paweł 'pbm' Szubert, CC BY-SA 3.0, Wikimedia Commons",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:Aegina_-_Temple_of_Aphaia_03.jpg",
      },
      hints: [
        "Temple of Aphaia overlooking three islands",
        "Pistachio groves and harbour tavernas",
        "17 nautical miles from Athens — enough to forget the land",
      ],
    },
    {
      name: "Poros",
      tagline: "A narrow channel between island and mainland, where time slows.",
      image: {
        src: "/images/route/poros-aerial.jpg",
        alt: "Poros from above",
        credit: "Agnee, CC BY 2.0, Wikimedia Commons",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:Poros_aerial_viw.jpg",
      },
      hints: [
        "Lemon forest at the foot of the hill",
        "Anchorage in Love Bay",
        "From here you see the Peloponnese — close enough to almost touch",
      ],
    },
    {
      name: "Hydra",
      tagline: "An island with no cars, no rush, no compromises.",
      image: {
        src: "/images/route/hydra-port-town.jpg",
        alt: "Port of Hydra with boats and town in the background",
        credit: "KlipschFan, CC BY-SA 2.0, Wikimedia Commons",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:Port_of_Hydra,_Greece_(156016592).jpg",
      },
      hints: [
        "Cliffs, clear water and rock formations beneath the surface",
        "A port that hasn't changed in a hundred years",
        "Stone alleys, donkeys instead of taxis",
      ],
      freeDivingNote:
        "Crystal-clear water and rocky bottom — ideal conditions for freediving with Piotr.",
    },
    {
      name: "Epidaurus",
      tagline:
        "An ancient theatre and a quieter port on the Peloponnese side.",
      image: {
        src: "/images/route/epidaurus-theatre-wide.jpg",
        alt: "Ancient theatre at Epidaurus",
        credit: "Aristoboylos, CC BY-SA 4.0, Wikimedia Commons",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:Ancient_Theater_of_Asclepius_Epidaurus_reception_angle_1.jpg",
      },
      hints: [
        "A good stop on the way from Hydra or Poros",
        "The theatre sits near the most interesting archaeological sites in the region",
        "The decision depends on the weather, time, and how the voyage unfolds",
      ],
    },
  ],
  closingTease:
    "The exact route depends on weather and conditions at sea, so we leave room for good calls along the way.",
};

export const faqItems = [
  { question: "When?", answer: "20–27 June 2026" },
  { question: "Where?", answer: "Saronic Gulf, Greece" },
  {
    question: "How many people?",
    answer: "Up to 10 people total: 2 instructors and up to 8 participants.",
  },
  {
    question: "Price?",
    answer:
      "5 900 zł per person. Flight to Athens, insurance, and personal expenses are on you.",
  },
  {
    question: "What's included?",
    answer:
      "Spot on the yacht, skipper, freediving, breathwork, fuel, harbours and basic provisions.",
  },
  {
    question: "What's not included?",
    answer:
      "Flight to Athens, insurance, some meals on land, and personal expenses.",
  },
  {
    question: "Do I need to know how to sail?",
    answer: "No. We'll teach you everything on board.",
  },
  {
    question: "Do I need to be a strong swimmer?",
    answer:
      "You need to be comfortable enough in the water to safely get into the sea. Freediving starts from the basics, with no pressure.",
  },
  {
    question: "Will it be very intense?",
    answer:
      "It's an active week, but not a survival camp. We adjust the pace to the weather, the sea and the crew.",
  },
  {
    question: "Seasickness?",
    answer:
      "It can happen. We sail in the Saronic Gulf, usually calmer than open sea, but it's worth bringing tested remedies.",
  },
  {
    question: "How does selection work?",
    answer:
      "After your application we reply within 48h and check whether the voyage fits your expectations.",
  },
  {
    question: "Flights?",
    answer: "On you, to Athens. We'll help with logistics.",
  },
];
