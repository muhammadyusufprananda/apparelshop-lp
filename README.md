# AURELIA ATELIER — Minimalist Luxury Apparel Landing Page

Landing page e-commerce busana (apparel) berkonsep *quiet luxury / high-end minimalism*, terinspirasi dari standar editorial merek mode ternama dunia seperti **Aimé Leon Dore**, **Fear of God**, dan **Jacquemus**.

Seluruh proses pemesanan dan konsultasi ukuran terintegrasi langsung ke **WhatsApp** dengan pesan terformat otomatis yang rapi dan profesional.

---

## ✨ Fitur Unggulan

1. **Aesthetic Clean & Grand (Quiet Luxury)**
   - Tipografi editorial kelas atas: perpaduan serif *Cormorant Garamond*, sans-serif *Plus Jakarta Sans*, dan monokromatik display *Cinzel*.
   - Palet warna netral mewah (*Obsidian, Alabaster, Warm Ecru, Sand, Champagne Gold*).
   - *Micro-interactions* halus: hover effect gambar dua sudut (editorial angle switcher), badge kuota terbatas (*Limited Edition*), dan transisi lembut.

2. **Integrasi WhatsApp Checkout Cerdas**
   - **Direct WhatsApp Order**: Setiap kartu produk memiliki tombol instant order yang langsung mengisi pesan WhatsApp dengan nama produk, varian ukuran, warna, jumlah, dan total harga.
   - **Quick View Modal**: Pop-up detail lengkap produk dengan galeri foto, pemilih ukuran (S, M, L, XL), rekomendasi *Size Guide*, pemilih warna, pengatur kuantitas, serta informasi bahan serat alami & instruksi perawatan.
   - **Multi-Item Shopping Bag Drawer**: Tas belanja slide-over dengan penghitung otomatis ongkir gratis (*Complimentary Shipping*). Memungkinkan pembeli memesan beberapa busana sekaligus dalam 1 format pesan WhatsApp yang tersusun rapi.
   - **VIP Stylist Concierge Link**: Tombol melayang (*floating badge*) dan tautan konsultasi langsung untuk rekomendasi paduan busana (*total look*) dan ukuran kustom.

3. **Struktur Kode Rapi & Refactoring Terbaik**
   - **Modular & Component-driven**: Setiap bagian dipisahkan dalam komponen mandiri (`Navbar`, `Hero`, `CollectionGrid`, `QuickViewModal`, `LookbookGallery`, `Craftsmanship`, `WhatsAppConciergeSection`, `CartDrawer`, `FAQSection`, `Footer`).
   - **Single Source of Truth**: Nomor WhatsApp, identitas toko, FAQ, dan pengumuman terpusat di `src/data/storeConfig.js`.
   - **Katalog Produk Dinamis**: Data produk tersimpan rapi di `src/data/products.js` sehingga sangat mudah ditambah atau diperbarui.
   - **State Management Ringan**: Menggunakan React Context API (`CartContext.jsx`) dengan persistensi otomatis ke `localStorage`.

---

## 📁 Struktur Direktori

```text
apparelshop-lp/
├── index.html                  # HTML entry point dengan Google Fonts (Cormorant Garamond, Cinzel, Plus Jakarta Sans)
├── package.json                # Dependensi React 18, Vite 6, Tailwind CSS 3, Lucide React
├── tailwind.config.js          # Palet warna mewah, tipografi, dan custom keyframes
├── vite.config.js              # Konfigurasi Vite bundler
└── src/
    ├── main.jsx                # React root mount
    ├── App.jsx                 # Susunan layout utama aplikasi
    ├── index.css               # Directive Tailwind & styling scrollbar mewah
    ├── context/
    │   └── CartContext.jsx     # State tas belanja, modal detail, dan notifikasi toast
    ├── data/
    │   ├── storeConfig.js      # Konfigurasi WhatsApp, nama toko, FAQ, dan teks pengumuman
    │   └── products.js         # Katalog busana, foto editorial, harga, ukuran, & lookbook
    ├── utils/
    │   ├── formatters.js       # Format mata uang Rupiah (IDR) & pemendek teks
    │   └── whatsapp.js         # Generator link pesan WhatsApp otomatis (Single & Multi-item)
    └── components/
        ├── Navbar.jsx          # Announcement bar berputar, menu responsif, & trigger tas belanja
        ├── Hero.jsx            # Headline editorial megah, foto utama, & tombol aksi cepat
        ├── EditorialIntro.jsx  # Manifesto merek & komitmen slow fashion
        ├── CollectionGrid.jsx  # Tab filter kategori, kartu produk, & CTA WhatsApp
        ├── QuickViewModal.jsx  # Pop-up detail kain, panduan size chart, & pemilihan warna
        ├── LookbookGallery.jsx # Jurnal visual gaya editorial (asymmetric magazine style)
        ├── Craftsmanship.jsx   # Anatomi serat wol merino, katun Giza, & kemasan mewah
        ├── WhatsAppConciergeSection.jsx # Alur belanja 3-langkah via WhatsApp & kartu VIP Concierge
        ├── CartDrawer.jsx      # Slide-out cart drawer dengan checkout WhatsApp multi-item
        ├── FAQSection.jsx      # Accordion pertanyaan umum & penukaran ukuran (Fit Guarantee)
        ├── Footer.jsx          # Direktori merek, registrasi VIP client, & copyright
        ├── FloatingWhatsApp.jsx# Tombol melayang WhatsApp dengan indikator status online
        └── Toast.jsx           # Notifikasi elegan saat produk dimasukkan ke keranjang
```

---

## 🚀 Cara Menjalankan

### 1. Menjalankan di Mode Development
```bash
npm run dev
```
Buka browser di `http://localhost:3000`.

### 2. Membangun untuk Production (Build)
```bash
npm run build
```
File siap rilis akan berada di folder `dist/`.

---

## ⚙️ Cara Mengubah Nomor WhatsApp & Data Toko

Cukup buka file `src/data/storeConfig.js`:

```javascript
export const STORE_CONFIG = {
  brandName: "AURELIA ATELIER",
  // Ganti dengan nomor WhatsApp Anda (format diawali kode negara tanpa tanda '+')
  whatsappNumber: "6281234567890",
  whatsappDisplayNumber: "+62 812-3456-7890",
  ...
};
```
Nomor ini akan otomatis tersinkronisasi ke seluruh tombol order di kartu produk, modal detail, tas belanja, dan tombol concierge melayang.
