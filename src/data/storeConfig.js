/**
 * Configuration for Aurelia Atelier Apparel Shop
 * All contact info, WhatsApp numbers, currency, and general settings are centralized here.
 */

export const STORE_CONFIG = {
  brandName: "AURELIA ATELIER",
  brandSubtitle: "Édition Minimale & Haute Prêt-à-Porter",
  tagline: "The Art of Restraint. Timeless Silhouettes, Uncompromised Craft.",
  
  // WhatsApp settings (Change to owner's WhatsApp number)
  // Format: Country code without '+' or '0', e.g. 6281234567890
  whatsappNumber: "6281234567890",
  whatsappDisplayNumber: "+62 812-3456-7890",
  whatsappAgentName: "Aurelia Private Concierge",
  
  currency: {
    symbol: "Rp",
    locale: "id-ID"
  },

  announcements: [
    "COMPLIMENTARY NATIONWIDE EXPRESS SHIPPING ON ALL ORDERS",
    "LIMITED RUN — EDITION NO. IV NOW AVAILABLE IN STRICT QUANTITIES",
    "BESPOKE SIZING CONSULTATION AVAILABLE VIA VIP WHATSAPP"
  ],

  stats: [
    { value: "100%", label: "Natural Fibers", detail: "Ethically Sourced Wool & Organic Linen" },
    { value: "Strict 35", label: "Pcs Per Design", detail: "Exclusive Limited Run Production" },
    { value: "48 Jam", label: "Express Delivery", detail: "Insured Direct to Your Doorstep" },
    { value: "100%", label: "Fit Guarantee", detail: "Free Size Exchange within 7 Days" },
  ],

  features: [
    {
      title: "Material Berstandar Haute Couture",
      desc: "Setiap serat dipilih dengan teliti dari wol merino Italia, katun sutra Jepang, dan linen alami Prancis.",
    },
    {
      title: "Jahitan Presisi & Siluet Abadi",
      desc: "Dirancang oleh penjahit berpengalaman dengan teknik potongan drapi modern yang nyaman dan berwibawa.",
    },
    {
      title: "Layanan Concierge WhatsApp Personal",
      desc: "Interaksi personal satu-pintu. Konsultasi ukuran, panduan gaya, dan konfirmasi order dilayani langsung oleh stylist.",
    },
    {
      title: "Kemasan Mewah Kolektor",
      desc: "Setiap helai pakaian dikemas dalam kotak berpita beraroma khas cedarwood dan sertifikat keaslian berseri.",
    }
  ],

  faqs: [
    {
      question: "Bagaimana cara melakukan pembelian melalui WhatsApp?",
      answer: "Pilih produk yang Anda sukai di katalog kami, tentukan ukuran, lalu klik tombol 'Pesan via WhatsApp' atau masukkan ke keranjang belanja dan klik 'Checkout via WhatsApp'. Pesan otomatis yang rapi akan terbuat di WhatsApp Anda. Tim VIP Concierge kami akan segera memvalidasi stok dan mengirimkan rincian invoice resmi."
    },
    {
      question: "Apakah bisa konsultasi ukuran dan rekomendasi styling terlebih dahulu?",
      answer: "Tentu saja. Stylist pribadi kami siap membantu Anda mencocokkan postur tubuh dengan panduan ukuran kami, merekomendasikan palet warna, maupun padu-padan busana untuk acara tertentu."
    },
    {
      question: "Metode pembayaran apa saja yang diterima?",
      answer: "Kami menerima transfer bank resmi (BCA, Mandiri, BNI, BRI), QRIS, Virtual Account, serta kartu kredit melalui tautan pembayaran aman terverifikasi yang diberikan oleh Concierge."
    },
    {
      question: "Bagaimana kebijakan penukaran ukuran (size exchange)?",
      answer: "Kami memberikan jaminan 100% Fit Guarantee. Jika ukuran kurang pas, Anda dapat menukarkannya dalam kurun waktu 7 hari sejak produk diterima, selama tag orisinil belum dilepas dan produk dalam kondisi baru."
    },
    {
      question: "Berapa lama estimasi pengiriman?",
      answer: "Pesanan yang terkonfirmasi sebelum pukul 15.00 WIB dikirim di hari yang sama menggunakan kurir express berasuransi. Pengiriman Jabodetabek estimasi 1 hari kerja, dan kota lain di Indonesia berkisar 2-3 hari kerja."
    }
  ],

  footerLinks: {
    koleksi: [
      { name: "New Arrivals '26", href: "#koleksi" },
      { name: "Outerwear & Coats", href: "#koleksi" },
      { name: "Tailored Sets", href: "#koleksi" },
      { name: "Signature Essentials", href: "#koleksi" }
    ],
    editorial: [
      { name: "Visual Lookbook", href: "#lookbook" },
      { name: "Craftsmanship & Fabric", href: "#filosofi" },
      { name: "Size Guide", href: "#faq" },
      { name: "Care Instructions", href: "#faq" }
    ],
    bantuan: [
      { name: "Chat WhatsApp Concierge", href: "#concierge" },
      { name: "Garansi & Penukaran", href: "#faq" },
      { name: "Status Pengiriman", href: "#concierge" },
      { name: "FAQ", href: "#faq" }
    ]
  }
};
