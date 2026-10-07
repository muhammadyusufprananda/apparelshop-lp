import React from 'react';

export default function EditorialIntro() {
  return (
    <section className="py-20 sm:py-28 bg-alabaster border-b border-sand/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
        
        <div className="inline-block">
          <span className="text-[11px] tracking-widest-2xl uppercase text-muted font-medium">
            Manifesto Aurelia
          </span>
          <div className="w-8 h-px bg-gold mx-auto mt-2" />
        </div>

        <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-obsidian leading-snug">
          “Pakaian sejati tidak mendikte kepribadian Anda, melainkan memberi ruang agar ketenangan dan wibawa Anda terpancar secara alami.”
        </blockquote>

        <div className="pt-2">
          <p className="text-sm tracking-widest uppercase font-semibold text-obsidian">
            Elena V. Rostova
          </p>
          <p className="text-xs text-muted tracking-wider">
            Creative Director & Lead Patternmaker
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 max-w-3xl mx-auto text-left border-t border-sand/60">
          <div className="space-y-2">
            <h4 className="font-serif text-lg font-medium text-obsidian">01 / Seleksi Serat</h4>
            <p className="text-xs text-muted leading-relaxed">
              Hanya wol alami, katun giza, dan serat sutra murni yang bersentuhan dengan kulit Anda.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-serif text-lg font-medium text-obsidian">02 / Produksi Terbatas</h4>
            <p className="text-xs text-muted leading-relaxed">
              Maksimal 35 helai per model untuk menjaga nilai kelangkaan dan eksklusivitas pribadi.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-serif text-lg font-medium text-obsidian">03 / One-on-One Service</h4>
            <p className="text-xs text-muted leading-relaxed">
              Pemesanan tanpa perantara rumit. Langsung terhubung ke ruang jahit via WhatsApp.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
