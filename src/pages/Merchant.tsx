import { ArrowLeft, Share2, UserCircle, BadgeCheck, Star, Truck, Plus, ShoppingBasket } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Merchant() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface pb-32">
      {/* Top Navbar */}
      <header className="flex justify-between items-center w-full px-4 md:px-6 py-3 md:py-4 sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-surface-container-high md:border-none">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container transition-colors">
            <ArrowLeft className="text-primary w-6 h-6" />
          </button>
          <h1 className="text-xl font-black tracking-tighter text-blue-900 dark:text-white headline">Kopi Senja</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container transition-colors">
            <Share2 className="text-on-surface-variant w-5 h-5" />
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container transition-colors">
            <UserCircle className="text-on-surface-variant w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto">
        {/* Banner */}
        <section className="relative w-full h-48 md:h-80 overflow-hidden md:rounded-xl md:mt-4">
          <img alt="Kedai Kopi" className="w-full h-full object-cover" src="/images/kopi-senja.jpg" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </section>

        {/* Store Info */}
        <section className="px-4 md:px-6 -mt-8 md:-mt-12 relative z-10">
          <div className="bg-surface-container-lowest p-4 md:p-6 rounded-xl shadow-[var(--shadow-ambient)] border border-outline-variant/10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl md:text-2xl font-extrabold headline tracking-tight text-primary">Kopi Senja</h2>
                  <span className="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <BadgeCheck className="w-3 h-3 fill-secondary-container text-white" />
                    Premium Partner
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm font-medium text-on-surface-variant mb-4">
                  <span className="flex items-center gap-1">
                    <Star className="text-secondary w-4 h-4 fill-secondary" />
                    <span className="text-on-surface font-bold">4.9</span> (2.1k+ Ratings)
                  </span>
                  <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                  <span>Kopi & Minuman • Cafe</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-surface-container-high px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">Tempat Nyaman</span>
                  <span className="bg-surface-container-high px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">Cashless</span>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end">
                <div className="bg-blue-50 border border-blue-100 px-4 py-2 rounded-xl flex items-center gap-3">
                  <Truck className="text-primary w-6 h-6" />
                  <div>
                    <p className="text-[10px] uppercase font-black text-primary tracking-widest leading-none">Promo</p>
                    <p className="text-sm font-bold text-blue-900">Gratis Ongkir</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Navigation */}
        <nav className="sticky top-[60px] md:top-[72px] z-40 glass-panel px-4 md:px-6 mt-4 md:mt-6 overflow-x-auto no-scrollbar py-2 border-b border-surface-container-high">
          <div className="flex gap-2 min-w-max">
            <button className="bg-primary text-on-primary px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-bold shadow-md shadow-primary/20">Best Seller</button>
            <button className="bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-colors">Espresso Based</button>
            <button className="bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-colors">Manual Brew</button>
            <button className="bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-colors">Non-Kopi</button>
            <button className="bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-colors">Camilan</button>
          </div>
        </nav>

        {/* Product List */}
        <section className="px-4 md:px-6 mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
          <h3 className="col-span-full text-lg md:text-xl font-bold headline mt-4 md:mt-6 mb-1 md:mb-4 text-on-surface px-1 md:px-2">Best Seller</h3>
          
          {/* Card 1 */}
          <div className="bg-surface-container-lowest p-2.5 md:p-4 rounded-xl flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center transition-all hover:shadow-lg hover:shadow-primary/5 group border border-transparent hover:border-outline-variant/20 h-full">
            <div className="w-full md:w-24 aspect-square md:aspect-auto md:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-surface-container-low">
              <img alt="Kopi Susu Gula Aren" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/images/kopi-susu-gula-aren.jpg" />
            </div>
            <div className="flex-grow flex flex-col w-full h-full">
              <div className="flex flex-col md:flex-row justify-between items-start gap-0.5 md:gap-4 w-full">
                <h4 className="font-bold text-on-surface text-sm md:text-lg leading-tight line-clamp-2 md:line-clamp-none">Kopi Susu Gula Aren</h4>
                <span className="text-primary font-black text-sm md:text-lg whitespace-nowrap">Rp 22.000</span>
              </div>
              <p className="text-[10px] md:text-sm text-on-surface-variant mt-1 md:mt-1 line-clamp-1 md:line-clamp-2">Perpaduan kopi, susu, dan manisnya gula aren yang pas.</p>
              <div className="mt-auto pt-2 md:pt-3 flex justify-end w-full">
                <button className="w-7 h-7 md:w-10 md:h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-colors shadow-sm">
                  <Plus className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-container-lowest p-2.5 md:p-4 rounded-xl flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center transition-all hover:shadow-lg hover:shadow-primary/5 group border border-transparent hover:border-outline-variant/20 h-full">
            <div className="w-full md:w-24 aspect-square md:aspect-auto md:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-surface-container-low">
              <img alt="V60 Japanese Iced" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/images/v60-japanese-iced.jpg" />
            </div>
            <div className="flex-grow flex flex-col w-full h-full">
              <div className="flex flex-col md:flex-row justify-between items-start gap-0.5 md:gap-4 w-full">
                <h4 className="font-bold text-on-surface text-sm md:text-lg leading-tight line-clamp-2 md:line-clamp-none">V60 Japanese Iced</h4>
                <span className="text-primary font-black text-sm md:text-lg whitespace-nowrap">Rp 28.000</span>
              </div>
              <p className="text-[10px] md:text-sm text-on-surface-variant mt-1 md:mt-1 line-clamp-1 md:line-clamp-2">Kopi seduh manual dengan metode V60 disajikan dingin ala Jepang.</p>
              <div className="mt-auto pt-2 md:pt-3 flex justify-end w-full">
                <button className="w-7 h-7 md:w-10 md:h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-colors shadow-sm">
                  <Plus className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-container-lowest p-2.5 md:p-4 rounded-xl flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center transition-all hover:shadow-lg hover:shadow-primary/5 group border border-transparent hover:border-outline-variant/20 h-full">
            <div className="w-full md:w-24 aspect-square md:aspect-auto md:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-surface-container-low">
              <img alt="Croissant Coklat" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/images/croissant-coklat.jpg" />
            </div>
            <div className="flex-grow flex flex-col w-full h-full">
              <div className="flex flex-col md:flex-row justify-between items-start gap-0.5 md:gap-4 w-full">
                <h4 className="font-bold text-on-surface text-sm md:text-lg leading-tight line-clamp-2 md:line-clamp-none">Croissant Coklat</h4>
                <span className="text-primary font-black text-sm md:text-lg whitespace-nowrap">Rp 25.000</span>
              </div>
              <p className="text-[10px] md:text-sm text-on-surface-variant mt-1 md:mt-1 line-clamp-1 md:line-clamp-2">Pastry renyah dengan isian coklat premium yang meleleh.</p>
              <div className="mt-auto pt-2 md:pt-3 flex justify-end w-full">
                <button className="w-7 h-7 md:w-10 md:h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-colors shadow-sm">
                  <Plus className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>

          <h3 className="col-span-full text-lg md:text-xl font-bold headline mt-4 md:mt-6 mb-1 md:mb-4 text-on-surface px-1 md:px-2">Espresso Based</h3>
          
          {/* Card 4 */}
          <div className="bg-surface-container-lowest p-2.5 md:p-4 rounded-xl flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center transition-all hover:shadow-lg hover:shadow-primary/5 group border border-transparent hover:border-outline-variant/20 h-full">
            <div className="w-full md:w-24 aspect-square md:aspect-auto md:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-surface-container-low">
              <img alt="Americano" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/images/americano.jpg" />
            </div>
            <div className="flex-grow flex flex-col w-full h-full">
              <div className="flex flex-col md:flex-row justify-between items-start gap-0.5 md:gap-4 w-full">
                <h4 className="font-bold text-on-surface text-sm md:text-lg leading-tight line-clamp-2 md:line-clamp-none">Americano</h4>
                <span className="text-primary font-black text-sm md:text-lg whitespace-nowrap">Rp 18.000</span>
              </div>
              <p className="text-[10px] md:text-sm text-on-surface-variant mt-1 md:mt-1 line-clamp-1 md:line-clamp-2">Espresso shot yang diencerkan dengan air panas.</p>
              <div className="mt-auto pt-2 md:pt-3 flex justify-end w-full">
                <button className="w-7 h-7 md:w-10 md:h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-colors shadow-sm">
                  <Plus className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>

          <h3 className="col-span-full text-lg md:text-xl font-bold headline mt-4 md:mt-6 mb-1 md:mb-4 text-on-surface px-1 md:px-2">Non-Kopi</h3>

          {/* Card 5 */}
          <div className="bg-surface-container-lowest p-2.5 md:p-4 rounded-xl flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center transition-all hover:shadow-lg hover:shadow-primary/5 group border border-transparent hover:border-outline-variant/20 h-full">
            <div className="w-full md:w-24 aspect-square md:aspect-auto md:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-surface-container-low">
              <img alt="Matcha Latte" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/images/matcha-latte.jpg" />
            </div>
            <div className="flex-grow flex flex-col w-full h-full">
              <div className="flex flex-col md:flex-row justify-between items-start gap-0.5 md:gap-4 w-full">
                <h4 className="font-bold text-on-surface text-sm md:text-lg leading-tight line-clamp-2 md:line-clamp-none">Matcha Latte</h4>
                <span className="text-primary font-black text-sm md:text-lg whitespace-nowrap">Rp 24.000</span>
              </div>
              <p className="text-[10px] md:text-sm text-on-surface-variant mt-1 md:mt-1 line-clamp-1 md:line-clamp-2">Bubuk teh hijau Jepang berkualitas dengan steamed milk.</p>
              <div className="mt-auto pt-2 md:pt-3 flex justify-end w-full">
                <button className="w-7 h-7 md:w-10 md:h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-colors shadow-sm">
                  <Plus className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-surface-container-lowest p-2.5 md:p-4 rounded-xl flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center transition-all hover:shadow-lg hover:shadow-primary/5 group border border-transparent hover:border-outline-variant/20 h-full">
            <div className="w-full md:w-24 aspect-square md:aspect-auto md:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-surface-container-low">
              <img alt="Red Velvet Latte" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/images/red-velvet-latte.jpg" />
            </div>
            <div className="flex-grow flex flex-col w-full h-full">
              <div className="flex flex-col md:flex-row justify-between items-start gap-0.5 md:gap-4 w-full">
                <h4 className="font-bold text-on-surface text-sm md:text-lg leading-tight line-clamp-2 md:line-clamp-none">Red Velvet Latte</h4>
                <span className="text-primary font-black text-sm md:text-lg whitespace-nowrap">Rp 24.000</span>
              </div>
              <p className="text-[10px] md:text-sm text-on-surface-variant mt-1 md:mt-1 line-clamp-1 md:line-clamp-2">Rasa kue red velvet yang unik dalam segelas latte.</p>
              <div className="mt-auto pt-2 md:pt-3 flex justify-end w-full">
                <button className="w-7 h-7 md:w-10 md:h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-colors shadow-sm">
                  <Plus className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-lg z-50">
        <div className="bg-primary/90 backdrop-blur-sm text-on-primary p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,63,135,0.3)] flex items-center justify-between border border-white/10">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-black tracking-widest opacity-80 leading-none mb-1">Total Pesanan</span>
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-sm">2 Item</span>
              <span className="text-xl font-black">Rp 47.000</span>
            </div>
          </div>
          <Link to="/checkout" className="bg-white text-primary px-6 py-3 rounded-xl font-extrabold text-sm flex items-center gap-2 hover:bg-primary-fixed-dim transition-all active:scale-95">
            Lihat Keranjang
            <ShoppingBasket className="w-4 h-4 font-bold" />
          </Link>
        </div>
      </div>
    </div>
  );
}
