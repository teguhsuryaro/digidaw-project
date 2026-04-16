import { Zap, ArrowRight, ArrowUpRight, QrCode, Star, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative px-8 pt-8 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto rounded-[2rem] bg-gradient-to-br from-primary to-primary-container min-h-[500px] flex flex-col md:flex-row items-center p-8 md:p-16 relative overflow-hidden">
          <div className="z-10 w-full md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-wider uppercase">
              <Zap className="w-4 h-4" />
              UMKM Empowerment
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight headline">
              Zero Cost Delivery & <span className="text-secondary-fixed">100% Cashless</span>
            </h1>
            <p className="text-on-primary-container text-lg max-w-md font-body">
              Mendukung pertumbuhan ekonomi lokal dengan kurasi layanan merchant terbaik tanpa biaya tambahan.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/merchant" className="bg-surface-container-lowest text-primary px-8 py-4 rounded-lg font-bold hover:scale-95 duration-150 transition-all flex items-center gap-2">
                Mulai Belanja
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/mitra" className="border border-on-primary-container text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
                Jadi Mitra
              </Link>
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2 hidden md:block opacity-40">
            <img 
              className="object-cover w-full h-full mix-blend-overlay" 
              alt="Marketplace concept" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNafHMLSHIJeyQYneZ8EnHElhqouNDa8Z9sGwe03vwbOV90m76Dtc9JBOuiu1Hm6RtrY-VV0oiStceWsBnFe5XtH4dOAweU8YqUAocK2nvi7q_P-5H0P1GKOcC5bvbG5bXYzZlH_xNhN2AuCQHLudvbg_R82u9RvINUPP5gfmiBsDkmQOWVr6f5IFeOP86NxamOOGdeWOVV6hiQ_WAM7dVGg7dgEq2r_COa-hdaEOXQRN0Z5L1XrLwhskXfL88xn0_6bG9tB9neq8I" 
            />
          </div>
        </div>
      </section>

      {/* Mitra Premium Section */}
      <section className="py-12 bg-surface">
        <div className="px-8 mb-8 flex justify-between items-end max-w-7xl mx-auto">
          <div>
            <span className="text-xs text-outline tracking-[0.1em] font-bold uppercase block mb-2 font-label">Editor's Choice</span>
            <h2 className="text-3xl font-bold text-primary headline">Mitra Premium</h2>
          </div>
          <button className="flex items-center gap-1 text-primary font-bold text-sm hover:underline">
            Lihat Semua
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        <div className="no-scrollbar flex gap-6 overflow-x-auto px-8 pb-8 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="min-w-[320px] bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10">
            <div className="h-48 w-full rounded-lg overflow-hidden mb-4">
              <img className="w-full h-full object-cover" alt="Cafe" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf7WiB1hbHNCiKvvhyzc_c0nJo1w6kpXxRL93HsNx5j7CdTEueLwjerzX4JHZ9wgOvnrp4ItXacNKh-06eGUOORui7EZtRX9h7Ck9a3HiQse3mKa1RJvMiZdzgt63DefbmHr1NyDGxNEKbVG192fuYPOXmSuzxClzq7XJxkx6snIGGB43aUTYaIfe_ShIjiElXmhUj6yaksGnvTvhEnb71j-hHl6Cy53PGMJQC4co6fI5FecE50FV9VO7Rw2BCpmjmTzBcJ_MJd1WP" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-primary headline">Coffee Anthology</h3>
                <p className="text-sm text-outline">Beverages & Cafe</p>
              </div>
              <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase font-label">Premium</span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="min-w-[320px] bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10">
            <div className="h-48 w-full rounded-lg overflow-hidden mb-4">
              <img className="w-full h-full object-cover" alt="Food" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_nCukfEAhi-kcjIeu5BVMENHr1cA1Rxz_rev-c68LBe7fJamuMhLzSB7NaE6C88PJwVQlwvvBg-7LYYMXiXPkXaOUkh-BBAc0SKge2_5-SpJlK2eEdhdPq6uc7IStx1pSGgS81UksZ-7NICgNJrmC3FaS9x3352VyIFpctru5ZA2L_cXypxeaK1B8knAE3a8M8JelRCBxsiWHuavUEeQ5Z0_akMKq2hd5rpzIZR4zE-QG1CQe7ivZgZv__JyVl615lL953xXZ7PmZ" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-primary headline">Warung Nusantara</h3>
                <p className="text-sm text-outline">Indonesian Food</p>
              </div>
              <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase font-label">Verified</span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="min-w-[320px] bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10">
            <div className="h-48 w-full rounded-lg overflow-hidden mb-4">
              <img className="w-full h-full object-cover" alt="Grocery" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ11rhR3F7EHAoUgOTrcUeMU1sfc--Hm6Wgq0RpT22equPXmbRTASV0xVx8IdaJ9IPO8ag9xjTu0ed57kQ1iSGOYYRGPadecl56V3bfmNy2AZAXkLnDicfkZPz_sw93vbOa3n3bhlQaFwCwN5JkqzhWzV4TlTZluUEZ3NLt2zrEkrJv9E4sTSbJlIcTLZmhKuMKCL3mttW9vQ0ccPsZDnwd-hb8sWuang9ADT5sSdjyGEiW4UigSMlcd0be2CAsEzPL4hnD-4rYPSj" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-primary headline">Fresh Harvest Market</h3>
                <p className="text-sm text-outline">Grocery & Fresh Goods</p>
              </div>
              <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase font-label">Premium</span>
            </div>
          </div>
          {/* Card 4 */}
          <div className="min-w-[320px] bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10">
            <div className="h-48 w-full rounded-lg overflow-hidden mb-4">
              <img className="w-full h-full object-cover" alt="Fashion" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuFT3-0sUVRVdIgka05ZmJ12i1ziNog8iGt8dmRTtHAeRBrqtEnfW-wQ9Isn8hflefWDR4oZBy7xJbHuHDDyRFTNCAT0ZHqPwpzC142d0ZCyBiV-yC92HelH_lV6e15qJ1bWgLgEHVgGwLXXhP57Vt-K2CLl1Xl-gqNbrGmDyPNYhePepZfaKeNUvJy9_Xcf_WDGV_H6AG5HVaBRfKAHgNlB5tBsNS4PQCjjsrh70hVZ5INZ53TBx5xikAe4SB2EwR_4pEdPFlYCbR" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-primary headline">Urban Modiste</h3>
                <p className="text-sm text-outline">Fashion & Lifestyle</p>
              </div>
              <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase font-label">Premium</span>
            </div>
          </div>
        </div>
      </section>

      {/* UMKM Grid Section */}
      <section className="py-16 px-8 bg-surface-container-low">
        <div className="mb-12 max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-primary tracking-tight mb-4 headline">Temukan UMKM Terdekat</h2>
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            <button className="bg-primary text-white px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap">Semua</button>
            <button className="bg-surface-container-highest text-on-surface-variant px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap">Makanan</button>
            <button className="bg-surface-container-highest text-on-surface-variant px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap">Jasa</button>
            <button className="bg-surface-container-highest text-on-surface-variant px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap">Pakaian</button>
            <button className="bg-surface-container-highest text-on-surface-variant px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap">Kesehatan</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Grid Card 1 */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300">
            <div className="relative h-56 overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Bakery" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiY5JPAQdkHx8cjy_o0R9BAou7GMZylWPaYAxTE3X9IjNUYcUrG5DVghUw6L11yMFNtiDadEy85CxRpgcfnLmcl7WDQFAaFz-vxQPUUP00B6ONWju4WygCngGxDFaKvxUn_m_kc_gNvzYukrGUfZe_6IxszbWB2WqhiclMIeS7_QVK0nY7DCHprDkM8Qk7ZZbp01hWhieP1xb4fX1cpKRcr--TdSfUwn5c9GSLQenSEIDeu8IOvavrGROB_df5vinA6gPUb3bSrsQv" />
              <div className="absolute top-4 left-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-lg text-xs font-bold font-label">
                Gratis Ongkir
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-outline font-label">Kuliner</span>
                <QrCode className="text-primary w-5 h-5" />
              </div>
              <h3 className="font-bold text-xl text-primary mb-4 headline">Bakery Delights</h3>
              <div className="flex items-center justify-between pt-4 border-t border-surface-container">
                <div className="flex items-center gap-1 text-secondary">
                  <Star className="w-4 h-4 fill-secondary" />
                  <span className="font-bold text-sm">4.8</span>
                </div>
                <span className="text-xs text-outline font-medium">1.2km away</span>
              </div>
            </div>
          </div>
          {/* Grid Card 2 */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300">
            <div className="relative h-56 overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Barbershop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdp5bFTQHnJvew4B0M34aCnQfijLYrMNmZ8BeJXZLQ5s3NQeSg0H01ZqaM098yfABMRMRnJX144d_3mIK0GpXaUUPNxbPMJbt4Vv5IXaWkdhMIN7d49np7BH32u9_SDse7Dr_wcZIm9YzGDQ6PfzHjhX1VrAO-xTouuuQFnE_iOeEhKaDR0VjZ5brl7TuTNgyghxTjdvw3R0VHBlReAjpguugnY3z0IMkZr-mRH8HimuwMfXtPRfuR83ihKo0MHgHhzaZS0u3Km51f" />
              <div className="absolute top-4 left-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-lg text-xs font-bold font-label">
                Gratis Ongkir
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-outline font-label">Jasa</span>
                <QrCode className="text-primary w-5 h-5" />
              </div>
              <h3 className="font-bold text-xl text-primary mb-4 headline">The Clean Cut</h3>
              <div className="flex items-center justify-between pt-4 border-t border-surface-container">
                <div className="flex items-center gap-1 text-secondary">
                  <Star className="w-4 h-4 fill-secondary" />
                  <span className="font-bold text-sm">4.9</span>
                </div>
                <span className="text-xs text-outline font-medium">0.8km away</span>
              </div>
            </div>
          </div>
          {/* Grid Card 3 */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300">
            <div className="relative h-56 overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Yoga" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHMI6QfNETsn9Xh-pv4lCNKnsJ_g2sGaL_iQLo2BpntJU2o4L42_DS5HqqV6g_VZgZ7AqsIhGShU20QdMb9S4rYvzT6H-DPE00bAW4NPhWy2iAlTShUM1ompOkAlVYjgvM4qBInzBnH1DzwO3IFy5KfDtPNwo2endFYyoe-uol4Ui0gdRRDHhGNsRilxFBQneMo1HStS7-3JgZFp58455ud3lSY-GV1Nk0ES41eVdt5M4zvNaCVX5yQ1VetqotuF-7viTjMjryRg-S" />
              <div className="absolute top-4 left-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-lg text-xs font-bold font-label">
                Gratis Ongkir
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-outline font-label">Kesehatan</span>
                <QrCode className="text-primary w-5 h-5" />
              </div>
              <h3 className="font-bold text-xl text-primary mb-4 headline">Zen Yoga Space</h3>
              <div className="flex items-center justify-between pt-4 border-t border-surface-container">
                <div className="flex items-center gap-1 text-secondary">
                  <Star className="w-4 h-4 fill-secondary" />
                  <span className="font-bold text-sm">4.7</span>
                </div>
                <span className="text-xs text-outline font-medium">2.4km away</span>
              </div>
            </div>
          </div>
          {/* Grid Card 4 */}
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300">
            <div className="relative h-56 overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Retail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_720SgnTEomqgjN0pS6aYLWoHIdEiuxNTkmarXN5R7Fruq89i9kxFOHhOdW4vGeWL9Mph7UP81jBzr4ySfIxpmF5QwP4Kz62RhgEioPrQSDkI0N86JqoJPmCxUHw8EhANdW44xq4PSDz2R-oFFy7taDlFZKlRdnDEgbF5YVk5kg2clLJ4dyekZ_qy-JGjgyzxRNA0PYLSs8JR7MbJl3Y5TchyEwlcnqpAIPP02HUkFyXZQ-XrSeSEkQD4K27IbCRHP0zTmLgZNNZT" />
              <div className="absolute top-4 left-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-lg text-xs font-bold font-label">
                Gratis Ongkir
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-outline font-label">Retail</span>
                <QrCode className="text-primary w-5 h-5" />
              </div>
              <h3 className="font-bold text-xl text-primary mb-4 headline">Minimalist Home</h3>
              <div className="flex items-center justify-between pt-4 border-t border-surface-container">
                <div className="flex items-center gap-1 text-secondary">
                  <Star className="w-4 h-4 fill-secondary" />
                  <span className="font-bold text-sm">4.6</span>
                </div>
                <span className="text-xs text-outline font-medium">3.1km away</span>
              </div>
            </div>
          </div>
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
