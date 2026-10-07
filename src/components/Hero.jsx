import React from 'react';
import { ArrowDown, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';
import { generateConciergeWhatsAppUrl } from '../utils/whatsapp';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-alabaster pt-4 pb-16 sm:pb-24 border-b border-sand/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 order-2 lg:order-1 pt-4 lg:pt-0">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sand/60 border border-sand text-obsidian text-[11px] tracking-widest-xl uppercase font-medium rounded-full">
              <Sparkles size={12} className="text-gold" />
              <span>Autumn / Winter '26 — Edition No. 04</span>
            </div>

            {/* Grand Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal leading-[1.08] tracking-tight text-obsidian">
              Kemewahan dalam <br />
              <span className="italic font-light text-muted">Kesunyian</span> Bentuk.
            </h1>

            {/* Paragraph / Manifesto */}
            <p className="text-muted text-base sm:text-lg max-w-xl font-light leading-relaxed">
              Siluet busana kontemporer dengan potongan presisi, kain organik pilihan, dan proporsi yang menonjolkan karisma alami. Dibuat dalam jumlah terbatas, dipesan eksklusif melalui WhatsApp VIP Concierge.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#koleksi"
                className="inline-flex items-center justify-center px-8 py-4 bg-obsidian text-alabaster text-xs tracking-widest uppercase font-medium hover:bg-gold hover:text-obsidian transition-all duration-300 shadow-md group"
              >
                <span>Jelajahi Koleksi</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <a
                href={generateConciergeWhatsAppUrl("Inquiry Konsultasi Koleksi")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 border border-obsidian/30 bg-transparent text-obsidian text-xs tracking-widest uppercase font-medium hover:border-emerald-600 hover:text-emerald-700 hover:bg-emerald-50/40 transition-all duration-300"
              >
                <MessageCircle size={16} className="text-emerald-600" />
                <span>Pesan Cepat via WhatsApp</span>
              </a>
            </div>

            {/* Subtle Reassurance Micro-features */}
            <div className="pt-6 border-t border-sand/70 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-muted">
              <div>
                <span className="block font-semibold text-obsidian font-serif text-sm">Jaminan Ukuran Pas</span>
                <span className="text-[11px]">Free size exchange 7 hari</span>
              </div>
              <div>
                <span className="block font-semibold text-obsidian font-serif text-sm">Pengiriman Kilat</span>
                <span className="text-[11px]">Berasuransi ke seluruh RI</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block font-semibold text-obsidian font-serif text-sm">Respon Concierge</span>
                <span className="text-[11px]">&lt; 5 menit via WhatsApp</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame with Architectural Border */}
              <div className="relative aspect-[3/4] overflow-hidden bg-sand/30 shadow-2xl border border-sand">
                <img
                  src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=85"
                  alt="Aurelia Atelier Autumn Capsule"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Floating Image Label */}
                <div className="absolute bottom-4 left-4 right-4 bg-alabaster/95 backdrop-blur-md p-3.5 border border-sand/80 shadow-lg flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] tracking-widest uppercase text-muted">Piece of the Season</span>
                    <span className="block font-serif text-sm sm:text-base font-medium text-obsidian">The Alabaster Trench</span>
                  </div>
                  <a
                    href="#koleksi"
                    className="text-xs uppercase tracking-wider font-semibold text-gold hover:text-obsidian transition-colors"
                  >
                    Lihat Detail
                  </a>
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="hidden sm:block absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-gold/40 pointer-events-none" />
              <div className="hidden sm:block absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-gold/40 pointer-events-none" />

            </div>
          </div>

        </div>

      </div>

      {/* Numerical Stats Banner */}
      <div className="mt-16 sm:mt-20 border-t border-b border-sand/60 bg-ecru/40 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {STORE_CONFIG.stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-obsidian tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs tracking-wider uppercase font-medium text-obsidian/80">
                  {stat.label}
                </div>
                <div className="text-[11px] text-muted hidden sm:block">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
