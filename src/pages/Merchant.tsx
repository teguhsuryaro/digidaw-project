import { ArrowLeft, Share2, UserCircle, BadgeCheck, Star, Truck, Plus, ShoppingBasket } from "lucide-react";
import { Link } from "react-router-dom";

export default function Merchant() {
  return (
    <div className="min-h-screen bg-surface pb-32">
      {/* Top Navbar */}
      <header className="flex justify-between items-center w-full px-6 py-4 sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-surface-container-high md:border-none">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container transition-colors">
            <ArrowLeft className="text-primary w-6 h-6" />
          </Link>
          <h1 className="text-xl font-black tracking-tighter text-blue-900 dark:text-white headline">Ayam Geprek Kampus</h1>
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
        <section className="relative w-full h-64 md:h-80 overflow-hidden md:rounded-xl md:mt-4">
          <img alt="Ayam Geprek" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH_yNgBVxZTAOxCYqhzKnvWAIiHmhPmvh_3VQgnuNEKtY9qHWASY0JZvEbgnYAW2TEW9iMm2a3dZsFe4QjSqPf_4iCs2aA515YrqSTCWr92K0SXQS8ZHQPwU6kz-m6BC_WQl_YJGjmM4IAYASdNP5gszKFzzXRh-s1qzvjJnjvJ3QUYJJiedMH1TkVYJwzRg6UbDhmnlNwRuaxxxwKG6dzESZyoCVgYGYoFPv9X6_-a5Mz5ILsYxg4YOJ8BfK5OZSMTpZ3w7NS0Qcd" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </section>

        {/* Store Info */}
        <section className="px-6 -mt-12 relative z-10">
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[var(--shadow-ambient)] border border-outline-variant/10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-2xl font-extrabold headline tracking-tight text-primary">Ayam Geprek Kampus</h2>
                  <span className="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <BadgeCheck className="w-3 h-3 fill-secondary-container text-white" />
                    Verified Partner
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm font-medium text-on-surface-variant mb-4">
                  <span className="flex items-center gap-1">
                    <Star className="text-secondary w-4 h-4 fill-secondary" />
                    <span className="text-on-surface font-bold">4.5</span> (1.2k+ Ratings)
                  </span>
                  <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                  <span>Indonesian • Poultry</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-surface-container-high px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">Fast Response</span>
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
        <nav className="sticky top-[72px] z-40 glass-panel px-6 mt-6 overflow-x-auto no-scrollbar py-2">
          <div className="flex gap-2 min-w-max">
            <button className="bg-primary text-on-primary px-5 py-2.5 rounded-full text-sm font-bold shadow-md shadow-primary/20">Best Seller</button>
            <button className="bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high px-5 py-2.5 rounded-full text-sm font-semibold transition-colors">Makanan Utama</button>
            <button className="bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high px-5 py-2.5 rounded-full text-sm font-semibold transition-colors">Minuman</button>
            <button className="bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high px-5 py-2.5 rounded-full text-sm font-semibold transition-colors">Paket Hemat</button>
          </div>
        </nav>

        {/* Product List */}
        <section className="px-6 mt-8 space-y-4">
          <h3 className="text-xl font-bold headline mb-4 text-on-surface px-2">Best Seller</h3>
          
          {/* Card 1 */}
          <div className="bg-surface-container-lowest p-4 rounded-xl flex gap-4 items-center transition-all hover:shadow-lg hover:shadow-primary/5 group border border-transparent hover:border-outline-variant/20">
            <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
              <img alt="Geprek Original" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq-2-NAfYD4qMcVLDPgsE160UiRxilwN55FZ21WN2sfwu7Do4xUNoYK-wd22RRITUIbStnsvIQZzGst5M9ldfggpI0xeKrGPA9a9A_ZRh-_hdD5zH7zQisfoXJjEmrD01_tNQAg18e1PPIbLTN9lY8Y4gje8N_WZUJRuueXwGmkzPz6HDQkyN-yH_FB22kDQrKvub7aOM8loH3MvJTbf4t8Q5H8FRORZGzl1QU57T3MoEZnVAdQeeGgOXZm1F-cPEl6mxBTOEPFUgt" />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-on-surface text-lg">Geprek Original</h4>
                <span className="text-primary font-black text-lg">Rp 15.000</span>
              </div>
              <p className="text-sm text-on-surface-variant mt-1 line-clamp-2">Ayam goreng krispi dengan sambal bawang khas yang pedas nampol.</p>
              <div className="mt-3 flex justify-end">
                <button className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-colors shadow-sm">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-container-lowest p-4 rounded-xl flex gap-4 items-center transition-all hover:shadow-lg hover:shadow-primary/5 group border border-transparent hover:border-outline-variant/20">
            <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
              <img alt="Geprek Mozzarella" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJP-VOKAIdK8CKosucq1XsGc_G68FHyrXKWjELwjk-KPgVPUnszm4tzPkNsroEfdNdiAQhltwtNh3TMZd2CVcvl7uxPhJIfHc1vut8xIrmfPhKofaFIN0kLRBLSIkK3fkDK3oOOV1I9KmofdMa4C1fq3Exs9egi8yd315yoqVFrfnubbI_i1Xz_BcmKOvxChfr_Uq0rpuj0lVOfYA-25887uj9m9zhfmVnmKmsQfPQ6sAIiSXmoKe5I2kx5pIwlUaLyjCnG7eCWBQ5" />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-on-surface text-lg">Geprek Mozzarella</h4>
                <span className="text-primary font-black text-lg">Rp 22.000</span>
              </div>
              <p className="text-sm text-on-surface-variant mt-1 line-clamp-2">Sensasi gurih lelehan keju mozzarella di atas ayam geprek pedas.</p>
              <div className="mt-3 flex justify-end">
                <button className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-colors shadow-sm">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-container-lowest p-4 rounded-xl flex gap-4 items-center transition-all hover:shadow-lg hover:shadow-primary/5 group border border-transparent hover:border-outline-variant/20">
            <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
              <img alt="Paket Hemat Mhs" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj84oGfpeRwXZMKonH2XIFPpgq-9QtV7ePj2wOKiuWknC5hRdV7w9UpP9wnJUwZRjbzp2T7_Z2DrCdrvVvVB-hnpEWgrOMGP98C6lWk-8xBK0gQesnFt7fPsKMBbNvVn0RqFtAx030vvROvPMK7ZLpgtWatoGmoNfvI7fRU7fH9HhqFzDnJ8lR3O1jTe1khL5lZQs37opQc1DQfR9qVXqfkdZ5gYsV69HbNiBF_WWhP9kNLRsvD5L4CRZYu1laJXWg3BSQMu4a8OSx" />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-on-surface text-lg">Paket Hemat Mhs</h4>
                <span className="text-primary font-black text-lg">Rp 18.000</span>
              </div>
              <p className="text-sm text-on-surface-variant mt-1 line-clamp-2">Nasi + Ayam Geprek + Es Teh. Pas di kantong, kenyang di perut.</p>
              <div className="mt-3 flex justify-end">
                <button className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-colors shadow-sm">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold headline mt-12 mb-4 text-on-surface px-2">Minuman</h3>
          
          {/* Card 4 */}
          <div className="bg-surface-container-lowest p-4 rounded-xl flex gap-4 items-center transition-all hover:shadow-lg hover:shadow-primary/5 group border border-transparent hover:border-outline-variant/20">
            <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
              <img alt="Es Teh Manis Jumbo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPm2xnrJdYz_SusTCydrhjEirL6rS1v6ITl--TPg4IYt_Aqi4Z4y6aUAzvKEEZkt1dehbcYWXVboVE_NQ07ma4yeFglrxxzg_65cE6jq0d3EK1GxJ4Yo7vY9_B2jjUy1BzE5CNwm08I2c9mbaqWh-HMt2rE19i_k0sTtD9ciOaMIJNejWCYO5P00q_ZNIZ0Ayj51vg__Rei3xpnURURS2-fFpvyVRnISu_3xlz8wvCppcxz-ZmaaOeppY51clIjE9hU1vg8RZySw8o" />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-on-surface text-lg">Es Teh Manis Jumbo</h4>
                <span className="text-primary font-black text-lg">Rp 5.000</span>
              </div>
              <p className="text-sm text-on-surface-variant mt-1 line-clamp-2">Segarnya es teh manis dalam porsi besar.</p>
              <div className="mt-3 flex justify-end">
                <button className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-colors shadow-sm">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-lg z-50">
        <div className="bg-primary text-on-primary p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,63,135,0.3)] flex items-center justify-between border border-white/10 glass-panel !blur-lg">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-black tracking-widest opacity-80 leading-none mb-1">Total Pesanan</span>
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-sm">1 Item</span>
              <span className="text-xl font-black">Rp 15.000</span>
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
