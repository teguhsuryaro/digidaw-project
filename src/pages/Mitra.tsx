import { Percent, Users, Nfc, Rocket, Quote } from "lucide-react";

export default function Mitra() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[514px] flex items-center overflow-hidden bg-primary">
        <img 
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" 
          alt="Local merchant" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK_IjrqhZ8MGho1RPRd7wRPHMntu_XQX8fCwEQlg7DlK9lnV2paA61MP_lRfy5m2EY0tI5sdahxzZHD8Qk9C8hVWLN_s5MWEjczNHxEwIT3OwLIZqgexlon8h2ooJ8AwZ_2UmEF8jklNpfQJbdWABf0mvCX_zk_NgSc_HxFqtNgEqoNUkC8-isH3jEf_5j07jLPtXl1wiNAMco2Q2bssgjOSeYZX6-4jH6rBNbmsQnj3oTFVhcJm72crnw_Pzm_jFQOcEFrmGq8EV1" 
        />
        <div className="relative z-10 px-8 md:px-24 max-w-4xl">
          <p className="text-secondary-container headline font-extrabold text-sm tracking-[0.2em] uppercase mb-4">Empowering Local Heroes</p>
          <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight headline">Digitalkan Usahamu bersama DigiDO</h1>
          <div className="mt-8 h-1 w-24 bg-secondary-container rounded-full"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/40 to-transparent pointer-events-none"></div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-8 -mt-20 relative z-20 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Registration Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-xl">
            <div className="mb-10">
              <h2 className="text-3xl font-extrabold text-primary mb-2 headline">Formulir Pendaftaran</h2>
              <p className="text-on-surface-variant font-body">Lengkapi data di bawah untuk mulai berjualan hari ini.</p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold tracking-wider uppercase text-outline font-label">Nama Usaha</label>
                  <input className="w-full bg-surface-container-low border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary transition-all placeholder:text-outline-variant outline-none" placeholder="Contoh: Kedai Kopi Berkah" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold tracking-wider uppercase text-outline font-label">Kategori</label>
                  <select className="w-full bg-surface-container-low border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary appearance-none outline-none text-on-surface">
                    <option>Kuliner</option>
                    <option>Fashion</option>
                    <option>Jasa</option>
                    <option>Elektronik</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-[11px] font-bold tracking-wider uppercase text-outline font-label">Alamat Lapak/Rumah</label>
                <textarea className="w-full bg-surface-container-low border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary transition-all placeholder:text-outline-variant outline-none" placeholder="Alamat lengkap lokasi usaha Anda" rows={3}></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold tracking-wider uppercase text-outline font-label">No. WhatsApp</label>
                  <div className="relative">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">+62</span>
                    <input className="w-full bg-surface-container-low border-none rounded-xl py-4 pl-16 pr-6 focus:ring-2 focus:ring-primary transition-all placeholder:text-outline-variant outline-none" placeholder="812345678" type="tel" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold tracking-wider uppercase text-outline font-label">Link Menu/Foto Produk</label>
                  <input className="w-full bg-surface-container-low border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary transition-all placeholder:text-outline-variant outline-none" placeholder="https://instagram.com/usaha-anda" type="url" />
                </div>
              </div>
              <div className="pt-6">
                <button type="button" className="w-full py-5 bg-gradient-to-r from-secondary to-secondary-container text-on-secondary-container font-black text-lg rounded-xl shadow-lg hover:shadow-xl transform active:scale-95 duration-150 ease-in-out cursor-pointer">
                  Daftar Sekarang
                </button>
              </div>
            </form>
          </div>

          {/* Value Props & Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-primary text-on-primary p-10 rounded-xl flex flex-col justify-between min-h-[400px]">
              <div>
                <h3 className="text-3xl font-extrabold mb-8 leading-tight headline flex items-center">Mengapa Bergabung Dengan Kami?</h3>
                <div className="space-y-10">
                  <div className="flex items-start gap-5">
                    <div className="bg-primary-container p-3 rounded-xl">
                      <Percent className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-lg leading-none mb-1">Tanpa Potongan Komisi</p>
                      <p className="text-on-primary-container text-sm font-body">Keuntungan 100% milik Anda tanpa biaya tersembunyi.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="bg-primary-container p-3 rounded-xl">
                      <Users className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-lg leading-none mb-1">Akses Ribuan Mahasiswa</p>
                      <p className="text-on-primary-container text-sm font-body">Terhubung langsung dengan pasar potensial di sekitar kampus.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="bg-primary-container p-3 rounded-xl">
                      <Nfc className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-lg leading-none mb-1">Dukungan Pembayaran Digital</p>
                      <p className="text-on-primary-container text-sm font-body">Terima pembayaran QRIS, dompet digital, dan transfer bank.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary-container p-8 rounded-xl relative overflow-hidden group">
              <div className="relative z-10">
                <p className="headline font-black text-2xl text-on-secondary-container mb-4">Siap Tumbuh Besar?</p>
                <p className="text-on-secondary-container/80 text-sm mb-6 max-w-[200px] font-body">Gabung dengan 500+ mitra yang sudah sukses mendigitalisasi usahanya.</p>
              </div>
              <Rocket className="absolute -bottom-4 -right-4 w-32 h-32 text-on-secondary-container/10 group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-surface-container-low py-24 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary-fixed rounded-xl -z-10"></div>
            <img className="rounded-xl shadow-lg grayscale hover:grayscale-0 transition-all duration-700 w-full" alt="Merchant Owner" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATL7ez0o-86GcSB7gpb7RbCbdHzwWK85S11MVumbYXSKYKSWRnXTZLMFSim0OZy5u1_68gr32k04p0PnJyTfM0aP6S0ukv0RNzTfpLo-jFcDVjoUjyuhfc-jeQCJjtKOugCKux2JYDBRpAwfOGE1-uisyKc6Wbp_d-vUdnZcXL2KBAwxpi3gpB1HpPjk2kgTftDHoSFTgSCAI53SNSajffU826YpxX8baz_hnIN6xRAR69kvDPop6Qh5f2Dhw7-PCxo79tsNIUIpGY" />
          </div>
          <div className="w-full md:w-1/2">
            <Quote className="text-secondary w-12 h-12 mb-6 fill-secondary" />
            <h3 className="text-3xl font-extrabold text-primary mb-6 italic leading-relaxed headline">"Semenjak pakai DigiDO, pesanan dari mahasiswa naik pesat. Bayar juga nggak ribet lagi!"</h3>
            <p className="font-bold text-lg font-body">Bu Susi</p>
            <p className="text-on-surface-variant text-sm font-body">Pemilik Warung Nasi Campur Kampus</p>
          </div>
        </div>
      </section>
    </main>
  );
}
