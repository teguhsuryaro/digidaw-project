import { Truck, ShoppingBag, CheckCircle2, Wallet, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  return (
    <main className="flex-grow max-w-7xl mx-auto px-4 py-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left Column: Checkout Details */}
      <div className="lg:col-span-7 space-y-8">
        {/* Delivery Info Section */}
        <section className="bg-surface-container-lowest p-8 rounded-xl shadow-[var(--shadow-ambient)]">
          <div className="flex items-center gap-3 mb-6">
            <Truck className="text-primary w-6 h-6" />
            <h2 className="text-xl font-bold headline">Informasi Pengiriman</h2>
          </div>
          <div className="bg-surface-container-low p-6 rounded-lg border-l-4 border-primary">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-lg text-on-surface">Fakultas Teknik, Gedung C</p>
                <p className="text-on-surface-variant text-sm mt-1">Lantai 2, Ruang Lab Informatika</p>
              </div>
              <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase font-label">DEFAULT</span>
            </div>
            <div className="mt-4 pt-4 border-t border-outline-variant flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-secondary" />
                <span className="text-sm font-semibold">Internal Delivery</span>
              </div>
              <span className="text-primary font-bold">Rp 0 (Bebas Ongkir)</span>
            </div>
          </div>
        </section>

        {/* Order Summary Section */}
        <section className="bg-surface-container-lowest p-8 rounded-xl shadow-[var(--shadow-ambient)]">
          <div className="flex items-center gap-3 mb-6">
            <ShoppingBag className="text-primary w-6 h-6" />
            <h2 className="text-xl font-bold headline">Ringkasan Pesanan</h2>
          </div>
          <div className="space-y-6">
            {/* Item 1 */}
            <div className="flex gap-4">
              <img className="w-20 h-20 rounded-lg object-cover" alt="Kopi Susu" src="/images/kopi-susu-gula-aren.jpg" referrerPolicy="no-referrer" />
              <div className="flex-grow">
                <div className="flex justify-between">
                  <h3 className="font-bold text-on-surface">Kopi Susu Gula Aren</h3>
                  <span className="font-bold">Rp 22.000</span>
                </div>
                <p className="text-sm text-on-surface-variant mt-1">Varian: Normal Sugar</p>
                <p className="text-sm font-medium mt-1">Qty: 1</p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex gap-4">
              <img className="w-20 h-20 rounded-lg object-cover" alt="Croissant" src="/images/croissant-coklat.jpg" referrerPolicy="no-referrer" />
              <div className="flex-grow">
                <div className="flex justify-between">
                  <h3 className="font-bold text-on-surface">Croissant Coklat</h3>
                  <span className="font-bold">Rp 25.000</span>
                </div>
                <p className="text-sm text-on-surface-variant mt-1">Tambahan: Hangatkan</p>
                <p className="text-sm font-medium mt-1">Qty: 1</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-outline-variant space-y-3">
            <div className="flex justify-between text-on-surface-variant">
              <span>Subtotal</span>
              <span>Rp 47.000</span>
            </div>
            <div className="flex justify-between text-on-surface-variant">
              <span>Biaya Layanan</span>
              <span>Rp 2.000</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-lg font-bold headline">Total Pembayaran</span>
              <span className="text-2xl font-black text-primary headline">Rp 49.000</span>
            </div>
          </div>
        </section>
      </div>

      {/* Right Column: Payment Method & QRIS */}
      <div className="lg:col-span-5 space-y-8">
        <section className="bg-surface-container-lowest p-8 rounded-xl shadow-[var(--shadow-ambient)] sticky top-24">
          <h2 className="text-xl font-bold headline mb-6">Pilih Metode Pembayaran</h2>
          
          {/* Payment Choice */}
          <div className="p-4 rounded-xl bg-primary-fixed border border-primary/20 flex items-center justify-between mb-8 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                 <img className="w-8 h-8 object-contain" alt="QRIS" src="/images/wallet.jpg" referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="font-bold text-on-surface">QRIS / E-Wallet</p>
                <p className="text-xs text-on-surface-variant">Dana, OVO, GoPay, LinkAja</p>
              </div>
            </div>
            <CheckCircle2 className="text-primary w-6 h-6" />
          </div>

          {/* QRIS Section */}
          <div className="flex flex-col items-center">
            <div className="p-4 bg-white rounded-2xl shadow-inner border border-outline-variant/20 mb-6">
              <div className="w-56 h-56 bg-white relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#003f87 2px, transparent 2px)', backgroundSize: '12px 12px' }}></div>
                <div className="w-48 h-48 border-4 border-on-surface flex items-center justify-center relative">
                  <div className="w-full h-full p-2 grid grid-cols-4 grid-rows-4 gap-1">
                    <div className="bg-on-surface"></div><div className="bg-on-surface"></div><div></div><div className="bg-on-surface"></div>
                    <div></div><div className="bg-on-surface"></div><div className="bg-on-surface"></div><div></div>
                    <div className="bg-on-surface"></div><div></div><div className="bg-on-surface"></div><div className="bg-on-surface"></div>
                    <div className="bg-on-surface"></div><div className="bg-on-surface"></div><div></div><div className="bg-on-surface"></div>
                  </div>
                  <div className="absolute bg-white p-1 rounded">
                    <span className="text-[10px] font-black text-primary">DigiDO</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-on-surface-variant px-4 mb-8">
              Scan barcode ini untuk membayar via <span className="font-bold text-on-surface">Dana, OVO, atau Mobile Banking</span>
            </p>
            <button onClick={() => navigate('/orders', { state: { checkoutSuccess: true } })} className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 rounded-lg font-bold text-lg shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer">
              <span>Konfirmasi & Bayar</span>
              <Wallet className="w-5 h-5" />
            </button>
            <p className="mt-4 text-[10px] text-outline text-center uppercase tracking-widest font-bold">Transaksi Aman & Terenkripsi</p>
          </div>
        </section>
      </div>
    </main>
  );
}
