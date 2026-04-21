import { useState } from "react";
import { Package, Clock, Truck, CheckCircle2, XCircle, Store, AlertCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const TABS = ["Semua", "Belum Dibayar", "Diproses", "Dalam Perjalanan", "Selesai", "Dibatalkan"];

// Data dummy untuk simulasi pesanan
const MOCK_ORDERS = [
  {
    id: "ORD-9823741",
    store: "Kopi Senja",
    date: "24 Okt 2023, 14:30",
    status: "Belum Dibayar",
    total: "Rp 49.000",
    items: "1x Kopi Susu Gula Aren, 1x Croissant Coklat",
    image: "/images/kopi-susu-gula-aren.jpg"
  },
  {
    id: "ORD-9823740",
    store: "Warung Nasi Ibu Susi",
    date: "23 Okt 2023, 11:15",
    status: "Dalam Perjalanan",
    total: "Rp 25.000",
    items: "1x Nasi Rames Komplit",
    image: "/images/nasi-rames-komplit.jpg"
  },
  {
    id: "ORD-9823735",
    store: "Gorengan Bang Jago",
    date: "20 Okt 2023, 09:00",
    status: "Selesai",
    total: "Rp 10.000",
    items: "3x Bakwan, 2x Tahu Isi",
    image: "/images/gorengan-bang-jago.jpg"
  },
  {
    id: "ORD-9823712",
    store: "Batik Lestari",
    date: "15 Okt 2023, 16:45",
    status: "Dibatalkan",
    total: "Rp 250.000",
    items: "1x Kemeja Flanel Basic Pria",
    image: "/images/batik-lestari.jpg"
  }
];

export default function Orders() {
  const [activeTab, setActiveTab] = useState("Semua");
  const location = useLocation();
  // Menangkap state dari halaman checkout
  const [showAlert, setShowAlert] = useState(location.state?.checkoutSuccess || false);

  const filteredOrders = MOCK_ORDERS.filter(order => 
    activeTab === "Semua" ? true : order.status === activeTab
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Belum Dibayar": return "bg-orange-100 text-orange-700 border-orange-200";
      case "Diproses": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Dalam Perjalanan": return "bg-indigo-100 text-indigo-700 border-indigo-200";
      case "Selesai": return "bg-green-100 text-green-700 border-green-200";
      case "Dibatalkan": return "bg-red-100 text-red-700 border-red-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Belum Dibayar": return <Clock className="w-3 h-3" />;
      case "Diproses": return <Package className="w-3 h-3" />;
      case "Dalam Perjalanan": return <Truck className="w-3 h-3" />;
      case "Selesai": return <CheckCircle2 className="w-3 h-3" />;
      case "Dibatalkan": return <XCircle className="w-3 h-3" />;
      default: return null;
    }
  };

  return (
    <main className="min-h-screen bg-surface pb-24 pt-8">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <h1 className="text-3xl font-extrabold text-primary headline mb-8">Daftar Pesanan</h1>

        {/* Alert Pembayaran */}
        {showAlert && (
          <div className="mb-6 bg-green-50 border border-green-200 p-4 rounded-xl flex items-start gap-3 animate-in slide-in-from-top-4 fade-in duration-300 shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
            <div className="flex-grow">
              <h4 className="text-green-800 font-bold text-sm">Pesanan Sudah Selesai!</h4>
              <p className="text-green-700 text-xs mt-1 font-medium">Terima kasih, pembayaran Anda telah berhasil dikonfirmasi. Pesanan Anda sekarang sedang diproses oleh merchant.</p>
            </div>
            <button onClick={() => setShowAlert(false)} className="text-green-500 hover:text-green-700 transition-colors">
              <XCircle className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar mb-8 pb-2 border-b border-surface-container">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === tab
                  ? "bg-primary text-white shadow-md"
                  : "text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Order List */}
        <div className="space-y-6">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <div key={order.id} className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4 pb-4 border-b border-surface-container">
                  <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <Store className="w-4 h-4" />
                    <span className="font-bold text-on-surface">{order.store}</span>
                    <span>•</span>
                    <span>{order.date}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border flex items-center gap-1.5 ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    {order.status}
                  </div>
                </div>

                <div className="flex gap-4 mb-6">
                  <img src={order.image} alt={order.store} className="w-20 h-20 rounded-xl object-cover border border-surface-container-high" />
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg text-primary mb-1">{order.items}</h3>
                    <p className="text-xs text-on-surface-variant font-medium">Order ID: {order.id}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-on-surface-variant mb-1">Total Belanja</p>
                    <p className="font-black text-lg text-primary">{order.total}</p>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-surface-container">
                  {order.status === "Belum Dibayar" && (
                    <button className="px-6 py-2.5 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary-container hover:text-on-primary-container transition-colors">
                      Bayar Sekarang
                    </button>
                  )}
                  {(order.status === "Dalam Perjalanan" || order.status === "Diproses") && (
                    <button className="px-6 py-2.5 bg-secondary-container text-on-secondary-container rounded-xl font-bold text-sm hover:opacity-90 transition-colors">
                      Lacak Pesanan
                    </button>
                  )}
                  {(order.status === "Selesai" || order.status === "Dibatalkan") && (
                    <button className="px-6 py-2.5 border-2 border-primary text-primary rounded-xl font-bold text-sm hover:bg-primary/5 transition-colors">
                      Beli Lagi
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="py-20 text-center flex flex-col items-center">
              <Package className="w-16 h-16 text-outline-variant mb-4" />
              <p className="text-lg font-bold text-primary headline">Tidak ada pesanan</p>
              <p className="text-sm text-on-surface-variant mt-1">Anda belum memiliki pesanan dengan status ini.</p>
              <Link to="/deals" className="mt-6 px-6 py-2.5 bg-primary text-white rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">Mulai Belanja</Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}