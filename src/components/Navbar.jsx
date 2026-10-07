import React, { useState, useEffect } from 'react';
import { ShoppingBag, MessageCircle, Menu, X, ArrowRight } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';
import { useCart } from '../context/CartContext';
import { generateConciergeWhatsAppUrl } from '../utils/whatsapp';

export default function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIndex(prev => (prev + 1) % STORE_CONFIG.announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { label: 'Koleksi', href: '#koleksi' },
    { label: 'Lookbook', href: '#lookbook' },
    { label: 'Filosofi Craft', href: '#filosofi' },
    { label: 'VIP Concierge', href: '#concierge' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-obsidian text-alabaster text-[11px] sm:text-xs tracking-widest-xl uppercase py-2 px-4 text-center transition-all duration-300 font-sans border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
          <span className="font-medium opacity-90 transition-opacity duration-500">
            {STORE_CONFIG.announcements[announcementIndex]}
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-alabaster/95 backdrop-blur-md shadow-sm border-b border-sand/60 py-3'
            : 'bg-alabaster/80 backdrop-blur-sm py-4 sm:py-5 border-b border-sand/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 -ml-2 text-obsidian hover:text-gold transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

            {/* Desktop Navigation Links Left */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.slice(0, 3).map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs tracking-widest uppercase font-medium text-obsidian/80 hover:text-obsidian hover:tracking-widest-xl transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Brand Logo / Monogram Center */}
            <div className="text-center">
              <a href="#" className="inline-block group">
                <span className="block font-display tracking-widest-2xl text-lg sm:text-xl md:text-2xl font-semibold text-obsidian group-hover:text-gold transition-colors duration-300">
                  {STORE_CONFIG.brandName}
                </span>
                <span className="block text-[9px] tracking-widest-xl uppercase text-muted font-sans -mt-0.5">
                  Haute Prêt-à-Porter
                </span>
              </a>
            </div>

            {/* Desktop Navigation Links Right + Actions */}
            <div className="flex items-center space-x-5 sm:space-x-7">
              <nav className="hidden lg:flex items-center space-x-8">
                {navLinks.slice(3).map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-xs tracking-widest uppercase font-medium text-obsidian/80 hover:text-obsidian hover:tracking-widest-xl transition-all duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Direct WhatsApp Concierge Link */}
              <a
                href={generateConciergeWhatsAppUrl("Inquiry Koleksi")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 text-xs tracking-wider uppercase font-medium text-obsidian/80 hover:text-gold transition-colors py-1 px-2.5 rounded-full border border-sand hover:border-gold/60"
                title="Hubungi WhatsApp Concierge"
              >
                <MessageCircle size={14} className="text-emerald-700" />
                <span>Concierge</span>
              </a>

              {/* Shopping Bag Trigger */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-obsidian hover:text-gold transition-colors group"
                aria-label="Buka Keranjang Belanja"
              >
                <ShoppingBag size={21} strokeWidth={1.75} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-obsidian text-alabaster text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-alabaster group-hover:bg-gold group-hover:text-obsidian transition-colors">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-sand/70 bg-alabaster/98 backdrop-blur-md px-6 py-6 space-y-4 animate-fade-in shadow-xl">
            <nav className="flex flex-col space-y-3">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm tracking-widest uppercase font-medium text-obsidian/90 hover:text-gold py-1 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight size={14} className="opacity-40" />
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-sand">
              <a
                href={generateConciergeWhatsAppUrl("Konsultasi Koleksi Busana")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-obsidian text-alabaster py-3 px-4 text-xs tracking-widest uppercase hover:bg-gold hover:text-obsidian transition-colors font-medium rounded-sm"
              >
                <MessageCircle size={16} />
                <span>Chat WhatsApp Concierge</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
