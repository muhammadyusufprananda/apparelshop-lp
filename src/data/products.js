/**
 * Curated Apparel Products Collection
 * Editorial photography with neutral luxury palettes, tailoring details, and sizing specs.
 */

export const CATEGORIES = [
  { id: "all", label: "Semua Koleksi" },
  { id: "outerwear", label: "Outerwear & Coats" },
  { id: "tailored", label: "Tailored & Suits" },
  { id: "tops", label: "Knitwear & Shirts" },
  { id: "bottoms", label: "Trousers & Skirts" }
];

export const PRODUCTS = [
  {
    id: "aur-01",
    name: "The Oversized Alabaster Trench",
    edition: "Edition No. 04 / Autumn Capsule",
    category: "outerwear",
    price: 1890000,
    originalPrice: 2250000,
    badge: "Limited Edition",
    badgeType: "gold",
    stock: "Sisa 5 Pcs",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=85",
    hoverImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Alabaster Ecru", hex: "#F3F0EB" },
      { name: "Charcoal Slate", hex: "#222428" }
    ],
    material: "100% Water-repellent Italian Gabardine Cotton with Horn Buttons",
    fit: "Relaxed tailored drape with structured storm flaps & detachable belt",
    description: "Trench coat berpotongan agung dengan proporsi bervolume elegan. Ditenun dari katun gabardine Italia yang tahan hembusan angin namun bernapas dengan leluasa. Hadir dengan aksen kancing tanduk alami dan gesper bersaput tembaga halus.",
    careInstructions: "Dry clean only. Simpan di tempat berventilasi baik dengan gantungan kayu berkontur lebar."
  },
  {
    id: "aur-02",
    name: "Double-Breasted Obsidian Blazer",
    edition: "Signature Atelier Series",
    category: "tailored",
    price: 1650000,
    originalPrice: null,
    badge: "Bespoke Cut",
    badgeType: "dark",
    stock: "Ready Stock",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=85",
    hoverImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1200&q=85"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Obsidian Black", hex: "#111215" },
      { name: "Warm Cashmere", hex: "#C7BEAB" }
    ],
    material: "Virgin Wool Blend with Full Bemberg Cupro Silk Lining",
    fit: "Sharp structured shoulders, modern unvented back, architectural drape",
    description: "Jas double-breasted dengan konstruksi kanvas setengah terapung yang menyesuaikan bentuk lekuk tubuh seiring waktu. Memberikan aura ketegasan sekaligus keleluasaan gerak yang tak lekang oleh waktu.",
    careInstructions: "Specialist dry clean. Uap halus untuk merapikan serat wol."
  },
  {
    id: "aur-03",
    name: "Cashmere Ribbed Knit Cardigan",
    edition: "Quiet Form Collection",
    category: "tops",
    price: 1150000,
    originalPrice: 1390000,
    badge: "Staff Pick",
    badgeType: "gold",
    stock: "Tersisa 3 Pcs",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1200&q=85",
    hoverImage: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=85"
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Oatmeal Dune", hex: "#D8D0C5" },
      { name: "Midnight Navy", hex: "#1D232C" }
    ],
    material: "70% Grade-A Mongolian Cashmere, 30% Mulberry Silk",
    fit: "Fluid relaxed silhouette dengan dropped shoulders & kerah selendang tebal",
    description: "Rajutan kasmir berbobot 12-gauge yang lembut bagai sentuhan sutra di atas kulit. Dirancang untuk kehangatan berkelas tanpa terasa berat, cocok untuk transisi suasana santai hingga jamuan intim.",
    careInstructions: "Cuci tangan dengan air dingin menggunakan sabun wol khusus. Keringkan mendatar."
  },
  {
    id: "aur-04",
    name: "Pleated Wide-Leg Wool Trousers",
    edition: "Sculptural Tailoring",
    category: "bottoms",
    price: 990000,
    originalPrice: null,
    badge: "Bestseller",
    badgeType: "dark",
    stock: "Ready Stock",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85",
    hoverImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Deep Taupe", hex: "#4E4844" },
      { name: "Smoky Black", hex: "#1B1B1C" },
      { name: "Ivory Sand", hex: "#EBE6DD" }
    ],
    material: "High-Twist Tropical Wool Blend, Anti-Wrinkle Finish",
    fit: "High-waist dengan lipatan ganda (double pleat) dan jatuhan kain menyapu lantai",
    description: "Celana panjang bersiluet lebar dengan garis lipit presisi yang memberi kesan jenjang dan anggun. Kain berbobot jatuh yang tidak mudah kusut bahkan setelah seharian beraktivitas.",
    careInstructions: "Dry clean dianjurkan atau setrika uap temperatur sedang dengan kain pelindung."
  },
  {
    id: "aur-05",
    name: "Architectural Silk Poplin Shirt",
    edition: "Pure Minimaliste",
    category: "tops",
    price: 880000,
    originalPrice: 1050000,
    badge: "New Silhouette",
    badgeType: "gold",
    stock: "Ready Stock",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&q=85",
    hoverImage: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&w=1200&q=85"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Crisp Chalk White", hex: "#F9F9F8" },
      { name: "Muted Sage", hex: "#8A9488" }
    ],
    material: "85% Egyptian Giza Cotton, 15% Mulberry Raw Silk",
    fit: "Structured stand collar dengan hidden placket & elongated cuffs",
    description: "Kemeja bergaris potong minimalis dengan kerah arsitektural dan penutup kancing tersembunyi (fly front). Memberikan sentuhan visual yang bersih, modern, dan sangat megah.",
    careInstructions: "Cuci mesin putaran lembut suhu 30°C. Jangan gunakan pemutih."
  },
  {
    id: "aur-06",
    name: "The Sculpted Cocoon Wool Coat",
    edition: "Edition No. 04 / Heavy Outer",
    category: "outerwear",
    price: 2450000,
    originalPrice: 2800000,
    badge: "Atelier Masterpiece",
    badgeType: "gold",
    stock: "Sisa 2 Pcs",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=85",
    hoverImage: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=85"
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Camel Sand", hex: "#C2A379" },
      { name: "Pitch Black", hex: "#0E0E10" }
    ],
    material: "100% Double-Faced Australian Merino Wool (900 GSM)",
    fit: "Cocoon rounded shoulder, seamless lapel, hidden magnetic closure",
    description: "Mahakarya outerwear musim dingin dan transisi cuaca. Diproduksi menggunakan teknik jahitan tangan double-faced tanpa furing tebal yang kaku, menghasilkan jatuh siluet kepompong yang anggun dan berwibawa.",
    careInstructions: "Specialist wool dry clean only. Simpan dengan sarung kain pelindung debu katun."
  },
  {
    id: "aur-07",
    name: "Tailored Minimalist Vest & Waistcoat",
    edition: "Sartorial Harmony",
    category: "tailored",
    price: 790000,
    originalPrice: null,
    badge: "Trending",
    badgeType: "dark",
    stock: "Ready Stock",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85",
    hoverImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85"
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Warm Greige", hex: "#BCB5A6" },
      { name: "Deep Charcoal", hex: "#1A1A1D" }
    ],
    material: "Lightweight Wool Viscose Blend dengan Adjustable Back Cinch",
    fit: "Close-to-body tapered silhouette, deep V-neck, asymmetrical hemline",
    description: "Rompi jas modern yang dapat dikenakan mandiri sebagai atasan tunggal yang berani atau dipadankan di bawah jas oversized untuk statement sartorial bertingkat.",
    careInstructions: "Dry clean atau cuci tangan ringan suhu dingin."
  },
  {
    id: "aur-08",
    name: "Bias-Cut Satin Maxi Column Skirt",
    edition: "Evening Restraint",
    category: "bottoms",
    price: 840000,
    originalPrice: 990000,
    badge: "New Release",
    badgeType: "gold",
    stock: "Ready Stock",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85",
    hoverImage: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85"
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Champagne Pearl", hex: "#E7DFD3" },
      { name: "Noir Gloss", hex: "#151515" }
    ],
    material: "Heavyweight Japanese Triacetate Silk Lustre",
    fit: "Bias-cut fluid drape, seamless elasticized waistband, floor length",
    description: "Rok kolom panjang berpotongan bias yang mengalir mengikuti ritme langkah pemakainya. Kilau satin yang anggun dan redup (subtle matte-sheen) menciptakan aura kemewahan tenang.",
    careInstructions: "Cuci kering atau cuci tangan halus. Jangan diperas dengan mesin."
  }
];

export const LOOKBOOK_ITEMS = [
  {
    id: "look-01",
    title: "Look 01: The Monolith Silhouette",
    subtitle: "Double-Breasted Wool Blazer & Pleated Trousers",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85",
    quote: "Kekuatan tidak membutuhkan kebisingan visual; ia hadir dalam garis bahu yang sempurna.",
    tag: "Atelier Suiting"
  },
  {
    id: "look-02",
    title: "Look 02: Fluidity in Stone",
    subtitle: "Oversized Alabaster Trench & Poplin Collar",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=85",
    quote: "Merajut rasa nyaman yang mewah di setiap hembusan angin kota modern.",
    tag: "Outerwear Capsule"
  },
  {
    id: "look-03",
    title: "Look 03: Tactile Intimacy",
    subtitle: "Heavyweight Cashmere Rib & Silk Maxi",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1200&q=85",
    quote: "Tekstur kasmir murni bersanding dengan kilau satin Jepang dalam keheningan senja.",
    tag: "Quiet Luxury"
  }
];
