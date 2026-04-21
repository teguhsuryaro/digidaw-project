import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, UserCircle } from "lucide-react";
import { cn } from "../lib/utils";

// Data dummy untuk simulasi hasil pencarian
const MOCK_SEARCH_RESULTS = [
  { id: 1, name: "Kopi Senja", type: "Merchant • Kopi & Minuman", image: "/images/kopi-senja.jpg" },
  { id: 2, name: "Kopi Susu Gula Aren", type: "Produk • Kopi Senja", image: "/images/kopi-susu-gula-aren.jpg" },
  { id: 3, name: "Warung Nasi Ibu Susi", type: "Merchant • Kuliner", image: "/images/warung-nasi-ibu-susi.jpg" },
  { id: 4, name: "Nasi Rames Komplit", type: "Produk • Warung Nasi Ibu Susi", image: "/images/nasi-rames-komplit.jpg" },
  { id: 5, name: "Gorengan", type: "Jajanan • Gorengan Bang Jago", image: "/images/gorengan-bang-jago.jpg" },
  { id: 6, name: "Seblak Jeletot", type: "Jajanan • Seblak Teh Euis", image: "/images/seblak-jeletot-teh-euis.jpg" },
  { id: 7, name: "Batik", type: "Fashion • Batik Lestari", image: "/images/batik-lestari.jpg" },
];

export default function Navbar() {
  const location = useLocation();
  const isMerchant = location.pathname === "/merchant";
  
  // State untuk fitur pencarian
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Menutup dropdown pencarian saat pengguna mengklik di luar area kotak pencarian
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Logika filter pencarian
  const filteredResults = MOCK_SEARCH_RESULTS.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.type.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Merchant page has its own top-bar layout
  if (isMerchant) return null;

  return (
    <nav className="flex justify-between items-center w-full px-8 py-4 sticky top-0 z-50 bg-white dark:bg-gray-900 bg-surface-container-low bg-surface">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-2xl font-black tracking-tighter text-primary dark:text-white headline">
          DigiDO
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          <Link
            to="/"
            className={cn(
              "font-medium transition-colors hover:text-primary",
              location.pathname === "/"
                ? "text-primary font-bold border-b-2 border-primary"
                : "text-outline"
            )}
          >
            Home
          </Link>
          <Link
            to="/mitra"
            className={cn(
              "font-medium transition-colors hover:text-primary",
              location.pathname === "/mitra"
                ? "text-primary font-bold border-b-2 border-primary"
                : "text-outline"
            )}
          >
            Mitra
          </Link>
          <Link
            to="/deals"
            className={cn(
              "font-medium transition-colors hover:text-primary",
              location.pathname === "/deals"
                ? "text-primary font-bold border-b-2 border-primary"
                : "text-outline"
            )}
          >
            Deals
          </Link>
          <Link
            to="/orders"
            className={cn(
              "font-medium transition-colors hover:text-primary",
              location.pathname === "/orders"
                ? "text-primary font-bold border-b-2 border-primary"
                : "text-outline"
            )}
          >
            Orders
          </Link>
          <Link
            to="/checkout"
            className={cn(
              "font-medium transition-colors hover:text-primary relative",
              location.pathname === "/checkout"
                ? "text-primary font-bold border-b-2 border-primary"
                : "text-outline"
            )}
          >
            Cart
            <span className="absolute -top-1.5 -right-3 bg-secondary text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
          </Link>
        </div>
      </div>

      {location.pathname === "/" && (
        <div className="flex-1 max-w-2xl px-8 hidden md:block">
          <div className="relative group" ref={searchRef}>
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-primary-fixed-dim" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchOpen(true)}
              placeholder="Cari makan, jasa, atau UMKM terdekat..."
              className="w-full bg-surface-container-high border-none rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all duration-300 placeholder:text-outline placeholder:text-sm"
            />
            
            {/* Dropdown Hasil Pencarian */}
            {isSearchOpen && searchQuery.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant/20 overflow-hidden z-50 max-h-[400px] overflow-y-auto animate-in fade-in zoom-in-95">
                {filteredResults.length > 0 ? (
                  filteredResults.map((item) => (
                    <Link 
                      key={item.id} 
                      to="/merchant"
                      onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }} 
                      className="flex items-center gap-4 p-4 hover:bg-surface-container-low transition-colors border-b border-surface-container-high last:border-b-0 cursor-pointer"
                    >
                      <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover bg-surface-container shadow-sm" />
                      <div>
                        <h4 className="font-bold text-primary text-sm line-clamp-1">{item.name}</h4>
                        <p className="text-xs text-on-surface-variant mt-0.5">{item.type}</p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="p-6 text-center text-on-surface-variant text-sm font-medium">
                    Tidak menemukan "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
      
      <div className="flex items-center gap-4">
        <button className="text-on-surface-variant p-2 hover:bg-surface-container-high rounded-full transition-colors flex items-center justify-center">
          <UserCircle className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
