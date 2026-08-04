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
  // Replace with the real domain once it is registered with Porkbun.
  url: "https://kawok.org",
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
