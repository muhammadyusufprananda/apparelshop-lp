import React, { useState } from 'react';
import { STORE_CONFIG } from '../data/storeConfig';
import { generateConciergeWhatsAppUrl } from '../utils/whatsapp';
import { MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Footer() {
  const [email, setEmail] = useState('');
  const { showToast } = useCart();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    showToast(`Terima kasih. Alamat ${email} telah terdaftar dalam VIP Client Directory.`);
    setEmail('');
  };

  return (
    <footer className="bg-obsidian text-alabaster border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-display tracking-widest-2xl text-2xl font-bold block text-alabaster">
                {STORE_CONFIG.brandName}
              </span>
              <span className="text-[10px] tracking-widest-xl uppercase text-gold block mt-1">
                {STORE_CONFIG.brandSubtitle}
              </span>
            </div>

            <p className="text-xs text-alabaster/70 max-w-sm font-light leading-relaxed">
              Mewujudkan keanggunan abadi melalui kesederhanaan bentuk, potongan drapi arsitektural, dan pemilihan serat alami terbaik dunia. Seluruh pesanan dilayani secara intim melalui WhatsApp Concierge.
            </p>

            <div className="pt-2">
              <a
                href={generateConciergeWhatsAppUrl("Inquiry Langsung dari Footer")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/20 hover:border-gold hover:text-gold text-xs tracking-wider uppercase transition-colors"
              >
                <MessageCircle size={14} className="text-emerald-400" />
                <span>WhatsApp: {STORE_CONFIG.whatsappDisplayNumber}</span>
              </a>
            </div>
          </div>

          {/* Nav Links Col 1: Koleksi */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-gold">
              Koleksi
            </h4>
            <ul className="space-y-2.5 text-xs text-alabaster/75 font-light">
              {STORE_CONFIG.footerLinks.koleksi.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-gold transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Links Col 2: Editorial & Craft */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-gold">
              Editorial
            </h4>
            <ul className="space-y-2.5 text-xs text-alabaster/75 font-light">
              {STORE_CONFIG.footerLinks.editorial.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-gold transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* VIP Client Register Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-gold">
              The Private Register
            </h4>
            <p className="text-xs text-alabaster/70 font-light leading-relaxed">
              Daftarkan email Anda untuk menerima akses awal 24 jam sebelum peluncuran setiap edisi terbatas (Capsule Drops).
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Alamat email Anda..."
                  className="bg-white/5 border border-white/20 text-alabaster px-3 py-2.5 text-xs w-full focus:outline-none focus:border-gold placeholder:text-white/30"
                  required
                />
                <button
                  type="submit"
                  className="bg-gold hover:bg-gold-light text-obsidian px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center"
                  aria-label="Daftar VIP"
                >
                  <ArrowRight size={14} />
                </button>
              </div>
              <span className="text-[10px] text-alabaster/40 block">
                Privasi Anda terjaga. Kami tidak mengirimkan spam.
              </span>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-alabaster/50 gap-4">
          <div>
            &copy; {new Date().getFullYear()} {STORE_CONFIG.brandName}. Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <span>Jakarta • Bandung • Surabaya • Bali</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-alabaster/80">
              <ShieldCheck size={13} className="text-gold" />
              Verified Authentic Apparel
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
