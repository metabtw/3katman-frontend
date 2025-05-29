// Hizmetler sayfası
// Modern ve detaylı hizmet açıklamaları
// SOLID prensiplerine uygun, sade ve optimize edilmiş kod

export default function Hizmetler() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8fdfa] to-white">
      {/* Hero Section */}
      <header className="relative w-full py-12 md:py-20 bg-[#295652] mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
            Hizmetlerimiz
          </h1>
          <p className="text-[#abf0d6] text-base md:text-lg mt-4 text-center max-w-3xl mx-auto">
            Modern teknolojiler ve yenilikçi çözümlerle işinizi dijitale taşıyoruz
          </p>
        </div>
      </header>

      {/* Ana İçerik */}
      <main className="flex-1 py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Web ve Arayüz Geliştirme */}
          <section className="mb-8 md:mb-16 group">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-4 sm:p-6 md:p-12 relative md:static transition-all duration-300 hover:-translate-x-2 hover:shadow-2xl w-full">
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <span className="text-2xl md:text-3xl">🌐</span>
                <h2 className="text-xl md:text-2xl font-bold text-[#295652]">Web ve Arayüz Geliştirme</h2>
              </div>
              <p className="text-gray-700 text-base md:text-lg mb-4 md:mb-6">
                Kullanıcı dostu, mobil uyumlu ve modern tasarıma sahip web siteleri geliştiriyoruz.
                HTML, CSS, JS ve Next.js kullanarak hem çok sayfalı hem de landing page (tek sayfa) çözümleri sunuyoruz.
                Responsive (mobil uyumlu) tasarım, sade ama etkili kullanıcı deneyimi bizim için temel prensiptir.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg md:text-xl">🖥️</span>
                  <span className="text-gray-700 text-sm md:text-base">Web Sitesi Geliştirme</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg md:text-xl">📱</span>
                  <span className="text-gray-700 text-sm md:text-base">Mobil Uyumlu Tasarım</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg md:text-xl">🎨</span>
                  <span className="text-gray-700 text-sm md:text-base">Frontend Geliştirme</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg md:text-xl">🧭</span>
                  <span className="text-gray-700 text-sm md:text-base">Landing Page Tasarımları</span>
                </div>
              </div>
              <div className="w-full flex justify-end md:block">
                <div className="relative md:absolute md:-right-12 sm:md:-right-16 md:-right-32 top-0 w-20 sm:w-16 md:w-32 h-10 md:h-full bg-[#295652] md:transform md:translate-x-12 sm:md:translate-x-16 md:translate-x-32 group-hover:md:translate-x-0 transition-transform duration-300 flex items-center justify-center cursor-pointer rounded-lg md:rounded-none mt-4 md:mt-0">
                  <a
                    href="/iletisim"
                    className="text-white text-xs sm:text-sm md:text-base font-semibold rotate-0 md:rotate-90 whitespace-nowrap hover:text-[#38b97e] transition-colors duration-300 w-full h-full flex items-center justify-center"
                  >
                    Teklif Al
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Yazılım & Altyapı Geliştirme */}
          <section className="mb-8 md:mb-16 group">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-4 sm:p-6 md:p-12 relative md:static transition-all duration-300 hover:-translate-x-2 hover:shadow-2xl w-full">
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <span className="text-2xl md:text-3xl">🛠️</span>
                <h2 className="text-xl md:text-2xl font-bold text-[#295652]">Yazılım & Altyapı Geliştirme</h2>
              </div>
              <p className="text-gray-700 text-base md:text-lg mb-4 md:mb-6">
                C# ile geliştirdiğimiz altyapılar sayesinde form sistemleri, içerik yönetimi ve kullanıcı işlemleri gibi dinamik işlevleri kodluyoruz.
                MySQL veritabanı kullanarak güvenli veri saklama ve yönetim çözümleri sunuyoruz.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg md:text-xl">⚙️</span>
                  <span className="text-gray-700 text-sm md:text-base">Backend Geliştirme</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg md:text-xl">🗄️</span>
                  <span className="text-gray-700 text-sm md:text-base">Veritabanı Entegrasyonu</span>
                </div>
              </div>
              <div className="w-full flex justify-end md:block">
                <div className="relative md:absolute md:-right-12 sm:md:-right-16 md:-right-32 top-0 w-20 sm:w-16 md:w-32 h-10 md:h-full bg-[#295652] md:transform md:translate-x-12 sm:md:translate-x-16 md:translate-x-32 group-hover:md:translate-x-0 transition-transform duration-300 flex items-center justify-center cursor-pointer rounded-lg md:rounded-none mt-4 md:mt-0">
                  <a
                    href="/iletisim"
                    className="text-white text-xs sm:text-sm md:text-base font-semibold rotate-0 md:rotate-90 whitespace-nowrap hover:text-[#38b97e] transition-colors duration-300 w-full h-full flex items-center justify-center"
                  >
                    Teklif Al
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Yönetim Panelleri */}
          <section className="mb-8 md:mb-16 group">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-4 sm:p-6 md:p-12 relative md:static transition-all duration-300 hover:-translate-x-2 hover:shadow-2xl w-full">
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <span className="text-2xl md:text-3xl">🧑‍💼</span>
                <h2 className="text-xl md:text-2xl font-bold text-[#295652]">Yönetim Panelleri ve Giriş Sistemleri</h2>
              </div>
              <p className="text-gray-700 text-base md:text-lg mb-4 md:mb-6">
                Web sitenize özel admin paneli geliştiriyor, içerik yöneticileri ve editörler için farklı giriş yetkileri tanımlıyoruz.
                Ayrıca kullanıcıların kayıt olabileceği, giriş yapabileceği üyelik sistemleri de kuruyoruz.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg md:text-xl">🔐</span>
                  <span className="text-gray-700 text-sm md:text-base">Admin Paneli</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg md:text-xl">🙋‍♂️</span>
                  <span className="text-gray-700 text-sm md:text-base">Kullanıcı Paneli / Üyelik Sistemi</span>
                </div>
              </div>
              <div className="w-full flex justify-end md:block">
                <div className="relative md:absolute md:-right-12 sm:md:-right-16 md:-right-32 top-0 w-20 sm:w-16 md:w-32 h-10 md:h-full bg-[#295652] md:transform md:translate-x-12 sm:md:translate-x-16 md:translate-x-32 group-hover:md:translate-x-0 transition-transform duration-300 flex items-center justify-center cursor-pointer rounded-lg md:rounded-none mt-4 md:mt-0">
                  <a
                    href="/iletisim"
                    className="text-white text-xs sm:text-sm md:text-base font-semibold rotate-0 md:rotate-90 whitespace-nowrap hover:text-[#38b97e] transition-colors duration-300 w-full h-full flex items-center justify-center"
                  >
                    Teklif Al
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* SEO & Performans */}
          <section className="mb-8 md:mb-16 group">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-4 sm:p-6 md:p-12 relative md:static transition-all duration-300 hover:-translate-x-2 hover:shadow-2xl w-full">
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <span className="text-2xl md:text-3xl">🚀</span>
                <h2 className="text-xl md:text-2xl font-bold text-[#295652]">SEO & Performans Optimizasyonu</h2>
              </div>
              <p className="text-gray-700 text-base md:text-lg">
                Google'da daha üst sıralarda yer almanız ve sitenizin daha hızlı yüklenmesi için teknik optimizasyonlar yapıyoruz.
                Temiz kod yapısı, resim sıkıştırma, meta etiketleri ve temel SEO ayarları bu kapsamda sunulur.
              </p>
              <div className="w-full flex justify-end md:block">
                <div className="relative md:absolute md:-right-12 sm:md:-right-16 md:-right-32 top-0 w-20 sm:w-16 md:w-32 h-10 md:h-full bg-[#295652] md:transform md:translate-x-12 sm:md:translate-x-16 md:translate-x-32 group-hover:md:translate-x-0 transition-transform duration-300 flex items-center justify-center cursor-pointer rounded-lg md:rounded-none mt-4 md:mt-0">
                  <a
                    href="/iletisim"
                    className="text-white text-xs sm:text-sm md:text-base font-semibold rotate-0 md:rotate-90 whitespace-nowrap hover:text-[#38b97e] transition-colors duration-300 w-full h-full flex items-center justify-center"
                  >
                    Teklif Al
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Markalaşma & İçerik */}
          <section className="mb-8 md:mb-16 group">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-4 sm:p-6 md:p-12 relative md:static transition-all duration-300 hover:-translate-x-2 hover:shadow-2xl w-full">
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <span className="text-2xl md:text-3xl">🧠</span>
                <h2 className="text-xl md:text-2xl font-bold text-[#295652]">Markalaşma & İçerik Üretimi</h2>
              </div>
              <p className="text-gray-700 text-base md:text-lg mb-4 md:mb-6">
                Sitenize veya markanıza uygun logo tasarımı, renk paleti seçimi ve içerik düzenlemesi yapıyoruz.
                Ayrıca görsel ve video düzenleme hizmetleriyle dijital varlığınızı güçlendiriyoruz.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg md:text-xl">🧩</span>
                  <span className="text-gray-700 text-sm md:text-base">Marka Kimliği</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg md:text-xl">🎞️</span>
                  <span className="text-gray-700 text-sm md:text-base">Video & Görsel Düzenleme</span>
                </div>
              </div>
              <div className="w-full flex justify-end md:block">
                <div className="relative md:absolute md:-right-12 sm:md:-right-16 md:-right-32 top-0 w-20 sm:w-16 md:w-32 h-10 md:h-full bg-[#295652] md:transform md:translate-x-12 sm:md:translate-x-16 md:translate-x-32 group-hover:md:translate-x-0 transition-transform duration-300 flex items-center justify-center cursor-pointer rounded-lg md:rounded-none mt-4 md:mt-0">
                  <a
                    href="/iletisim"
                    className="text-white text-xs sm:text-sm md:text-base font-semibold rotate-0 md:rotate-90 whitespace-nowrap hover:text-[#38b97e] transition-colors duration-300 w-full h-full flex items-center justify-center"
                  >
                    Teklif Al
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Mobil Uygulama */}
          <section className="mb-8 md:mb-16 group">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-4 sm:p-6 md:p-12 relative md:static transition-all duration-300 hover:-translate-x-2 hover:shadow-2xl w-full">
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <span className="text-2xl md:text-3xl">📲</span>
                <h2 className="text-xl md:text-2xl font-bold text-[#295652]">Mobil Uygulama Geliştirme</h2>
              </div>
              <p className="text-gray-700 text-base md:text-lg">
                Flutter veya React Native kullanarak Android ve iOS cihazlar için mobil uygulamalar geliştiriyoruz.
                İster web sitenizin bir uzantısı olarak, ister bağımsız bir proje olarak mobil uygulama desteği sağlıyoruz.
              </p>
              <div className="w-full flex justify-end md:block">
                <div className="relative md:absolute md:-right-12 sm:md:-right-16 md:-right-32 top-0 w-20 sm:w-16 md:w-32 h-10 md:h-full bg-[#295652] md:transform md:translate-x-12 sm:md:translate-x-16 md:translate-x-32 group-hover:md:translate-x-0 transition-transform duration-300 flex items-center justify-center cursor-pointer rounded-lg md:rounded-none mt-4 md:mt-0">
                  <a
                    href="/iletisim"
                    className="text-white text-xs sm:text-sm md:text-base font-semibold rotate-0 md:rotate-90 whitespace-nowrap hover:text-[#38b97e] transition-colors duration-300 w-full h-full flex items-center justify-center"
                  >
                    Teklif Al
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Teknik Destek */}
          <section className="mb-8 md:mb-16 group">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-4 sm:p-6 md:p-12 relative md:static transition-all duration-300 hover:-translate-x-2 hover:shadow-2xl w-full">
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <span className="text-2xl md:text-3xl">🔧</span>
                <h2 className="text-xl md:text-2xl font-bold text-[#295652]">Teknik Destek & Bakım</h2>
              </div>
              <p className="text-gray-700 text-base md:text-lg">
                Projeler yayına alındıktan sonra teknik destek, küçük güncellemeler ve güvenlik takibi gibi konularda destek vermeye devam ediyoruz.
              </p>
              <div className="w-full flex justify-end md:block">
                <div className="relative md:absolute md:-right-12 sm:md:-right-16 md:-right-32 top-0 w-20 sm:w-16 md:w-32 h-10 md:h-full bg-[#295652] md:transform md:translate-x-12 sm:md:translate-x-16 md:translate-x-32 group-hover:md:translate-x-0 transition-transform duration-300 flex items-center justify-center cursor-pointer rounded-lg md:rounded-none mt-4 md:mt-0">
                  <a
                    href="/iletisim"
                    className="text-white text-xs sm:text-sm md:text-base font-semibold rotate-0 md:rotate-90 whitespace-nowrap hover:text-[#38b97e] transition-colors duration-300 w-full h-full flex items-center justify-center"
                  >
                    Teklif Al
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <p className="text-gray-700 text-base md:text-lg mb-6 md:mb-8">
              Projeniz için en uygun çözümü birlikte belirleyelim
            </p>
            <a
              href="/iletisim"
              className="inline-block px-6 md:px-8 py-3 md:py-4 bg-[#295652] text-white rounded-full font-semibold shadow-lg hover:bg-[#38b97e] transition-all duration-300 transform hover:-translate-y-1"
            >
              Teklif Alın
            </a>
          </section>
        </div>
      </main>
    </div>
  );
} 