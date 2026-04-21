import { Zap, ArrowRight, ArrowUpRight, QrCode, Star, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative px-4 md:px-8 pt-4 md:pt-8 pb-12 md:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-br from-primary to-primary-container min-h-[400px] md:min-h-[500px] flex flex-col md:flex-row items-center p-6 md:p-16 relative overflow-hidden">
          <div className="z-10 w-full md:w-1/2 space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-secondary-container text-on-secondary-container rounded-full text-[10px] md:text-xs font-bold tracking-wider uppercase">
              <Zap className="w-4 h-4" />
              UMKM Empowerment
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight headline">
              Zero Cost Delivery & <span className="text-secondary-fixed">100% Cashless</span>
            </h1>
            <p className="text-on-primary-container text-sm md:text-lg max-w-md font-body">
              Mendukung pertumbuhan ekonomi lokal dan memberdayakan UMKM, terkhusus di Purbalingga, melalui kurasi layanan merchant terbaik tanpa biaya tambahan.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/deals" className="w-full md:w-auto justify-center bg-surface-container-lowest text-primary px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold hover:scale-95 duration-150 transition-all flex items-center gap-2">
                Mulai Belanja
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/mitra" className="w-full md:w-auto justify-center text-center border border-on-primary-container text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
                Jadi Mitra
              </Link>
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2 hidden md:block opacity-40">
            <img 
              className="object-cover w-full h-full mix-blend-overlay" 
              alt="Cashless payment concept" 
              src="/images/background.webp" 
            />
          </div>
        </div>
      </section>

      {/* Mitra Premium Section */}
      <section className="py-8 md:py-12 bg-surface">
        <div className="px-4 md:px-8 mb-6 flex justify-between items-end max-w-7xl mx-auto">
          <div>
            <span className="text-xs text-outline tracking-[0.1em] font-bold uppercase block mb-2 font-label">Editor's Choice</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary headline">Mitra Premium</h2>
          </div>
          <button className="flex items-center gap-1 text-primary font-bold text-sm hover:underline">
            Lihat Semua
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 px-4 md:px-8 pb-8 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="w-full bg-surface-container-lowest p-3 md:p-6 rounded-xl border border-outline-variant/10 flex flex-col h-full">
            <div className="aspect-square md:aspect-video md:h-48 w-full rounded-lg overflow-hidden mb-3 md:mb-4 shrink-0 bg-surface-container-low">
              <img className="w-full h-full object-cover" alt="Kopi" src="/images/kopi-senja.jpg" />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start gap-2 flex-grow">
              <div>
                <h3 className="font-bold text-sm md:text-lg text-primary headline line-clamp-1">Kopi Senja</h3>
                <p className="text-[10px] md:text-sm text-outline line-clamp-1">Kopi & Minuman</p>
              </div>
              <span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[8px] md:text-[10px] font-bold tracking-widest uppercase font-label mt-auto md:mt-0">Premium</span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="w-full bg-surface-container-lowest p-3 md:p-6 rounded-xl border border-outline-variant/10 flex flex-col h-full">
            <div className="aspect-square md:aspect-video md:h-48 w-full rounded-lg overflow-hidden mb-3 md:mb-4 shrink-0 bg-surface-container-low">
              <img className="w-full h-full object-cover" alt="Warung Nasi" src="/images/warung-nasi-ibu-susi.jpg" />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start gap-2 flex-grow">
              <div>
                <h3 className="font-bold text-sm md:text-lg text-primary headline line-clamp-1">Warung Nasi Ibu Susi</h3>
                <p className="text-[10px] md:text-sm text-outline line-clamp-1">Kuliner Indonesia</p>
              </div>
              <span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[8px] md:text-[10px] font-bold tracking-widest uppercase font-label mt-auto md:mt-0">Verified</span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="w-full bg-surface-container-lowest p-3 md:p-6 rounded-xl border border-outline-variant/10 flex flex-col h-full">
            <div className="aspect-square md:aspect-video md:h-48 w-full rounded-lg overflow-hidden mb-3 md:mb-4 shrink-0 bg-surface-container-low">
              <img className="w-full h-full object-cover" alt="Batik" src="/images/batik-lestari.jpg" />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start gap-2 flex-grow">
              <div>
                <h3 className="font-bold text-sm md:text-lg text-primary headline line-clamp-1">Batik Lestari</h3>
                <p className="text-[10px] md:text-sm text-outline line-clamp-1">Fashion Lokal</p>
              </div>
              <span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[8px] md:text-[10px] font-bold tracking-widest uppercase font-label mt-auto md:mt-0">Premium</span>
            </div>
          </div>
          {/* Card 4 */}
          <div className="w-full bg-surface-container-lowest p-3 md:p-6 rounded-xl border border-outline-variant/10 flex flex-col h-full">
            <div className="aspect-square md:aspect-video md:h-48 w-full rounded-lg overflow-hidden mb-3 md:mb-4 shrink-0 bg-surface-container-low">
              <img className="w-full h-full object-cover" alt="Gorengan" src="/images/gorengan-bang-jago.jpg" />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start gap-2 flex-grow">
              <div>
                <h3 className="font-bold text-sm md:text-lg text-primary headline line-clamp-1">Gorengan Bang Jago</h3>
                <p className="text-[10px] md:text-sm text-outline line-clamp-1">Jajanan Kaki Lima</p>
              </div>
              <span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[8px] md:text-[10px] font-bold tracking-widest uppercase font-label mt-auto md:mt-0">Terlaris</span>
            </div>
          </div>
        </div>
      </section>

      {/* UMKM Grid Section */}
      <section className="py-10 md:py-16 px-4 md:px-8 bg-surface-container-low">
        <div className="mb-8 md:mb-12 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-4 gap-4">
            <h2 className="text-2xl md:text-4xl font-black text-primary tracking-tight headline">Temukan UMKM Terdekat</h2>
            <Link to="/deals" state={{ sortBy: 'distance' }} className="flex items-center gap-1 text-primary font-bold text-sm hover:underline mb-1 shrink-0">
              Lihat Semua
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            <button className="bg-primary text-white px-5 py-2 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm whitespace-nowrap">Semua</button>
            <button className="bg-surface-container-highest text-on-surface-variant px-5 py-2 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm whitespace-nowrap">Kuliner</button>
            <button className="bg-surface-container-highest text-on-surface-variant px-5 py-2 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm whitespace-nowrap">Jajanan</button>
            <button className="bg-surface-container-highest text-on-surface-variant px-5 py-2 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm whitespace-nowrap">Kopi & Minuman</button>
            <button className="bg-surface-container-highest text-on-surface-variant px-5 py-2 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm whitespace-nowrap">Fashion</button>
            <button className="bg-surface-container-highest text-on-surface-variant px-5 py-2 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm whitespace-nowrap">Kerajinan</button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
          {/* Grid Card 1 */}
          <Link to="/merchant" className="block group bg-surface-container-lowest rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-outline-variant/20">
            <div className="relative aspect-square md:aspect-auto md:h-56 overflow-hidden bg-surface-container-low">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Soto Ayam" src="/images/soto-ayam-pak-min.jpg" />
              <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-secondary-container text-on-secondary-container px-2 py-1 md:px-3 rounded-lg text-[10px] md:text-xs font-bold font-label shadow-sm">
                Gratis Ongkir
              </div>
            </div>
            <div className="p-3 md:p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-outline font-label">Kuliner</span>
                <QrCode className="text-primary w-4 h-4 md:w-5 md:h-5 hidden md:block" />
              </div>
              <h3 className="font-bold text-base md:text-xl text-primary mb-2 md:mb-4 headline line-clamp-1">Soto Ayam Pak Min</h3>
              <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-surface-container flex-wrap gap-1">
                <div className="flex items-center gap-1 text-secondary">
                  <Star className="w-3 h-3 md:w-4 md:h-4 fill-secondary" />
                  <span className="font-bold text-xs md:text-sm">4.8</span>
                </div>
                <span className="text-[10px] md:text-xs text-outline font-medium">1.2km away</span>
              </div>
            </div>
          </Link>
          {/* Grid Card 2 */}
          <Link to="/merchant" className="block group bg-surface-container-lowest rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-outline-variant/20">
            <div className="relative aspect-square md:aspect-auto md:h-56 overflow-hidden bg-surface-container-low">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Barbershop" src="/images/cukur-rambut-rapi.jpg" />
              <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-secondary-container text-on-secondary-container px-2 py-1 md:px-3 rounded-lg text-[10px] md:text-xs font-bold font-label shadow-sm">
                Gratis Ongkir
              </div>
            </div>
            <div className="p-3 md:p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-outline font-label">Jasa</span>
                <QrCode className="text-primary w-4 h-4 md:w-5 md:h-5 hidden md:block" />
              </div>
              <h3 className="font-bold text-base md:text-xl text-primary mb-2 md:mb-4 headline line-clamp-1">Cukur Rambut 'Rapi'</h3>
              <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-surface-container flex-wrap gap-1">
                <div className="flex items-center gap-1 text-secondary">
                  <Star className="w-3 h-3 md:w-4 md:h-4 fill-secondary" />
                  <span className="font-bold text-xs md:text-sm">4.9</span>
                </div>
                <span className="text-[10px] md:text-xs text-outline font-medium">0.8km away</span>
              </div>
            </div>
          </Link>
          {/* Grid Card 3 */}
          <Link to="/merchant" className="block group bg-surface-container-lowest rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-outline-variant/20">
            <div className="relative aspect-square md:aspect-auto md:h-56 overflow-hidden bg-surface-container-low">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Seblak" src="/images/seblak-jeletot-teh-euis.jpg" />
              <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-secondary-container text-on-secondary-container px-2 py-1 md:px-3 rounded-lg text-[10px] md:text-xs font-bold font-label shadow-sm">
                Gratis Ongkir
              </div>
            </div>
            <div className="p-3 md:p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-outline font-label">Jajanan</span>
                <QrCode className="text-primary w-4 h-4 md:w-5 md:h-5 hidden md:block" />
              </div>
              <h3 className="font-bold text-base md:text-xl text-primary mb-2 md:mb-4 headline line-clamp-1">Seblak Jeletot Teh Euis</h3>
              <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-surface-container flex-wrap gap-1">
                <div className="flex items-center gap-1 text-secondary">
                  <Star className="w-3 h-3 md:w-4 md:h-4 fill-secondary" />
                  <span className="font-bold text-xs md:text-sm">4.7</span>
                </div>
                <span className="text-[10px] md:text-xs text-outline font-medium">2.4km away</span>
              </div>
            </div>
          </Link>
          {/* Grid Card 4 */}
          <Link to="/merchant" className="block group bg-surface-container-lowest rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-outline-variant/20">
            <div className="relative aspect-square md:aspect-auto md:h-56 overflow-hidden bg-surface-container-low">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Kerajinan" src="/images/pottery-cantik.jpg" />
              <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-secondary-container text-on-secondary-container px-2 py-1 md:px-3 rounded-lg text-[10px] md:text-xs font-bold font-label shadow-sm">
                Gratis Ongkir
              </div>
            </div>
            <div className="p-3 md:p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-outline font-label">Kerajinan</span>
                <QrCode className="text-primary w-4 h-4 md:w-5 md:h-5 hidden md:block" />
              </div>
              <h3 className="font-bold text-base md:text-xl text-primary mb-2 md:mb-4 headline line-clamp-1">Pottery Cantik</h3>
              <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-surface-container flex-wrap gap-1">
                <div className="flex items-center gap-1 text-secondary">
                  <Star className="w-3 h-3 md:w-4 md:h-4 fill-secondary" />
                  <span className="font-bold text-xs md:text-sm">4.6</span>
                </div>
                <span className="text-[10px] md:text-xs text-outline font-medium">3.1km away</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Floating Action Button */}
      <Link to="/ai" className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-container text-white flex items-center justify-center shadow-[var(--shadow-ambient)] group hover:-translate-y-1 transition-all duration-300 z-[100]">
        <div className="absolute -top-12 right-0 bg-white px-4 py-2 rounded-xl text-xs font-bold text-primary shadow-lg scale-0 group-hover:scale-100 transition-all origin-bottom-right">
          AI Smart Assistant
        </div>
        <Sparkles className="w-8 h-8 fill-white/20" />
      </Link>
    </main>
  );
}
