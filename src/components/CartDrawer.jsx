import React, { useEffect } from 'react';
import { X, Trash2, ShoppingBag, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatIDR } from '../utils/formatters';
import { generateCartWhatsAppUrl } from '../utils/whatsapp';

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    clearCart
  } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const freeShippingThreshold = 1500000;
  const isFreeShipping = totalPrice >= freeShippingThreshold;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - totalPrice);

  const handleCheckoutWhatsApp = () => {
    const url = generateCartWhatsAppUrl(cartItems, totalPrice);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-obsidian/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-alabaster shadow-2xl flex flex-col border-l border-sand text-obsidian">
          
          {/* Header */}
          <div className="p-6 border-b border-sand flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag size={18} />
              <h2 className="font-serif text-xl font-medium tracking-tight">
                Tas Belanja ({totalItems})
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-obsidian/60 hover:text-obsidian hover:bg-sand/30 transition-colors rounded-full"
              aria-label="Tutup Keranjang"
            >
              <X size={20} />
            </button>
          </div>

          {/* Complimentary Shipping Banner */}
          <div className="bg-ecru/80 px-6 py-3 border-b border-sand text-xs">
            {isFreeShipping ? (
              <span className="text-emerald-800 font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                Selamat! Anda mendapatkan Complimentary Express Shipping.
              </span>
            ) : (
              <div className="space-y-1">
                <div className="text-muted">
                  Tambah <span className="font-semibold text-obsidian">{formatIDR(remainingForFreeShipping)}</span> lagi untuk Bebas Ongkir Kilat.
                </div>
                <div className="w-full bg-sand h-1 rounded-full overflow-hidden">
                  <div
                    className="bg-gold h-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (totalPrice / freeShippingThreshold) * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Items Container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-sand/30 border border-sand flex items-center justify-center rounded-full text-muted">
                  <ShoppingBag size={24} />
                </div>
                <p className="font-serif text-lg text-muted">Tas belanja Anda masih kosong</p>
                <p className="text-xs text-muted max-w-xs mx-auto">
                  Silakan jelajahi koleksi kami dan pilih busana favorit Anda untuk dipesan via WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 bg-obsidian text-alabaster text-xs tracking-widest uppercase font-medium hover:bg-gold hover:text-obsidian transition-colors"
                >
                  Lihat Katalog
                </button>
              </div>
            ) : (
              cartItems.map((item, idx) => (
                <div
                  key={`${item.id}-${item.size}-${item.color}`}
                  className="flex gap-4 pb-6 border-b border-sand/70 last:border-b-0"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover object-center bg-sand/30 border border-sand flex-shrink-0"
                  />

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-base font-medium leading-snug line-clamp-1">
                          {item.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id, item.size, item.color)}
                          className="text-muted hover:text-rose-600 transition-colors p-1"
                          title="Hapus"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>

                      <div className="text-[11px] text-muted space-x-2 mt-0.5">
                        <span>Size: <strong className="text-obsidian">{item.size}</strong></span>
                        <span>•</span>
                        <span>Warna: <strong className="text-obsidian">{item.color}</strong></span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      {/* Quantity stepper */}
                      <div className="inline-flex items-center border border-sand text-xs">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-sand/30 transition-colors"
                        >
                          -
                        </button>
                        <span className="px-2.5 py-1 font-mono font-medium">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-sand/30 transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-sm font-semibold text-obsidian">
                        {formatIDR(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Actions */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-sand bg-alabaster space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-muted">
                  <span>Subtotal</span>
                  <span>{formatIDR(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-xs text-muted">
                  <span>Estimasi Pengiriman</span>
                  <span className="text-emerald-700 font-medium">
                    {isFreeShipping ? 'Gratis (Complimentary)' : 'Dihitung saat konfirmasi'}
                  </span>
                </div>
                <div className="flex justify-between text-base font-semibold text-obsidian pt-2 border-t border-sand">
                  <span>Estimasi Total</span>
                  <span>{formatIDR(totalPrice)}</span>
                </div>
              </div>

              {/* Primary WhatsApp Checkout Button */}
              <button
                type="button"
                onClick={handleCheckoutWhatsApp}
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-4 px-4 text-xs tracking-widest uppercase font-semibold flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <MessageCircle size={18} />
                <span>Checkout via WhatsApp Sekarang</span>
              </button>

              <div className="flex items-center justify-between text-[11px] text-muted pt-1">
                <button
                  type="button"
                  onClick={clearCart}
                  className="hover:text-rose-600 transition-colors underline"
                >
                  Kosongkan Tas
                </button>
                <span className="flex items-center gap-1">
                  <ShieldCheck size={13} className="text-gold" />
                  Order Langsung Terhubung ke Concierge
                </span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
