// Modern, şık ve kullanıcı dostu anasayfa
// SOLID prensiplerine uygun, sade ve optimize edilmiş kod
// Renk paleti: #295652 | #307869 | #38b97e | #56df9c | #abf0d6
// Logo: /logo/3katmanbeyaz.png

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8fdfa] to-white">
      {/* Hero Section */}
      <header className="relative w-full min-h-[80vh] flex flex-col items-center justify-center py-20 bg-[#295652] overflow-hidden mt-20">
        {/* Arka plan deseni */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat"></div>
        </div>
        
        {/* Logo ve başlık */}
        <div className="relative z-10 flex flex-col items-center">
        <Image
            src="/logo/3katmanbeyaz.png"
            alt="3Katman Digital Logo"
          width={180}
            height={90}
          priority
            className="transform hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-8 text-center leading-tight">
            3Katman Digital
            <span className="block text-[#abf0d6] text-2xl md:text-3xl mt-2">
              Yazılım Ajansı
            </span>
          </h1>
          <p className="text-[#abf0d6] text-lg md:text-xl mt-6 text-center max-w-2xl px-4">
            Modern, hızlı ve güvenilir yazılım çözümleri ile işinizi dijitale taşıyın.
          </p>
          
          {/* CTA Butonları */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="/iletisim"
              className="px-8 py-4 bg-[#38b97e] text-white rounded-full font-semibold shadow-lg hover:bg-[#307869] transition-all duration-300 transform hover:-translate-y-1"
            >
              Hemen Başlayın
          </a>
          <a
              href="/portfolyo"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Projelerimiz
            </a>
          </div>
        </div>
      </header>

      {/* Ana içerik */}
      <main className="flex-1 flex flex-col items-center px-4 py-20 gap-20">
        {/* Hizmetler */}
        <section className="w-full max-w-6xl">
          <h2 className="text-3xl font-bold text-[#295652] text-center mb-12">
            Hizmetlerimiz
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-t-4 border-[#38b97e] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#38b97e]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#38b97e]/20 transition-colors">
                <svg className="w-8 h-8 text-[#38b97e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#295652] mb-3">Web Geliştirme</h3>
              <p className="text-gray-600 text-center">Kurumsal, hızlı ve SEO uyumlu web siteleri ile dijital varlığınızı güçlendirin.</p>
            </div>
            
            <div className="group bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-t-4 border-[#307869] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#307869]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#307869]/20 transition-colors">
                <svg className="w-8 h-8 text-[#307869]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#295652] mb-3">Mobil Uygulama</h3>
              <p className="text-gray-600 text-center">iOS ve Android için modern, performanslı ve kullanıcı dostu mobil uygulamalar.</p>
            </div>
            
            <div className="group bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-t-4 border-[#56df9c] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#56df9c]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#56df9c]/20 transition-colors">
                <svg className="w-8 h-8 text-[#56df9c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#295652] mb-3">Dijital Danışmanlık</h3>
              <p className="text-gray-600 text-center">Dijital dönüşüm ve yazılım danışmanlığı ile işinizi geleceğe taşıyın.</p>
            </div>
          </div>
        </section>

        {/* Portfolyo */}
        <section className="w-full max-w-6xl bg-gradient-to-r from-[#295652] to-[#307869] rounded-3xl p-12 text-white">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold mb-6">Projelerimizi İnceleyin</h2>
            <p className="text-[#abf0d6] text-lg max-w-2xl mb-8">
              Önceki projelerimizi görmek ve referanslarımızı incelemek için portfolyo sayfamıza göz atın.
            </p>
            <a
              href="/portfolyo"
              className="px-8 py-4 bg-white text-[#295652] rounded-full font-semibold shadow-lg hover:bg-[#abf0d6] transition-all duration-300 transform hover:-translate-y-1"
            >
              Portfolyo
            </a>
          </div>
        </section>

        {/* İletişim */}
        <section className="w-full max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <h2 className="text-3xl font-bold text-[#295652] mb-6">Hemen Başvurun</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Projeniz için teklif almak veya sorularınızı iletmek için iletişim formumuzu doldurun.
            </p>
            <a
              href="/iletisim"
              className="inline-block px-8 py-4 bg-[#295652] text-white rounded-full font-semibold shadow-lg hover:bg-[#38b97e] transition-all duration-300 transform hover:-translate-y-1"
            >
              İletişime Geçin
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 bg-[#307869] text-center text-white">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm">
            © 2025 3Katman Digital. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
}
