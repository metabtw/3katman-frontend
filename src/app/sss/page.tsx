// SSS (Sıkça Sorulan Sorular) Sayfası
// Accordion yapıda, modern ve mobil uyumlu
// SOLID prensiplerine uygun, sade ve optimize edilmiş kod

"use client";
import { useState } from "react";

const sorular = [
  {
    soru: "Web sitesi yaptırmak istiyorum, nasıl başlıyoruz?",
    cevap:
      "İlk olarak ihtiyaçlarını anlamak için seninle kısa bir görüşme yapıyoruz. Ardından teklif sunup onay aldıktan sonra tasarım ve yazılım sürecine başlıyoruz.",
  },
  {
    soru: "Fiyatlandırma nasıl belirleniyor?",
    cevap:
      "Web sitesinin kapsamı, sayfa sayısı, ekstra özellikler (formlar, admin paneli, kullanıcı girişi vs.) gibi etkenlere göre özel fiyat sunuyoruz. Her bütçeye uygun çözüm üretmeye çalışıyoruz.",
  },
  {
    soru: "Web sitem mobil uyumlu olacak mı?",
    cevap:
      "Evet. Tüm projelerimiz responsive yani mobil/tablet/masaüstü uyumlu şekilde geliştirilir.",
  },
  {
    soru: "Web sitemi kendim yönetebilir miyim?",
    cevap:
      "Eğer istersen, özel admin paneli geliştiriyoruz. Böylece içerikleri kolayca güncelleyebilirsin.",
  },
  {
    soru: "SEO (Arama Motoru Optimizasyonu) yapıyor musunuz?",
    cevap:
      "Evet. Temel düzeyde SEO ayarları, hızlı yükleme ve Google dostu yapı standart olarak dahildir.",
  },
  {
    soru: "Sadece web sitesi mi yapıyorsunuz?",
    cevap:
      "Hayır. Mobil uygulama geliştirme, marka kimliği oluşturma, video ve görsel içerik düzenleme gibi hizmetler de sunuyoruz.",
  },
  {
    soru: "Proje ne kadar sürede teslim edilir?",
    cevap:
      "Projeye göre değişmekle birlikte genellikle 2-5 iş günü arasında tamamlanır. Zaman planlamasını baştan net şekilde sunarız.",
  },
  {
    soru: "Hangi teknolojileri kullanıyorsunuz?",
    cevap:
      "Frontend: HTML, CSS, JavaScript, Next.js\nBackend: C#\nVeritabanı: MySQL\nMobil Uygulama: Flutter / React Native",
  },
  {
    soru: "Ödeme nasıl yapılır?",
    cevap:
      "İki aşamalı sistemimiz var: %50 başlangıçta, %50 proje sonunda. Faturalandırma veya dekont ile çalışıyoruz.",
  },
  {
    soru: "Destek veriyor musunuz?",
    cevap:
      "Evet, yayına aldıktan sonra belirli bir süre ücretsiz destek sunuyoruz. Daha uzun süreli destek isteyen müşteriler için bakım paketi de oluşturabiliriz.",
  },
];

export default function SSS() {
  const [acik, setAcik] = useState<number | null>(null);

  // Accordion aç/kapa fonksiyonu
  const toggle = (idx: number) => {
    setAcik(acik === idx ? null : idx);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8fdfa] to-white py-20">
      <div className="max-w-2xl mx-auto w-full px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#295652] text-center mb-10 mt-20">Sıkça Sorulan Sorular</h1>
        <div className="space-y-4">
          {sorular.map((item, idx) => (
            <div key={idx} className="border border-[#abf0d6] rounded-xl bg-white shadow-sm overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-4 py-4 text-left text-[#295652] font-semibold text-base md:text-lg focus:outline-none transition-colors group"
                onClick={() => toggle(idx)}
                aria-expanded={acik === idx}
              >
                <span className="flex items-center gap-2">
                  <span className="text-xl">❓</span>
                  {item.soru}
                </span>
                <span className={`ml-2 text-2xl transition-transform duration-300 ${acik === idx ? "rotate-45 text-[#38b97e]" : "rotate-0 text-[#295652]"}`}>
                  {acik === idx ? "➖" : "➕"}
                </span>
              </button>
              <div
                className={`px-4 pb-4 text-gray-700 text-sm md:text-base transition-all duration-300 ease-in-out ${acik === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                style={{
                  overflow: "hidden",
                  transition: "max-height 0.3s, opacity 0.3s",
                }}
              >
                {acik === idx && (
                  <div className="pt-2 whitespace-pre-line">{item.cevap}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 