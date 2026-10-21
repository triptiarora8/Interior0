// All site content lives here, so copy and photos can be edited in one place.

export const img = (id) => `https://images.unsplash.com/photo-${id}`;

export const studio = {
  name: "Interior0",
  email: "hello@interior0.com",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  addressLine1: "42 Linden Lane, Sector 29",
  addressLine2: "Gurugram, Haryana 122001",
  city: "Gurugram, India",
  hours: "Mon – Sat · 10am – 7pm",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Pinterest", href: "#" },
    { label: "Houzz", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
];

export const services = [
  {
    slug: "residential",
    title: "Residential Design",
    short: "Full-home interiors, from floor plans to the last cushion.",
    description:
      "Complete interiors for apartments, villas and family homes. We plan spatial flow, lighting, joinery and furniture together, so every room feels part of the same story.",
    image: img("1616486338812-3dadae4b4ace"),
    alt: "Neutral residential living room",
    // two supporting photos shown beside the main image on the Services page
    extras: [{ src: img("1604014237800-1c9102c219da"), alt: "Open-plan living and dining room" }, { src: img("1505693416388-ac5ce068fe85"), alt: "Bedroom with upholstered headboard" }],
    features: ["Space planning & layouts", "Lighting design", "Custom joinery & storage", "Furniture & fabric selection", "3D visualisation", "Site supervision"],
  },
  {
    slug: "kitchen-bath",
    title: "Kitchen & Bath",
    short: "Hard-working rooms with joinery and finishes that last.",
    description:
      "The rooms you use most, designed to the millimetre. Ergonomic layouts, durable surfaces and storage that hides the clutter without hiding the character.",
    image: img("1507089947368-19c1da9775ae"),
    alt: "White kitchen with marble island",
    // two supporting photos shown beside the main image on the Services page
    extras: [{ src: img("1556912167-f556f1f39fdf"), alt: "Warm kitchen with timber island and bar stools" }, { src: img("1507652313519-d4e9174996dd"), alt: "Spa bathroom with freestanding tub" }],
    features: ["Modular & bespoke kitchens", "Stone & tile selection", "Sanitaryware & fittings", "Appliance planning", "Spa-style bathrooms", "Ventilation & lighting"],
  },
  {
    slug: "commercial",
    title: "Commercial Spaces",
    short: "Workspaces, cafés and boutiques that tell your brand story.",
    description:
      "Offices, cafés, salons and retail spaces that people want to spend time in. We turn your brand into a physical experience, on schedule and with minimal disruption.",
    image: img("1524758631624-e2822e304c36"),
    alt: "Modern office lounge",
    // two supporting photos shown beside the main image on the Services page
    extras: [{ src: img("1497366811353-6870744d04b2"), alt: "Loft office with long meeting table" }, { src: img("1556761175-b413da4baf72"), alt: "Team working in an open studio" }],
    features: ["Workplace strategy", "Brand-led concepts", "Hospitality & F&B", "Retail fit-outs", "Acoustic planning", "Turnkey execution"],
  },
  {
    slug: "styling",
    title: "Styling & Decor",
    short: "Furniture, art and objects curated to complete the story.",
    description:
      "Already have the bones but missing the soul? We curate furniture, art, rugs, lighting and objects to make an existing space feel finished and personal.",
    image: img("1586023492125-27b2c045efd7"),
    alt: "Styled corner with yellow armchair",
    // two supporting photos shown beside the main image on the Services page
    extras: [{ src: img("1618220179428-22790b461013"), alt: "Styled sideboard with plants and ceramics" }, { src: img("1615066390971-03e4e1c36ddf"), alt: "Dining room with statement art" }],
    features: ["Art & accessory curation", "Soft furnishings", "Rugs & window dressing", "Plant styling", "Shopping lists & sourcing", "Photo-shoot styling"],
  },
  {
    slug: "renovation",
    title: "Renovation",
    short: "Structural changes managed from demolition to handover.",
    description:
      "Structural changes, new staircases, opened-up floor plans. We coordinate architects, engineers and contractors so your renovation runs smoothly from demolition to handover.",
    image: img("1502005229762-cf1b2da7c5d6"),
    alt: "Floating oak staircase in a renovated home",
    // two supporting photos shown beside the main image on the Services page
    extras: [{ src: img("1503387762-592deb58ef4e"), alt: "Architect drawing renovation plans" }, { src: img("1621905252507-b35492cc74b4"), alt: "Site engineer on a renovation project" }],
    features: ["Structural planning", "Permits & approvals", "Contractor management", "Budget tracking", "Quality inspections", "Snag-free handover"],
  },
];

export const homeProcess = [
  { title: "Discover", text: "We visit your space, listen to how you live and define the brief, budget and timeline together." },
  { title: "Concept", text: "Mood boards, layouts and material palettes bring the vision to life before anything is built." },
  { title: "Develop", text: "Detailed drawings, 3D renders and sourcing. Every finish and fixture is specified and approved." },
  { title: "Deliver", text: "We manage contractors and installation end-to-end, then style the final reveal." },
];

export const servicesProcess = [
  { title: "Consultation", text: "A free first meeting at your space or our studio to talk about goals, style, budget and timing." },
  { title: "Design", text: "Concept boards, layouts and 3D renders, refined with you over two rounds of revisions." },
  { title: "Build", text: "We manage procurement, contractors and site quality, with weekly progress updates." },
  { title: "Style & Handover", text: "Furniture is installed and the space styled to the last detail, ready for you to walk in." },
];

export const packages = [
  {
    name: "Consult",
    tagline: "Expert direction for confident DIY-ers.",
    price: "₹25k",
    unit: "/ room",
    features: ["2-hour on-site consultation", "Concept mood board", "Layout recommendations", "Curated shopping list"],
  },
  {
    name: "Design",
    tagline: "Complete design, ready for you to build.",
    price: "₹180",
    unit: "/ sq ft",
    featured: true,
    features: ["Full concept & 3D renders", "Working drawings & specs", "Material & furniture schedule", "Vendor recommendations", "4 site visits"],
  },
  {
    name: "Turnkey",
    tagline: "We handle everything, you move in.",
    price: "₹2,400",
    unit: "/ sq ft",
    features: ["Everything in Design", "Procurement & logistics", "Contractor management", "Final styling & photography", "12-month after-care"],
  },
];

export const servicesFaq = [
  {
    q: "How much does an interior design project cost?",
    a: "It depends on the size, scope and finishes. Our consult package starts at ₹25,000 per room, and full turnkey homes typically range from ₹2,400 per sq ft. After the first meeting we share a detailed, itemised estimate, so there are no surprises.",
  },
  {
    q: "How long does a typical project take?",
    a: "A single-room styling project can be done in 3–4 weeks. A full-home design and build usually takes 12–20 weeks, depending on custom joinery and civil work.",
  },
  {
    q: "Do you work outside your home city?",
    a: "Yes. We currently have projects in six cities and offer remote e-design for clients anywhere, with virtual consultations and detailed shopping lists.",
  },
  {
    q: "Can I keep some of my existing furniture?",
    a: "Absolutely. We love working with pieces that carry meaning. We'll catalogue what you have and design around the items you love, reupholstering or refinishing where needed.",
  },
  {
    q: "Will I see the design before work begins?",
    a: "Always. You'll get mood boards, layouts and photo-realistic 3D renders of every key space. Nothing is ordered or built until you've signed off.",
  },
];

export const contactFaq = [
  {
    q: "Is the first consultation really free?",
    a: "Yes. The first 45-minute conversation, by phone, video or at our studio, is complimentary and comes with no obligation.",
  },
  {
    q: "What should I prepare before we meet?",
    a: "Floor plans if you have them, a few photos of your space, and any images you love, even screenshots from Instagram or Pinterest. A rough budget range helps us suggest the right approach.",
  },
  {
    q: "How soon can you start?",
    a: "We usually begin new design projects within 3–5 weeks of signing. Smaller styling projects can often start sooner.",
  },
];

export const testimonials = [
  {
    quote: "They understood what we wanted before we could put it into words. Our home finally feels like us: calm, warm and full of light.",
    name: "Ananya Mehra",
    project: "The Ochre House, Gurugram",
    photo: img("1494790108377-be9c29b29330"),
  },
  {
    quote: "Meticulous, honest and wonderfully creative. The project ran on time and on budget, which I didn't think was possible.",
    name: "Rohan Kapoor",
    project: "Studio Nord Offices",
    photo: img("1500648767791-00dcc994a43e"),
  },
  {
    quote: "Every guest asks who designed our dining room. Working with Tripti and her team was a genuine joy from start to finish.",
    name: "Meera Iyer",
    project: "Verdant Dining, Bengaluru",
    photo: img("1438761681033-6461ffad8d80"),
  },
];

export const team = [
  { name: "Tripti Sharma", role: "Founder · Principal", photo: img("1573496359142-b8d87734a5a2") },
  { name: "Arjun Malhotra", role: "Lead Architect", photo: img("1500648767791-00dcc994a43e") },
  { name: "Kavya Nair", role: "Senior Designer", photo: img("1544005313-94ddf0286df2") },
  { name: "Isha Verma", role: "Styling & Sourcing", photo: img("1524504388940-b1c1722653e1") },
];

export const categories = [
  { key: "all", label: "All" },
  { key: "living", label: "Living" },
  { key: "bedroom", label: "Bedroom" },
  { key: "kitchen", label: "Kitchen" },
  { key: "dining", label: "Dining" },
  { key: "commercial", label: "Commercial" },
];

// shape controls the card proportions in the portfolio grid: tall | wide | square
export const projects = [
  {
    slug: "the-ochre-house",
    title: "The Ochre House",
    category: "living",
    type: "Residential",
    location: "Gurugram",
    year: 2025,
    area: "3,800 sq ft",
    scope: "Turnkey Interior",
    shape: "tall",
    cover: img("1615529182904-14819c35db37"),
    headline: ["A family home with ", "sun-baked", " warmth."],
    intro:
      "A young family of four wanted to leave their builder-grade apartment behind. They asked for a home that felt relaxed, layered and full of natural texture, without feeling precious.",
    story: [
      "We took our cue from the warm light of late afternoon. Ochre, terracotta and sand tones run through the house, balanced by soft white lime-plaster walls and pale oak floors. We opened up the living and dining areas to create one generous gathering space, anchored by a low, deep sofa and a hand-thrown ceramic collection by local artisans.",
      "Storage hides in plain sight: fluted oak joinery conceals toys, media and a home office nook. Every piece of furniture was chosen to welcome small hands and long dinners alike.",
    ],
    palette: [
      { name: "Ochre", hex: "#c08a52", light: true },
      { name: "Terracotta", hex: "#a5583a", light: true },
      { name: "Lime Plaster", hex: "#e9dfd1" },
      { name: "White Oak", hex: "#c9ad88" },
      { name: "Olive", hex: "#5b5a4b", light: true },
    ],
    gallery: [
      img("1618221195710-dd6b41faaea6"),
      img("1618220179428-22790b461013"),
      img("1567016432779-094069958ea5"),
      img("1583847268964-b28dc8f51f92"),
    ],
    testimonial: 0,
  },
  {
    slug: "linen-and-light",
    title: "Linen & Light",
    category: "bedroom",
    type: "Bedroom",
    location: "Delhi",
    year: 2025,
    area: "1,200 sq ft",
    scope: "Design & Styling",
    shape: "tall",
    cover: img("1615874959474-d609969a20ed"),
    headline: ["A bedroom suite that ", "breathes", "."],
    intro:
      "A couple who travel constantly wanted their primary suite to feel like the calmest hotel they'd ever stayed in, without losing the personality of home.",
    story: [
      "We layered washed linen, rattan and soft sage to create a room that changes gently with the daylight. A woven pendant and wall-hung plants bring the garden indoors.",
      "Built-in wardrobes with cane fronts keep the room free of clutter, while a deep window seat became the couple's favourite spot for morning tea.",
    ],
    palette: [
      { name: "Linen", hex: "#e8e1d6" },
      { name: "Sage", hex: "#8a9a85", light: true },
      { name: "Rattan", hex: "#c4a174" },
      { name: "Clay", hex: "#b06d4a", light: true },
    ],
    gallery: [
      img("1595526114035-0d45ed16cfbf"),
      img("1505693416388-ac5ce068fe85"),
      img("1586105251261-72a756497a11"),
      img("1600607687644-c7171b42498f"),
    ],
  },
  {
    slug: "verdant-dining",
    title: "Verdant Dining",
    category: "dining",
    type: "Dining",
    location: "Bengaluru",
    year: 2024,
    area: "650 sq ft",
    scope: "Design & Styling",
    shape: "square",
    cover: img("1617806118233-18e1de247200"),
    headline: ["Long dinners in ", "emerald", " velvet."],
    intro:
      "Our clients host every weekend and wanted a dining room that felt special at night but bright and easy by day.",
    story: [
      "Emerald velvet chairs gather around a pale stone table, lit by a sculptural brass chandelier. A large round mirror bounces light from the garden deep into the room.",
      "Soft white walls and a jute rug keep the space grounded, so the colour feels joyful rather than heavy.",
    ],
    palette: [
      { name: "Emerald", hex: "#2f5a46", light: true },
      { name: "Brass", hex: "#b89355" },
      { name: "Chalk", hex: "#f0ece4" },
      { name: "Jute", hex: "#c7b08c" },
    ],
    gallery: [
      img("1617806118233-18e1de247200"),
      img("1615873968403-89e068629265"),
      img("1600494603989-9650cf6ddd3d"),
      img("1554995207-c18c203602cb"),
    ],
    testimonial: 2,
  },
  {
    slug: "monochrome-kitchen",
    title: "Monochrome Kitchen",
    category: "kitchen",
    type: "Kitchen",
    location: "Mumbai",
    year: 2024,
    area: "420 sq ft",
    scope: "Kitchen Design",
    shape: "tall",
    cover: img("1484154218962-a197022b5858"),
    headline: ["Crisp lines, ", "warm", " heart."],
    intro:
      "A keen home cook wanted a kitchen that worked like a professional one but still felt part of the family home.",
    story: [
      "Matte white cabinetry and black hardware keep the look crisp, while an oak-topped island softens the palette and doubles as a breakfast bar.",
      "Every drawer was planned around how the client cooks, with spice pull-outs beside the hob and a hidden appliance garage.",
    ],
    palette: [
      { name: "Chalk", hex: "#f2f0ec" },
      { name: "Graphite", hex: "#2c2c2c", light: true },
      { name: "Oak", hex: "#b48a5c" },
    ],
    gallery: [
      img("1484154218962-a197022b5858"),
      img("1507089947368-19c1da9775ae"),
      img("1565183997392-2f6f122e5912"),
      img("1600121848594-d8644e57abab"),
    ],
  },
  {
    slug: "midnight-velvet",
    title: "Midnight Velvet",
    category: "bedroom",
    type: "Bedroom",
    location: "Pune",
    year: 2024,
    area: "900 sq ft",
    scope: "Full Design",
    shape: "tall",
    cover: img("1616594039964-ae9021a400a0"),
    headline: ["A moody, ", "cocooning", " retreat."],
    intro: "A night-owl client wanted a bedroom that felt dramatic, enveloping and impossibly restful.",
    story: [
      "Charcoal walls, a channel-tufted bed and floor-to-ceiling drapes wrap the room in softness. A brass chandelier adds sparkle without glare.",
      "Blackout layers and warm 2700K lighting make it a true sanctuary for sleep.",
    ],
    palette: [
      { name: "Charcoal", hex: "#2e2d2b", light: true },
      { name: "Ivory", hex: "#efe9df" },
      { name: "Brass", hex: "#b89355" },
    ],
    gallery: [
      img("1616594039964-ae9021a400a0"),
      img("1586105251261-72a756497a11"),
      img("1505693416388-ac5ce068fe85"),
      img("1600607687644-c7171b42498f"),
    ],
  },
  {
    slug: "studio-nord",
    title: "Studio Nord",
    category: "commercial",
    type: "Workspace",
    location: "Gurugram",
    year: 2024,
    area: "6,500 sq ft",
    scope: "Turnkey Workplace",
    shape: "wide",
    cover: img("1524758631624-e2822e304c36"),
    headline: ["An office people ", "want", " to come to."],
    intro: "A growing design agency needed a workplace that supported focus, collaboration and the occasional party.",
    story: [
      "We zoned the floor into quiet focus rooms, an open studio and a lounge that doubles as an event space. Soft teal seating and timber screens bring warmth to an industrial shell.",
      "Acoustic panels are disguised as art, and every desk gets natural light.",
    ],
    palette: [
      { name: "Teal", hex: "#2f6466", light: true },
      { name: "Birch", hex: "#e3d3b8" },
      { name: "Concrete", hex: "#a9a59e" },
    ],
    gallery: [
      img("1524758631624-e2822e304c36"),
      img("1497366216548-37526070297c"),
      img("1513694203232-719a280e022f"),
      img("1560448204-e02f11c3d0e2"),
    ],
    testimonial: 1,
  },
  {
    slug: "casa-monolith",
    title: "Casa Monolith",
    category: "living",
    type: "Villa",
    location: "Goa",
    year: 2024,
    area: "5,200 sq ft",
    scope: "Architecture & Interior",
    shape: "wide",
    cover: img("1600607687939-ce8a6c25118c"),
    headline: ["Stone, timber and ", "sea", " air."],
    intro: "A holiday villa designed to blur the line between inside and out.",
    story: [
      "Monolithic stone walls and a single timber feature wall anchor an airy double-height living space. Glass sliders open completely to the pool deck.",
      "Furniture is low and generous, in performance fabrics that shrug off sand and salt.",
    ],
    palette: [
      { name: "Travertine", hex: "#d8cdbb" },
      { name: "Teak", hex: "#8b5a35", light: true },
      { name: "Slate", hex: "#4b4d4f", light: true },
    ],
    gallery: [
      img("1600607687939-ce8a6c25118c"),
      img("1600573472550-8090b5e0745e"),
      img("1600585154340-be6161a56a0c"),
      img("1600047509807-ba8f99d2cdde"),
    ],
  },
  {
    slug: "azure-nook",
    title: "Azure Nook",
    category: "dining",
    type: "Dining",
    location: "Jaipur",
    year: 2023,
    area: "300 sq ft",
    scope: "Styling",
    shape: "square",
    cover: img("1617104551722-3b2d51366400"),
    headline: ["Breakfast in ", "blue", "."],
    intro: "A small breakfast room reimagined with block-print wallpaper and sunny mustard chairs.",
    story: [
      "Indigo block-print paper, a nod to Jaipur's craft heritage, wraps the room. A round tulip table keeps circulation easy in a tight footprint.",
      "A paper lantern and sheer curtains keep the mood bright from sunrise onward.",
    ],
    palette: [
      { name: "Indigo", hex: "#3b5a8c", light: true },
      { name: "Mustard", hex: "#c9a03a" },
      { name: "White", hex: "#f5f3ef" },
    ],
    gallery: [
      img("1617104551722-3b2d51366400"),
      img("1617806118233-18e1de247200"),
      img("1618220179428-22790b461013"),
      img("1600210492486-724fe5c67fb0"),
    ],
  },
  {
    slug: "emerald-salon",
    title: "Emerald Salon",
    category: "living",
    type: "Living",
    location: "Delhi",
    year: 2023,
    area: "1,600 sq ft",
    scope: "Full Design",
    shape: "tall",
    cover: img("1615873968403-89e068629265"),
    headline: ["A collector's ", "salon", "."],
    intro: "A living room built around a growing art collection and a love of bold colour.",
    story: [
      "A deep green feature wall frames a salon-style gallery hang. A cognac leather sofa and sculptural lighting complete the look.",
      "Every artwork is lit individually, and the layout flexes from quiet reading to cocktail parties.",
    ],
    palette: [
      { name: "Forest", hex: "#284a40", light: true },
      { name: "Cognac", hex: "#a5603a", light: true },
      { name: "Bone", hex: "#ede6da" },
    ],
    gallery: [
      img("1615873968403-89e068629265"),
      img("1600494603989-9650cf6ddd3d"),
      img("1554995207-c18c203602cb"),
      img("1600210492486-724fe5c67fb0"),
    ],
  },
  {
    slug: "white-oak-kitchen",
    title: "White Oak Kitchen",
    category: "kitchen",
    type: "Kitchen",
    location: "Gurugram",
    year: 2023,
    area: "380 sq ft",
    scope: "Kitchen Design",
    shape: "wide",
    cover: img("1507089947368-19c1da9775ae"),
    headline: ["Classic, ", "bright", " and built to last."],
    intro: "A timeless family kitchen with shaker cabinetry, marble and glowing globe pendants.",
    story: [
      "Shiplap walls, a marble-topped island and crystal pendants give the space a relaxed, classic feel.",
      "The island seats four, so homework and dinner prep can happen side by side.",
    ],
    palette: [
      { name: "Snow", hex: "#f4f3f0" },
      { name: "Marble", hex: "#dcd9d3" },
      { name: "Oak", hex: "#a98157" },
    ],
    gallery: [
      img("1507089947368-19c1da9775ae"),
      img("1484154218962-a197022b5858"),
      img("1565183997392-2f6f122e5912"),
      img("1552321554-5fefe8c9ef14"),
    ],
  },
  {
    slug: "heritage-suite",
    title: "Heritage Suite",
    category: "bedroom",
    type: "Hospitality",
    location: "Udaipur",
    year: 2023,
    area: "2,400 sq ft",
    scope: "Hospitality Design",
    shape: "square",
    cover: img("1540518614846-7eded433c457"),
    headline: ["Royal roots, ", "modern", " ease."],
    intro: "Guest suites for a boutique heritage hotel, mixing Rajasthani craft with modern comfort.",
    story: [
      "Hand-carved screens, burnt-orange velvet benches and contemporary art bring the old haveli into the present day.",
      "Each suite tells the story of a different local craft, from block printing to blue pottery.",
    ],
    palette: [
      { name: "Saffron", hex: "#c8682f", light: true },
      { name: "Indigo", hex: "#253a5e", light: true },
      { name: "Ivory", hex: "#f1ebe0" },
    ],
    gallery: [
      img("1540518614846-7eded433c457"),
      img("1505693416388-ac5ce068fe85"),
      img("1595526114035-0d45ed16cfbf"),
      img("1552321554-5fefe8c9ef14"),
    ],
  },
  {
    slug: "gallery-workspace",
    title: "Gallery Workspace",
    category: "commercial",
    type: "Office",
    location: "Bengaluru",
    year: 2022,
    area: "8,000 sq ft",
    scope: "Turnkey Workplace",
    shape: "tall",
    cover: img("1497366216548-37526070297c"),
    headline: ["A workplace with ", "gallery", " calm."],
    intro: "A tech company's headquarters designed with the quiet confidence of a contemporary gallery.",
    story: [
      "Long sightlines, polished concrete and floating storage create a calm backdrop for focused work.",
      "Collaboration zones are tucked behind glass so energy stays visible but noise stays contained.",
    ],
    palette: [
      { name: "Concrete", hex: "#b3b0aa" },
      { name: "Ink", hex: "#26313a", light: true },
      { name: "Maple", hex: "#d4b58a" },
    ],
    gallery: [
      img("1497366216548-37526070297c"),
      img("1524758631624-e2822e304c36"),
      img("1513694203232-719a280e022f"),
      img("1560448204-e02f11c3d0e2"),
    ],
  },
  {
    slug: "boho-loft",
    title: "Boho Loft",
    category: "living",
    type: "Living",
    location: "Mumbai",
    year: 2022,
    area: "1,100 sq ft",
    scope: "Design & Styling",
    shape: "wide",
    cover: img("1556228453-efd6c1ff04f6"),
    headline: ["Easy, ", "sunlit", " and full of texture."],
    intro: "A relaxed loft for a young creative couple who love plants, vintage finds and hosting.",
    story: [
      "Blush armchairs, a tan leather sofa and a macramé wall hanging set an easy, sunny tone.",
      "We sourced vintage pieces from local markets and mixed them with a few hard-working modern essentials.",
    ],
    palette: [
      { name: "Blush", hex: "#d9a9a0" },
      { name: "Tan", hex: "#a8693f", light: true },
      { name: "Cream", hex: "#f2ebdf" },
    ],
    gallery: [
      img("1556228453-efd6c1ff04f6"),
      img("1631679706909-1844bbd07221"),
      img("1618220179428-22790b461013"),
      img("1567016432779-094069958ea5"),
    ],
  },
  {
    slug: "open-house",
    title: "Open House",
    category: "kitchen",
    type: "Kitchen",
    location: "Chandigarh",
    year: 2022,
    area: "2,000 sq ft",
    scope: "Renovation",
    shape: "square",
    cover: img("1565183997392-2f6f122e5912"),
    headline: ["Walls down, ", "life", " in."],
    intro: "A closed-off 90s floor plan opened into one bright kitchen, dining and living space.",
    story: [
      "Removing two walls created long sightlines from the front door to the garden. A sage island anchors the kitchen without blocking the view.",
      "Pop-art prints and a cowhide rug keep the open space playful.",
    ],
    palette: [
      { name: "Sage", hex: "#8a9a85", light: true },
      { name: "White", hex: "#f4f3f0" },
      { name: "Walnut", hex: "#6b4a33", light: true },
    ],
    gallery: [
      img("1565183997392-2f6f122e5912"),
      img("1507089947368-19c1da9775ae"),
      img("1600121848594-d8644e57abab"),
      img("1502005229762-cf1b2da7c5d6"),
    ],
  },
];

export const featuredSlugs = ["the-ochre-house", "linen-and-light", "verdant-dining", "casa-monolith"];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
