/**
 * EVERYTHING THE SITE SAYS LIVES IN THIS ONE FILE.
 *
 * If you want to change a phone number, a heading, a statistic or a
 * paragraph, it is in here — not scattered through the pages. When the
 * content management system is connected later, this file is what it will
 * read from and write to, so keeping it tidy now saves work then.
 *
 * Lines marked  // NEEDS CONFIRMATION  are facts I could not verify.
 */

export const site = {
  name: "KAWOK",
  tagline: "Honouring the Past. Creating the Future.",
  strapline:
    "Transforming waste into landmarks through culture, architecture, community and regeneration.",
  location: "San Pedro Columbia, Toledo District, Belize",
  email: "TheChaosOasisBelize@gmail.com",
  whatsappDisplay: "+501 622 6436",
  whatsappLink: "https://wa.me/5016226436",
  instagram: "https://www.instagram.com/thetoledotempletrail/",
  instagramHandle: "@TheToledoTempleTrail",
  facebook: "https://www.facebook.com/TheChaosOasisBelize/",
  chaosOasis: "https://www.chaosoasisbelize.com",
  // The domain registered at Porkbun. Everything (sitemap, social sharing
  // previews, canonical links) is generated from this one line.
  url: "https://kawokbelize.com",
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "The Vision", href: "/vision" },
  { label: "Temple Trail", href: "/toledo-temple-trail" },
  { label: "Chaos Oasis", href: "/chaos-oasis" },
  { label: "Kulcha Fair", href: "/kulcha-fair" },
  { label: "Get Involved", href: "/get-involved" },
];

export const img = {
  hero1600: "/images/hero-1600.webp",
  hero1000: "/images/hero-1000.webp",
  facade: "/images/detail-facade.webp",
  stairs: "/images/detail-stairs.webp",
  chamber: "/images/detail-chamber.webp",
  cutaway: "/images/cutaway.webp",
  terrain: "/images/terrain.webp",
  diagram: "/images/diagram.webp",
  photoPyramid: "/images/photo-pyramid.webp",
  photoBuilding: "/images/photo-building.webp",
  photoBottleWall: "/images/photo-bottlewall.webp",
  photoStairs: "/images/photo-stairs.webp",
  turtle: "/images/turtle.webp",
  word: "/images/word.webp",
};

/** The three lines the whole organisation runs along. */
export const pillars = [
  {
    number: "One",
    title: "Culture",
    text: "Maya heritage in Toledo is living, not archived. Our monuments take their proportion and rhythm from Maya architecture without imitating it, and they are made by the people who live beside it — not about them.",
  },
  {
    number: "Two",
    title: "Nature",
    text: "Cleaning the land is the first act, not the by-product. Every bottle set into a wall is a bottle out of a river. The building is simply where the rubbish goes once it has been collected.",
  },
  {
    number: "Three",
    title: "Future",
    text: "A landmark brings visitors, and visitors bring guides, cooks, drivers, artisans and reasons for young people to stay. Regeneration has to pay its way locally or it does not last.",
  },
];

/** The construction method, in order. */
export const steps = [
  {
    numeral: "I",
    title: "Collect",
    text: "Glass bottles, plastic and other non-biodegradable waste are gathered from villages, bars, homes and roadsides across Toledo.",
  },
  {
    numeral: "II",
    title: "Compact",
    text: "Waste is cleaned, sorted and pounded down into dense mass. Where a structure needs weight rather than strength, this replaces quarried fill and cement.",
  },
  {
    numeral: "III",
    title: "Build",
    text: "The compacted core is enclosed in lime mortar set with glass bottles laid end-on, so the outer skin is made of the same waste it conceals.",
  },
  {
    numeral: "IV",
    title: "Teach",
    text: "Each build is a workshop. Skills learned on one temple are carried by that community to the next one.",
  },
  {
    numeral: "V",
    title: "Open",
    text: "The finished monument becomes a place people travel to — bringing visitors, work and pride to the village that built it.",
  },
];

/**
 * Figures for the first temple. These come from the concept drawing and are
 * design targets, NOT engineering specifications. The page says so.
 */
export const templeFigures = [
  { value: "12–20k", label: "Recycled glass bottles" },
  { value: "20+", label: "Tonnes of compacted waste" },
  { value: "3,664", label: "Cubic feet of structure" },
  { value: "16 ft", label: "Total visible height" },
];

export const dimensions = [
  { part: "Foundation (below ground)", size: "26 × 14 × 4 ft" },
  { part: "Level one", size: "26 × 14 × 3 ft" },
  { part: "Level two", size: "24 × 10 × 3 ft" },
  { part: "Level three", size: "22 × 6 × 3 ft" },
  { part: "Summit chamber", size: "approx. 22 ft wide × 7 ft high" },
  { part: "Staircase", size: "18 ft wide" },
];

export const milestones = [
  {
    when: "2010",
    title: "A family arrives in Toledo",
    text: "The Atkinson family moves from Europe to San Pedro Columbia and begins building an off-grid home from tyres, bottles and tins.", // NEEDS CONFIRMATION: family name and wording
  },
  {
    when: "2010–24",
    title: "Chaos Oasis takes shape",
    text: "An Earthship, a butterfly house, an organic farm and a great deal of trial and error. Bottle walls, arches and a small pyramid go up. Schools, universities and television crews start visiting.",
  },
  {
    when: "2025",
    title: "The Kulcha Fair",
    text: "Cacao, crafts and culture beside Lubaantun — the first fair of its kind in the district, run on compostable packaging and local produce.",
  },
  {
    when: "2026",
    title: "KAWOK is founded",
    text: "The work outgrows one smallholding. KAWOK becomes the umbrella for the Toledo Temple Trail, the Kulcha Fair and what follows.",
  },
  {
    when: "Now",
    title: "Bottles are being collected",
    text: "Volunteers from San Pedro Columbia are sorting and cleaning glass for the first temple. The site is cleared. Groundbreaking follows.",
  },
];

export const waysToHelp = [
  {
    title: "Donate bottles and clean recyclables",
    text: "Glass bottles above all, plus clean plastic and cans. Message us and we will tell you where to drop them.",
  },
  {
    title: "Join a work day",
    text: "Sorting, cleaning, mixing, laying. No skills needed and none wasted.",
  },
  {
    title: "Donate materials or tools",
    text: "Cement, lime, sand, timber, wheelbarrows, safety gear — the unglamorous things that hold a build up.",
  },
  {
    title: "Sponsor a step, a wall or a temple",
    text: "For companies, foundations and grant-makers who want a permanent, measurable stake in the trail.",
  },
  {
    title: "Bring an idea, or spread the word",
    text: "Engineers, teachers, photographers, guides — and anyone with a large address book.",
  },
];

export const projects = [
  {
    href: "/toledo-temple-trail",
    tag: "In development",
    title: "Toledo Temple Trail",
    text: "A growing route of community-built environmental monuments across southern Belize. One community, one temple, a trail of change.",
    cta: "Read more",
    image: img.stairs,
    alt: "Concept render of a wide staircase climbing a temple built from bottle ends set in mortar.",
    external: false,
  },
  {
    href: "/chaos-oasis",
    tag: "Where it started",
    title: "Chaos Oasis",
    text: "An off-grid home, farm and recycling experiment near Lubaantun. Sixteen years of building with waste — and the proof that any of this works.",
    cta: "Read more",
    image: img.photoBuilding,
    alt: "A person standing on pallets, building a wall of bottles and mortar by hand at Chaos Oasis.",
    external: false,
  },
  {
    href: "/kulcha-fair",
    tag: "Annual",
    title: "The Kulcha Fair",
    text: "Cacao, crafts, music, food and ceremony beside the ruins of Lubaantun — a fair run by the people whose culture it celebrates.",
    cta: "Read more",
    image: img.photoBottleWall,
    alt: "Close detail of a bottle wall with blue, green and amber bottle ends set into grey mortar.",
    external: false,
  },
];

/**
 * The cultural statement. This wording should be reviewed by a Maya
 * community member or cultural authority before the site goes live.
 */
export const culturalStatement = {
  heading: "On Maya heritage",
  paragraphs: [
    "These structures are not recreations of sacred temples. They are contemporary environmental monuments, inspired by the ingenuity and enduring legacy of Maya architecture, and built with respect for Maya culture, the land, and the communities that have cared for it for generations.",
    "KAWOK does not speak on behalf of Maya communities and does not claim their endorsement. Where communities take part, they take part on their own terms, tell their own stories and are named as the makers they are.",
    "Cleaning and restoring the landscape is intended as an act of stewardship and gratitude, not as a claim on anyone's heritage.",
  ],
};

/* ------------------------------------------------------------------ */
/*  THE KULCHA FAIR                                                    */
/* ------------------------------------------------------------------ */

export const kulcha = {
  strapline:
    "Belize's first-of-its-kind eco-friendly culture fair, honouring Maya heritage, artisan craftsmanship, cacao traditions and sustainable living — beside the ancient ruins of Lubaantun.",
  communityNote:
    "The fair is more than an event. It is a community collaboration that lifts sustainable practice, local production, Maya cultural preservation, eco-friendly tourism and Belizean storytelling — and puts money directly into the hands of the people who make and grow things here.",
  highlights: [
    {
      title: "Handcrafted Belizean goods",
      text: "Local makers selling unique, sustainable work at their own prices — jippy jappa weaving, carved jade, textiles and bags upcycled from rice sacks.",
    },
    {
      title: "Ceremony and performance",
      text: "Maya ceremony, drumming, dance and live demonstrations, led by their own practitioners rather than performed for an audience.",
    },
    {
      title: "Art, wellness and nature",
      text: "Guided sessions, artisan workshops and wellness activities that connect visitors to the land the fair sits on.",
    },
  ],
  lowImpact: {
    text: "Chaos Oasis is fully off-grid, and the fair is run to match. Bring a reusable water bottle and bag, or pick up a Kulcha Fair tote or reusable cup on site.",
    practices: [
      "Compostable or reusable food packaging",
      "Organic, locally sourced meals",
      "Direct support for small-scale artisans and farmers",
      "Composting bins throughout the fair",
      "Free water refill stations",
      "Every bottle recycled — the buildings around you show where they end up",
    ],
  },
  /**
   * The last fair ran over two days. Kept here as the record of what
   * happens at a Kulcha Fair, and as the template for the next one.
   */
  lastEdition: {
    label: "December 2025 — the first Kulcha Fair",
    days: [
      {
        label: "Day one",
        events: [
          {
            time: "10:30",
            title: "Thanksgiving Maya Ceremony",
            text: "Maya priest José Magaña led a ritual of gratitude and renewal using copal, cacao, conch horns and sacred fire. Visitors brought their own offerings or wrote intentions for the altar.",
          },
          {
            time: "11:30",
            title: "The fair opens",
            text: "Talks, workshops and demonstrations: traditional tortilla making, jippy jappa weaving, organic meals, hot and cold cacao, handicrafts, free water refills and a juice bar.",
          },
        ],
      },
      {
        label: "Day two",
        events: [
          {
            time: "06:30",
            title: "Maya Solstice Ceremony",
            text: "Maya priestess Gigi welcomed the rising sun and honoured the ancient cycles of time in a dawn ceremony lasting three to four hours.",
          },
          {
            time: "10:30",
            title: "The fair opens again",
            text: "A second full day of makers, food, cacao and workshops.",
          },
          {
            time: "15:30",
            title: "Sacred Cacao Dance",
            text: "The traditional dance from Crique Jute honouring cacao's role in Maya culture.",
          },
        ],
      },
    ],
  },
  next: {
    heading: "The next Kulcha Fair",
    text: "Dates for the next fair are being confirmed. It will run again beside Lubaantun, over two days, with ceremony at dawn and makers, cacao and workshops through the day.",
    calls: [
      "Be told when dates are announced",
      "Apply as a maker, grower or food vendor",
      "Offer a workshop or performance",
      "Volunteer for the weekend",
    ],
  },
};

/**
 * PHOTOGRAPHS FROM PAST FAIRS.
 *
 * To add one: upload the image to /public/images/ (resized to about 1600
 * pixels wide), then add a line here, for example:
 *
 *   { src: "/images/kulcha-cacao.webp", alt: "Cacao being ground by hand", caption: "Cacao, 2025" },
 *
 * While this list is empty the gallery simply does not appear on the page —
 * there is no empty box and nothing looks unfinished.
 */
export const kulchaGallery: { src: string; alt: string; caption?: string }[] = [];

/**
 * VIDEOS FROM PAST FAIRS.
 *
 * These are shown as links rather than embedded players, which keeps the
 * page fast and stops YouTube or Instagram tracking your visitors. Add one:
 *
 *   { url: "https://www.instagram.com/p/XXXX/", title: "Sacred Cacao Dance", note: "Instagram, 2025" },
 */
export const kulchaVideos: { url: string; title: string; note?: string }[] = [];
