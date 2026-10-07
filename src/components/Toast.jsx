import React from 'react';
import { useCart } from '../context/CartContext';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

export default function Toast() {
  const { toast } = useCart();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-up">
      <div className="bg-obsidian text-alabaster px-5 py-3 border border-white/20 shadow-2xl flex items-center gap-3 text-xs tracking-wider rounded-sm">
        <ShoppingBag size={15} className="text-gold" />
        <span className="font-light">{toast.message}</span>
      </div>
    </div>
  );
}
