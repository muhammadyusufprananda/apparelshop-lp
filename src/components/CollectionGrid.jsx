import React, { useState } from 'react';
import { Eye, MessageCircle, ShoppingBag, Check } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { formatIDR } from '../utils/formatters';
import { generateProductWhatsAppUrl } from '../utils/whatsapp';
import { useCart } from '../context/CartContext';

export default function CollectionGrid() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { setQuickViewProduct, addToCart } = useCart();
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="koleksi" className="py-20 sm:py-28 bg-alabaster">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 border-b border-sand pb-8">
          <div>
            <span className="text-[11px] tracking-widest-2xl uppercase text-muted font-medium block mb-2">
              Koleksi Tersedia — Autumn / Winter '26
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-obsidian tracking-tight">
              Koleksi Busana Pilihan
            </h2>
          </div>

          <p className="text-muted text-xs sm:text-sm max-w-md font-light leading-relaxed">
            Setiap potong busana diproduksi dalam kuota terbatas. Klik produk untuk melihat detail spesifikasi serat atau langsung hubungi Concierge via WhatsApp.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 text-xs tracking-wider uppercase whitespace-nowrap transition-all duration-200 border rounded-sm font-medium ${
                activeCategory === cat.id
                  ? 'bg-obsidian text-alabaster border-obsidian'
                  : 'bg-transparent text-obsidian/70 border-sand hover:border-obsidian/40 hover:text-obsidian'
              }`}
            >
              {cat.label}
              {cat.id === 'all' ? ` (${PRODUCTS.length})` : ''}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filteredProducts.map(product => {
            const isHovered = hoveredCardId === product.id;
            const primaryImage = product.image;
            const secondaryImage = product.hoverImage || product.image;

            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between"
                onMouseEnter={() => setHoveredCardId(product.id)}
                onMouseLeave={() => setHoveredCardId(null)}
              >
                {/* Product Image Box */}
                <div className="relative aspect-[3/4] bg-sand/30 overflow-hidden mb-4 border border-sand/60">
                  
                  {/* Primary & Hover Images */}
                  <img
                    src={isHovered ? secondaryImage : primaryImage}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                    {product.badge && (
                      <span className={`text-[10px] tracking-wider uppercase px-2.5 py-1 font-semibold ${
                        product.badgeType === 'gold'
                          ? 'bg-gold text-obsidian'
                          : 'bg-obsidian text-alabaster'
                      }`}>
                        {product.badge}
                      </span>
                    )}
                    {product.stock && (
                      <span className="text-[9px] tracking-widest uppercase bg-alabaster/90 backdrop-blur-sm text-obsidian px-2 py-0.5 border border-sand font-medium">
                        {product.stock}
                      </span>
                    )}
                  </div>

                  {/* Overlay Action Buttons on Hover */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-obsidian/80 via-obsidian/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setQuickViewProduct(product)}
                      className="flex-1 bg-alabaster text-obsidian hover:bg-gold hover:text-obsidian py-2.5 px-3 text-[11px] uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-1.5 shadow"
                    >
                      <Eye size={13} />
                      <span>Detail & Ukuran</span>
                    </button>
                    
                    <a
                      href={generateProductWhatsAppUrl(product, product.sizes[0] || 'M')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white p-2.5 text-xs transition-colors shadow flex items-center justify-center"
                      title="Pesan Langsung via WhatsApp"
                    >
                      <MessageCircle size={15} />
                    </a>
                  </div>

                </div>

                {/* Product Details */}
                <div className="space-y-2">
                  {/* Edition Subtitle */}
                  <div className="text-[10px] tracking-widest uppercase text-muted">
                    {product.edition}
                  </div>

                  {/* Product Title */}
                  <h3
                    onClick={() => setQuickViewProduct(product)}
                    className="font-serif text-lg font-medium text-obsidian hover:text-gold cursor-pointer transition-colors leading-snug line-clamp-1"
                  >
                    {product.name}
                  </h3>

                  {/* Size Pills */}
                  <div className="flex items-center gap-1.5 pt-0.5">
                    <span className="text-[10px] text-muted uppercase mr-1">Size:</span>
                    {product.sizes.map(size => (
                      <span
                        key={size}
                        className="text-[10px] px-1.5 py-0.5 border border-sand/80 text-obsidian/80 rounded-sm font-mono"
                      >
                        {size}
                      </span>
                    ))}
                  </div>

                  {/* Price Row */}
                  <div className="flex items-baseline justify-between pt-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-semibold tracking-tight text-obsidian">
                        {formatIDR(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-muted line-through">
                          {formatIDR(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quick WhatsApp Action Button */}
                  <div className="pt-2">
                    <a
                      href={generateProductWhatsAppUrl(product, product.sizes[0] || 'M')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 border border-obsidian/20 text-obsidian hover:bg-obsidian hover:text-alabaster text-[11px] tracking-widest uppercase font-medium transition-all duration-200"
                    >
                      <MessageCircle size={13} className="text-emerald-600" />
                      <span>Order via WhatsApp</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
