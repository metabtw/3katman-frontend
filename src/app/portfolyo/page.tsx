// Portfolyo Sayfası – 3Katman Digital
// SOLID prensiplerine uygun, sade ve optimize edilmiş kod
// Modern, responsive, filtrelenebilir grid yapısı

"use client";
import { useState } from "react";

// Örnek projeler (görselleri /public/portfolio/ klasörüne ekleyebilirsin)
const projeler = [
  {
    id: 1,
    baslik: "Firma X Web Sitesi",
    kategori: "Web Sitesi",
    aciklama: "Firma X için modern ve mobil uyumlu bir web sitesi geliştirildi.",
    gorsel: "/portfolio/web1.jpg",
    link: "#",
    teknolojiler: ["HTML", "CSS", "JS", "Next.js"],
    yorum: "İşbirliğimizden çok memnun kaldık! - Firma X",
  },
  {
    id: 2,
    baslik: "Mobil Uygulama Y",
    kategori: "Mobil Uygulama",
    aciklama: "Y şirketi için iOS ve Android uyumlu mobil uygulama geliştirildi.",
    gorsel: "/portfolio/mobile1.jpg",
    link: "#",
    teknolojiler: ["Flutter", "Firebase"],
    yorum: "Kullanıcı dostu ve hızlı teslimat! - Y Şirketi",
  },
  {
    id: 3,
    baslik: "Logo & Kimlik Tasarımı Z",
    kategori: "Logo/Markalaşma",
    aciklama: "Z markası için özgün logo ve marka kimliği tasarımı yapıldı.",
    gorsel: "/portfolio/logo1.jpg",
    link: "#",
    teknolojiler: ["Illustrator", "Photoshop"],
    yorum: "Markamız artık çok daha profesyonel görünüyor! - Z Markası",
  },
  {
    id: 4,
    baslik: "Grafik Tasarım Projesi W",
    kategori: "Grafik Tasarımlar",
    aciklama: "W firması için sosyal medya ve reklam görselleri hazırlandı.",
    gorsel: "/portfolio/graphic1.jpg",
    link: "#",
    teknolojiler: ["Photoshop", "Canva"],
    yorum: "Tasarım kalitesi harika! - W Firması",
  },
  {
    id: 5,
    baslik: "Firma Q Web Sitesi",
    kategori: "Web Sitesi",
    aciklama: "Q firması için SEO uyumlu, hızlı ve modern bir web sitesi geliştirildi.",
    gorsel: "/portfolio/web2.jpg",
    link: "#",
    teknolojiler: ["HTML", "CSS", "JS", "Next.js", "MySQL"],
    yorum: "Arama motorlarında üst sıralara çıktık! - Q Firması",
  },
];

const kategoriler = [
  "Tümü",
  "Web Sitesi",
  "Mobil Uygulama",
  "Grafik Tasarımlar",
  "Logo/Markalaşma",
];

// Teknoloji ikonları (örnek)
const teknolojiIkon: Record<string, string> = {
  "HTML": "<span title='HTML'>🌐</span>",
  "CSS": "<span title='CSS'>🎨</span>",
  "JS": "<span title='JavaScript'>⚡</span>",
  "Next.js": "<span title='Next.js'>N</span>",
  "Flutter": "<span title='Flutter'>📱</span>",
  "Firebase": "<span title='Firebase'>🔥</span>",
  "Illustrator": "<span title='Illustrator'>🖌️</span>",
  "Photoshop": "<span title='Photoshop'>🖼️</span>",
  "Canva": "<span title='Canva'>🖍️</span>",
  "MySQL": "<span title='MySQL'>🗄️</span>",
};

export default function Portfolyo() {
  const [aktifKategori, setAktifKategori] = useState("Tümü");

  // Filtrelenmiş projeler
  const filtreliProjeler =
    aktifKategori === "Tümü"
      ? projeler
      : projeler.filter((p) => p.kategori === aktifKategori);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8fdfa] to-white py-20">
      {/* Başlık ve açıklama */}
      <div className="max-w-3xl mx-auto w-full px-4 text-center mt-20 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#295652] mb-4">Gurur Duyduğumuz Projelerimiz</h1>
        <p className="text-[#307869] text-lg md:text-xl">
          Web sitesi, mobil uygulama ve tasarım alanında ürettiğimiz projeleri inceleyin. Siz de markanızı dijitale taşımak isterseniz bize ulaşın.
        </p>
      </div>

      {/* Filtreleme butonları */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {kategoriler.map((kat) => (
          <button
            key={kat}
            onClick={() => setAktifKategori(kat)}
            className={`px-5 py-2 rounded-full font-semibold shadow-sm transition-all duration-300 text-sm md:text-base
              ${aktifKategori === kat ? "bg-gradient-to-r from-[#307869] to-[#38b97e] text-white" : "bg-white text-[#295652] border border-[#abf0d6] hover:bg-[#38b97e] hover:text-white"}`}
          >
            {kat}
          </button>
        ))}
      </div>

      {/* Proje kartları grid */}
      <div className="max-w-6xl mx-auto w-full px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtreliProjeler.map((proje) => (
          <div
            key={proje.id}
            className="bg-white rounded-xl shadow-xl p-4 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl group"
          >
            {/* Proje görseli */}
            <div className="w-full h-48 rounded-lg overflow-hidden mb-4 bg-gray-100 flex items-center justify-center">
              <img
                src={proje.gorsel}
                alt={proje.baslik}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            {/* Başlık ve kategori */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🏷️</span>
              <span className="font-bold text-[#295652] text-lg">{proje.baslik}</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#38b97e] text-sm font-semibold">{proje.kategori}</span>
            </div>
            {/* Açıklama */}
            <p className="text-gray-700 text-sm mb-3">{proje.aciklama}</p>
            {/* Teknolojiler */}
            <div className="flex flex-wrap gap-2 mb-3">
              {proje.teknolojiler.map((tech, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-[#abf0d6] rounded-full flex items-center gap-1" dangerouslySetInnerHTML={{__html: teknolojiIkon[tech] + ' ' + tech}} />
              ))}
            </div>
            {/* Müşteri yorumu */}
            <div className="italic text-[#307869] text-xs mb-4">{proje.yorum}</div>
            {/* Buton */}
            <a
              href={proje.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#307869] to-[#38b97e] text-white font-semibold shadow-md hover:from-[#38b97e] hover:to-[#307869] transition-all duration-300"
            >
              Detaylı İncele
            </a>
          </div>
        ))}
      </div>
    </div>
  );
} 