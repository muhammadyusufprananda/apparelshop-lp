import React from 'react';
import { LOOKBOOK_ITEMS } from '../data/products';
import { generateConciergeWhatsAppUrl } from '../utils/whatsapp';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

export default function LookbookGallery() {
  return (
    <section id="lookbook" className="py-20 sm:py-28 bg-ecru/30 border-t border-b border-sand/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-widest-2xl uppercase text-muted font-medium">
            <Sparkles size={12} className="text-gold" />
            <span>Visual Journal & Editorial</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-obsidian tracking-tight">
            The Autumn / Winter '26 Lookbook
          </h2>
          
          <p className="text-muted text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto">
            Eksplorasi visual perpaduan siluet arsitektural dan keleluasaan busana sehari-hari. Diabadikan dalam palet warna netral yang menenangkan.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {LOOKBOOK_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col group ${
                index === 1 ? 'md:-translate-y-4' : ''
              }`}
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4] overflow-hidden bg-sand/40 border border-sand shadow-lg mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Tag Badge */}
                <div className="absolute top-4 left-4 bg-obsidian/90 backdrop-blur-sm text-alabaster text-[10px] tracking-widest uppercase px-3 py-1 font-medium">
                  {item.tag}
                </div>
              </div>

              {/* Look Caption & Quote */}
              <div className="space-y-3 px-1">
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-obsidian">
                  {item.title}
                </h3>
                
                <p className="text-xs uppercase tracking-wider text-muted font-medium">
                  {item.subtitle}
                </p>

                <p className="text-xs text-muted/90 italic font-serif leading-relaxed">
                  “{item.quote}”
                </p>

                <div className="pt-2">
                  <a
                    href="#koleksi"
                    className="inline-flex items-center gap-2 text-xs tracking-wider uppercase font-semibold text-obsidian hover:text-gold transition-colors"
                  >
                    <span>Temukan Komposisi Ini</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lookbook Concierge Banner */}
        <div className="mt-16 bg-obsidian text-alabaster p-8 sm:p-12 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] tracking-widest-xl uppercase text-gold block">
              Layanan Styling Personal
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light">
              Ingin Rekomendasi Total Look untuk Postur Anda?
            </h3>
            <p className="text-xs text-alabaster/70 max-w-xl font-light">
              Kirimkan tinggi badan dan preferensi gaya Anda. Tim penata busana Aurelia Atelier akan menyusun kurasi 3 padu-padan busana terbaik via WhatsApp.
            </p>
          </div>

          <a
            href={generateConciergeWhatsAppUrl("Rekomendasi Total Look Stylist")}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap bg-gold hover:bg-gold-light text-obsidian px-7 py-3.5 text-xs tracking-widest uppercase font-semibold inline-flex items-center gap-2 transition-colors shadow-lg"
          >
            <MessageCircle size={16} />
            <span>Konsultasi Style Gratis</span>
          </a>
        </div>

      </div>
    </section>
  );
}
