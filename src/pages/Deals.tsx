import { useState, useMemo, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Star, MapPin, Store, Search, SlidersHorizontal, Check, Percent } from "lucide-react";

const CATEGORIES = ["Semua", "Kuliner", "Jajanan", "Kopi & Minuman", "Fashion", "Kerajinan"];

// Data dummy/statis untuk daftar usaha
const MOCK_MERCHANTS = [
  {
    id: 1,
    name: "Warung Nasi Ibu Susi",
    category: "Kuliner",
    rating: 4.8,
    reviews: "1.2k+",
    distance: "0.5 km",
    image: "/images/warung-nasi-ibu-susi.jpg",
    tags: ["Warung Nasi", "Halal"],
  },
  {
    id: 2,
    name: "Kopi Senja",
    category: "Kopi & Minuman",
    rating: 4.9,
    reviews: "2.1k+",
    distance: "1.2 km",
    image: "/images/kopi-senja.jpg",
    tags: ["Bestseller", "Tempat Nyaman"],
  },
  {
    id: 3,
    name: "Gorengan Bang Jago",
    category: "Jajanan",
    rating: 4.7,
    reviews: "3.5k+",
    distance: "0.2 km",
    image: "/images/gorengan-bang-jago.jpg",
    tags: ["Terlaris", "Murah Meriah"],
  },
  {
    id: 4,
    name: "Batik Lestari",
    category: "Fashion",
    rating: 4.8,
    reviews: "520+",
    distance: "2.5 km",
    image: "/images/batik-lestari.jpg",
    tags: ["Premium", "Diskon 20%"],
  },
  {
    id: 5,
    name: "Soto Ayam Pak Min",
    rating: 4.6,
    reviews: "5k+",
    distance: "0.9 km",
    category: "Kuliner",
    image: "/images/soto-ayam-pak-min.jpg",
    tags: ["Legendaris", "Sarapan"],
  },
  {
    id: 6,
    name: "Pottery Cantik",
    category: "Kerajinan",
    rating: 4.8,
    reviews: "250+",
    distance: "4.1 km",
    image: "/images/pottery-cantik.jpg",
    tags: ["Buatan Tangan", "Unik"],
  },
  {
    id: 7,
    name: "Seblak Jeletot Teh Euis",
    category: "Jajanan",
    rating: 4.9,
    reviews: "4.2k+",
    distance: "1.1 km",
    image: "/images/seblak-jeletot-teh-euis.jpg",
    tags: ["Pedas Mantap", "Viral"],
  },
  {
    id: 8,
    name: "Cukur Rambut 'Rapi'",
    category: "Jasa",
    rating: 4.9,
    reviews: "850+",
    distance: "1.8 km",
    image: "/images/cukur-rambut-rapi.jpg",
    tags: ["Buka Sekarang", "Profesional"],
  }
];

// Data menu spesifik yang sedang promo
const MOCK_PROMOS = [
  {
    id: 101,
    name: "Kopi Susu Gula Aren",
    merchant: "Kopi Senja",
    price: "Rp 18.000",
    originalPrice: "Rp 22.000",
    image: "/images/kopi-susu-gula-aren.jpg",
    discount: "18%"
  },
  {
    id: 102,
    name: "Nasi Rames Komplit",
    merchant: "Warung Nasi Ibu Susi",
    price: "Rp 20.000",
    originalPrice: "Rp 25.000",
    image: "/images/nasi-rames-komplit.jpg",
    discount: "20%"
  },
  {
    id: 103,
    name: "Seblak Jeletot Spesial",
    merchant: "Seblak Teh Euis",
    price: "Rp 12.000",
    originalPrice: "Rp 15.000",
    image: "/images/seblak-jeletot-teh-euis.jpg",
    discount: "20%"
  },
  {
    id: 104,
    name: "Croissant Coklat",
    merchant: "Kopi Senja",
    price: "Rp 20.000",
    originalPrice: "Rp 25.000",
    image: "/images/croissant-coklat.jpg",
    discount: "20%"
  }
];

export default function Deals() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState(location.state?.sortBy || "default");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  // Menutup dropdown filter saat klik di luar area
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterRef]);

  // Filter data berdasarkan kategori dan input pencarian
  const sortedAndFilteredMerchants = useMemo(() => {
    const filtered = MOCK_MERCHANTS.filter((merchant) => {
      const matchCategory = activeCategory === "Semua" || merchant.category === activeCategory;
      const matchSearch = merchant.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });

    // Buat salinan untuk diurutkan
    const sortableMerchants = [...filtered];

    if (sortBy === 'distance') {
      sortableMerchants.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
    } else if (sortBy === 'rating') {
      sortableMerchants.sort((a, b) => b.rating - a.rating);
    }
    
    return sortableMerchants;
  }, [activeCategory, searchQuery, sortBy]);

  const handleSortChange = (sortType: string) => {
    setSortBy(sortType);
    setIsFilterOpen(false);
  };

  return (
    <main className="min-h-screen bg-surface pb-24">
      {/* Header & Search Section */}
      <section className="bg-surface-container-low pt-6 md:pt-8 pb-8 md:pb-12 px-4 md:px-6 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-extrabold text-primary headline mb-4 md:mb-6">
            Jelajahi Mitra DigiDO
          </h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-outline" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari nama usaha, makanan, atau jasa..."
                className="w-full bg-surface-container-highest border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all duration-300 placeholder:text-outline font-body"
              />
            </div>
            <div className="relative shrink-0" ref={filterRef}>
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full md:w-auto flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 md:px-6 md:py-4 rounded-xl text-sm md:text-base font-bold hover:bg-primary-container hover:text-on-primary-container transition-colors"
              >
                <SlidersHorizontal className="w-5 h-5" />
                Filter
              </button>

              {isFilterOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-surface-container-lowest rounded-xl shadow-lg border border-outline-variant/20 z-10 py-2 animate-in fade-in-0 zoom-in-95">
                  <div className="px-4 py-2 text-xs font-bold uppercase text-outline tracking-wider">Urutkan</div>
                  <button onClick={() => handleSortChange('default')} className="w-full text-left px-4 py-2.5 text-sm text-on-surface flex justify-between items-center hover:bg-surface-container-high transition-colors">
                    <span>Relevansi</span>
                    {sortBy === 'default' && <Check className="w-4 h-4 text-primary" />}
                  </button>
                  <button onClick={() => handleSortChange('distance')} className="w-full text-left px-4 py-2.5 text-sm text-on-surface flex justify-between items-center hover:bg-surface-container-high transition-colors">
                    <span>Jarak Terdekat</span>
                    {sortBy === 'distance' && <Check className="w-4 h-4 text-primary" />}
                  </button>
                  <button onClick={() => handleSortChange('rating')} className="w-full text-left px-4 py-2.5 text-sm text-on-surface flex justify-between items-center hover:bg-surface-container-high transition-colors">
                    <span>Rating Tertinggi</span>
                    {sortBy === 'rating' && <Check className="w-4 h-4 text-primary" />}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-6 md:mt-8">
        
        {/* Menu Promo Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-secondary-container p-2 rounded-lg">
              <Percent className="w-5 h-5 text-on-secondary-container" />
            </div>
            <h2 className="text-xl md:text-2xl font-extrabold text-primary headline">Promo Menu Hari Ini</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 pb-4 -mx-4 px-4 md:mx-0 md:px-0">
            {MOCK_PROMOS.map((promo) => (
              <Link to="/merchant" key={promo.id} className="w-full bg-surface-container-lowest rounded-xl md:rounded-2xl overflow-hidden border border-outline-variant/10 hover:shadow-lg hover:-translate-y-1 transition-all group flex flex-col h-full">
                <div className="aspect-square md:h-40 relative overflow-hidden shrink-0 bg-surface-container-low">
                  <img src={promo.image} alt={promo.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-secondary text-white px-2.5 py-1 rounded-lg text-xs font-bold shadow-sm">
                    Hemat {promo.discount}
                  </div>
                </div>
                <div className="p-3 md:p-4 flex flex-col flex-grow">
                  <p className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest text-outline mb-1 line-clamp-1">{promo.merchant}</p>
                  <h3 className="font-bold text-xs md:text-base text-primary mb-2 line-clamp-2 md:line-clamp-1 leading-tight">{promo.name}</h3>
                  <div className="mt-auto flex flex-col md:flex-row md:items-baseline gap-0.5 md:gap-2">
                    <span className="font-black text-sm md:text-lg text-primary">{promo.price}</span>
                    <span className="text-[10px] md:text-xs text-outline line-through">{promo.originalPrice}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Categories / Tabs */}
        <h2 className="text-xl md:text-2xl font-extrabold text-primary headline mb-3 md:mb-4">Jelajahi Mitra</h2>
        <div className="flex gap-2 md:gap-3 overflow-x-auto no-scrollbar mb-6 md:mb-8 pb-2 -mx-4 px-4 md:mx-0 md:px-0">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold whitespace-nowrap transition-all shadow-sm ${
                activeCategory === category
                  ? "bg-primary text-white shadow-primary/30"
                  : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Merchants Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
          {sortedAndFilteredMerchants.length > 0 ? (
            sortedAndFilteredMerchants.map((merchant) => (
              <Link to="/merchant" key={merchant.id} className="group bg-surface-container-lowest rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-outline-variant/10 flex flex-col">
                <div className="relative aspect-square md:aspect-auto md:h-48 overflow-hidden shrink-0 bg-surface-container-low">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={merchant.name} src={merchant.image} />
                  <div className="absolute top-2 left-2 md:top-3 md:left-3 flex flex-col gap-1.5">
                    {merchant.tags.map(tag => (
                      <span key={tag} className="bg-secondary-container/90 backdrop-blur-sm text-on-secondary-container px-2 py-0.5 md:px-3 md:py-1 rounded-lg text-[8px] md:text-[10px] font-black tracking-wider uppercase shadow-sm w-max hidden sm:block">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-3 md:p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-outline">{merchant.category}</span>
                    </div>
                    <h3 className="font-bold text-base md:text-xl text-primary mb-2 md:mb-3 headline line-clamp-2 md:line-clamp-1 group-hover:text-secondary transition-colors">{merchant.name}</h3>
                  </div>
                  <div className="flex items-center justify-between pt-2 md:pt-4 border-t border-surface-container flex-wrap gap-1">
                    <div className="flex items-center gap-1 md:gap-1.5 text-secondary">
                      <Star className="w-3 h-3 md:w-4 md:h-4 fill-secondary" />
                      <span className="font-bold text-xs md:text-sm text-on-surface">{merchant.rating}</span>
                      <span className="text-[10px] md:text-xs text-outline font-medium hidden sm:inline-block">({merchant.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1 text-on-surface-variant">
                      <MapPin className="w-3 h-3" />
                      <span className="text-xs font-medium">{merchant.distance}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-16 text-center text-on-surface-variant">
              <Store className="w-16 h-16 mx-auto text-outline-variant mb-4" />
              <p className="font-bold text-lg">Tidak ada usaha yang ditemukan.</p>
              <p className="text-sm mt-1">Coba gunakan kata kunci pencarian atau kategori lain.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}