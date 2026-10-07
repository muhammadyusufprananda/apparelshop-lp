import React from 'react';
import { STORE_CONFIG } from '../data/storeConfig';
import { Feather, Scissors, ShieldCheck, Gift } from 'lucide-react';

export default function Craftsmanship() {
  const icons = [
    <Feather size={22} className="text-gold" />,
    <Scissors size={22} className="text-gold" />,
    <ShieldCheck size={22} className="text-gold" />,
    <Gift size={22} className="text-gold" />
  ];

  return (
    <section id="filosofi" className="py-20 sm:py-28 bg-alabaster border-b border-sand/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[11px] tracking-widest-2xl uppercase text-muted font-medium block">
            Kualitas Tanpa Kompromi
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-obsidian tracking-tight">
            Anatomi Mahakarya Busana
          </h2>
          <p className="text-muted text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto">
            Kami menolak produksi massal yang tergesa-gesa. Setiap helai pakaian melalui 42 jam perakitan teliti untuk memastikan kenyamanan abadi di tubuh Anda.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STORE_CONFIG.features.map((item, index) => (
            <div
              key={index}
              className="bg-ecru/30 p-8 border border-sand hover:border-gold/60 transition-all duration-300 space-y-4 relative group"
            >
              <div className="w-12 h-12 bg-alabaster border border-sand flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform">
                {icons[index]}
              </div>

              <div className="font-serif text-xs tracking-widest text-muted">
                0{index + 1}
              </div>

              <h3 className="font-serif text-lg font-medium text-obsidian leading-snug">
                {item.title}
              </h3>

              <p className="text-xs text-muted font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Tailoring Detail Quote / Banner */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-sand/20 border border-sand p-6 sm:p-10">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[10px] tracking-widest-xl uppercase text-gold font-semibold">
              Slow Fashion Commitment
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-light text-obsidian">
              Kain Alami yang Menua dengan Anggun (Patina of Luxury)
            </h4>
            <p className="text-xs sm:text-sm text-muted font-light leading-relaxed">
              Berbeda dari serat sintetis cepat rusak, wol merino dan linen murni yang kami gunakan beradaptasi secara organik dengan suhu tubuh Anda. Semakin sering dikenakan, kain akan semakin lembut mengikuti gestur tubuh alami Anda.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="border border-obsidian/30 p-6 text-center space-y-1 bg-alabaster">
              <span className="font-serif text-3xl font-light text-obsidian block">100%</span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-muted block">
                Ethical Atelier Handcraft
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
