// Hakkımızda sayfası
// Modern ve bilgilendirici tasarım
// SOLID prensiplerine uygun, sade ve optimize edilmiş kod

import Image from "next/image";

export default function Hakkimizda() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8fdfa] to-white">
      {/* Hero Section */}
      <header className="relative w-full py-20 bg-[#295652] mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Hakkımızda
          </h1>
          <p className="text-[#abf0d6] text-lg mt-4 text-center max-w-3xl mx-auto">
            3Katman Digital olarak kim olduğumuzu ve neler yaptığımızı keşfedin
          </p>
        </div>
      </header>

      {/* Ana İçerik */}
      <main className="flex-1 py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Giriş Metni */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                3Katman Digital, genç, dinamik ve yenilikçi bir yazılım ajansıdır. Kütahya'da 3 üniversite öğrencisi tarafından kurulan ekibimiz, yazılım geliştirme alanındaki teknik bilgisi ve tasarım becerisiyle projelerinizi dijitale taşıyor.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Web ve mobil çözümler üretirken sadece kod yazmakla kalmıyor, aynı zamanda markanızın dijitalde en iyi şekilde temsil edilmesini sağlıyoruz. Her projeye 3 katmanlı bir bakış açısıyla yaklaşıyoruz:
              </p>
            </div>
          </section>

          {/* 3 Katman */}
          <section className="mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-[#38b97e]">
                <h3 className="text-xl font-semibold text-[#295652] mb-4">Kullanıcı Deneyimi</h3>
                <p className="text-gray-600">UX/UI tasarımı ile kullanıcı dostu ve etkileyici arayüzler</p>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-[#307869]">
                <h3 className="text-xl font-semibold text-[#295652] mb-4">Teknik Altyapı</h3>
                <p className="text-gray-600">Frontend ve Backend teknolojileri ile güçlü altyapı</p>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-[#56df9c]">
                <h3 className="text-xl font-semibold text-[#295652] mb-4">Veri Yönetimi</h3>
                <p className="text-gray-600">Database ve güvenlik odaklı veri yönetimi</p>
              </div>
            </div>
          </section>

          {/* Neler Yapıyoruz */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#295652] mb-8 text-center">Neler Yapıyoruz?</h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#38b97e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Kurumsal ve kişisel web siteleri</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#38b97e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Mobil uyumlu arayüzler</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#38b97e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">C# destekli özel yazılımlar</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#38b97e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Veritabanı tabanlı çözümler</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#38b97e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">SEO ve performans odaklı geliştirme</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Neden Biz */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#295652] mb-8 text-center">Neden Biz?</h2>
            <div className="bg-gradient-to-r from-[#295652] to-[#307869] rounded-2xl shadow-xl p-8 md:p-12 text-white">
              <ul className="grid md:grid-cols-2 gap-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#abf0d6] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Genç ve yaratıcı bir ekibiz</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#abf0d6] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>İhtiyacınızı anlayıp doğru çözümler sunarız</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#abf0d6] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Uygun maliyetli, sürdürülebilir projeler üretiriz</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#abf0d6] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Hızlı teslimat ve iletişim önceliğimizdir</span>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <p className="text-gray-700 text-lg mb-8">
              Siz de dijital dünyada sağlam bir iz bırakmak istiyorsanız, gelin birlikte üretelim.
            </p>
            <a
              href="/iletisim"
              className="inline-block px-8 py-4 bg-[#295652] text-white rounded-full font-semibold shadow-lg hover:bg-[#38b97e] transition-all duration-300 transform hover:-translate-y-1"
            >
              Bizimle İletişime Geçin
            </a>
          </section>
        </div>
      </main>
    </div>
  );
} 