import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';
import { generateConciergeWhatsAppUrl } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  const [isOpenTooltip, setIsOpenTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group">
      
      {/* Quick greeting pill */}
      {isOpenTooltip && (
        <div className="bg-alabaster text-obsidian border border-sand shadow-xl px-4 py-2.5 rounded-sm text-xs max-w-xs flex items-start gap-2 animate-fade-in relative">
          <div>
            <div className="flex items-center gap-1.5 font-semibold text-emerald-800 text-[11px] uppercase tracking-wider mb-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>VIP WhatsApp Concierge</span>
            </div>
            <p className="text-[11px] text-muted font-light leading-snug">
              Perlu bantuan ukuran atau rekomendasi paduan busana? Kami siap membantu.
            </p>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpenTooltip(false);
            }}
            className="text-muted hover:text-obsidian p-0.5 -mt-1 -mr-1"
            aria-label="Tutup notifikasi"
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href={generateConciergeWhatsAppUrl("Inquiry Melalui Tombol WhatsApp Mengambang")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 border border-emerald-500/30"
        title="Chat dengan Aurelia Concierge"
      >
        <MessageCircle size={20} className="text-white" />
        <span className="text-xs font-semibold tracking-wider uppercase pr-1 hidden sm:inline-block">
          Order via WhatsApp
        </span>
      </a>

    </div>
  );
}
