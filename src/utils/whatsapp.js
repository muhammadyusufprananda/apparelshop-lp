import { STORE_CONFIG } from '../data/storeConfig';
import { formatIDR } from './formatters';

/**
 * Builds direct WhatsApp URLs for seamless customer checkout & consultation.
 */

export function buildWhatsAppLink(message) {
  const cleanPhone = STORE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

/**
 * Generates WhatsApp URL for single product order
 */
export function generateProductWhatsAppUrl(product, size = "M", color = null, quantity = 1) {
  const selectedColor = color || (product.colors && product.colors[0]?.name) || "Default";
  const total = product.price * quantity;

  const lines = [
    `Halo ${STORE_CONFIG.brandName} Concierge,`,
    `Saya tertarik untuk memesan koleksi berikut:`,
    ``,
    `✦ *${product.name}* (${product.edition || 'Atelier Collection'})`,
    `• Ukuran : ${size}`,
    `• Warna : ${selectedColor}`,
    `• Kuantitas : ${quantity} pcs`,
    `• Harga Satuan : ${formatIDR(product.price)}`,
    `• Estimasi Total : ${formatIDR(total)}`,
    ``,
    `*Data Pemesan:*`,
    `Nama : [Isi Nama Anda]`,
    `Nomor HP : [Isi Nomor HP]`,
    `Alamat Kirim : [Kota / Kecamatan]`,
    ``,
    `Mohon informasi ketersediaan stok & petunjuk transaksi resmi. Terima kasih.`
  ];

  return buildWhatsAppLink(lines.join('\n'));
}

/**
 * Generates WhatsApp URL for multi-item Cart Drawer checkout
 */
export function generateCartWhatsAppUrl(cartItems, totalPrice) {
  const lines = [
    `Halo ${STORE_CONFIG.brandName} Concierge,`,
    `Saya ingin menyelesaikan pesanan untuk beberapa koleksi:`,
    ``,
    `━━━━━━ DAFTAR PESANAN ━━━━━━`
  ];

  cartItems.forEach((item, index) => {
    lines.push(
      `${index + 1}. *${item.name}*`,
      `   • Size: ${item.size} | Warna: ${item.color || 'Standard'}`,
      `   • Jumlah: ${item.quantity} x ${formatIDR(item.price)} = ${formatIDR(item.price * item.quantity)}`
    );
  });

  lines.push(
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `*TOTAL KESELURUHAN : ${formatIDR(totalPrice)}*`,
    ``,
    `*Data Penerima:*`,
    `Nama Lengkap : [Isi Nama]`,
    `Nomor Telepon : [Isi Nomor Aktif]`,
    `Alamat Lengkap : [Alamat, Kota, Kode Pos]`,
    `Catatan Khusus : [Opsional: misal request kartu ucapan]`,
    ``,
    `Mohon bantuan untuk konfirmasi ketersediaan dan nomor rekening resmi. Terima kasih!`
  );

  return buildWhatsAppLink(lines.join('\n'));
}

/**
 * Generates WhatsApp URL for general consultation, sizing advice, or custom inquiry
 */
export function generateConciergeWhatsAppUrl(topic = "Konsultasi Umum") {
  const lines = [
    `Halo ${STORE_CONFIG.brandName} Concierge,`,
    `Saya ingin berkonsultasi mengenai: *${topic}*.`,
    ``,
    `Apakah stylist Anda sedang tersedia untuk membantu rekomendasi ukuran dan panduan koleksi terbaru? Terima kasih.`
  ];

  return buildWhatsAppLink(lines.join('\n'));
}
