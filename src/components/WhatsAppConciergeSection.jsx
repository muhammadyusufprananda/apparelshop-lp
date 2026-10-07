import React from 'react';
import { MessageCircle, CheckCircle2, ShieldCheck, Clock, ArrowRight, UserCheck } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';
import { generateConciergeWhatsAppUrl } from '../utils/whatsapp';

export default function WhatsAppConciergeSection() {
  const steps = [
    {
      num: "01",
      title: "Pilih Busana & Ukuran",
      desc: "Telusuri katalog pilihan kami. Pilih ukuran Anda atau konsultasikan ukuran bersama kami jika Anda ragu."
    },
    {
      num: "02",
      title: "Pesan Instan via WhatsApp",
      desc: "Klik tombol pemesanan. Pesan otomatis dengan rincian model & ukuran akan tersusun rapi tanpa perlu mengetik manual."
    },
    {
      num: "03",
      title: "Verifikasi & Pengiriman Berasuransi",
      desc: "Tim kami mengonfirmasi stok, menerbitkan invoice resmi, dan mengirim paket mewah Anda dengan asuransi penuh."
    }
  ];

  return (
    <section id="concierge" className="py-20 sm:py-28 bg-ecru/40 border-b border-sand/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[11px] tracking-widest-2xl uppercase text-muted font-medium block">
            Alur Transaksi Personal
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-obsidian tracking-tight">
            Kemewahan Belanja via WhatsApp Concierge
          </h2>
          <p className="text-muted text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto">
            Kami menghadirkan kembali kehangatan pelayanan butik pribadi. Tidak ada bot kaku — setiap interaksi Anda ditangani oleh tim stylist berpengalaman.
          </p>
        </div>

        {/* 3 Steps Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-alabaster p-8 border border-sand shadow-sm relative group hover:border-obsidian/40 transition-colors"
            >
              <div className="font-serif text-3xl font-light text-gold mb-4">
                {step.num}
              </div>
              <h3 className="font-serif text-xl font-medium text-obsidian mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-muted font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Highlighted Concierge Box */}
        <div className="bg-obsidian text-alabaster border border-white/10 rounded-sm p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Concierge Info */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Stylist Concierge Online • Respon Tercepat</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl font-light leading-snug">
                Konsultasi Ukuran, Rekomendasi Kain & Pemesanan Instan
              </h3>

              <p className="text-xs sm:text-sm text-alabaster/70 font-light max-w-2xl leading-relaxed">
                Ingin menanyakan ketersediaan ukuran khusus, panduan padu-padan untuk menghadiri gala, atau pesanan kado spesial? Silakan kirimkan pesan kepada kami sekarang.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-alabaster/60">
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-gold" />
                  Jam Layanan: 09.00 – 22.00 WIB
                </span>
                <span className="flex items-center gap-1.5">
                  <UserCheck size={14} className="text-gold" />
                  Stylist Pribadi Terdedikasi
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-gold" />
                  Nomor Resmi: {STORE_CONFIG.whatsappDisplayNumber}
                </span>
              </div>
            </div>

            {/* Concierge CTA Button */}
            <div className="lg:col-span-4 flex flex-col items-stretch lg:items-end justify-center space-y-3">
              <a
                href={generateConciergeWhatsAppUrl("Layanan Concierge Utama")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs tracking-widest uppercase font-semibold transition-all shadow-lg text-center"
              >
                <MessageCircle size={18} />
                <span>Chat Concierge WhatsApp</span>
              </a>
              <span className="text-[11px] text-center text-alabaster/50">
                Tautan membuka aplikasi WhatsApp resmi
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
