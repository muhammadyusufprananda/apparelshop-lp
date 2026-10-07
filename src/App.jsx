import React from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EditorialIntro from './components/EditorialIntro';
import CollectionGrid from './components/CollectionGrid';
import LookbookGallery from './components/LookbookGallery';
import Craftsmanship from './components/Craftsmanship';
import WhatsAppConciergeSection from './components/WhatsAppConciergeSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import QuickViewModal from './components/QuickViewModal';
import CartDrawer from './components/CartDrawer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Toast from './components/Toast';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-alabaster text-obsidian font-sans antialiased selection:bg-obsidian selection:text-alabaster">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          <Hero />
          <EditorialIntro />
          <CollectionGrid />
          <LookbookGallery />
          <Craftsmanship />
          <WhatsAppConciergeSection />
          <FAQSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Overlays, Drawers & Modals */}
        <QuickViewModal />
        <CartDrawer />
        <FloatingWhatsApp />
        <Toast />
      </div>
    </CartProvider>
  );
}
