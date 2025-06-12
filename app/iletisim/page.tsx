// İletişim Sayfası – 3Katman Digital
// Modern, responsive, 2 sütunlu layout ve Google Form entegrasyonu

"use client";

const iletisimBilgileri = [
  { ikon: "📍", baslik: "Adres", icerik: "Kütahya, Türkiye" },
  { ikon: "📞", baslik: "Telefon", icerik: "+90 5xx xxx xx xx" },
  { ikon: "✉️", baslik: "E-posta", icerik: "iletisim@3katman.digital" },
  { ikon: "⏰", baslik: "Çalışma Saatleri", icerik: "Hafta içi 09:00 - 18:00" },
];

export default function Iletisim() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8fdfa] to-white py-10">
      <div className="max-w-6xl mx-auto w-full px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#295652] text-center mb-10 mt-5 tracking-tight">İletişim</h1>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Sol: Google Form */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <h2 className="text-xl font-semibold text-[#295652] mb-4">Bize Mesaj Gönderin</h2>
            <div className="w-full overflow-hidden rounded-lg">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSfhM2UfDEY4kAOIBv1al0cgXcmXwP1fcqnjb9-f6mm8EDQS5g/viewform?embedded=true" 
                width="100%" 
                height="1106" 
                frameBorder="0"
                className="w-full"
              >
                Yükleniyor…
              </iframe>
            </div>
          </div>

          {/* Sağ: İletişim Bilgileri */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-[#295652] mb-2">İletişim Bilgilerimiz</h2>
            <div className="space-y-3">
              {iletisimBilgileri.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[#295652]">
                  <span className="text-2xl">{item.ikon}</span>
                  <div>
                    <div className="font-semibold">{item.baslik}</div>
                    <div className="text-gray-700">{item.icerik}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Sosyal medya ve iletişim butonları: Alt alta ve aynı boyutta */}
            <div className="flex flex-col gap-3 mt-3 w-full">
              <a
                href="https://wa.me/905xxxxxxxxx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full min-w-[180px] px-0 py-3 bg-[#38b97e] text-white rounded-full shadow-md hover:bg-[#295652] transition-all duration-300 text-base font-semibold"
              >
                <span className="text-xl">💬</span> WhatsApp'tan Yaz
              </a>
              <a
                href="https://instagram.com/3katman.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full min-w-[180px] px-0 py-3 rounded-full shadow-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold hover:opacity-90 transition-all duration-300 text-base"
              >
                <span className="text-xl">📸</span> Instagram'da Takip Et
              </a>
              <a
                href="https://linkedin.com/company/3katman-digital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full min-w-[180px] px-0 py-3 rounded-full shadow-md bg-[#0077b5] text-white font-semibold hover:bg-[#005983] transition-all duration-300 text-base"
              >
                <span className="text-xl">💼</span> LinkedIn'de Takip Et
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 