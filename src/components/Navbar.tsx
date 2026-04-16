import { Link, useLocation } from "react-router-dom";
import { Search, UserCircle } from "lucide-react";
import { cn } from "../lib/utils";

export default function Navbar() {
  const location = useLocation();
  const isMerchant = location.pathname === "/merchant";
  
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
            to="/merchant"
            className={cn(
              "font-medium transition-colors hover:text-primary",
              location.pathname === "/merchant"
                ? "text-primary font-bold border-b-2 border-primary"
                : "text-outline"
            )}
          >
            Deals
          </Link>
          <Link
            to="/checkout"
            className="text-outline font-medium hover:text-primary transition-colors"
          >
            Cart
          </Link>
        </div>
      </div>

      {location.pathname !== "/ai" && location.pathname !== "/checkout" && (
        <div className="flex-1 max-w-2xl px-8 hidden md:block">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-primary-fixed-dim" />
            </div>
            <input
              type="text"
              placeholder="Cari makan, jasa, atau UMKM terdekat..."
              className="w-full bg-surface-container-high border-none rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all duration-300 placeholder:text-outline placeholder:text-sm"
            />
          </div>
        </div>
      )}
      
      {location.pathname === "/ai" && (
        <div className="hidden md:block bg-surface-container-high rounded-full px-4 py-2 flex items-center mr-8">
             <Search className="w-4 h-4 text-outline mr-2" />
             <input type="text" placeholder="Cari layanan..." className="bg-transparent border-none focus:ring-0 text-sm w-48 outline-none" />
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
