/**
 * TURATH demo dataset — TURATH DOUZ pilot.
 * All records below are clearly-labelled DEMO records used to prove the
 * platform model. They are illustrative and are not real artisan biographies
 * or verified historical claims.
 */

import qashabiyaImg from "@/assets/product-qashabiya.jpg";
import blanketImg from "@/assets/product-blanket.jpg";
import basketImg from "@/assets/product-basket.jpg";

export type AccessLevel = "PUBLIC" | "COMMUNITY" | "COMMERCIAL" | "RESTRICTED" | "PRIVATE";
export type RecordStatus =
  | "DRAFT"
  | "SUBMITTED"
  | "COMMUNITY_REVIEW"
  | "EVIDENCE_REVIEW"
  | "VERIFIED"
  | "PUBLISHED";

export type HealthLevel = "Strong" | "Growing" | "Medium" | "Needs attention";

export interface Region {
  id: string;
  name: string;
  nameAr: string;
  country: string;
  summary: string;
}

export interface Craft {
  id: string;
  name: string;
  regionId: string;
  summary: string;
  health: Record<string, HealthLevel>;
  artisanCount: number;
  apprenticeCount: number;
  demandIndex: number;
}

export interface Technique {
  id: string;
  name: string;
  craftId: string;
  summary: string;
  access: AccessLevel;
}

export interface Material {
  id: string;
  name: string;
  regionId: string;
  summary: string;
}

export interface Pattern {
  id: string;
  name: string;
  craftId: string;
  summary: string;
  access: AccessLevel;
}

export interface EvidenceItem {
  date: string;
  type: "Photography" | "Interview" | "Document" | "Registration" | "Verification" | "Version";
  label: string;
  reviewer?: string;
  note?: string;
}

export interface HeritageDNA {
  id: string;
  title: string;
  regionId: string;
  craftId: string;
  techniqueId: string;
  materialIds: string[];
  patternIds: string[];
  shapes: string[];
  colorVocabulary: string[];
  tools: string[];
  culturalContext: string;
  historicalReferences: string[];
  variations: string[];
  timeline: EvidenceItem[];
  communityStatus: string;
  access: AccessLevel;
  status: RecordStatus;
  consent: {
    provider: string;
    status: string;
    attribution: string;
    usage: string[];
  };
  license: {
    attributionRequired: boolean;
    commercialUse: string;
    modification: string;
    consultation: string;
    documentation: string;
  };
  artisanIds: string[];
  productIds: string[];
  relatedDnaIds: string[];
}

export interface Artisan {
  id: string;
  name: string;
  regionId: string;
  craftId: string;
  techniqueIds: string[];
  skills: string[];
  years: number;
  bio: string;
  languages: string[];
  verified: boolean;
  mentorId?: string;
  apprenticeIds: string[];
  productIds: string[];
  business: string;
}

export interface Product {
  id: string;
  passportId: string;
  name: string;
  artisanId: string;
  dnaId: string;
  regionId: string;
  materialIds: string[];
  techniqueId: string;
  image: string;
  priceTnd: number;
  available: boolean;
  international: boolean;
  collection: string;
  verification: {
    status: "TURATH VERIFIED" | "UNDER REVIEW" | "PENDING EVIDENCE";
    date?: string;
    reviewer?: string;
    notes?: string;
  };
  story: string;
  history: EvidenceItem[];
  impact: { label: string; share: number }[];
}

export const regions: Region[] = [
  {
    id: "TN-DZ-REGION-0001",
    name: "Douz",
    nameAr: "دوز",
    country: "Tunisia",
    summary:
      "Oasis town at the edge of the Grand Erg Oriental, historically associated with pastoral wool and camel-hair crafts. Pilot region of TURATH DOUZ.",
  },
  {
    id: "TN-KB-REGION-0002",
    name: "Kébili",
    nameAr: "قبلي",
    country: "Tunisia",
    summary:
      "Governorate surrounding Douz, with palm-grove agriculture and associated palm-frond craft practice.",
  },
];

export const crafts: Craft[] = [
  {
    id: "TN-DZ-CRAFT-0001",
    name: "Wool weaving",
    regionId: "TN-DZ-REGION-0001",
    summary:
      "Loom weaving of sheep wool into garments and household textiles, documented in the Douz pilot as a household and workshop practice.",
    health: {
      Documentation: "Strong",
      "Artisan network": "Medium",
      Transmission: "Needs attention",
      "Market demand": "Growing",
      "Evidence quality": "Strong",
      "Community participation": "Medium",
    },
    artisanCount: 3,
    apprenticeCount: 2,
    demandIndex: 78,
  },
  {
    id: "TN-DZ-CRAFT-0002",
    name: "Camel-hair craft",
    regionId: "TN-DZ-REGION-0001",
    summary:
      "Spinning and weaving of camel hair into durable textiles, historically linked to pastoral and desert mobility.",
    health: {
      Documentation: "Medium",
      "Artisan network": "Needs attention",
      Transmission: "Needs attention",
      "Market demand": "Medium",
      "Evidence quality": "Medium",
      "Community participation": "Medium",
    },
    artisanCount: 1,
    apprenticeCount: 0,
    demandIndex: 44,
  },
  {
    id: "TN-KB-CRAFT-0003",
    name: "Palm-frond basketry",
    regionId: "TN-KB-REGION-0002",
    summary:
      "Plaiting of dried palm fronds into baskets, mats and containers used in oasis households.",
    health: {
      Documentation: "Medium",
      "Artisan network": "Growing",
      Transmission: "Medium",
      "Market demand": "Growing",
      "Evidence quality": "Medium",
      "Community participation": "Strong",
    },
    artisanCount: 2,
    apprenticeCount: 3,
    demandIndex: 61,
  },
];

export const techniques: Technique[] = [
  {
    id: "TN-DZ-TECH-0001",
    name: "Traditional ground-loom weaving",
    craftId: "TN-DZ-CRAFT-0001",
    summary:
      "Weaving on a horizontal ground loom, with warp preparation, weft insertion and finishing done by hand.",
    access: "PUBLIC",
  },
  {
    id: "TN-DZ-TECH-0002",
    name: "Hand spinning of raw wool",
    craftId: "TN-DZ-CRAFT-0001",
    summary: "Carding, spinning and plying of washed wool prior to weaving.",
    access: "PUBLIC",
  },
  {
    id: "TN-DZ-TECH-0003",
    name: "Camel-hair blending",
    craftId: "TN-DZ-CRAFT-0002",
    summary:
      "Blending camel hair with wool for durability. Detailed proportions are recorded at COMMUNITY access level.",
    access: "COMMUNITY",
  },
  {
    id: "TN-KB-TECH-0004",
    name: "Coiled palm plaiting",
    craftId: "TN-KB-CRAFT-0003",
    summary: "Coiling and stitching of plaited palm strips into rigid forms.",
    access: "PUBLIC",
  },
];

export const materials: Material[] = [
  {
    id: "TN-DZ-MAT-0001",
    name: "Sheep wool",
    regionId: "TN-DZ-REGION-0001",
    summary: "Local undyed sheep wool, washed and hand spun.",
  },
  {
    id: "TN-DZ-MAT-0002",
    name: "Camel hair",
    regionId: "TN-DZ-REGION-0001",
    summary: "Fibre collected during seasonal moulting, spun for durable textiles.",
  },
  {
    id: "TN-KB-MAT-0003",
    name: "Palm frond",
    regionId: "TN-KB-REGION-0002",
    summary: "Dried date-palm fronds prepared and split for plaiting.",
  },
  {
    id: "TN-DZ-MAT-0004",
    name: "Natural dyes",
    regionId: "TN-DZ-REGION-0001",
    summary: "Plant and mineral dye sources documented at COMMUNITY level.",
  },
];

export const patterns: Pattern[] = [
  {
    id: "TN-DZ-PATTERN-0007",
    name: "Desert diamond band",
    craftId: "TN-DZ-CRAFT-0001",
    summary:
      "Repeating diamond motif organised in horizontal bands, documented on blankets and garment borders in the Douz pilot.",
    access: "PUBLIC",
  },
  {
    id: "TN-DZ-PATTERN-0011",
    name: "Stepped edge motif",
    craftId: "TN-DZ-CRAFT-0001",
    summary: "Stepped triangular border motif used on textile edges.",
    access: "PUBLIC",
  },
  {
    id: "TN-KB-PATTERN-0014",
    name: "Spiral coil rhythm",
    craftId: "TN-KB-CRAFT-0003",
    summary: "Visible coil rhythm produced by regular stitch spacing in basketry.",
    access: "PUBLIC",
  },
];

export const heritageDna: HeritageDNA[] = [
  {
    id: "TN-DZ-WEAVING-0001",
    title: "Douz wool weaving — Qashabiya family",
    regionId: "TN-DZ-REGION-0001",
    craftId: "TN-DZ-CRAFT-0001",
    techniqueId: "TN-DZ-TECH-0001",
    materialIds: ["TN-DZ-MAT-0001", "TN-DZ-MAT-0004"],
    patternIds: ["TN-DZ-PATTERN-0007", "TN-DZ-PATTERN-0011"],
    shapes: ["Hooded cloak", "Rectangular panel", "Banded border"],
    colorVocabulary: ["Undyed cream", "Warm brown", "Charcoal", "Terracotta"],
    tools: ["Ground loom", "Wooden comb", "Hand spindle", "Shears"],
    culturalContext:
      "Documented in the Douz pilot as a winter garment practice associated with pastoral life in southern Tunisia. Context statements come from artisan interviews collected for TURATH and are labelled as such.",
    historicalReferences: [
      "TURATH field documentation, Douz (demo record)",
      "Artisan oral testimony, recorded with consent (demo record)",
    ],
    variations: ["Plain undyed", "Banded border", "Heavier winter weight"],
    timeline: [
      { date: "2024", type: "Photography", label: "First documentation of loom setup and finished garment" },
      { date: "2025", type: "Interview", label: "Artisan interview recorded with consent", reviewer: "TURATH documentation team" },
      { date: "2026", type: "Registration", label: "Heritage DNA record registered" },
      { date: "2026", type: "Verification", label: "Verified according to TURATH's verification criteria", reviewer: "TURATH review board" },
    ],
    communityStatus: "Actively practised — transmission flagged as needing attention",
    access: "PUBLIC",
    status: "PUBLISHED",
    consent: {
      provider: "Participating artisans of the Douz pilot group",
      status: "Consent recorded for public documentation and commercial listing",
      attribution: "Attribute to the named artisan and to TURATH DOUZ documentation",
      usage: ["Public display", "Commercial listing of registered products", "Research with attribution"],
    },
    license: {
      attributionRequired: true,
      commercialUse: "Permitted for registered products; other commercial use requires permission",
      modification: "Derivative patterns require community consultation",
      consultation: "Required before publishing new technique detail",
      documentation: "Any reuse must record source and date",
    },
    artisanIds: ["TN-DZ-ARTISAN-0021", "TN-DZ-ARTISAN-0022"],
    productIds: ["TN-DZ-PRODUCT-0142", "TN-DZ-PRODUCT-0143"],
    relatedDnaIds: ["TN-DZ-CAMEL-0002"],
  },
  {
    id: "TN-DZ-CAMEL-0002",
    title: "Douz camel-hair textile",
    regionId: "TN-DZ-REGION-0001",
    craftId: "TN-DZ-CRAFT-0002",
    techniqueId: "TN-DZ-TECH-0003",
    materialIds: ["TN-DZ-MAT-0002", "TN-DZ-MAT-0001"],
    patternIds: ["TN-DZ-PATTERN-0011"],
    shapes: ["Blanket", "Cloak panel"],
    colorVocabulary: ["Camel beige", "Warm brown"],
    tools: ["Ground loom", "Hand spindle"],
    culturalContext:
      "Recorded as a durable textile practice connected to desert mobility. Technique proportions are held at COMMUNITY access level at the request of contributors.",
    historicalReferences: ["TURATH field documentation, Douz (demo record)"],
    variations: ["Pure camel hair", "Camel-wool blend"],
    timeline: [
      { date: "2025", type: "Photography", label: "Material and spinning documentation" },
      { date: "2026", type: "Registration", label: "Heritage DNA record registered" },
      { date: "2026", type: "Version", label: "Technique detail reclassified to COMMUNITY access", reviewer: "Consent committee" },
    ],
    communityStatus: "Few active practitioners — priority for transmission support",
    access: "COMMUNITY",
    status: "EVIDENCE_REVIEW",
    consent: {
      provider: "Contributing artisan household",
      status: "Partial consent — technique detail restricted",
      attribution: "Attribute to TURATH DOUZ documentation",
      usage: ["Public summary only", "Commercial listing of registered products"],
    },
    license: {
      attributionRequired: true,
      commercialUse: "Requires permission",
      modification: "Not permitted without community consultation",
      consultation: "Required",
      documentation: "Required",
    },
    artisanIds: ["TN-DZ-ARTISAN-0023"],
    productIds: ["TN-DZ-PRODUCT-0144"],
    relatedDnaIds: ["TN-DZ-WEAVING-0001"],
  },
  {
    id: "TN-KB-BASKETRY-0003",
    title: "Oasis palm-frond basketry",
    regionId: "TN-KB-REGION-0002",
    craftId: "TN-KB-CRAFT-0003",
    techniqueId: "TN-KB-TECH-0004",
    materialIds: ["TN-KB-MAT-0003"],
    patternIds: ["TN-KB-PATTERN-0014"],
    shapes: ["Round basket", "Flat mat", "Lidded container"],
    colorVocabulary: ["Natural straw", "Sun-bleached pale"],
    tools: ["Awl", "Water basin", "Knife"],
    culturalContext:
      "Household craft documented across the Kébili oases, frequently practised alongside date agriculture.",
    historicalReferences: ["TURATH field documentation, Kébili (demo record)"],
    variations: ["Handled basket", "Deep storage form"],
    timeline: [
      { date: "2025", type: "Photography", label: "Workshop documentation" },
      { date: "2026", type: "Registration", label: "Heritage DNA record registered" },
    ],
    communityStatus: "Actively practised with apprentices",
    access: "PUBLIC",
    status: "VERIFIED",
    consent: {
      provider: "Kébili basketry group",
      status: "Consent recorded for public documentation",
      attribution: "Attribute to the named artisan group",
      usage: ["Public display", "Commercial listing", "Education"],
    },
    license: {
      attributionRequired: true,
      commercialUse: "Permitted for registered products",
      modification: "Allowed with attribution",
      consultation: "Recommended",
      documentation: "Required",
    },
    artisanIds: ["TN-KB-ARTISAN-0024"],
    productIds: ["TN-KB-PRODUCT-0145"],
    relatedDnaIds: ["TN-DZ-WEAVING-0001"],
  },
];

export const artisans: Artisan[] = [
  {
    id: "TN-DZ-ARTISAN-0021",
    name: "Artisan A — Douz weaver (demo profile)",
    regionId: "TN-DZ-REGION-0001",
    craftId: "TN-DZ-CRAFT-0001",
    techniqueIds: ["TN-DZ-TECH-0001", "TN-DZ-TECH-0002"],
    skills: ["Ground-loom weaving", "Wool spinning", "Border finishing"],
    years: 34,
    bio: "Demo profile created for the TURATH DOUZ pilot. Practises ground-loom wool weaving and contributes documentation and interviews to the registry.",
    languages: ["العربية", "Français"],
    verified: true,
    apprenticeIds: ["TN-DZ-ARTISAN-0022"],
    productIds: ["TN-DZ-PRODUCT-0142", "TN-DZ-PRODUCT-0143"],
    business: "Workshop enquiries handled through TURATH",
  },
  {
    id: "TN-DZ-ARTISAN-0022",
    name: "Artisan B — Douz weaver (demo profile)",
    regionId: "TN-DZ-REGION-0001",
    craftId: "TN-DZ-CRAFT-0001",
    techniqueIds: ["TN-DZ-TECH-0001"],
    skills: ["Ground-loom weaving", "Pattern banding"],
    years: 12,
    bio: "Demo profile. Trained within the Douz weaving group and now mentors an apprentice, with consent recorded for the transmission record.",
    languages: ["العربية", "Français", "English"],
    verified: true,
    mentorId: "TN-DZ-ARTISAN-0021",
    apprenticeIds: ["TN-DZ-APPRENTICE-0031"],
    productIds: ["TN-DZ-PRODUCT-0143"],
    business: "Workshop enquiries handled through TURATH",
  },
  {
    id: "TN-DZ-ARTISAN-0023",
    name: "Artisan C — camel-hair weaver (demo profile)",
    regionId: "TN-DZ-REGION-0001",
    craftId: "TN-DZ-CRAFT-0002",
    techniqueIds: ["TN-DZ-TECH-0003"],
    skills: ["Camel-hair spinning", "Blended weaving"],
    years: 27,
    bio: "Demo profile. Works with camel hair and wool blends; parts of the technique record are held at COMMUNITY access level by request.",
    languages: ["العربية"],
    verified: false,
    apprenticeIds: [],
    productIds: ["TN-DZ-PRODUCT-0144"],
    business: "Contact information withheld — consent not granted",
  },
  {
    id: "TN-KB-ARTISAN-0024",
    name: "Artisan D — palm basketry (demo profile)",
    regionId: "TN-KB-REGION-0002",
    craftId: "TN-KB-CRAFT-0003",
    techniqueIds: ["TN-KB-TECH-0004"],
    skills: ["Coiled plaiting", "Frond preparation"],
    years: 19,
    bio: "Demo profile. Practises coiled palm plaiting and teaches three apprentices within a community group.",
    languages: ["العربية", "Français"],
    verified: true,
    apprenticeIds: ["TN-KB-APPRENTICE-0032", "TN-KB-APPRENTICE-0033"],
    productIds: ["TN-KB-PRODUCT-0145"],
    business: "Group enquiries handled through TURATH",
  },
];

export const apprentices = [
  { id: "TN-DZ-APPRENTICE-0031", name: "Apprentice C (demo)", mentorId: "TN-DZ-ARTISAN-0022", craftId: "TN-DZ-CRAFT-0001", since: "2025" },
  { id: "TN-KB-APPRENTICE-0032", name: "Apprentice D (demo)", mentorId: "TN-KB-ARTISAN-0024", craftId: "TN-KB-CRAFT-0003", since: "2024" },
  { id: "TN-KB-APPRENTICE-0033", name: "Apprentice E (demo)", mentorId: "TN-KB-ARTISAN-0024", craftId: "TN-KB-CRAFT-0003", since: "2026" },
];

export const products: Product[] = [
  {
    id: "TN-DZ-PRODUCT-0142",
    passportId: "TN-TURATH-DZ-000123",
    name: "Handwoven wool Qashabiya",
    artisanId: "TN-DZ-ARTISAN-0021",
    dnaId: "TN-DZ-WEAVING-0001",
    regionId: "TN-DZ-REGION-0001",
    materialIds: ["TN-DZ-MAT-0001"],
    techniqueId: "TN-DZ-TECH-0001",
    image: qashabiyaImg,
    priceTnd: 890,
    available: true,
    international: true,
    collection: "Douz Winter",
    verification: {
      status: "TURATH VERIFIED",
      date: "2026-03-14",
      reviewer: "TURATH review board",
      notes: "Photographic evidence, artisan testimony and material declaration reviewed.",
    },
    story:
      "Woven on a ground loom from locally spun sheep wool. The border banding follows the desert diamond vocabulary recorded in Heritage DNA TN-DZ-WEAVING-0001.",
    history: [
      { date: "2026-01-08", type: "Registration", label: "Product registered by artisan" },
      { date: "2026-01-20", type: "Photography", label: "Creation photographs uploaded" },
      { date: "2026-02-11", type: "Document", label: "Material declaration attached" },
      { date: "2026-03-14", type: "Verification", label: "Verified according to TURATH's verification criteria", reviewer: "TURATH review board" },
    ],
    impact: [
      { label: "Artisan value", share: 62 },
      { label: "Platform fee", share: 12 },
      { label: "Logistics", share: 16 },
      { label: "Documentation fund", share: 6 },
      { label: "Community fund", share: 4 },
    ],
  },
  {
    id: "TN-DZ-PRODUCT-0143",
    passportId: "TN-TURATH-DZ-000124",
    name: "Desert diamond wool blanket",
    artisanId: "TN-DZ-ARTISAN-0022",
    dnaId: "TN-DZ-WEAVING-0001",
    regionId: "TN-DZ-REGION-0001",
    materialIds: ["TN-DZ-MAT-0001", "TN-DZ-MAT-0004"],
    techniqueId: "TN-DZ-TECH-0001",
    image: blanketImg,
    priceTnd: 640,
    available: true,
    international: true,
    collection: "Douz Winter",
    verification: {
      status: "TURATH VERIFIED",
      date: "2026-04-02",
      reviewer: "TURATH review board",
    },
    story:
      "A banded blanket using the stepped edge motif. Dye sources are documented at COMMUNITY access level and summarised publicly.",
    history: [
      { date: "2026-02-02", type: "Registration", label: "Product registered by artisan" },
      { date: "2026-03-01", type: "Photography", label: "Creation photographs uploaded" },
      { date: "2026-04-02", type: "Verification", label: "Verified according to TURATH's verification criteria" },
    ],
    impact: [
      { label: "Artisan value", share: 60 },
      { label: "Platform fee", share: 12 },
      { label: "Logistics", share: 18 },
      { label: "Documentation fund", share: 6 },
      { label: "Community fund", share: 4 },
    ],
  },
  {
    id: "TN-DZ-PRODUCT-0144",
    passportId: "TN-TURATH-DZ-000125",
    name: "Camel-hair travel blanket",
    artisanId: "TN-DZ-ARTISAN-0023",
    dnaId: "TN-DZ-CAMEL-0002",
    regionId: "TN-DZ-REGION-0001",
    materialIds: ["TN-DZ-MAT-0002", "TN-DZ-MAT-0001"],
    techniqueId: "TN-DZ-TECH-0003",
    image: blanketImg,
    priceTnd: 720,
    available: false,
    international: false,
    collection: "Desert Mobility",
    verification: {
      status: "UNDER REVIEW",
      notes: "Awaiting material declaration and second evidence item.",
    },
    story:
      "Blended camel-hair textile. The public record carries a summary only; the blending proportions are held at COMMUNITY access level.",
    history: [
      { date: "2026-05-04", type: "Registration", label: "Product submitted by artisan" },
      { date: "2026-05-18", type: "Photography", label: "Single creation photograph uploaded" },
    ],
    impact: [
      { label: "Artisan value", share: 64 },
      { label: "Platform fee", share: 12 },
      { label: "Logistics", share: 14 },
      { label: "Documentation fund", share: 6 },
      { label: "Community fund", share: 4 },
    ],
  },
  {
    id: "TN-KB-PRODUCT-0145",
    passportId: "TN-TURATH-KB-000126",
    name: "Coiled palm storage basket",
    artisanId: "TN-KB-ARTISAN-0024",
    dnaId: "TN-KB-BASKETRY-0003",
    regionId: "TN-KB-REGION-0002",
    materialIds: ["TN-KB-MAT-0003"],
    techniqueId: "TN-KB-TECH-0004",
    image: basketImg,
    priceTnd: 180,
    available: true,
    international: true,
    collection: "Oasis Household",
    verification: {
      status: "TURATH VERIFIED",
      date: "2026-04-21",
      reviewer: "TURATH review board",
    },
    story:
      "Coiled from prepared date-palm fronds. Stitch spacing produces the spiral coil rhythm recorded as pattern TN-KB-PATTERN-0014.",
    history: [
      { date: "2026-03-10", type: "Registration", label: "Product registered by artisan" },
      { date: "2026-03-28", type: "Interview", label: "Short artisan testimony recorded" },
      { date: "2026-04-21", type: "Verification", label: "Verified according to TURATH's verification criteria" },
    ],
    impact: [
      { label: "Artisan value", share: 58 },
      { label: "Platform fee", share: 12 },
      { label: "Logistics", share: 20 },
      { label: "Documentation fund", share: 6 },
      { label: "Community fund", share: 4 },
    ],
  },
];

export const currencies = [
  { code: "TND", label: "Tunisian dinar", rateNote: "base" },
  { code: "EUR", label: "Euro", rateNote: "rate resolved at checkout" },
  { code: "USD", label: "US dollar", rateNote: "rate resolved at checkout" },
];

export const verificationQueue = [
  { id: "TN-DZ-PRODUCT-0144", type: "Product", subject: "Camel-hair travel blanket", state: "Needs information", reviewer: "R. Ben Salah (demo)", date: "2026-05-20", notes: "Second evidence item requested." },
  { id: "TN-DZ-CAMEL-0002", type: "Heritage DNA", subject: "Douz camel-hair textile", state: "Under review", reviewer: "TURATH review board", date: "2026-05-12", notes: "Consent scope confirmed with contributor." },
  { id: "TN-KB-PATTERN-0014", type: "Pattern", subject: "Spiral coil rhythm", state: "Approved", reviewer: "TURATH review board", date: "2026-04-18", notes: "Public access level confirmed." },
  { id: "TN-DZ-ARTISAN-0023", type: "Artisan", subject: "Artisan C profile", state: "Pending", reviewer: "—", date: "2026-05-22", notes: "Awaiting consent form for contact details." },
];

export const similarityAlerts = [
  { id: "SIM-0009", submitted: "2026-05-19", dnaId: "TN-DZ-PATTERN-0007", score: 87, state: "Requires human review", source: "External marketplace listing (demo)" },
  { id: "SIM-0010", submitted: "2026-05-21", dnaId: "TN-DZ-PATTERN-0011", score: 63, state: "Requires human review", source: "Image submitted by community member (demo)" },
];

export const adoptPrograms = [
  { id: "ADOPT-0001", craftId: "TN-DZ-CRAFT-0001", title: "Support Douz wool weaving", monthlyTnd: 60, supporters: 24, allocation: [ { label: "Artisan support", share: 45 }, { label: "Apprenticeship", share: 25 }, { label: "Documentation", share: 18 }, { label: "Community activity", share: 12 } ] },
  { id: "ADOPT-0002", craftId: "TN-DZ-CRAFT-0002", title: "Support camel-hair transmission", monthlyTnd: 80, supporters: 9, allocation: [ { label: "Artisan support", share: 40 }, { label: "Apprenticeship", share: 32 }, { label: "Documentation", share: 20 }, { label: "Community activity", share: 8 } ] },
];

/* lookups */
export const byId = <T extends { id: string }>(list: T[], id?: string) => list.find((x) => x.id === id);
export const getRegion = (id?: string) => byId(regions, id);
export const getCraft = (id?: string) => byId(crafts, id);
export const getTechnique = (id?: string) => byId(techniques, id);
export const getMaterial = (id?: string) => byId(materials, id);
export const getPattern = (id?: string) => byId(patterns, id);
export const getDna = (id?: string) => byId(heritageDna, id);
export const getArtisan = (id?: string) => byId(artisans, id);
export const getProduct = (id?: string) => byId(products, id);
export const getProductByPassport = (pid: string) => products.find((p) => p.passportId === pid);

export const registryEntities = [
  { kind: "Region", items: regions.map((r) => ({ id: r.id, name: r.name, summary: r.summary })) },
  { kind: "Craft", items: crafts.map((c) => ({ id: c.id, name: c.name, summary: c.summary })) },
  { kind: "Technique", items: techniques.map((t) => ({ id: t.id, name: t.name, summary: t.summary })) },
  { kind: "Material", items: materials.map((m) => ({ id: m.id, name: m.name, summary: m.summary })) },
  { kind: "Pattern", items: patterns.map((p) => ({ id: p.id, name: p.name, summary: p.summary })) },
  { kind: "Heritage DNA", items: heritageDna.map((d) => ({ id: d.id, name: d.title, summary: d.culturalContext })) },
  { kind: "Artisan", items: artisans.map((a) => ({ id: a.id, name: a.name, summary: a.bio })) },
  { kind: "Product", items: products.map((p) => ({ id: p.id, name: p.name, summary: p.story })) },
];
