import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';
import { generateConciergeWhatsAppUrl } from '../utils/whatsapp';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-alabaster border-b border-sand/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-[11px] tracking-widest-2xl uppercase text-muted font-medium block">
            Informasi & Panduan
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-obsidian tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-muted text-xs sm:text-sm font-light leading-relaxed max-w-lg mx-auto">
            Semua yang perlu Anda ketahui mengenai pemesanan melalui WhatsApp, kualitas serat, penukaran ukuran, dan privasi transaksi.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {STORE_CONFIG.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-sand bg-alabaster transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-lg sm:text-xl font-medium text-obsidian">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-muted transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'transform rotate-180 text-obsidian' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-xs sm:text-sm text-muted font-light leading-relaxed border-t border-sand/40 pt-4 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center p-6 bg-ecru/40 border border-sand flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-base font-medium text-obsidian">Memiliki pertanyaan spesifik lainnya?</h4>
            <p className="text-xs text-muted">Tim Concierge kami siap membalas pesan Anda dalam hitungan menit.</p>
          </div>
          <a
            href={generateConciergeWhatsAppUrl("Pertanyaan Khusus")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-obsidian hover:bg-gold hover:text-obsidian text-alabaster text-xs tracking-wider uppercase font-semibold transition-colors"
          >
            <MessageCircle size={14} />
            <span>Tanya Concierge Sekarang</span>
          </a>
        </div>

      </div>
    </section>
  );
}
