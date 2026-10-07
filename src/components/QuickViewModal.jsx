import React, { useState, useEffect } from 'react';
import { X, MessageCircle, ShoppingBag, Check, ShieldCheck, Ruler, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatIDR } from '../utils/formatters';
import { generateProductWhatsAppUrl } from '../utils/whatsapp';

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();
  
  const product = quickViewProduct;
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  // Sync state when product changes
  useEffect(() => {
    if (product) {
      setSelectedImage(0);
      setSelectedSize(product.sizes[0] || 'M');
      setSelectedColor(product.colors[0]?.name || 'Standard');
      setQuantity(1);
      setShowSizeGuide(false);
    }
  }, [product]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setQuickViewProduct(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setQuickViewProduct]);

  if (!product) return null;

  const currentImageUrl = (product.gallery && product.gallery[selectedImage]) || product.image;
  const totalPrice = product.price * quantity;

  const handleOrderWhatsApp = () => {
    const url = generateProductWhatsAppUrl(product, selectedSize, selectedColor, quantity);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    setQuickViewProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-obsidian/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      
      {/* Modal Dialog Card */}
      <div
        className="relative bg-alabaster w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-sand shadow-2xl rounded-sm my-auto text-obsidian"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 bg-alabaster/90 hover:bg-obsidian hover:text-alabaster rounded-full border border-sand transition-colors"
          aria-label="Tutup Modal"
        >
          <X size={18} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-10">
          
          {/* Left: Gallery & Image Preview */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] bg-sand/30 overflow-hidden border border-sand">
              <img
                src={currentImageUrl}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />
              {product.badge && (
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] tracking-wider uppercase px-2.5 py-1 bg-obsidian text-alabaster font-semibold">
                    {product.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-16 h-20 flex-shrink-0 border overflow-hidden transition-all ${
                      selectedImage === idx ? 'border-obsidian ring-1 ring-obsidian' : 'border-sand opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Specifications & Ordering Options */}
          <div className="flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div>
                <span className="text-[10px] tracking-widest uppercase text-muted block mb-1">
                  {product.edition}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-obsidian leading-snug">
                  {product.name}
                </h2>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 pb-3 border-b border-sand">
                <span className="text-xl sm:text-2xl font-semibold text-obsidian">
                  {formatIDR(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-muted line-through">
                    {formatIDR(product.originalPrice)}
                  </span>
                )}
                <span className="ml-auto text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 font-medium">
                  {product.stock}
                </span>
              </div>

              {/* Brief Description */}
              <p className="text-xs sm:text-sm text-muted font-light leading-relaxed">
                {product.description}
              </p>

              {/* Size Selector */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold uppercase tracking-wider text-obsidian">Pilih Ukuran</span>
                  <button
                    type="button"
                    onClick={() => setShowSizeGuide(!showSizeGuide)}
                    className="text-gold hover:text-obsidian flex items-center gap-1 underline text-[11px]"
                  >
                    <Ruler size={13} />
                    <span>Panduan Ukuran (Size Chart)</span>
                  </button>
                </div>

                <div className="flex gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-11 py-2 text-xs font-mono tracking-wider transition-all border ${
                        selectedSize === size
                          ? 'bg-obsidian text-alabaster border-obsidian'
                          : 'bg-transparent text-obsidian/80 border-sand hover:border-obsidian/40'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {showSizeGuide && (
                  <div className="p-3 bg-ecru/60 border border-sand text-[11px] space-y-1 text-obsidian/90 mt-2">
                    <p className="font-semibold">Rekomendasi Standar Aurelia Atelier:</p>
                    <p>• S: Dada 96-100 cm | Panjang 70 cm (Tinggi 160-170 cm, BB 50-63 kg)</p>
                    <p>• M: Dada 102-106 cm | Panjang 72 cm (Tinggi 168-176 cm, BB 64-74 kg)</p>
                    <p>• L: Dada 108-112 cm | Panjang 74 cm (Tinggi 174-182 cm, BB 75-84 kg)</p>
                    <p>• XL: Dada 114-118 cm | Panjang 76 cm (Tinggi 178-188 cm, BB 85-95 kg)</p>
                    <p className="italic text-muted pt-1">*Perlu bantuan ukuran khusus? Stylist WhatsApp kami dapat menyesuaikan.</p>
                  </div>
                )}
              </div>

              {/* Color Selector */}
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-obsidian">
                    Pilihan Warna: <span className="font-normal text-muted">{selectedColor}</span>
                  </div>
                  <div className="flex gap-3">
                    {product.colors.map(col => (
                      <button
                        key={col.name}
                        type="button"
                        onClick={() => setSelectedColor(col.name)}
                        className={`flex items-center gap-2 px-3 py-1.5 border text-xs transition-all ${
                          selectedColor === col.name
                            ? 'border-obsidian bg-sand/40 font-medium'
                            : 'border-sand hover:border-sand/80'
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/20"
                          style={{ backgroundColor: col.hex }}
                        />
                        <span>{col.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Counter */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-obsidian block">
                  Jumlah:
                </span>
                <div className="inline-flex items-center border border-sand">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3.5 py-1.5 text-sm hover:bg-sand/30 font-mono transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-1.5 text-xs font-mono font-medium">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3.5 py-1.5 text-sm hover:bg-sand/30 font-mono transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Material & Details Bullet */}
              <div className="pt-4 border-t border-sand/70 space-y-2 text-xs text-muted">
                <p><strong className="text-obsidian font-medium">Material:</strong> {product.material}</p>
                <p><strong className="text-obsidian font-medium">Siluet / Fit:</strong> {product.fit}</p>
                <p><strong className="text-obsidian font-medium">Perawatan:</strong> {product.careInstructions}</p>
              </div>

            </div>

            {/* CTAs Footer */}
            <div className="space-y-3 pt-4 border-t border-sand">
              
              {/* Primary Direct WhatsApp CTA */}
              <button
                type="button"
                onClick={handleOrderWhatsApp}
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-3.5 px-4 text-xs tracking-widest uppercase font-semibold flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <MessageCircle size={17} />
                <span>Pesan Sekarang via WhatsApp ({formatIDR(totalPrice)})</span>
              </button>

              {/* Secondary Add to Cart CTA */}
              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full bg-obsidian hover:bg-gold hover:text-obsidian text-alabaster py-3 px-4 text-xs tracking-widest uppercase font-semibold flex items-center justify-center gap-2 transition-colors border border-obsidian"
              >
                <ShoppingBag size={15} />
                <span>Tambah ke Keranjang Belanja</span>
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-muted pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={14} className="text-gold" />
                  Garansi Tukar Ukuran 7 Hari
                </span>
                <span>•</span>
                <span>Kemasan Kotak Mewah Eksklusif</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
